import { BENEFITS } from '@/lib/constants';
import { User, MessageCircle, Shield } from 'lucide-react';

const iconMap = {
  User: User,
  MessageCircle: MessageCircle,
  Shield: Shield,
};

export function Benefits() {
  return (
    <section className="section bg-surface">
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
        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
          {BENEFITS.map((benefit, index) => {
            const IconComponent = iconMap[benefit.iconName as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="card-hover group relative"
              >
                {/* Número decorativo */}
                <span className="absolute right-6 top-6 font-serif text-5xl font-light text-neutral-100 transition-colors group-hover:text-accent/10">
                  0{index + 1}
                </span>

                {/* Icono */}
                <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  {IconComponent && <IconComponent className="h-5 w-5 text-accent" />}
                </div>

                {/* Contenido */}
                <h3 className="font-serif text-lg font-medium text-text md:text-xl">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
