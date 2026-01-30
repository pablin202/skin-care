import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { HOW_IT_WORKS_STEPS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Cómo funciona',
  description:
    'Conocé el proceso paso a paso para obtener tu rutina de skincare personalizada con seguimiento continuo.',
};

export default function ComoFuncionaPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-bg py-16 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              Cómo funciona
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Un proceso simple y personalizado para encontrar la rutina ideal para tu piel.
            </p>
          </div>
        </div>
      </section>

      {/* Steps detailed */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div
                key={index}
                className="relative mb-12 last:mb-0 md:mb-16 md:grid md:grid-cols-12 md:gap-8"
              >
                {/* Number */}
                <div className="mb-4 flex md:col-span-2 md:mb-0 md:justify-end">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-2xl font-bold text-white md:h-16 md:w-16">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-10">
                  <h2 className="text-2xl font-semibold text-neutral-900">{step.title}</h2>
                  <p className="mt-3 text-lg text-neutral-600">{step.description}</p>

                  {/* Additional details per step */}
                  {step.number === 1 && (
                    <div className="mt-4 rounded-lg bg-neutral-50 p-4">
                      <p className="text-neutral-600">
                        Podés hacerlo de dos formas: completar el{' '}
                        <Link href="/diagnostico" className="link">
                          formulario online
                        </Link>{' '}
                        o contarme directamente por WhatsApp sobre tu piel y lo que te gustaría
                        mejorar.
                      </p>
                    </div>
                  )}

                  {step.number === 2 && (
                    <div className="mt-4 rounded-lg bg-neutral-50 p-4">
                      <p className="text-neutral-600">
                        Analizo tu información y armo una rutina de mañana y noche adaptada a tu
                        tipo de piel, sensibilidad, objetivos y presupuesto.
                      </p>
                    </div>
                  )}

                  {step.number === 3 && (
                    <div className="mt-4 rounded-lg bg-neutral-50 p-4">
                      <p className="text-neutral-600">
                        Te envío el link directo al portal autorizado donde podés ver los productos
                        y completar tu compra de forma segura con todos los medios de pago.
                      </p>
                    </div>
                  )}

                  {step.number === 4 && (
                    <div className="mt-4 rounded-lg bg-neutral-50 p-4">
                      <p className="text-neutral-600">
                        Estoy disponible para resolver tus dudas, ajustar la rutina si algo no te
                        funciona como esperabas, y acompañarte en todo el proceso.
                      </p>
                    </div>
                  )}
                </div>

                {/* Connecting line */}
                {index < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="absolute left-7 top-16 hidden h-full w-0.5 -translate-x-1/2 bg-primary-200 md:left-[calc(16.666%-2rem)] md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this process */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold text-neutral-900">
              ¿Por qué este proceso?
            </h2>
            <div className="mt-8 space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Porque cada piel es diferente
                </h3>
                <p className="mt-2 text-neutral-600">
                  No existe una rutina universal que funcione para todas. Lo que le sirve a una
                  persona puede no ser adecuado para otra. Por eso empezamos conociendo tu piel.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Porque los cambios llevan tiempo
                </h3>
                <p className="mt-2 text-neutral-600">
                  La piel necesita tiempo para responder a los productos. Por eso el seguimiento es
                  parte del proceso: ajustamos si hace falta.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Porque tener apoyo hace la diferencia
                </h3>
                <p className="mt-2 text-neutral-600">
                  Muchas veces compramos productos y no sabemos bien cómo usarlos, o abandonamos
                  porque no vemos resultados inmediatos. Con acompañamiento, es más fácil mantener
                  la constancia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-neutral-900">¿Empezamos?</h2>
            <p className="mt-4 text-lg text-neutral-600">
              El primer paso es contarme sobre tu piel. Podés hacerlo online o por WhatsApp.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/diagnostico">
                <Button variant="primary" size="lg">
                  Completar diagnóstico online
                </Button>
              </Link>
              <WhatsAppCTA messageKey="home" size="lg">
                Escribime por WhatsApp
              </WhatsAppCTA>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
