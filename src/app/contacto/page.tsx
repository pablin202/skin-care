import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, Button } from '@/components/ui';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contactá a Daniela Stecco para asesoramiento en cuidado de la piel. WhatsApp y diagnóstico online disponibles.',
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-bg py-16 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              Contacto
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              La mejor forma de contactarme es por WhatsApp. Respondo personalmente todos los
              mensajes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* WhatsApp - Main */}
              <Card className="border-2 border-green-200 bg-green-50">
                <CardContent className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
                    <WhatsAppIcon className="h-8 w-8" />
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-neutral-900">WhatsApp</h2>
                  <p className="mt-2 text-neutral-600">
                    Mi canal principal de comunicación. Escribime y te respondo a la brevedad.
                  </p>
                  <div className="mt-6">
                    <WhatsAppCTA messageKey="contacto" size="lg" className="w-full">
                      Abrir WhatsApp
                    </WhatsAppCTA>
                  </div>
                  <p className="mt-4 text-sm text-neutral-500">
                    Respondo generalmente dentro de las 24 horas
                  </p>
                </CardContent>
              </Card>

              {/* Diagnostic form */}
              <Card>
                <CardContent className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-3xl">
                    📋
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-neutral-900">
                    Diagnóstico online
                  </h2>
                  <p className="mt-2 text-neutral-600">
                    Completá el formulario de diagnóstico para que pueda conocer tu piel antes de
                    contactarte.
                  </p>
                  <div className="mt-6">
                    <Link href="/diagnostico">
                      <Button variant="primary" size="lg" className="w-full">
                        Completar diagnóstico
                      </Button>
                    </Link>
                  </div>
                  <p className="mt-4 text-sm text-neutral-500">
                    Te contacto con tu rutina personalizada
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About me */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <Card>
              <CardContent>
                <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
                  <div className="mb-6 flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-4xl md:mb-0 md:mr-6">
                    👩
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-neutral-900">{SITE_CONFIG.author}</h2>
                    <p className="mt-1 text-primary-600">Asesora en cuidado de la piel</p>
                    <p className="mt-4 text-neutral-600">
                      Me dedico a ayudar a mujeres a encontrar las rutinas de cuidado que mejor se
                      adapten a su piel. Trabajo con productos de marca internacional y me enfoco en
                      dar un acompañamiento personalizado.
                    </p>
                    <p className="mt-3 text-neutral-600">
                      Mi objetivo es que cada persona entienda su piel y sepa cómo cuidarla, más
                      allá de vender productos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-neutral-900">Preguntas comunes</h2>
            <div className="mt-8 space-y-4">
              <div className="rounded-lg border border-neutral-200 p-4">
                <h3 className="font-semibold text-neutral-900">
                  ¿Cuánto tardás en responder?
                </h3>
                <p className="mt-2 text-neutral-600">
                  Generalmente respondo dentro de las 24 horas. Si es urgente, mencionalo en tu
                  mensaje.
                </p>
              </div>
              <div className="rounded-lg border border-neutral-200 p-4">
                <h3 className="font-semibold text-neutral-900">
                  ¿La consulta tiene costo?
                </h3>
                <p className="mt-2 text-neutral-600">
                  La consulta inicial y el armado de tu rutina no tienen costo. Mi trabajo está
                  vinculado a los productos que adquieras.
                </p>
              </div>
              <div className="rounded-lg border border-neutral-200 p-4">
                <h3 className="font-semibold text-neutral-900">
                  ¿Puedo hacer preguntas antes de comprar?
                </h3>
                <p className="mt-2 text-neutral-600">
                  Por supuesto. Escribime con todas tus dudas y te respondo sin compromiso.
                </p>
              </div>
              <div className="rounded-lg border border-neutral-200 p-4">
                <h3 className="font-semibold text-neutral-900">
                  ¿Atendés fuera de Argentina?
                </h3>
                <p className="mt-2 text-neutral-600">
                  Actualmente me enfoco en Argentina por temas de envío y disponibilidad de
                  productos, pero podés consultarme de todos modos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-neutral-900">¿Empezamos?</h2>
            <p className="mt-4 text-lg text-neutral-600">
              No dudes en escribirme. Estoy acá para ayudarte a cuidar tu piel.
            </p>
            <div className="mt-8">
              <WhatsAppCTA messageKey="contacto" size="lg">
                Escribirme ahora
              </WhatsAppCTA>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
