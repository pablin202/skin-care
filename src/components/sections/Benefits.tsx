import { BENEFITS } from '@/lib/constants';

export function Benefits() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Experiencia</span>
          <h2 className="section-title">Por qué trabajar conmigo</h2>
          <p className="section-subtitle">
            Un enfoque personalizado que combina conocimiento, productos de calidad y acompañamiento real.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3 lg:gap-12">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-neutral-100 bg-white p-8 transition-all duration-300 hover:border-primary-200 hover:shadow-soft lg:p-10"
            >
              {/* Número decorativo */}
              <span className="absolute right-8 top-8 font-serif text-6xl font-light text-neutral-100 transition-colors group-hover:text-primary-100">
                0{index + 1}
              </span>

              {/* Icono */}
              <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 text-2xl">
                {benefit.icon}
              </div>

              {/* Contenido */}
              <h3 className="font-serif text-xl font-medium text-neutral-900 lg:text-2xl">
                {benefit.title}
              </h3>
              <p className="mt-3 text-neutral-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
