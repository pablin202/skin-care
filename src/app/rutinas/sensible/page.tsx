import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RoutinePage } from '@/components/RoutinePage';
import { getRoutineData } from '@/data/routines';

const routine = getRoutineData('sensible');

export const metadata: Metadata = {
  title: routine?.title || 'Piel sensible o reactiva',
  description:
    'Rutina de skincare para piel sensible o reactiva. Productos y pasos para calmar y fortalecer la barrera cutánea.',
};

export default function SensiblePage() {
  if (!routine) {
    notFound();
  }

  return <RoutinePage routine={routine} />;
}
