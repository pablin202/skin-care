import Link from 'next/link';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="container-custom text-center">
        <h1 className="text-6xl font-bold text-primary-600">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-neutral-900">Página no encontrada</h2>
        <p className="mx-auto mt-4 max-w-md text-neutral-600">
          Lo sentimos, la página que buscás no existe o fue movida.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/">
            <Button variant="primary">Volver al inicio</Button>
          </Link>
          <Link href="/contacto">
            <Button variant="secondary">Contactar</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
