import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RoutinePage } from '@/components/RoutinePage';
import { getRoutineData } from '@/data/routines';

const routine = getRoutineData('textura');

export const metadata: Metadata = {
  title: routine?.title || 'Líneas finas y textura irregular',
  description:
    'Rutina de skincare para líneas finas y textura irregular. Productos y pasos para suavizar la piel.',
};

export default function TexturaPage() {
  if (!routine) {
    notFound();
  }

  return <RoutinePage routine={routine} />;
}
