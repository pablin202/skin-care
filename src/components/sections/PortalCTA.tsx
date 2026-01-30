'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';
import { getWhatsAppUrl } from '@/lib/utils';
import { Lock, Package, Check, MessageCircle } from 'lucide-react';

export function PortalCTA() {
  return (
    <section className="section bg-accent/5">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Comprá en el portal autorizado</h2>
          <p className="section-subtitle">
            Una vez que tengas tu rutina personalizada, te paso el link para que compres de forma
            segura en la plataforma oficial de la marca.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Lock className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-3 font-serif font-medium text-text">Compra segura</h3>
                <p className="mt-1 text-sm text-muted">
                  Plataforma oficial con todas las garantías
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Package className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-3 font-serif font-medium text-text">Envío a todo el país</h3>
                <p className="mt-1 text-sm text-muted">Recibí tus productos donde estés</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Check className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-3 font-serif font-medium text-text">Productos originales</h3>
                <p className="mt-1 text-sm text-muted">Garantía de autenticidad de marca</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/como-comprar">
              <Button variant="primary">Ver cómo comprar</Button>
            </Link>
            <Button
              variant="secondary"
              onClick={() => window.open(getWhatsAppUrl('comoComprar'), '_blank')}
              leftIcon={<MessageCircle className="h-4 w-4" />}
            >
              Necesito ayuda para comprar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
