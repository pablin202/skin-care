import type { RoutineData } from '@/types';

export const routinesData: Record<string, RoutineData> = {
  manchas: {
    slug: 'manchas',
    title: 'Manchas y tono desparejo',
    description:
      'Una rutina enfocada en unificar el tono de la piel y trabajar sobre las diferencias de pigmentación que pueden aparecer con el tiempo.',
    signals: [
      'Notas diferencias de color en distintas zonas del rostro',
      'Aparecieron manchas oscuras o claras que antes no tenías',
      'El tono general se ve irregular o apagado',
      'Tenés marcas de exposición solar acumulada',
      'Sentís que tu piel perdió luminosidad uniforme',
    ],
    routineAM: [
      {
        step: 1,
        name: 'Limpieza suave',
        description:
          'Comenzá con un limpiador suave que no irrite. La piel limpia absorbe mejor los activos.',
      },
      {
        step: 2,
        name: 'Sérum despigmentante',
        description:
          'Aplicá un sérum con activos que trabajan sobre la pigmentación. Dejalo absorber 1-2 minutos.',
      },
      {
        step: 3,
        name: 'Hidratante con protección',
        description: 'Usá una crema hidratante que ayude a mantener la piel nutrida.',
      },
      {
        step: 4,
        name: 'Protector solar SPF 50+',
        description:
          'Fundamental todos los días, incluso en invierno. El sol puede empeorar las manchas existentes.',
      },
    ],
    routinePM: [
      {
        step: 1,
        name: 'Doble limpieza',
        description:
          'Primero un limpiador para remover protector solar, luego uno suave para limpiar en profundidad.',
      },
      {
        step: 2,
        name: 'Tratamiento nocturno',
        description:
          'Aplicá el tratamiento específico para manchas. La noche es ideal porque la piel se regenera.',
      },
      {
        step: 3,
        name: 'Crema nutritiva',
        description:
          'Terminá con una crema que nutra y ayude a la recuperación durante el descanso.',
      },
    ],
    expectations: [
      {
        period: 'Semana 1',
        description:
          'Es un período de adaptación. Tu piel puede sentirse diferente mientras se acostumbra a los nuevos productos.',
      },
      {
        period: 'Semanas 2-3',
        description:
          'Algunas personas notan que la piel se ve más luminosa. La hidratación suele mejorar en esta etapa.',
      },
      {
        period: 'Semana 4 en adelante',
        description:
          'Con constancia, el tono puede comenzar a verse más uniforme. Los resultados varían según cada persona.',
      },
    ],
    commonMistakes: [
      'No usar protector solar todos los días (el sol empeora las manchas)',
      'Aplicar demasiado producto creyendo que funcionará más rápido',
      'Abandonar la rutina antes de darle tiempo suficiente',
      'Exponer la piel al sol sin protección después de usar tratamientos',
      'Mezclar muchos activos sin consultar (puede irritar)',
    ],
    suggestedProducts: [
      {
        category: 'Limpiador',
        description: 'Fórmula suave, sin sulfatos agresivos',
        note: 'La recomendación exacta depende de tu tipo de piel',
      },
      {
        category: 'Sérum despigmentante',
        description: 'Con activos que trabajan sobre la pigmentación',
        note: 'Te envío opciones específicas por WhatsApp',
      },
      {
        category: 'Hidratante',
        description: 'Crema nutritiva adaptada a tu piel',
        note: 'Varía según si tu piel es seca, mixta o grasa',
      },
      {
        category: 'Protector solar',
        description: 'SPF 50+ de amplio espectro',
        note: 'Fundamental para este tipo de rutina',
      },
    ],
  },

  sequedad: {
    slug: 'sequedad',
    title: 'Piel seca o deshidratada',
    description:
      'Una rutina diseñada para restaurar la hidratación, fortalecer la barrera cutánea y devolver confort a la piel que se siente tirante o descamada.',
    signals: [
      'Sentís tirantez después de lavarte la cara',
      'Aparecen zonas con descamación o aspereza',
      'La piel se ve opaca y sin brillo natural',
      'Notás líneas finas por deshidratación (no arrugas profundas)',
      'Los productos parecen "sentarse" sobre la piel sin absorber bien',
    ],
    routineAM: [
      {
        step: 1,
        name: 'Limpieza cremosa',
        description:
          'Usá un limpiador cremoso o en aceite que no elimine los aceites naturales de la piel.',
      },
      {
        step: 2,
        name: 'Sérum hidratante',
        description:
          'Aplicá un sérum con ácido hialurónico o ingredientes que atraigan agua a la piel.',
      },
      {
        step: 3,
        name: 'Crema hidratante rica',
        description:
          'Sellá la hidratación con una crema más densa que forme una barrera protectora.',
      },
      {
        step: 4,
        name: 'Protector solar',
        description:
          'Elegí una fórmula que no reseque, idealmente con ingredientes hidratantes.',
      },
    ],
    routinePM: [
      {
        step: 1,
        name: 'Limpieza suave',
        description:
          'Remové el día con un limpiador que no deje la piel tirante.',
      },
      {
        step: 2,
        name: 'Tratamiento reparador',
        description:
          'Aplicá un sérum o tratamiento que ayude a reparar la barrera cutánea durante la noche.',
      },
      {
        step: 3,
        name: 'Aceite facial',
        description:
          'Si tu piel lo tolera, un aceite facial puede dar nutrición extra.',
        optional: true,
      },
      {
        step: 4,
        name: 'Crema nocturna nutritiva',
        description:
          'Terminá con una crema rica que trabaje mientras dormís.',
      },
    ],
    expectations: [
      {
        period: 'Semana 1',
        description:
          'La sensación de tirantez debería empezar a reducirse. La piel se siente más confortable.',
      },
      {
        period: 'Semanas 2-3',
        description:
          'La textura puede empezar a suavizarse. La descamación suele disminuir.',
      },
      {
        period: 'Semana 4 en adelante',
        description:
          'Con constancia, la piel puede recuperar luminosidad y sentirse más flexible.',
      },
    ],
    commonMistakes: [
      'Usar agua muy caliente (reseca más la piel)',
      'Elegir limpiadores con espuma abundante (suelen ser más agresivos)',
      'Olvidar la hidratación corporal (el cuerpo también necesita atención)',
      'No beber suficiente agua (la hidratación viene de adentro también)',
      'Exfoliar demasiado frecuentemente (irrita la piel ya sensible)',
    ],
    suggestedProducts: [
      {
        category: 'Limpiador cremoso',
        description: 'Fórmula suave que no elimine los aceites naturales',
        note: 'Te recomiendo opciones específicas según tu rutina actual',
      },
      {
        category: 'Sérum hidratante',
        description: 'Con ácido hialurónico u otros humectantes',
        note: 'La concentración depende de tu nivel de deshidratación',
      },
      {
        category: 'Crema rica',
        description: 'Fórmula nutritiva que selle la hidratación',
        note: 'Varía según la temporada y tu tipo de piel',
      },
      {
        category: 'Aceite facial',
        description: 'Para nutrición extra (opcional)',
        note: 'No todas las pieles lo necesitan, consultame',
      },
    ],
  },

  textura: {
    slug: 'textura',
    title: 'Líneas finas y textura irregular',
    description:
      'Una rutina enfocada en suavizar la textura de la piel, minimizar la apariencia de líneas finas y mejorar la elasticidad general.',
    signals: [
      'Notás líneas finas alrededor de ojos, boca o frente',
      'La piel perdió la suavidad que tenía antes',
      'Los poros se ven más visibles',
      'La textura se siente irregular al tacto',
      'El maquillaje ya no se aplica tan parejo como antes',
    ],
    routineAM: [
      {
        step: 1,
        name: 'Limpieza suave',
        description:
          'Un limpiador que prepare la piel sin agredirla.',
      },
      {
        step: 2,
        name: 'Sérum antioxidante',
        description:
          'Los antioxidantes ayudan a proteger la piel de factores externos que afectan la textura.',
      },
      {
        step: 3,
        name: 'Crema reafirmante',
        description:
          'Una crema que trabaje sobre la elasticidad y firmeza de la piel.',
      },
      {
        step: 4,
        name: 'Protector solar SPF 50+',
        description:
          'El sol es uno de los principales factores que afectan la textura de la piel.',
      },
    ],
    routinePM: [
      {
        step: 1,
        name: 'Doble limpieza',
        description:
          'Remové protector solar y suciedad del día en profundidad.',
      },
      {
        step: 2,
        name: 'Exfoliante suave',
        description:
          'Una o dos veces por semana, según tolerancia. Ayuda a renovar la capa superficial.',
        optional: true,
      },
      {
        step: 3,
        name: 'Tratamiento nocturno',
        description:
          'Aplicá un tratamiento con activos que trabajen sobre la renovación celular.',
      },
      {
        step: 4,
        name: 'Crema nocturna',
        description:
          'Una crema rica que nutra y ayude en el proceso de regeneración nocturna.',
      },
    ],
    expectations: [
      {
        period: 'Semana 1',
        description:
          'Período de adaptación. Si usás exfoliantes, empezá gradualmente para ver cómo reacciona tu piel.',
      },
      {
        period: 'Semanas 2-3',
        description:
          'La piel puede empezar a verse más suave al tacto. La luminosidad suele mejorar.',
      },
      {
        period: 'Semana 4 en adelante',
        description:
          'Con constancia, la textura puede volverse más uniforme. Las líneas finas pueden verse menos marcadas.',
      },
    ],
    commonMistakes: [
      'Exfoliar en exceso pensando que dará resultados más rápidos',
      'No usar protector solar (el sol empeora las líneas finas)',
      'Aplicar productos muy cerca del ojo sin cuidado',
      'Esperar resultados inmediatos (la piel necesita tiempo)',
      'Usar productos demasiado agresivos para tu tipo de piel',
    ],
    suggestedProducts: [
      {
        category: 'Limpiador',
        description: 'Fórmula suave que no irrite',
        note: 'La elección depende de tu tipo de piel',
      },
      {
        category: 'Sérum antioxidante',
        description: 'Con vitamina C u otros antioxidantes',
        note: 'La concentración se adapta a tu sensibilidad',
      },
      {
        category: 'Tratamiento nocturno',
        description: 'Con activos para renovación celular',
        note: 'Empezamos gradualmente para evitar irritación',
      },
      {
        category: 'Contorno de ojos',
        description: 'Específico para la zona delicada del ojo',
        note: 'Opcional según tus necesidades específicas',
      },
    ],
  },

  sensible: {
    slug: 'sensible',
    title: 'Piel sensible o reactiva',
    description:
      'Una rutina cuidadosa diseñada para calmar la piel reactiva, reducir rojeces y fortalecer la barrera cutánea sin causar irritación.',
    signals: [
      'Tu piel reacciona frecuentemente a productos nuevos',
      'Tenés rojeces persistentes o que aparecen fácilmente',
      'Sentís ardor, picazón o incomodidad con frecuencia',
      'Los cambios de temperatura afectan tu piel',
      'Tenés que tener mucho cuidado con lo que usás',
    ],
    routineAM: [
      {
        step: 1,
        name: 'Limpieza ultra suave',
        description:
          'Un limpiador sin fragancias ni irritantes conocidos. Puede ser solo agua micelar si tu piel lo prefiere.',
      },
      {
        step: 2,
        name: 'Sérum calmante',
        description:
          'Ingredientes como niacinamida o centella asiática pueden ayudar a calmar la piel.',
      },
      {
        step: 3,
        name: 'Crema calmante',
        description:
          'Una crema diseñada para pieles sensibles, sin fragancias ni colorantes.',
      },
      {
        step: 4,
        name: 'Protector solar mineral',
        description:
          'Los filtros minerales suelen ser mejor tolerados por pieles sensibles.',
      },
    ],
    routinePM: [
      {
        step: 1,
        name: 'Limpieza suave',
        description:
          'Remové el día con el mismo cuidado que a la mañana.',
      },
      {
        step: 2,
        name: 'Sérum reparador',
        description:
          'Ingredientes que ayuden a fortalecer la barrera cutánea.',
      },
      {
        step: 3,
        name: 'Crema nocturna calmante',
        description:
          'Una crema que nutra sin irritar, ayudando a la recuperación nocturna.',
      },
    ],
    expectations: [
      {
        period: 'Semana 1',
        description:
          'Observá cómo reacciona tu piel. Introducí productos de a uno para identificar cualquier sensibilidad.',
      },
      {
        period: 'Semanas 2-3',
        description:
          'Si todo va bien, la piel debería empezar a sentirse más confortable.',
      },
      {
        period: 'Semana 4 en adelante',
        description:
          'Con productos adecuados, las rojeces y la reactividad pueden disminuir gradualmente.',
      },
    ],
    commonMistakes: [
      'Probar muchos productos nuevos al mismo tiempo',
      'Usar exfoliantes químicos o físicos agresivos',
      'Ignorar las fragancias y alcohol en los productos',
      'Frotar la piel en lugar de aplicar los productos con toques suaves',
      'Usar agua muy caliente o muy fría',
    ],
    suggestedProducts: [
      {
        category: 'Limpiador suave',
        description: 'Sin fragancias, sulfatos ni irritantes',
        note: 'Es crucial elegir bien para pieles sensibles',
      },
      {
        category: 'Sérum calmante',
        description: 'Con ingredientes reconocidos por calmar',
        note: 'Probamos primero en una zona pequeña',
      },
      {
        category: 'Crema para piel sensible',
        description: 'Fórmula minimalista y calmante',
        note: 'Menos ingredientes suele ser mejor para piel reactiva',
      },
      {
        category: 'Protector solar mineral',
        description: 'Con óxido de zinc o dióxido de titanio',
        note: 'Suele ser mejor tolerado que los filtros químicos',
      },
    ],
  },
};

export function getRoutineData(slug: string): RoutineData | undefined {
  return routinesData[slug];
}

export function getAllRoutineSlugs(): string[] {
  return Object.keys(routinesData);
}
