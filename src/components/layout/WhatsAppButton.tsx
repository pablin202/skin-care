'use client';

import { usePathname } from 'next/navigation';
import { getWhatsAppUrl } from '@/lib/utils';
import { WHATSAPP_MESSAGES } from '@/lib/constants';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const pathname = usePathname();

  // Determinar qué mensaje usar según la página actual
  const getMessageKey = (): keyof typeof WHATSAPP_MESSAGES => {
    if (pathname === '/') return 'home';
    if (pathname === '/diagnostico') return 'diagnostico';
    if (pathname === '/como-comprar') return 'comoComprar';
    if (pathname === '/contacto') return 'contacto';
    if (pathname?.startsWith('/rutinas/manchas')) return 'manchas';
    if (pathname?.startsWith('/rutinas/sequedad')) return 'sequedad';
    if (pathname?.startsWith('/rutinas/textura')) return 'textura';
    if (pathname?.startsWith('/rutinas/sensible')) return 'sensible';
    return 'general';
  };

  const whatsappUrl = getWhatsAppUrl(getMessageKey());

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#20BD5A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
