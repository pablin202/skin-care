import Link from 'next/link';
import { Card, CardContent, Button } from '@/components/ui';
import { SKIN_PROBLEMS } from '@/lib/constants';

export function SkinProblems() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Problemas frecuentes</h2>
          <p className="section-subtitle">
            Cada piel es diferente. Encontrá la rutina que se adapte a tu situación particular.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKIN_PROBLEMS.map((problem) => (
            <Link key={problem.slug} href={`/rutinas/${problem.slug}`} className="group">
              <Card className="h-full transition-all duration-200 group-hover:border-primary-200 group-hover:shadow-lg">
                <CardContent className="flex h-full flex-col">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-2xl transition-colors group-hover:bg-primary-100">
                    {problem.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900 group-hover:text-primary-700">
                    {problem.title}
                  </h3>
                  <p className="mt-2 flex-grow text-sm text-neutral-600">{problem.description}</p>
                  <div className="mt-4">
                    <span className="inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
                      Ver rutina
                      <ArrowIcon />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/rutinas">
            <Button variant="secondary">Ver todas las rutinas</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
