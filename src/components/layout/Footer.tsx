import Link from 'next/link';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import { getWhatsAppUrl } from '@/lib/utils';
import { CONTACT } from '@/config/contact';
import { MessageCircle, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-custom py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-lg font-medium text-text">
              {SITE_CONFIG.shortName}
            </Link>
            <p className="mt-3 max-w-md text-[15px] text-muted">{SITE_CONFIG.tagline}</p>
            <p className="mt-3 text-sm text-muted">
              Asesoría personalizada en cuidado de la piel con productos de marca internacional.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-medium text-text">Navegación</h3>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-text">Contacto</h3>
            <ul className="mt-3 space-y-3">
              {/* WhatsApp - Principal */}
              <li>
                <a
                  href={getWhatsAppUrl('contacto')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
                  aria-label="Contactar por WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              {/* Email - Secundario */}
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted underline underline-offset-4 transition-colors hover:text-text"
                  aria-label="Enviar email a Daniela Stecco"
                >
                  <Mail className="h-4 w-4" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  Página de contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  Información legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-xl border border-border bg-bg p-4">
          <p className="text-xs text-muted">
            <strong className="text-text">Aviso importante:</strong> Este sitio ofrece asesoría cosmética orientativa y no
            reemplaza la consulta con un dermatólogo u otro profesional de la salud. Los resultados
            pueden variar según cada persona. Este sitio no es el sitio oficial de Nu Skin ni
            representa a la marca de forma oficial. Los productos se adquieren a través del portal
            autorizado de la marca.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted">
            &copy; {currentYear} {SITE_CONFIG.shortName}. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/legal" className="text-sm text-muted hover:text-accent">
              Términos y condiciones
            </Link>
            <Link href="/legal" className="text-sm text-muted hover:text-accent">
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
