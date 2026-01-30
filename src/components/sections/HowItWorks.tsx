import Link from 'next/link';
import { Button } from '@/components/ui';
import { HOW_IT_WORKS_STEPS } from '@/lib/constants';

interface HowItWorksProps {
  showCTA?: boolean;
}

export function HowItWorks({ showCTA = true }: HowItWorksProps) {
  return (
    <section className="section bg-bg">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Cómo funciona</h2>
          <p className="section-subtitle">
            Un proceso simple en 4 pasos para encontrar tu rutina ideal.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="grid gap-6 md:grid-cols-2">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent text-base font-semibold text-white">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-text">{step.title}</h3>
                  <p className="mt-1 text-[15px] text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showCTA && (
          <div className="mt-10 text-center">
            <Link href="/como-funciona">
              <Button variant="secondary">Ver más detalles</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
