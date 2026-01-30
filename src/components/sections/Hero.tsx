'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';
import { getWhatsAppUrl } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary-100/30 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent-100/20 blur-3xl" />

      <div className="container-custom relative py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/80 px-5 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-primary-500" />
            <span className="text-sm font-medium tracking-wide text-neutral-600">
              Asesoría personalizada en cuidado de la piel
            </span>
          </div>

          {/* Título principal */}
          <h1 className="font-serif text-5xl font-light leading-tight tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
            Daniela Stecco
          </h1>

          {/* Subtítulo elegante */}
          <p className="mt-4 font-serif text-2xl font-light italic text-primary-600 md:text-3xl">
            Cuidado de la Piel
          </p>

          {/* Línea decorativa */}
          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-primary-400 to-transparent" />

          {/* Descripción */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 md:text-xl">
            Rutinas personalizadas con productos de marca internacional y seguimiento continuo.
            Te acompaño en el proceso para que tu piel refleje su mejor versión.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => window.open(getWhatsAppUrl('home'), '_blank')}
              leftIcon={<WhatsAppIcon />}
            >
              Solicitar asesoría
            </Button>
            <Link href="/diagnostico">
              <Button variant="secondary" size="lg">
                Completar diagnóstico
              </Button>
            </Link>
          </div>

          {/* Trust indicator */}
          <p className="mt-10 text-sm text-neutral-400">
            Respuesta personalizada en menos de 24 horas
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
