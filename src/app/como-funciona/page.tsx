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
      <section className="bg-bg py-14 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-3xl font-medium tracking-tight text-text md:text-4xl">
              Cómo funciona
            </h1>
            <p className="mt-4 text-[17px] leading-7 text-muted">
              Un proceso simple y personalizado para encontrar la rutina ideal para tu piel.
            </p>
          </div>
        </div>
      </section>

      {/* Steps detailed */}
      <section className="section bg-surface">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div
                key={index}
                className="relative mb-10 last:mb-0 md:mb-12 md:grid md:grid-cols-12 md:gap-6"
              >
                {/* Number */}
                <div className="mb-4 flex md:col-span-2 md:mb-0 md:justify-end">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-semibold text-white">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-10">
                  <h2 className="font-serif text-xl font-medium text-text">{step.title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.description}</p>

                  {/* Additional details per step */}
                  {step.number === 1 && (
                    <div className="mt-4 rounded-xl border border-border bg-bg p-4">
                      <p className="text-[15px] text-muted">
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
                    <div className="mt-4 rounded-xl border border-border bg-bg p-4">
                      <p className="text-[15px] text-muted">
                        Analizo tu información y armo una rutina de mañana y noche adaptada a tu
                        tipo de piel, sensibilidad, objetivos y presupuesto.
                      </p>
                    </div>
                  )}

                  {step.number === 3 && (
                    <div className="mt-4 rounded-xl border border-border bg-bg p-4">
                      <p className="text-[15px] text-muted">
                        Te envío el link directo al portal autorizado donde podés ver los productos
                        y completar tu compra de forma segura con todos los medios de pago.
                      </p>
                    </div>
                  )}

                  {step.number === 4 && (
                    <div className="mt-4 rounded-xl border border-border bg-bg p-4">
                      <p className="text-[15px] text-muted">
                        Estoy disponible para resolver tus dudas, ajustar la rutina si algo no te
                        funciona como esperabas, y acompañarte en todo el proceso.
                      </p>
                    </div>
                  )}
                </div>

                {/* Connecting line */}
                {index < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="absolute left-6 top-14 hidden h-full w-px bg-border md:left-[calc(16.666%-1.5rem)] md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this process */}
      <section className="section bg-bg">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-serif text-2xl font-medium text-text md:text-3xl">
              ¿Por qué este proceso?
            </h2>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-serif text-lg font-medium text-text">
                  Porque cada piel es diferente
                </h3>
                <p className="mt-2 text-[15px] text-muted">
                  No existe una rutina universal que funcione para todas. Lo que le sirve a una
                  persona puede no ser adecuado para otra. Por eso empezamos conociendo tu piel.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-serif text-lg font-medium text-text">
                  Porque los cambios llevan tiempo
                </h3>
                <p className="mt-2 text-[15px] text-muted">
                  La piel necesita tiempo para responder a los productos. Por eso el seguimiento es
                  parte del proceso: ajustamos si hace falta.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-serif text-lg font-medium text-text">
                  Porque tener apoyo hace la diferencia
                </h3>
                <p className="mt-2 text-[15px] text-muted">
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
      <section className="section bg-accent/5">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-medium text-text md:text-3xl">¿Empezamos?</h2>
            <p className="mt-4 text-[17px] text-muted">
              El primer paso es contarme sobre tu piel. Podés hacerlo online o por WhatsApp.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/diagnostico">
                <Button variant="primary" size="lg">
                  Completar diagnóstico online
                </Button>
              </Link>
              <WhatsAppCTA messageKey="home" size="lg" variant="secondary">
                Escribime por WhatsApp
              </WhatsAppCTA>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
