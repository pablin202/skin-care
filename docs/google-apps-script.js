/**
 * Google Apps Script para recibir leads del formulario de diagnóstico
 *
 * INSTRUCCIONES DE CONFIGURACIÓN:
 *
 * 1. Crear una nueva hoja de cálculo en Google Sheets
 * 2. Nombrar la primera hoja "Leads" (o modificar SHEET_NAME abajo)
 * 3. Agregar los siguientes encabezados en la fila 1:
 *    Timestamp | Nombre | Apellido | WhatsApp | Ciudad | Edad | Tipo de Piel | Sensibilidad | Objetivo | Presupuesto | Rutina Actual | Alergias
 *
 * 4. Ir a Extensiones > Apps Script
 * 5. Pegar este código
 * 6. Guardar el proyecto (darle un nombre)
 * 7. Desplegar > Nueva implementación
 *    - Tipo: Aplicación web
 *    - Ejecutar como: Yo (tu cuenta)
 *    - Acceso: Cualquier usuario
 * 8. Copiar la URL del despliegue
 * 9. Pegar la URL en la variable GOOGLE_SHEETS_WEBHOOK_URL de tu .env
 *
 * NOTA: La primera vez que alguien envíe un formulario, Google pedirá autorización.
 */

// Configuración
const SHEET_NAME = 'Leads';

/**
 * Maneja las solicitudes POST del formulario
 */
function doPost(e) {
  try {
    // Parsear los datos JSON
    const data = JSON.parse(e.postData.contents);

    // Obtener la hoja de cálculo
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error(`No se encontró la hoja "${SHEET_NAME}"`);
    }

    // Preparar la fila de datos
    const row = [
      data.timestamp || new Date().toISOString(),
      data.nombre || '',
      data.apellido || '',
      data.whatsapp || '',
      data.ciudad || '',
      data.edad || '',
      data.tipoPiel || '',
      data.sensibilidad || '',
      data.objetivo || '',
      data.presupuesto || '',
      data.rutinaActual || '',
      data.alergias || ''
    ];

    // Agregar la fila al final de la hoja
    sheet.appendRow(row);

    // Responder con éxito
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, message: 'Lead guardado correctamente' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log del error para debugging
    console.error('Error procesando lead:', error);

    // Responder con error
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Maneja las solicitudes GET (para testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      ok: true,
      message: 'El endpoint está funcionando. Envía una solicitud POST para guardar leads.'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Función de prueba para verificar la configuración
 * Ejecutar desde el editor de Apps Script para probar
 */
function testSetup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    console.log(`ERROR: No existe la hoja "${SHEET_NAME}". Créala primero.`);
    return;
  }

  // Verificar encabezados
  const headers = sheet.getRange(1, 1, 1, 12).getValues()[0];
  console.log('Encabezados actuales:', headers);

  // Si la primera celda está vacía, agregar encabezados
  if (!headers[0]) {
    const expectedHeaders = [
      'Timestamp',
      'Nombre',
      'Apellido',
      'WhatsApp',
      'Ciudad',
      'Edad',
      'Tipo de Piel',
      'Sensibilidad',
      'Objetivo',
      'Presupuesto',
      'Rutina Actual',
      'Alergias'
    ];
    sheet.getRange(1, 1, 1, expectedHeaders.length).setValues([expectedHeaders]);
    console.log('Encabezados agregados correctamente');
  } else {
    console.log('Los encabezados ya existen');
  }

  console.log('Configuración completada. El script está listo para recibir leads.');
}

/**
 * Función para enviar un lead de prueba
 */
function testSendLead() {
  const testData = {
    timestamp: new Date().toISOString(),
    nombre: 'Test',
    apellido: 'Usuario',
    whatsapp: '11 1234-5678',
    ciudad: 'Buenos Aires',
    edad: '55-64',
    tipoPiel: 'mixta',
    sensibilidad: 'no',
    objetivo: 'manchas',
    presupuesto: 'intermedio',
    rutinaActual: 'Crema hidratante genérica',
    alergias: 'Ninguna conocida'
  };

  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };

  const result = doPost(e);
  console.log('Resultado:', result.getContent());
}
