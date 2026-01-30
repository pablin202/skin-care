import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RoutinePage } from '@/components/RoutinePage';
import { getRoutineData } from '@/data/routines';

const routine = getRoutineData('manchas');

export const metadata: Metadata = {
  title: routine?.title || 'Manchas y tono desparejo',
  description:
    'Rutina de skincare para manchas y tono desparejo. Productos y pasos para unificar el tono de la piel.',
};

export default function ManchasPage() {
  if (!routine) {
    notFound();
  }

  return <RoutinePage routine={routine} />;
}
