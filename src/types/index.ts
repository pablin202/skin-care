import { z } from 'zod';

// Schema de validación para el formulario de diagnóstico
export const diagnosticFormSchema = z.object({
  // Campos requeridos
  nombre: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es demasiado largo'),
  apellido: z
    .string()
    .min(2, 'El apellido debe tener al menos 2 caracteres')
    .max(100, 'El apellido es demasiado largo'),
  whatsapp: z
    .string()
    .min(8, 'El número de WhatsApp debe tener al menos 8 dígitos')
    .max(20, 'El número de WhatsApp es demasiado largo')
    .regex(/^[0-9+\-\s()]+$/, 'El número de WhatsApp no es válido'),
  edad: z.enum(['45-54', '55-64', '65-74', '75+'], {
    errorMap: () => ({ message: 'Seleccioná un rango de edad' }),
  }),
  tipoPiel: z.enum(['seca', 'mixta', 'grasa', 'no-se'], {
    errorMap: () => ({ message: 'Seleccioná un tipo de piel' }),
  }),
  sensibilidad: z.enum(['si', 'no', 'no-se'], {
    errorMap: () => ({ message: 'Indicá si tu piel es sensible' }),
  }),
  objetivo: z.enum(['manchas', 'sequedad', 'arrugas', 'rojeces', 'otro'], {
    errorMap: () => ({ message: 'Seleccioná un objetivo principal' }),
  }),
  ciudadProvincia: z
    .string()
    .min(2, 'Indicá tu ciudad o provincia')
    .max(100, 'La ubicación es demasiado larga'),
  consentimiento: z.literal(true, {
    errorMap: () => ({ message: 'Debés aceptar que esto no reemplaza una consulta médica' }),
  }),

  // Campos opcionales
  rutinaActual: z.string().max(1000, 'El texto es demasiado largo').optional(),
  alergias: z.string().max(1000, 'El texto es demasiado largo').optional(),
  presupuesto: z.enum(['basico', 'intermedio', 'completo', 'no-se']).optional(),

  // Honeypot (debe estar vacío)
  website: z.string().max(0, 'Este campo debe estar vacío').optional(),
});

export type DiagnosticFormData = z.infer<typeof diagnosticFormSchema>;

// Tipo para la respuesta del API
export interface ApiResponse {
  ok: boolean;
  message: string;
  error?: string;
}

// Tipo para un problema de piel
export interface SkinProblem {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
}

// Tipo para datos de rutina
export interface RoutineData {
  slug: string;
  title: string;
  description: string;
  signals: string[];
  routineAM: RoutineStep[];
  routinePM: RoutineStep[];
  expectations: TimelineItem[];
  commonMistakes: string[];
  suggestedProducts: ProductSuggestion[];
}

export interface RoutineStep {
  step: number;
  name: string;
  description: string;
  optional?: boolean;
}

export interface TimelineItem {
  period: string;
  description: string;
}

export interface ProductSuggestion {
  category: string;
  description: string;
  note?: string;
}

// Tipo para testimonios
export interface Testimonial {
  id: string;
  name: string;
  age?: string;
  location?: string;
  quote: string;
  problem?: string;
  isPlaceholder?: boolean;
}

// Tipo para FAQ
export interface FAQItem {
  question: string;
  answer: string;
}

// Tipo para pasos del proceso
export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

// Tipo para beneficios
export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

// Tipo para navegación
export interface NavLink {
  href: string;
  label: string;
}
