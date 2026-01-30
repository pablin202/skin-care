'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';
import { getWhatsAppUrl } from '@/lib/utils';

export function PortalCTA() {
  return (
    <section className="section bg-primary-50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Comprá en el portal autorizado</h2>
          <p className="section-subtitle">
            Una vez que tengas tu rutina personalizada, te paso el link para que compres de forma
            segura en la plataforma oficial de la marca.
          </p>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-xl">
                  🔒
                </div>
                <h3 className="mt-3 font-semibold text-neutral-900">Compra segura</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Plataforma oficial con todas las garantías
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-xl">
                  📦
                </div>
                <h3 className="mt-3 font-semibold text-neutral-900">Envío a todo el país</h3>
                <p className="mt-1 text-sm text-neutral-600">Recibí tus productos donde estés</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-xl">
                  ✅
                </div>
                <h3 className="mt-3 font-semibold text-neutral-900">Productos originales</h3>
                <p className="mt-1 text-sm text-neutral-600">Garantía de autenticidad de marca</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/como-comprar">
              <Button variant="primary">Ver cómo comprar</Button>
            </Link>
            <Button
              variant="whatsapp"
              onClick={() => window.open(getWhatsAppUrl('comoComprar'), '_blank')}
            >
              Necesito ayuda para comprar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
