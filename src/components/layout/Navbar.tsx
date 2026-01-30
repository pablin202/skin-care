'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { getWhatsAppUrl } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui';
import { Menu, X, MessageCircle } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-200',
        isScrolled ? 'bg-surface/95 backdrop-blur-sm nav-shadow-scroll' : 'bg-surface'
      )}
    >
      <nav className="container-custom" aria-label="Navegación principal">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2"
            onClick={closeMobileMenu}
          >
            <span className="font-serif text-lg font-medium tracking-tight text-text transition-colors group-hover:text-accent md:text-xl">
              Daniela Stecco
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative py-2 text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-text'
                    : 'text-muted hover:text-text'
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(getWhatsAppUrl('home'), '_blank')}
            >
              Contactar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-neutral-100 hover:text-text lg:hidden"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn(
            'overflow-hidden transition-all duration-200 lg:hidden',
            isMobileMenuOpen ? 'max-h-[500px] pb-6' : 'max-h-0'
          )}
        >
          <div className="flex flex-col gap-1 border-t border-border pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={cn(
                  'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-accent/10 text-accent'
                    : 'text-muted hover:bg-neutral-100 hover:text-text'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <Button
                variant="whatsapp"
                className="w-full"
                onClick={() => {
                  closeMobileMenu();
                  window.open(getWhatsAppUrl('home'), '_blank');
                }}
                leftIcon={<MessageCircle className="h-4 w-4" />}
              >
                Escribime por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
