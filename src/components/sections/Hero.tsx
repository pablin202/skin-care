'use client';

import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-bg">
      <div className="container-custom py-14 md:py-20 lg:py-28">
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

          {/* CTAs - WhatsApp prominente */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            {/* Botón WhatsApp - PRIMARIO y prominente */}
            <a
              href={getWhatsAppUrl('home')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-accent px-8 text-[18px] font-semibold text-white shadow-md transition-all duration-200 hover:translate-y-[1px] hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 sm:w-auto"
              aria-label="Escribirme por WhatsApp para asesoría de cuidado de la piel"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Escribime por WhatsApp
            </a>

            {/* Botón secundario - diagnóstico */}
            <Link
              href="/diagnostico"
              className="inline-flex h-14 w-full items-center justify-center rounded-2xl border border-border bg-surface px-6 text-base font-medium text-text transition-colors duration-200 hover:border-neutral-400 hover:bg-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 sm:w-auto"
            >
              Completar diagnóstico online
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
