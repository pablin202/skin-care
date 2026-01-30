import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, Button } from '@/components/ui';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { SKIN_PROBLEMS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Rutinas de cuidado',
  description:
    'Explorá rutinas de skincare personalizadas para manchas, sequedad, textura irregular y piel sensible.',
};

export default function RutinasPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-bg py-16 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              Rutinas de cuidado
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Cada piel tiene sus propias necesidades. Explorá las rutinas según tu situación
              particular y contactame para personalizarla.
            </p>
          </div>
        </div>
      </section>

      {/* Problems grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            {SKIN_PROBLEMS.map((problem) => (
              <Link key={problem.slug} href={`/rutinas/${problem.slug}`} className="group">
                <Card className="h-full transition-all duration-200 group-hover:border-primary-200 group-hover:shadow-lg">
                  <CardContent className="flex h-full flex-col">
                    <div className="flex items-start gap-4">
                      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-3xl transition-colors group-hover:bg-primary-100">
                        {problem.icon}
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-primary-700">
                          {problem.title}
                        </h2>
                        <p className="mt-2 text-neutral-600">{problem.description}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <span className="inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
                        Ver rutina completa
                        <svg
                          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-semibold text-neutral-900">
                ¿No estás segura cuál es tu caso?
              </h2>
              <p className="mt-3 text-neutral-600">
                Es normal tener más de un problema o no estar segura de cuál es el principal. Muchas
                veces las pieles tienen características mixtas: pueden ser secas pero con alguna
                zona grasa, o tener manchas y también sensibilidad.
              </p>
              <p className="mt-3 text-neutral-600">
                Por eso la asesoría personalizada es tan importante. Escribime y te ayudo a
                identificar qué rutina sería mejor para vos.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link href="/diagnostico">
                  <Button variant="primary">Completar diagnóstico</Button>
                </Link>
                <WhatsAppCTA messageKey="home">
                  Consultarme por WhatsApp
                </WhatsAppCTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-8">
        <div className="container-custom">
          <p className="mx-auto max-w-3xl text-center text-sm text-neutral-500">
            Las rutinas presentadas son orientativas. La recomendación exacta depende de las
            características de tu piel y se personaliza en la asesoría. Los resultados varían según
            cada persona.
          </p>
        </div>
      </section>
    </>
  );
}
