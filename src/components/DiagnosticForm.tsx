'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Alert } from '@/components/ui';
import { diagnosticFormSchema, type DiagnosticFormData } from '@/types';
import { FORM_OPTIONS } from '@/lib/constants';
import { getWhatsAppUrl } from '@/lib/utils';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function DiagnosticForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DiagnosticFormData>({
    resolver: zodResolver(diagnosticFormSchema),
    defaultValues: {
      nombre: '',
      apellido: '',
      whatsapp: '',
      rutinaActual: '',
      alergias: '',
      ciudadProvincia: '',
      website: '', // honeypot
    },
  });

  const onSubmit = async (data: DiagnosticFormData) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Error al enviar el formulario');
      }

      setStatus('success');
      reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Hubo un error. Por favor, intentá de nuevo.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
        <Alert variant="success">
          <strong>Gracias por completar el diagnóstico.</strong>
        </Alert>
        <div className="mt-6 text-center">
          <p className="text-lg text-neutral-700">
            Recibí tu información y te respondo a la brevedad con tu rutina personalizada.
          </p>
          <p className="mt-2 text-neutral-600">
            Si querés acelerar el proceso, podés escribirme directamente:
          </p>
          <div className="mt-6">
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => window.open(getWhatsAppUrl('diagnostico'), '_blank')}
            >
              Escribirme por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl bg-white p-6 shadow-sm md:p-8"
      noValidate
    >
      {status === 'error' && (
        <Alert variant="error" className="mb-6">
          {errorMessage}
        </Alert>
      )}

      <div className="space-y-6">
        {/* Nombre y Apellido */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="nombre" className="form-label">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              id="nombre"
              type="text"
              className="form-input"
              placeholder="Tu nombre"
              {...register('nombre')}
              aria-invalid={!!errors.nombre}
              aria-describedby={errors.nombre ? 'nombre-error' : undefined}
            />
            {errors.nombre && (
              <p id="nombre-error" className="form-error">
                {errors.nombre.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="apellido" className="form-label">
              Apellido <span className="text-red-500">*</span>
            </label>
            <input
              id="apellido"
              type="text"
              className="form-input"
              placeholder="Tu apellido"
              {...register('apellido')}
              aria-invalid={!!errors.apellido}
              aria-describedby={errors.apellido ? 'apellido-error' : undefined}
            />
            {errors.apellido && (
              <p id="apellido-error" className="form-error">
                {errors.apellido.message}
              </p>
            )}
          </div>
        </div>

        {/* WhatsApp y Ciudad */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="whatsapp" className="form-label">
              WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              id="whatsapp"
              type="tel"
              className="form-input"
              placeholder="Ej: 11 1234-5678"
              {...register('whatsapp')}
              aria-invalid={!!errors.whatsapp}
              aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
            />
            {errors.whatsapp && (
              <p id="whatsapp-error" className="form-error">
                {errors.whatsapp.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="ciudadProvincia" className="form-label">
              Ciudad / Provincia <span className="text-red-500">*</span>
            </label>
            <input
              id="ciudadProvincia"
              type="text"
              className="form-input"
              placeholder="Ej: Buenos Aires"
              {...register('ciudadProvincia')}
              aria-invalid={!!errors.ciudadProvincia}
              aria-describedby={errors.ciudadProvincia ? 'ciudad-error' : undefined}
            />
            {errors.ciudadProvincia && (
              <p id="ciudad-error" className="form-error">
                {errors.ciudadProvincia.message}
              </p>
            )}
          </div>
        </div>

        {/* Edad y Tipo de piel */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="edad" className="form-label">
              Rango de edad <span className="text-red-500">*</span>
            </label>
            <select
              id="edad"
              className="form-input"
              {...register('edad')}
              aria-invalid={!!errors.edad}
              aria-describedby={errors.edad ? 'edad-error' : undefined}
            >
              <option value="">Seleccionar...</option>
              {FORM_OPTIONS.ageRanges.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.edad && (
              <p id="edad-error" className="form-error">
                {errors.edad.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="tipoPiel" className="form-label">
              Tipo de piel <span className="text-red-500">*</span>
            </label>
            <select
              id="tipoPiel"
              className="form-input"
              {...register('tipoPiel')}
              aria-invalid={!!errors.tipoPiel}
              aria-describedby={errors.tipoPiel ? 'tipoPiel-error' : undefined}
            >
              <option value="">Seleccionar...</option>
              {FORM_OPTIONS.skinTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.tipoPiel && (
              <p id="tipoPiel-error" className="form-error">
                {errors.tipoPiel.message}
              </p>
            )}
          </div>
        </div>

        {/* Sensibilidad y Objetivo */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="sensibilidad" className="form-label">
              ¿Tu piel es sensible? <span className="text-red-500">*</span>
            </label>
            <select
              id="sensibilidad"
              className="form-input"
              {...register('sensibilidad')}
              aria-invalid={!!errors.sensibilidad}
              aria-describedby={errors.sensibilidad ? 'sensibilidad-error' : undefined}
            >
              <option value="">Seleccionar...</option>
              {FORM_OPTIONS.sensitivity.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.sensibilidad && (
              <p id="sensibilidad-error" className="form-error">
                {errors.sensibilidad.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="objetivo" className="form-label">
              Objetivo principal <span className="text-red-500">*</span>
            </label>
            <select
              id="objetivo"
              className="form-input"
              {...register('objetivo')}
              aria-invalid={!!errors.objetivo}
              aria-describedby={errors.objetivo ? 'objetivo-error' : undefined}
            >
              <option value="">Seleccionar...</option>
              {FORM_OPTIONS.goals.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.objetivo && (
              <p id="objetivo-error" className="form-error">
                {errors.objetivo.message}
              </p>
            )}
          </div>
        </div>

        {/* Presupuesto */}
        <div>
          <label htmlFor="presupuesto" className="form-label">
            Presupuesto aproximado
          </label>
          <select id="presupuesto" className="form-input" {...register('presupuesto')}>
            <option value="">Seleccionar...</option>
            {FORM_OPTIONS.budgetRanges.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Rutina actual */}
        <div>
          <label htmlFor="rutinaActual" className="form-label">
            ¿Qué usás actualmente?
          </label>
          <textarea
            id="rutinaActual"
            className="form-input min-h-[100px]"
            placeholder="Contame qué productos usás, si tenés alguna rutina, etc."
            {...register('rutinaActual')}
          />
        </div>

        {/* Alergias */}
        <div>
          <label htmlFor="alergias" className="form-label">
            ¿Tenés alergias o tratamientos médicos?
          </label>
          <textarea
            id="alergias"
            className="form-input min-h-[80px]"
            placeholder="Mencioná si tenés alergias conocidas o estás bajo algún tratamiento"
            {...register('alergias')}
          />
        </div>

        {/* Honeypot - hidden from users */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">
            Website
            <input
              id="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register('website')}
            />
          </label>
        </div>

        {/* Consentimiento */}
        <div className="rounded-lg bg-neutral-50 p-4">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
              {...register('consentimiento')}
              aria-describedby={errors.consentimiento ? 'consentimiento-error' : undefined}
            />
            <span className="text-sm text-neutral-700">
              Entiendo que esta asesoría es orientativa y <strong>no reemplaza</strong> la consulta
              con un dermatólogo u otro profesional de la salud.{' '}
              <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.consentimiento && (
            <p id="consentimiento-error" className="form-error mt-2">
              {errors.consentimiento.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            isLoading={status === 'loading'}
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar diagnóstico'}
          </Button>
        </div>

        <p className="text-center text-sm text-neutral-500">
          Los campos marcados con <span className="text-red-500">*</span> son obligatorios.
        </p>
      </div>
    </form>
  );
}
