import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RoutinePage } from '@/components/RoutinePage';
import { getRoutineData } from '@/data/routines';

const routine = getRoutineData('sequedad');

export const metadata: Metadata = {
  title: routine?.title || 'Piel seca o deshidratada',
  description:
    'Rutina de skincare para piel seca o deshidratada. Productos y pasos para restaurar la hidratación.',
};

export default function SequedadPage() {
  if (!routine) {
    notFound();
  }

  return <RoutinePage routine={routine} />;
}
