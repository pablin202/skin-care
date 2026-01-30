import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ENV, WHATSAPP_MESSAGES } from './constants';

/**
 * Merge Tailwind classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generate WhatsApp URL with pre-filled message
 */
export function getWhatsAppUrl(
  messageKey: keyof typeof WHATSAPP_MESSAGES = 'general',
  customMessage?: string
): string {
  const phone = ENV.whatsappPhone;
  const message = customMessage || WHATSAPP_MESSAGES[messageKey] || WHATSAPP_MESSAGES.general;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

/**
 * Get the Nu Skin portal URL
 */
export function getPortalUrl(): string {
  return ENV.nuskinPortalUrl;
}

/**
 * Format phone number for display
 */
export function formatPhoneForDisplay(phone: string): string {
  // Assuming Argentine format: 54 9 11 1234 5678
  if (phone.startsWith('549')) {
    const areaCode = phone.slice(3, 5);
    const firstPart = phone.slice(5, 9);
    const secondPart = phone.slice(9);
    return `+54 9 ${areaCode} ${firstPart}-${secondPart}`;
  }
  return phone;
}

/**
 * Simple rate limiter store (in-memory, resets on server restart)
 * Only works on server-side
 */
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowMs: number = 60000 // 1 minute
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: maxRequests - record.count };
}

/**
 * Clean old rate limit entries periodically
 */
export function cleanRateLimitStore(): void {
  const now = Date.now();
  rateLimitStore.forEach((value, key) => {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  });
}

/**
 * Get canonical URL for a path
 */
export function getCanonicalUrl(path: string = ''): string {
  const baseUrl = ENV.siteUrl.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

/**
 * Validate honeypot field (should be empty)
 */
export function isHoneypotValid(value: string | undefined | null): boolean {
  return !value || value.trim() === '';
}
