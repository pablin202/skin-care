import type { Metadata } from 'next';
import { DiagnosticForm } from '@/components/DiagnosticForm';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { Target, AlertCircle, Wallet } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diagnóstico de piel',
  description:
    'Completá el diagnóstico para recibir una rutina de skincare personalizada según tu tipo de piel y objetivos.',
};

export default function DiagnosticoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-14 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-3xl font-medium tracking-tight text-text md:text-4xl">
              Diagnóstico de piel
            </h1>
            <p className="mt-4 text-[17px] leading-7 text-muted">
              Completá este formulario para que pueda conocer tu piel y armarte una rutina
              personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="section bg-surface">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl">
            <DiagnosticForm />

            {/* Alternative */}
            <div className="mt-8 text-center">
              <p className="text-muted">
                ¿Preferís contarme directamente en lugar de completar el formulario?
              </p>
              <div className="mt-4">
                <WhatsAppCTA messageKey="home" variant="secondary">
                  Escribirme por WhatsApp
                </WhatsAppCTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="section bg-bg">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-serif text-2xl font-medium text-text md:text-3xl">
              ¿Por qué pido esta información?
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Target className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-3 font-serif font-medium text-text">Para personalizar</h3>
                <p className="mt-1 text-sm text-muted">
                  Cada piel es diferente. Con esta información puedo adaptar la rutina a tu caso.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <AlertCircle className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-3 font-serif font-medium text-text">Para evitar problemas</h3>
                <p className="mt-1 text-sm text-muted">
                  Saber sobre alergias y sensibilidad me ayuda a recomendarte productos seguros.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Wallet className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-3 font-serif font-medium text-text">Para ajustar al presupuesto</h3>
                <p className="mt-1 text-sm text-muted">
                  Puedo armarte una rutina efectiva dentro de lo que querés invertir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy note */}
      <section className="border-t border-border bg-bg py-6">
        <div className="container-custom">
          <p className="mx-auto max-w-3xl text-center text-sm text-muted">
            Tu información es confidencial y solo la uso para asesorarte. No comparto tus datos con
            terceros ni los uso para otros fines.
          </p>
        </div>
      </section>
    </>
  );
}
