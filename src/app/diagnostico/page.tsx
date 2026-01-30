import type { Metadata } from 'next';
import { DiagnosticForm } from '@/components/DiagnosticForm';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'Diagnóstico de piel',
  description:
    'Completá el diagnóstico para recibir una rutina de skincare personalizada según tu tipo de piel y objetivos.',
};

export default function DiagnosticoPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-bg py-16 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              Diagnóstico de piel
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Completá este formulario para que pueda conocer tu piel y armarte una rutina
              personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl">
            <DiagnosticForm />

            {/* Alternative */}
            <div className="mt-8 text-center">
              <p className="text-neutral-600">
                ¿Preferís contarme directamente en lugar de completar el formulario?
              </p>
              <div className="mt-4">
                <WhatsAppCTA messageKey="home">
                  Escribirme por WhatsApp
                </WhatsAppCTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-neutral-900">
              ¿Por qué pido esta información?
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-xl">
                  🎯
                </div>
                <h3 className="mt-3 font-semibold text-neutral-900">Para personalizar</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Cada piel es diferente. Con esta información puedo adaptar la rutina a tu caso.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-xl">
                  ⚠️
                </div>
                <h3 className="mt-3 font-semibold text-neutral-900">Para evitar problemas</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Saber sobre alergias y sensibilidad me ayuda a recomendarte productos seguros.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-xl">
                  💰
                </div>
                <h3 className="mt-3 font-semibold text-neutral-900">Para ajustar al presupuesto</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Puedo armarte una rutina efectiva dentro de lo que querés invertir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy note */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-8">
        <div className="container-custom">
          <p className="mx-auto max-w-3xl text-center text-sm text-neutral-500">
            Tu información es confidencial y solo la uso para asesorarte. No comparto tus datos con
            terceros ni los uso para otros fines.
          </p>
        </div>
      </section>
    </>
  );
}
