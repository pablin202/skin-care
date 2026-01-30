'use client';

import { Button } from '@/components/ui';
import { getWhatsAppUrl, getPortalUrl } from '@/lib/utils';
import { WHATSAPP_MESSAGES } from '@/lib/constants';

interface WhatsAppCTAProps {
  messageKey?: keyof typeof WHATSAPP_MESSAGES;
  customMessage?: string;
  children: React.ReactNode;
  variant?: 'whatsapp' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function WhatsAppCTA({
  messageKey = 'general',
  customMessage,
  children,
  variant = 'whatsapp',
  size = 'md',
  className,
}: WhatsAppCTAProps) {
  const handleClick = () => {
    const url = customMessage
      ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '5491112345678'}?text=${encodeURIComponent(customMessage)}`
      : getWhatsAppUrl(messageKey);
    window.open(url, '_blank');
  };

  return (
    <Button variant={variant} size={size} onClick={handleClick} className={className}>
      {children}
    </Button>
  );
}

interface PortalCTAButtonProps {
  children: React.ReactNode;
  variant?: 'whatsapp' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function PortalCTAButton({
  children,
  variant = 'secondary',
  size = 'md',
  className,
}: PortalCTAButtonProps) {
  const handleClick = () => {
    window.open(getPortalUrl(), '_blank');
  };

  return (
    <Button variant={variant} size={size} onClick={handleClick} className={className}>
      {children}
    </Button>
  );
}
