import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, Button } from '@/components/ui';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { SITE_CONFIG } from '@/lib/constants';
import { MessageCircle, ClipboardList, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contactá a Daniela Stecco para asesoramiento en cuidado de la piel. WhatsApp y diagnóstico online disponibles.',
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-14 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-3xl font-medium tracking-tight text-text md:text-4xl">
              Contacto
            </h1>
            <p className="mt-4 text-[17px] leading-7 text-muted">
              La mejor forma de contactarme es por WhatsApp. Respondo personalmente todos los
              mensajes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="section bg-surface">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {/* WhatsApp - Main */}
              <Card className="border-[#25D366]/30 bg-[#25D366]/5" hover={false}>
                <CardContent className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 font-serif text-xl font-medium text-text">WhatsApp</h2>
                  <p className="mt-2 text-[15px] text-muted">
                    Mi canal principal de comunicación. Escribime y te respondo a la brevedad.
                  </p>
                  <div className="mt-6">
                    <WhatsAppCTA messageKey="contacto" size="lg" className="w-full" variant="whatsapp">
                      Abrir WhatsApp
                    </WhatsAppCTA>
                  </div>
                  <p className="mt-4 text-sm text-muted">
                    Respondo generalmente dentro de las 24 horas
                  </p>
                </CardContent>
              </Card>

              {/* Diagnostic form */}
              <Card>
                <CardContent className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    <ClipboardList className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="mt-4 font-serif text-xl font-medium text-text">
                    Diagnóstico online
                  </h2>
                  <p className="mt-2 text-[15px] text-muted">
                    Completá el formulario de diagnóstico para que pueda conocer tu piel antes de
                    contactarte.
                  </p>
                  <div className="mt-6">
                    <Link href="/diagnostico">
                      <Button variant="primary" size="lg" className="w-full">
                        Completar diagnóstico
                      </Button>
                    </Link>
                  </div>
                  <p className="mt-4 text-sm text-muted">
                    Te contacto con tu rutina personalizada
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About me */}
      <section className="section bg-bg">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <Card hover={false}>
              <CardContent>
                <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
                  <div className="mb-6 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 md:mb-0 md:mr-6">
                    <User className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-medium text-text">{SITE_CONFIG.author}</h2>
                    <p className="mt-1 text-accent">Asesora en cuidado de la piel</p>
                    <p className="mt-4 text-[15px] text-muted">
                      Me dedico a ayudar a mujeres a encontrar las rutinas de cuidado que mejor se
                      adapten a su piel. Trabajo con productos de marca internacional y me enfoco en
                      dar un acompañamiento personalizado.
                    </p>
                    <p className="mt-3 text-[15px] text-muted">
                      Mi objetivo es que cada persona entienda su piel y sepa cómo cuidarla, más
                      allá de vender productos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-surface">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-serif text-2xl font-medium text-text">Preguntas comunes</h2>
            <div className="mt-8 space-y-3">
              <div className="rounded-xl border border-border p-4">
                <h3 className="font-serif font-medium text-text">
                  ¿Cuánto tardás en responder?
                </h3>
                <p className="mt-2 text-[15px] text-muted">
                  Generalmente respondo dentro de las 24 horas. Si es urgente, mencionalo en tu
                  mensaje.
                </p>
              </div>
              <div className="rounded-xl border border-border p-4">
                <h3 className="font-serif font-medium text-text">
                  ¿La consulta tiene costo?
                </h3>
                <p className="mt-2 text-[15px] text-muted">
                  La consulta inicial y el armado de tu rutina no tienen costo. Mi trabajo está
                  vinculado a los productos que adquieras.
                </p>
              </div>
              <div className="rounded-xl border border-border p-4">
                <h3 className="font-serif font-medium text-text">
                  ¿Puedo hacer preguntas antes de comprar?
                </h3>
                <p className="mt-2 text-[15px] text-muted">
                  Por supuesto. Escribime con todas tus dudas y te respondo sin compromiso.
                </p>
              </div>
              <div className="rounded-xl border border-border p-4">
                <h3 className="font-serif font-medium text-text">
                  ¿Atendés fuera de Argentina?
                </h3>
                <p className="mt-2 text-[15px] text-muted">
                  Actualmente me enfoco en Argentina por temas de envío y disponibilidad de
                  productos, pero podés consultarme de todos modos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-accent/5">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-medium text-text md:text-3xl">¿Empezamos?</h2>
            <p className="mt-4 text-[17px] text-muted">
              No dudes en escribirme. Estoy acá para ayudarte a cuidar tu piel.
            </p>
            <div className="mt-8">
              <WhatsAppCTA messageKey="contacto" size="lg">
                Escribirme ahora
              </WhatsAppCTA>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
