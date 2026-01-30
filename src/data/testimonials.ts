import type { Testimonial } from '@/types';

// Testimonios placeholder - reemplazar con testimonios reales cuando estén disponibles
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Testimonio disponible próximamente',
    quote:
      'Estamos recopilando experiencias de clientas para compartir en esta sección. Si ya trabajaste con Daniela y querés compartir tu experiencia, contactala por WhatsApp.',
    isPlaceholder: true,
  },
  {
    id: '2',
    name: 'Testimonio disponible próximamente',
    quote:
      'Cada piel es diferente y los resultados varían. Aquí compartiremos experiencias reales de personas que siguieron las rutinas con constancia.',
    isPlaceholder: true,
  },
  {
    id: '3',
    name: 'Testimonio disponible próximamente',
    quote:
      'Próximamente agregaremos testimonios de clientas que nos autoricen a compartir su experiencia.',
    isPlaceholder: true,
  },
];

// Función para obtener testimonios no-placeholder
export function getRealTestimonials(): Testimonial[] {
  return testimonials.filter((t) => !t.isPlaceholder);
}

// Función para verificar si hay testimonios reales
export function hasRealTestimonials(): boolean {
  return testimonials.some((t) => !t.isPlaceholder);
}
