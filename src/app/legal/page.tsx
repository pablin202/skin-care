import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Información legal',
  description:
    'Términos y condiciones, política de privacidad y disclaimers del sitio de Daniela Stecco.',
};

export default function LegalPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-bg py-16 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              Información legal
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Términos de uso, política de privacidad y avisos importantes.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-neutral max-w-none">
              {/* Disclaimer principal */}
              <div className="mb-12 rounded-2xl bg-yellow-50 p-6">
                <h2 className="mt-0 text-xl font-bold text-yellow-800">Aviso importante</h2>
                <ul className="mb-0 text-yellow-800">
                  <li>
                    Este sitio ofrece <strong>asesoría cosmética orientativa</strong> y no
                    reemplaza la consulta con un dermatólogo u otro profesional de la salud.
                  </li>
                  <li>
                    Los resultados del cuidado de la piel <strong>pueden variar</strong> según cada
                    persona.
                  </li>
                  <li>
                    Este sitio <strong>no es el sitio oficial de Nu Skin</strong> ni representa a la
                    marca de forma oficial.
                  </li>
                  <li>
                    Los productos se adquieren a través del portal autorizado de la marca.
                  </li>
                </ul>
              </div>

              {/* Naturaleza del servicio */}
              <h2>Naturaleza del servicio</h2>
              <p>
                {SITE_CONFIG.author} ofrece servicios de asesoría cosmética orientativa. Esto
                incluye:
              </p>
              <ul>
                <li>Evaluación de las necesidades de cuidado de la piel según lo informado por el cliente</li>
                <li>Recomendación de rutinas de cuidado y productos</li>
                <li>Seguimiento y ajustes de las rutinas recomendadas</li>
                <li>Orientación sobre el uso de productos</li>
              </ul>
              <p>
                Este servicio <strong>no constituye</strong> asesoramiento médico, diagnóstico de
                condiciones de la piel, ni tratamiento de enfermedades dermatológicas.
              </p>

              {/* Limitaciones */}
              <h2>Limitaciones y responsabilidades</h2>
              <h3>Sobre los resultados</h3>
              <p>
                Los resultados del cuidado de la piel varían significativamente de persona a
                persona. Factores como la genética, el estilo de vida, la alimentación, el estrés,
                condiciones médicas y la constancia en las rutinas afectan los resultados.
              </p>
              <p>
                No se garantizan resultados específicos ni tiempos determinados para ver cambios.
                Las descripciones de rutinas y expectativas son orientativas basadas en información
                general sobre cuidado de la piel.
              </p>

              <h3>Sobre la información proporcionada</h3>
              <p>
                La información en este sitio y en las asesorías es de carácter general y
                orientativo. No debe interpretarse como consejo médico profesional.
              </p>
              <p>
                Ante cualquier condición de la piel, alergia, irritación persistente, o duda sobre
                la idoneidad de un producto, se recomienda consultar con un dermatólogo.
              </p>

              <h3>Sobre los productos</h3>
              <p>
                Los productos recomendados pertenecen a marcas de terceros. {SITE_CONFIG.author} no
                es fabricante ni tiene control sobre la formulación, calidad o disponibilidad de
                los productos.
              </p>
              <p>
                Las compras se realizan directamente en el portal autorizado de la marca, que tiene
                sus propios términos y condiciones, políticas de devolución y garantías.
              </p>

              {/* Relación con Nu Skin */}
              <h2>Relación con Nu Skin</h2>
              <p>
                {SITE_CONFIG.author} es distribuidora independiente de productos Nu Skin. Este
                sitio web es personal y no representa ni está afiliado oficialmente con Nu Skin
                Enterprises, Inc.
              </p>
              <p>
                Las marcas comerciales mencionadas pertenecen a sus respectivos propietarios. El
                uso del nombre &ldquo;Nu Skin&rdquo; en este sitio es únicamente para identificar
                los productos que se comercializan a través del portal autorizado.
              </p>

              {/* Privacidad */}
              <h2>Política de privacidad</h2>
              <h3>Datos que recopilamos</h3>
              <p>
                A través del formulario de diagnóstico, recopilamos información que nos
                proporcionás voluntariamente:
              </p>
              <ul>
                <li>Nombre y apellido</li>
                <li>Número de WhatsApp</li>
                <li>Ubicación (ciudad/provincia)</li>
                <li>Información sobre tu piel (tipo, sensibilidad, objetivos)</li>
                <li>Información sobre rutinas actuales y alergias (opcional)</li>
              </ul>

              <h3>Uso de los datos</h3>
              <p>Usamos esta información exclusivamente para:</p>
              <ul>
                <li>Contactarte y brindarte asesoría personalizada</li>
                <li>Preparar recomendaciones de rutinas adaptadas a tus necesidades</li>
                <li>Hacer seguimiento de tu proceso</li>
              </ul>

              <h3>Compartición de datos</h3>
              <p>
                <strong>No compartimos</strong> tu información personal con terceros para fines de
                marketing ni la vendemos.
              </p>
              <p>
                Los datos del formulario pueden almacenarse en servicios de terceros (como Google
                Sheets) con fines de organización interna únicamente.
              </p>

              <h3>Retención de datos</h3>
              <p>
                Conservamos tu información mientras sea necesaria para brindarte el servicio. Podés
                solicitar la eliminación de tus datos en cualquier momento contactándome por
                WhatsApp.
              </p>

              {/* Cookies */}
              <h2>Cookies y tecnologías similares</h2>
              <p>Este sitio puede usar cookies técnicas necesarias para su funcionamiento, como:</p>
              <ul>
                <li>Cookies de sesión para recordar preferencias</li>
                <li>Cookies de análisis (si están habilitadas) para entender el uso del sitio</li>
              </ul>
              <p>
                No usamos cookies para rastrear tu actividad en otros sitios ni para publicidad
                dirigida.
              </p>

              {/* Cambios */}
              <h2>Cambios a esta política</h2>
              <p>
                Podemos actualizar esta información legal ocasionalmente. Los cambios se publicarán
                en esta página con la fecha de última actualización.
              </p>

              {/* Contacto */}
              <h2>Contacto</h2>
              <p>
                Si tenés preguntas sobre esta información legal o querés ejercer tus derechos sobre
                tus datos personales, contactame por{' '}
                <Link href="/contacto" className="text-primary-600 hover:text-primary-700">
                  WhatsApp
                </Link>
                .
              </p>

              {/* Fecha */}
              <p className="mt-8 text-sm text-neutral-500">
                Última actualización: Enero 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
