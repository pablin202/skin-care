'use client';

import Link from 'next/link';
import { Button, Card, CardContent } from '@/components/ui';
import { getWhatsAppUrl, getPortalUrl } from '@/lib/utils';
import type { RoutineData } from '@/types';
import { WHATSAPP_MESSAGES } from '@/lib/constants';

interface RoutinePageProps {
  routine: RoutineData;
}

export function RoutinePage({ routine }: RoutinePageProps) {
  const messageKey = routine.slug as keyof typeof WHATSAPP_MESSAGES;

  return (
    <>
      {/* Hero */}
      <section className="gradient-bg py-16 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <Link
              href="/rutinas"
              className="mb-4 inline-flex items-center text-sm text-primary-600 hover:text-primary-700"
            >
              <svg
                className="mr-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver a rutinas
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              {routine.title}
            </h1>
            <p className="mt-4 text-lg text-neutral-600">{routine.description}</p>
          </div>
        </div>
      </section>

      {/* Signals */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-neutral-900">Señales típicas</h2>
            <p className="mt-2 text-neutral-600">
              Podrías beneficiarte de esta rutina si notás alguna de estas situaciones:
            </p>
            <ul className="mt-6 space-y-3">
              {routine.signals.map((signal, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 text-primary-500">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-neutral-700">{signal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Routine */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold text-neutral-900">Rutina sugerida</h2>
            <p className="mt-2 text-center text-neutral-600">
              Esta es una estructura general. La personalizo según tus necesidades específicas.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {/* AM Routine */}
              <Card>
                <CardContent>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-xl">
                      ☀️
                    </span>
                    <h3 className="text-xl font-semibold text-neutral-900">Rutina de mañana</h3>
                  </div>
                  <ol className="space-y-4">
                    {routine.routineAM.map((step) => (
                      <li key={step.step} className="flex gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                          {step.step}
                        </span>
                        <div>
                          <span className="font-medium text-neutral-900">{step.name}</span>
                          {step.optional && (
                            <span className="ml-2 text-xs text-neutral-500">(opcional)</span>
                          )}
                          <p className="mt-1 text-sm text-neutral-600">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {/* PM Routine */}
              <Card>
                <CardContent>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-xl">
                      🌙
                    </span>
                    <h3 className="text-xl font-semibold text-neutral-900">Rutina de noche</h3>
                  </div>
                  <ol className="space-y-4">
                    {routine.routinePM.map((step) => (
                      <li key={step.step} className="flex gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                          {step.step}
                        </span>
                        <div>
                          <span className="font-medium text-neutral-900">{step.name}</span>
                          {step.optional && (
                            <span className="ml-2 text-xs text-neutral-500">(opcional)</span>
                          )}
                          <p className="mt-1 text-sm text-neutral-600">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-neutral-900">¿Qué podés esperar?</h2>
            <p className="mt-2 text-neutral-600">
              Los tiempos y resultados varían según cada persona. Esta es una guía orientativa:
            </p>
            <div className="mt-8 space-y-6">
              {routine.expectations.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-yellow-50 p-4">
              <p className="text-sm text-yellow-800">
                <strong>Importante:</strong> Estos tiempos son orientativos. Los resultados dependen
                de muchos factores incluyendo constancia, tipo de piel, y condiciones particulares.
                No hay garantías de resultados específicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-neutral-900">Errores comunes a evitar</h2>
            <ul className="mt-6 space-y-3">
              {routine.commonMistakes.map((mistake, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 text-red-500">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <span className="text-neutral-700">{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Suggested products */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-neutral-900">Productos sugeridos</h2>
            <p className="mt-2 text-neutral-600">
              La recomendación exacta depende de tu piel; te la envío personalizada por WhatsApp.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {routine.suggestedProducts.map((product, index) => (
                <Card key={index} hover={false}>
                  <CardContent>
                    <h3 className="font-semibold text-neutral-900">{product.category}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{product.description}</p>
                    {product.note && (
                      <p className="mt-2 text-xs italic text-neutral-500">{product.note}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-neutral-900">¿Te la personalizo?</h2>
            <p className="mt-4 text-lg text-neutral-600">
              Escribime y te armo una rutina adaptada a tu piel, con los productos específicos que
              te recomiendo.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="whatsapp"
                size="lg"
                onClick={() => window.open(getWhatsAppUrl(messageKey), '_blank')}
              >
                Personalizarla por WhatsApp
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open(getPortalUrl(), '_blank')}
              >
                Ir al portal autorizado
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
