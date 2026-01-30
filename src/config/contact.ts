/**
 * Configuración centralizada de contacto
 * Email como canal secundario, WhatsApp sigue siendo primario
 */
export const CONTACT = {
  email: 'hola@danielastecco.com',
  emailSubject: 'Consulta cuidado de la piel',
  whatsappMessage: 'Hola Daniela, quiero asesoría de cuidado de la piel.',
};

/**
 * Genera el mailto link con subject pre-armado
 */
export function getMailtoUrl(subject?: string): string {
  const emailSubject = encodeURIComponent(subject || CONTACT.emailSubject);
  return `mailto:${CONTACT.email}?subject=${emailSubject}`;
}
