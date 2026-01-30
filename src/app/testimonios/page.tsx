import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, Button } from '@/components/ui';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { testimonials, hasRealTestimonials } from '@/data/testimonials';
import { getWhatsAppUrl } from '@/lib/utils';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Testimonios',
  description:
    'Experiencias de clientas que han trabajado conmigo en sus rutinas de cuidado de la piel.',
};

export default function TestimoniosPage() {
  const hasReal = hasRealTestimonials();

  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-14 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-3xl font-medium tracking-tight text-text md:text-4xl">
              Testimonios
            </h1>
            <p className="mt-4 text-[17px] leading-7 text-muted">
              {hasReal
                ? 'Experiencias de clientas que han trabajado conmigo.'
                : 'Próximamente compartiremos experiencias de clientas que trabajan conmigo.'}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-surface">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {!hasReal && (
              <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
                <p className="text-sm text-amber-800">
                  Estamos recopilando testimonios de clientas. Si ya trabajaste conmigo y querés
                  compartir tu experiencia,{' '}
                  <a
                    href={getWhatsAppUrl('contacto')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline hover:text-amber-900"
                  >
                    escribime por WhatsApp
                  </a>
                  .
                </p>
              </div>
            )}

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className={testimonial.isPlaceholder ? 'border-dashed bg-bg' : ''}
                  hover={!testimonial.isPlaceholder}
                >
                  <CardContent>
                    <div className="flex items-start gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${testimonial.isPlaceholder ? 'text-neutral-300' : 'fill-accent text-accent'}`}
                        />
                      ))}
                    </div>
                    <blockquote className="mt-4">
                      <p
                        className={`text-[15px] leading-relaxed ${testimonial.isPlaceholder ? 'italic text-muted' : 'text-text'}`}
                      >
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </blockquote>
                    <div className="mt-4 border-t border-border pt-4">
                      <p
                        className={`font-medium ${testimonial.isPlaceholder ? 'text-muted' : 'text-text'}`}
                      >
                        {testimonial.name}
                      </p>
                      {testimonial.age && testimonial.location && (
                        <p className="text-sm text-muted">
                          {testimonial.age} - {testimonial.location}
                        </p>
                      )}
                      {testimonial.problem && (
                        <p className="mt-1 text-sm text-accent">{testimonial.problem}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note about results */}
      <section className="section bg-bg">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
              <h2 className="font-serif text-xl font-medium text-text">Sobre los resultados</h2>
              <div className="mt-4 space-y-3 text-[15px] text-muted">
                <p>
                  Cada piel es única y responde de manera diferente a los productos y rutinas. Los
                  testimonios reflejan experiencias individuales y no garantizan resultados
                  similares.
                </p>
                <p>
                  Los factores que influyen en los resultados incluyen: constancia en la rutina,
                  tipo de piel, edad, estilo de vida, alimentación, y otros tratamientos o
                  condiciones.
                </p>
                <p>
                  Mi compromiso es asesorarte honestamente y acompañarte en el proceso, ajustando la
                  rutina según cómo responda tu piel.
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
            <h2 className="font-serif text-2xl font-medium text-text md:text-3xl">¿Querés empezar tu proceso?</h2>
            <p className="mt-4 text-[17px] text-muted">
              Cada historia empieza con el primer paso. Contactame para conocer tu piel y armar tu
              rutina.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/diagnostico">
                <Button variant="primary" size="lg">
                  Completar diagnóstico
                </Button>
              </Link>
              <WhatsAppCTA messageKey="home" size="lg" variant="secondary">
                Escribirme por WhatsApp
              </WhatsAppCTA>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
