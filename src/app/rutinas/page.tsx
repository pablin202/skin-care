import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, Button } from '@/components/ui';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { SKIN_PROBLEMS } from '@/lib/constants';
import { Palette, Droplets, Sparkles, Heart, ChevronRight } from 'lucide-react';

const iconMap = {
  Palette: Palette,
  Droplets: Droplets,
  Sparkles: Sparkles,
  Heart: Heart,
};

export const metadata: Metadata = {
  title: 'Rutinas de cuidado',
  description:
    'Explorá rutinas de skincare personalizadas para manchas, sequedad, textura irregular y piel sensible.',
};

export default function RutinasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-14 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-3xl font-medium tracking-tight text-text md:text-4xl">
              Rutinas de cuidado
            </h1>
            <p className="mt-4 text-[17px] leading-7 text-muted">
              Cada piel tiene sus propias necesidades. Explorá las rutinas según tu situación
              particular y contactame para personalizarla.
            </p>
          </div>
        </div>
      </section>

      {/* Problems grid */}
      <section className="section bg-surface">
        <div className="container-custom">
          <div className="grid gap-4 md:grid-cols-2">
            {SKIN_PROBLEMS.map((problem) => {
              const IconComponent = iconMap[problem.iconName as keyof typeof iconMap];
              return (
                <Link key={problem.slug} href={`/rutinas/${problem.slug}`} className="group">
                  <Card className="h-full transition-all duration-200 group-hover:border-neutral-300 group-hover:shadow-soft">
                    <CardContent className="flex h-full flex-col">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/15">
                          {IconComponent && <IconComponent className="h-6 w-6 text-accent" />}
                        </div>
                        <div className="flex-grow">
                          <h2 className="font-serif text-xl font-medium text-text group-hover:text-accent">
                            {problem.title}
                          </h2>
                          <p className="mt-2 text-[15px] text-muted">{problem.description}</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <span className="inline-flex items-center text-sm font-medium text-accent">
                          Ver rutina completa
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section bg-bg">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
              <h2 className="font-serif text-xl font-medium text-text">
                ¿No estás segura cuál es tu caso?
              </h2>
              <p className="mt-3 text-[15px] text-muted">
                Es normal tener más de un problema o no estar segura de cuál es el principal. Muchas
                veces las pieles tienen características mixtas: pueden ser secas pero con alguna
                zona grasa, o tener manchas y también sensibilidad.
              </p>
              <p className="mt-3 text-[15px] text-muted">
                Por eso la asesoría personalizada es tan importante. Escribime y te ayudo a
                identificar qué rutina sería mejor para vos.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/diagnostico">
                  <Button variant="primary">Completar diagnóstico</Button>
                </Link>
                <WhatsAppCTA messageKey="home" variant="secondary">
                  Consultarme por WhatsApp
                </WhatsAppCTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-border bg-bg py-6">
        <div className="container-custom">
          <p className="mx-auto max-w-3xl text-center text-sm text-muted">
            Las rutinas presentadas son orientativas. La recomendación exacta depende de las
            características de tu piel y se personaliza en la asesoría. Los resultados varían según
            cada persona.
          </p>
        </div>
      </section>
    </>
  );
}
