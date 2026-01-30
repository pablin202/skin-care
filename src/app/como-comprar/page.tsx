import type { Metadata } from 'next';
import { FAQAccordion } from '@/components/ui';
import { WhatsAppCTA, PortalCTAButton } from '@/components/WhatsAppCTA';
import { PURCHASE_FAQ } from '@/lib/constants';
import { MessageCircle, Link as LinkIcon, Lock, Check } from 'lucide-react';

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
      Icon: MessageCircle,
    },
    {
      number: 2,
      title: 'Te envío el link del portal autorizado',
      description:
        'Recibís el link directo a la plataforma oficial de la marca donde están los productos.',
      Icon: LinkIcon,
    },
    {
      number: 3,
      title: 'Comprás de forma segura',
      description:
        'Hacés tu compra en la plataforma oficial con todos los medios de pago disponibles y garantía de autenticidad.',
      Icon: Lock,
    },
    {
      number: 4,
      title: 'Yo hago seguimiento',
      description:
        'Estoy disponible para responder dudas, explicarte cómo usar los productos y ajustar la rutina si hace falta.',
      Icon: Check,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-14 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-3xl font-medium tracking-tight text-text md:text-4xl">
              Cómo comprar
            </h1>
            <p className="mt-4 text-[17px] leading-7 text-muted">
              Un proceso simple y seguro para obtener tus productos con mi acompañamiento.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section bg-surface">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {purchaseSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <step.Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="mb-1 text-xs font-medium uppercase tracking-wide text-accent">
                        Paso {step.number}
                      </div>
                      <h3 className="font-serif text-lg font-medium text-text">{step.title}</h3>
                      <p className="mt-2 text-[15px] text-muted">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why this way */}
      <section className="section bg-bg">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-serif text-2xl font-medium text-text md:text-3xl">
              ¿Por qué comprar así?
            </h2>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-serif font-medium text-text">Productos originales garantizados</h3>
                <p className="mt-2 text-[15px] text-muted">
                  Al comprar en el portal autorizado, tenés la garantía de que los productos son
                  originales y están en óptimas condiciones.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-serif font-medium text-text">Compra segura</h3>
                <p className="mt-2 text-[15px] text-muted">
                  La plataforma oficial tiene todos los medios de pago seguros y protección al
                  comprador.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-serif font-medium text-text">Asesoramiento incluido</h3>
                <p className="mt-2 text-[15px] text-muted">
                  A diferencia de comprar sola, tenés mi acompañamiento para saber exactamente qué
                  comprar y cómo usarlo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-surface">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-serif text-2xl font-medium text-text md:text-3xl">Preguntas frecuentes</h2>
            <div className="mt-8">
              <FAQAccordion items={PURCHASE_FAQ} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-accent/5">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-medium text-text md:text-3xl">¿Lista para empezar?</h2>
            <p className="mt-4 text-[17px] text-muted">
              El primer paso es que conozcamos tu piel. Luego te guío en todo el proceso de compra.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
      <section className="border-t border-border bg-bg py-6">
        <div className="container-custom">
          <p className="mx-auto max-w-3xl text-center text-sm text-muted">
            Este sitio no es el sitio oficial de Nu Skin. Los productos se adquieren directamente en
            la plataforma oficial de la marca a través del link que te proporciono.
          </p>
        </div>
      </section>
    </>
  );
}
