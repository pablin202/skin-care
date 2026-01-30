import { NextRequest, NextResponse } from 'next/server';
import { diagnosticFormSchema } from '@/types';
import { checkRateLimit, isHoneypotValid, cleanRateLimitStore } from '@/lib/utils';
import { ENV } from '@/lib/constants';

// Clean rate limit store periodically (every 5 minutes)
if (typeof setInterval !== 'undefined') {
  setInterval(cleanRateLimitStore, 5 * 60 * 1000);
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // Rate limiting (5 requests per minute per IP)
    const { allowed, remaining } = checkRateLimit(ip, 5, 60000);
    if (!allowed) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Demasiadas solicitudes. Por favor, esperá un momento antes de intentar de nuevo.',
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': remaining.toString(),
            'Retry-After': '60',
          },
        }
      );
    }

    // Parse request body
    const body = await request.json();

    // Check honeypot
    if (!isHoneypotValid(body.website)) {
      // Silently reject spam but return success to not reveal detection
      return NextResponse.json({
        ok: true,
        message: 'Gracias por tu mensaje.',
      });
    }

    // Validate data
    const validationResult = diagnosticFormSchema.safeParse(body);
    if (!validationResult.success) {
      const errors = validationResult.error.errors.map((e) => e.message).join(', ');
      return NextResponse.json(
        {
          ok: false,
          message: `Error de validación: ${errors}`,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Prepare data for Google Sheets
    const sheetData = {
      timestamp: new Date().toISOString(),
      nombre: data.nombre,
      apellido: data.apellido,
      whatsapp: data.whatsapp,
      ciudad: data.ciudadProvincia,
      edad: data.edad,
      tipoPiel: data.tipoPiel,
      sensibilidad: data.sensibilidad,
      objetivo: data.objetivo,
      presupuesto: data.presupuesto || 'No especificado',
      rutinaActual: data.rutinaActual || 'No especificado',
      alergias: data.alergias || 'No especificado',
    };

    // Send to Google Sheets webhook if configured
    if (ENV.googleSheetsWebhook) {
      try {
        const webhookResponse = await fetch(ENV.googleSheetsWebhook, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sheetData),
        });

        if (!webhookResponse.ok) {
          console.error('Google Sheets webhook error:', await webhookResponse.text());
          // Don't fail the request, just log the error
        }
      } catch (webhookError) {
        console.error('Error sending to Google Sheets:', webhookError);
        // Don't fail the request, just log the error
      }
    } else {
      // Log data if webhook not configured (for development)
      console.log('Lead received (no webhook configured):', sheetData);
    }

    return NextResponse.json({
      ok: true,
      message: 'Gracias por completar el diagnóstico. Te contacto a la brevedad.',
    });
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      {
        ok: false,
        message: 'Hubo un error al procesar tu solicitud. Por favor, intentá de nuevo.',
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight (if needed)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
