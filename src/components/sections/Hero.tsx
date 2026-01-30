'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';
import { getWhatsAppUrl } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-bg">
      <div className="container-custom py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-sm font-medium text-muted">
              Asesoría personalizada en cuidado de la piel
            </span>
          </div>

          {/* Título principal */}
          <h1 className="font-serif text-4xl font-medium tracking-tight text-text md:text-5xl lg:text-6xl">
            Daniela Stecco
          </h1>

          {/* Subtítulo */}
          <p className="mt-3 font-serif text-xl font-normal text-accent md:text-2xl">
            Cuidado de la Piel
          </p>

          {/* Línea decorativa */}
          <div className="mx-auto mt-6 h-px w-16 bg-border" />

          {/* Descripción */}
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-7 text-muted">
            Rutinas personalizadas con productos de marca internacional y seguimiento continuo.
            Te acompaño en el proceso para que tu piel refleje su mejor versión.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open(getWhatsAppUrl('home'), '_blank')}
              leftIcon={<MessageCircle className="h-4 w-4" />}
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
          <p className="mt-8 text-sm text-muted">
            Respuesta personalizada en menos de 24 horas
          </p>
        </div>
      </div>
    </section>
  );
}
