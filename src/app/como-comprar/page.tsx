import type { Metadata } from 'next';
import { FAQAccordion } from '@/components/ui';
import { WhatsAppCTA, PortalCTAButton } from '@/components/WhatsAppCTA';
import { PURCHASE_FAQ } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Cómo comprar',
  description:
    'Guía paso a paso para comprar productos de skincare en el portal autorizado con asesoramiento personalizado.',
};

export default function ComoComprarPage() {
  const purchaseSteps = [
    {
      number: 1,
      title: 'Te paso tu rutina por WhatsApp',
      description:
        'Después del diagnóstico, te envío tu rutina personalizada con los productos específicos que te recomiendo.',
      icon: '📱',
    },
    {
      number: 2,
      title: 'Te envío el link del portal autorizado',
      description:
        'Recibís el link directo a la plataforma oficial de la marca donde están los productos.',
      icon: '🔗',
    },
    {
      number: 3,
      title: 'Comprás de forma segura',
      description:
        'Hacés tu compra en la plataforma oficial con todos los medios de pago disponibles y garantía de autenticidad.',
      icon: '🔒',
    },
    {
      number: 4,
      title: 'Yo hago seguimiento',
      description:
        'Estoy disponible para responder dudas, explicarte cómo usar los productos y ajustar la rutina si hace falta.',
      icon: '✅',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="gradient-bg py-16 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              Cómo comprar
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Un proceso simple y seguro para obtener tus productos con mi acompañamiento.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {purchaseSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-2xl">
                      {step.icon}
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-medium text-primary-600">
                        Paso {step.number}
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900">{step.title}</h3>
                      <p className="mt-2 text-neutral-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why this way */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-neutral-900">
              ¿Por qué comprar así?
            </h2>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-neutral-900">Productos originales garantizados</h3>
                <p className="mt-2 text-neutral-600">
                  Al comprar en el portal autorizado, tenés la garantía de que los productos son
                  originales y están en óptimas condiciones.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-neutral-900">Compra segura</h3>
                <p className="mt-2 text-neutral-600">
                  La plataforma oficial tiene todos los medios de pago seguros y protección al
                  comprador.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-neutral-900">Asesoramiento incluido</h3>
                <p className="mt-2 text-neutral-600">
                  A diferencia de comprar sola, tenés mi acompañamiento para saber exactamente qué
                  comprar y cómo usarlo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-neutral-900">Preguntas frecuentes</h2>
            <div className="mt-8">
              <FAQAccordion items={PURCHASE_FAQ} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-neutral-900">¿Lista para empezar?</h2>
            <p className="mt-4 text-lg text-neutral-600">
              El primer paso es que conozcamos tu piel. Luego te guío en todo el proceso de compra.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <WhatsAppCTA messageKey="comoComprar" size="lg">
                Quiero comprar con asesoramiento
              </WhatsAppCTA>
              <PortalCTAButton size="lg">
                Ir al portal autorizado
              </PortalCTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-8">
        <div className="container-custom">
          <p className="mx-auto max-w-3xl text-center text-sm text-neutral-500">
            Este sitio no es el sitio oficial de Nu Skin. Los productos se adquieren directamente en
            la plataforma oficial de la marca a través del link que te proporciono.
          </p>
        </div>
      </section>
    </>
  );
}
