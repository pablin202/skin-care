import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, Button } from '@/components/ui';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { testimonials, hasRealTestimonials } from '@/data/testimonials';
import { getWhatsAppUrl } from '@/lib/utils';

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
      <section className="gradient-bg py-16 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              Testimonios
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              {hasReal
                ? 'Experiencias de clientas que han trabajado conmigo.'
                : 'Próximamente compartiremos experiencias de clientas que trabajan conmigo.'}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {!hasReal && (
              <div className="mb-8 rounded-lg bg-yellow-50 p-4 text-center">
                <p className="text-yellow-800">
                  Estamos recopilando testimonios de clientas. Si ya trabajaste conmigo y querés
                  compartir tu experiencia,{' '}
                  <a
                    href={getWhatsAppUrl('contacto')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline hover:text-yellow-900"
                  >
                    escribime por WhatsApp
                  </a>
                  .
                </p>
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className={testimonial.isPlaceholder ? 'border-dashed bg-neutral-50' : ''}
                >
                  <CardContent>
                    <div className="flex items-start gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={!testimonial.isPlaceholder} />
                      ))}
                    </div>
                    <blockquote className="mt-4">
                      <p
                        className={`text-neutral-700 ${testimonial.isPlaceholder ? 'italic' : ''}`}
                      >
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </blockquote>
                    <div className="mt-4 border-t border-neutral-100 pt-4">
                      <p
                        className={`font-medium ${testimonial.isPlaceholder ? 'text-neutral-400' : 'text-neutral-900'}`}
                      >
                        {testimonial.name}
                      </p>
                      {testimonial.age && testimonial.location && (
                        <p className="text-sm text-neutral-500">
                          {testimonial.age} - {testimonial.location}
                        </p>
                      )}
                      {testimonial.problem && (
                        <p className="mt-1 text-sm text-primary-600">{testimonial.problem}</p>
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
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-semibold text-neutral-900">Sobre los resultados</h2>
              <div className="mt-4 space-y-3 text-neutral-600">
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
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-neutral-900">¿Querés empezar tu proceso?</h2>
            <p className="mt-4 text-lg text-neutral-600">
              Cada historia empieza con el primer paso. Contactame para conocer tu piel y armar tu
              rutina.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/diagnostico">
                <Button variant="primary" size="lg">
                  Completar diagnóstico
                </Button>
              </Link>
              <WhatsAppCTA messageKey="home" size="lg">
                Escribirme por WhatsApp
              </WhatsAppCTA>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`h-5 w-5 ${filled ? 'fill-current' : 'fill-neutral-300'}`}
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
