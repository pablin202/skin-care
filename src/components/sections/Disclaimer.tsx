import Link from 'next/link';

export function Disclaimer() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50 py-8">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-neutral-600">
            <strong>Aviso:</strong> La información en este sitio es orientativa y no reemplaza el
            consejo médico profesional. Los resultados pueden variar según cada persona. Siempre
            consultá con un dermatólogo ante cualquier condición de la piel.{' '}
            <Link href="/legal" className="link">
              Ver información legal completa
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
