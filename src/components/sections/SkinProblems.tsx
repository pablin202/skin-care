import Link from 'next/link';
import { Card, CardContent, Button } from '@/components/ui';
import { SKIN_PROBLEMS } from '@/lib/constants';
import { Palette, Droplets, Sparkles, Heart, ChevronRight } from 'lucide-react';

const iconMap = {
  Palette: Palette,
  Droplets: Droplets,
  Sparkles: Sparkles,
  Heart: Heart,
};

export function SkinProblems() {
  return (
    <section className="section bg-surface">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Problemas frecuentes</h2>
          <p className="section-subtitle">
            Cada piel es diferente. Encontrá la rutina que se adapte a tu situación particular.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKIN_PROBLEMS.map((problem) => {
            const IconComponent = iconMap[problem.iconName as keyof typeof iconMap];
            return (
              <Link key={problem.slug} href={`/rutinas/${problem.slug}`} className="group">
                <Card className="h-full transition-all duration-200 group-hover:border-neutral-300 group-hover:shadow-soft">
                  <CardContent className="flex h-full flex-col">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/15">
                      {IconComponent && <IconComponent className="h-5 w-5 text-accent" />}
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-medium text-text group-hover:text-accent">
                      {problem.title}
                    </h3>
                    <p className="mt-2 flex-grow text-sm text-muted">{problem.description}</p>
                    <div className="mt-4">
                      <span className="inline-flex items-center text-sm font-medium text-accent">
                        Ver rutina
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/rutinas">
            <Button variant="secondary">Ver todas las rutinas</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
