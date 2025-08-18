# 💊 Botifarma — E‑Commerce Frontend (Technical Challenge)

**Stack:** Next.js 15 • TypeScript • TailwindCSS v4 • shadcn/ui • Yarn v1  
**Objetivo:** Implementar la interfaz de un e‑commerce de farmacia online con buenas prácticas modernas, datos mockeados al inicio y preparada para integrarse luego con servicios reales.

> Nota: La estructura de carpetas del repo puede ser más amplia/avanzada que el esquema ilustrativo de este README (el proyecto real es “más complejo”). Este documento explica la intención, decisiones y cómo correr/validar el challenge.

---

## 🚀 Objetivos del ejercicio

1) **Diseño visual moderno y limpio (UI/UX)**  
2) **Componentes bien estructurados** y reutilizables  
3) **Interactividad y filtrado avanzado**  
4) **Responsive** (desktop y mobile)  
5) Preparación para **SSR/ISR**, **Server Components** y **Suspense** con datos mock

**Vistas principales**

- **Home** (listado de productos, banners y categorías)  
  - **Detalle de Producto**  
  - **Detalle de Categoría**

**Diseño (Figma)**  
- https://www.figma.com/design/W8AWepfho1ZJ4zUxlFBf58/Botifarma-Dev?node-id=0-1&m=dev

**Mock Data**  
- Los `.json` residen en `./constants/` (p.ej. `products.json`, `categories.json`, `provinces.json`).

---

## 🧱 Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **TailwindCSS v4**
- **shadcn/ui** (biblioteca de componentes accesibles y estilables)
- **Yarn v1** (gestor de paquetes)
- **next/image** para optimización de imágenes
- **Metadata dinámica** de Next para SEO
- **ISR** (Incremental Static Regeneration) para Home y Categorías
- **Server Components + Suspense** para carga eficiente

---

## 🔧 Requisitos

- **Node.js 18+** (recomendado LTS)
- **Yarn v1** (Classic): https://classic.yarnpkg.com/
- No se requieren variables de entorno para el modo mock (sin backend real)

---

## ▶️ Cómo ejecutar

Instalación de dependencias (Yarn v1):
```bash
yarn install
```

Desarrollo (Turbopack dev server):
```bash
yarn dev
# http://localhost:3000
```

Build de producción:
```bash
yarn build
```

Ejecutar build:
```bash
yarn start
# Servirá el build .next/ en modo producción
```

Lint (si aplica en el repo):
```bash
yarn lint
```

> **Nota sobre Yarn**: Este proyecto está pensado para **Yarn v1**. Si usas Yarn moderno (Berry), puedes mantenerlo por‑proyecto; sin embargo, la configuración por defecto aquí es Classic para máxima compatibilidad.

---

## 🗂️ Estructura (alto nivel, orientativa)

> La estructura real del repositorio puede incluir más carpetas utilitarias (hooks, lib, tests, etc.).

```
src/
  app/
    layout.tsx              # Layout raíz (Theme, Providers, fuentes, etc.)
    page.tsx                # Home (SSR/ISR)
    category/
      [slug]/page.tsx       # Detalle de categoría (SSR/ISR)
    product/
      [slug]/page.tsx       # Detalle de producto (SSR/SEO)
  components/
    header/                 # Header + selección de provincia + categorías + buscador + avatar
    banners/                # Banner responsive (desktop/mobile) e InformationBanner
    cards/                  # CategoryCard, ProductCard, etc.
    ui/                     # Componentes de shadcn/ui
  constants/
    products.json
    categories.json
    provinces.json
  lib/
    api/                    # Mocks que devuelven Promises (para SSR)
    seo/                    # Helpers de metadata dinámica
    utils/                  # Helpers (formato de precios, filtros, etc.)
public/
  # assets estáticos si aplica
```

---

## 📦 Datos y Servicios (mock)

- **Origen de datos**: archivos JSON en `constants/`.
- **Servicios**: funciones asíncronas que envuelven los mocks en **Promises** (simulan llamadas remotas).  
  Esto permite cumplir con **SSR** y luego reemplazar por fetchs reales sin tocar las páginas.

Ejemplo (simplificado):
```ts
// lib/api/products.ts
export async function getProducts(): Promise<Product[]> {
  const data = await import("@/constants/products.json");
  // Simulación de delay/red para Suspense/SSR si se requiere:
  // await new Promise(r => setTimeout(r, 200));
  return data.default;
}
```

---

## 🖼️ UI/UX y Tema

- **Tema claro** con colores suaves, bordes redondeados y sombras ligeras.  
- **Tailwind** para layout/espaciados y **shadcn/ui** para componentes accesibles.
- **Color primario configurable**: el diseño permite ajustar el color base (via CSS vars o theme tokens).

**Componentes clave**
- **Header**: selector de **Provincia**, listado de **Categorías**, **Buscador global**, **Avatar**.
- **Banner**: soporta **desktop y mobile** (imágenes alternativas).
- **Category Card** y **Product Card**.
- **Information Banner** (promos, avisos).
- **Sección de Productos**: admite conjunto **random o definido** desde `products.json` y **mantiene orden estable** cuando así se indique.

---

## ⚙️ SSR/ISR/SEO/Imágenes

- **SSR**: Las páginas principales se renderizan en el servidor usando Server Components.  
- **Suspense**: Carga de datos con Promises para mejorar TTFB y UX.
- **ISR**: Home y Categorías con `revalidate` para regeneración automática.  
  > Ej.: `export const revalidate = 60; // re‑generar cada 60s`
- **SEO**: Metadatos dinámicos con `generateMetadata` (títulos/OG por categoría/producto).  
- **Rutas amigables**: `[slug]` para productos/categorías.
- **next/image**: Optimización (formatos, tamaños, prioridad en hero).

---

## 🧪 Calidad y Performance

- **Lighthouse/PageSpeed**: se optimiza LCP con imágenes responsivas, carga diferida y CSS mínimo.
- **Accesibilidad**: roles/labels adecuados, foco visible en elementos interactivos.
- **Bundle**: componentes de shadcn importados de forma granular.

---

## 🔍 Troubleshooting

- **TailwindCSS v4**: requiere configuración de `content` adecuada y uso de clases utilitarias actualizadas.
- **Yarn v1**: si utilizas Yarn 4 global, no hay problema; este repo funciona con Classic.  
- **Imágenes**: si utilizas dominios externos, recuerda configurar `next.config.js` (`images.domains`).

---

## 👩‍🎨 Diseño

- Figma: https://www.figma.com/design/W8AWepfho1ZJ4zUxlFBf58/Botifarma-Dev?node-id=0-1&m=dev

---

## 📄 Licencia

Este repositorio se entrega como parte de un **Technical Challenge**. Su uso está limitado a evaluación/demostración técnica.
