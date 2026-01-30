# Daniela Stecco — Cuidado de la Piel

Sitio web "puente" profesional para asesoría de skincare. Orientado a captar leads, educar sobre cuidado de la piel, y redirigir a WhatsApp y al portal oficial de compra.

## Características

- **Next.js 14** con App Router
- **TypeScript** para tipado estricto
- **Tailwind CSS** para estilos
- Diseño responsive y accesible
- Formulario de diagnóstico con validación
- Integración con Google Sheets para almacenar leads
- Botón flotante de WhatsApp contextual
- SEO optimizado (metadata, sitemap, robots.txt)
- Rate limiting y protección anti-spam (honeypot)

## Páginas incluidas

- **Home** (`/`) - Hero, beneficios, cómo funciona, problemas frecuentes
- **Cómo funciona** (`/como-funciona`) - Proceso de asesoría paso a paso
- **Diagnóstico** (`/diagnostico`) - Formulario para recopilar información
- **Rutinas** (`/rutinas`) - Índice de rutinas por problema
  - `/rutinas/manchas` - Manchas y tono desparejo
  - `/rutinas/sequedad` - Piel seca o deshidratada
  - `/rutinas/textura` - Líneas finas y textura irregular
  - `/rutinas/sensible` - Piel sensible o reactiva
- **Cómo comprar** (`/como-comprar`) - Guía de compra y FAQ
- **Testimonios** (`/testimonios`) - Experiencias de clientas
- **Contacto** (`/contacto`) - Información de contacto y WhatsApp
- **Legal** (`/legal`) - Términos, privacidad y disclaimers

## Requisitos

- Node.js 18.17 o superior
- npm 9 o superior

## Instalación

1. Clonar el repositorio:

```bash
git clone <url-del-repo>
cd daniela-stecco-skincare
```

2. Instalar dependencias:

```bash
npm install
```

3. Copiar el archivo de ejemplo de variables de entorno:

```bash
cp .env.example .env.local
```

4. Configurar las variables de entorno en `.env.local` (ver sección siguiente)

5. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

6. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## Variables de entorno

Crear un archivo `.env.local` con las siguientes variables:

```env
# WhatsApp - Número en formato E.164 sin el símbolo + (ej: 5491112345678)
NEXT_PUBLIC_WHATSAPP_PHONE=5491112345678

# URL del portal oficial de Nu Skin de Daniela
NEXT_PUBLIC_NUSKIN_PORTAL_URL=https://www.nuskin.com/content/nuskin/es_AR/home.html

# URL del sitio (para SEO y Open Graph)
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com

# Google Sheets Webhook URL (Apps Script deployment URL)
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXXXX/exec
```

### Sobre el número de WhatsApp

El número debe estar en formato E.164 **sin el símbolo +**:
- Argentina: `5491112345678` (54 = código país, 9 = móvil, 11 = área, resto = número)

## Configurar Google Sheets para leads

Para almacenar los leads del formulario en Google Sheets:

### 1. Crear la hoja de cálculo

1. Ir a [Google Sheets](https://sheets.google.com) y crear una nueva hoja
2. Nombrar la primera hoja "Leads"
3. Agregar los siguientes encabezados en la fila 1:

```
Timestamp | Nombre | Apellido | WhatsApp | Ciudad | Edad | Tipo de Piel | Sensibilidad | Objetivo | Presupuesto | Rutina Actual | Alergias
```

### 2. Crear el Apps Script

1. En la hoja de cálculo, ir a **Extensiones > Apps Script**
2. Borrar el código de ejemplo
3. Copiar y pegar el código de `docs/google-apps-script.js`
4. Guardar el proyecto (Ctrl+S o Cmd+S)

### 3. Desplegar como aplicación web

1. Click en **Desplegar > Nueva implementación**
2. Click en el engranaje y seleccionar **Aplicación web**
3. Configurar:
   - **Descripción**: "Webhook para leads"
   - **Ejecutar como**: Tu cuenta de Google
   - **Quién tiene acceso**: Cualquier usuario
4. Click en **Implementar**
5. **Copiar la URL** del despliegue (formato: `https://script.google.com/macros/s/XXXX/exec`)

### 4. Configurar la variable de entorno

Pegar la URL copiada en el archivo `.env.local`:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec
```

### 5. Probar

1. Enviar un formulario de prueba desde el sitio
2. Verificar que los datos aparezcan en la hoja de cálculo

## Scripts disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm run start

# Linting
npm run lint
npm run lint:fix

# Formateo de código
npm run format
npm run format:check
```

## Deploy en Vercel

### Opción 1: Desde GitHub

1. Subir el código a un repositorio de GitHub
2. Ir a [Vercel](https://vercel.com)
3. Click en "Import Project"
4. Seleccionar el repositorio
5. Configurar las variables de entorno en la sección "Environment Variables"
6. Click en "Deploy"

### Opción 2: Usando Vercel CLI

1. Instalar Vercel CLI:

```bash
npm i -g vercel
```

2. Desde la carpeta del proyecto:

```bash
vercel
```

3. Seguir las instrucciones para:
   - Vincular el proyecto
   - Configurar las variables de entorno
   - Desplegar

### Variables de entorno en Vercel

En el dashboard de Vercel, ir a **Settings > Environment Variables** y agregar:

- `NEXT_PUBLIC_WHATSAPP_PHONE`
- `NEXT_PUBLIC_NUSKIN_PORTAL_URL`
- `NEXT_PUBLIC_SITE_URL`
- `GOOGLE_SHEETS_WEBHOOK_URL`

## Estructura del proyecto

```
├── docs/
│   └── google-apps-script.js    # Script para Google Sheets
├── src/
│   ├── app/                     # Páginas (App Router)
│   │   ├── api/
│   │   │   └── lead/           # API endpoint para leads
│   │   ├── como-comprar/
│   │   ├── como-funciona/
│   │   ├── contacto/
│   │   ├── diagnostico/
│   │   ├── legal/
│   │   ├── rutinas/
│   │   │   ├── manchas/
│   │   │   ├── sensible/
│   │   │   ├── sequedad/
│   │   │   └── textura/
│   │   └── testimonios/
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, WhatsAppButton
│   │   ├── sections/           # Hero, Benefits, etc.
│   │   └── ui/                 # Button, Card, Accordion, Alert
│   ├── data/
│   │   ├── routines.ts         # Datos de las rutinas
│   │   └── testimonials.ts     # Datos de testimonios
│   ├── lib/
│   │   ├── constants.ts        # Configuración y constantes
│   │   └── utils.ts            # Funciones utilitarias
│   └── types/
│       └── index.ts            # Tipos TypeScript y schemas
├── .env.example                 # Ejemplo de variables de entorno
├── tailwind.config.ts          # Configuración de Tailwind
└── tsconfig.json               # Configuración de TypeScript
```

## Personalización

### Cambiar colores

Los colores principales se definen en `tailwind.config.ts` bajo `theme.extend.colors.primary`. El color actual es un tono terracota/durazno.

### Agregar testimonios reales

Editar `src/data/testimonials.ts` y reemplazar los placeholders con testimonios reales:

```typescript
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María García',
    age: '58 años',
    location: 'Buenos Aires',
    quote: 'El testimonio real aquí...',
    problem: 'Manchas',
    isPlaceholder: false,  // Cambiar a false
  },
  // ...más testimonios
];
```

### Modificar contenido de rutinas

El contenido de las rutinas está en `src/data/routines.ts`. Cada rutina tiene:
- Señales típicas
- Pasos AM/PM
- Expectativas por período
- Errores comunes
- Productos sugeridos

### Agregar nuevos productos

Los productos en las rutinas son genéricos a propósito. Modificar el campo `suggestedProducts` en cada rutina para ser más específicos si es necesario.

## Notas legales

Este sitio está diseñado para cumplir con buenas prácticas:

- No hace claims médicos ni promesas de resultados
- Incluye disclaimers claros
- No se presenta como sitio oficial de Nu Skin
- Indica que la asesoría es orientativa y no reemplaza consulta médica
- Los testimonios son opcionales y se marcan como placeholders si no hay reales

## Soporte

Para reportar problemas o sugerir mejoras, crear un issue en el repositorio.

---

Desarrollado con Next.js, TypeScript y Tailwind CSS.
