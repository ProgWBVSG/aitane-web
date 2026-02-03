# DIRECTIVA: [PREMIUM_REDESIGN]

> **ID:** 03_premium_redesign
> **Script Asociado:** `scripts/03_premium_redesign.py`
> **Estado:** ACTIVO

---

## 1. Objetivos y Alcance
Elevar la estética del sitio web a un nivel "Premium/Enterprise" (estilo Stripe / Linear / SaaS de alto nivel).
- **Objetivo Principal:** Transformar el diseño actual en una interfaz visualmente impactante que transmita autoridad y alto valor.
- **Criterio de Éxito:** Implementación de gradientes sutiles, glassmorphism, tipografía refinada, animaciones de entrada y componentes UI de alta fidelidad.

## 2. Especificaciones de Diseño
- **Paleta de Colores Refinada:**
  - *Primary:* Deep Navy (`#020c1b`) -> Fondo principal.
  - *Secondary:* Navy Lighter (`#0a192f`) -> Cards/Secciones.
  - *Accent:* Electric Cyan (`#64ffda`) -> CTAs principales, highlights.
  - *Text:* Slate variados (`#8892b0`, `#ccd6f6`).
- **Tipografía:**
  - `Montserrat` con pesos variados (300 light para cuerpo, 700/900 para títulos).
- **Efectos Visuales:**
  - **Glassmorphism:** Fondos semitransparentes con `backdrop-filter: blur()`.
  - **Glows:** Sombras de color difusas para dar profundidad.
  - **Micro-interacciones:** Hover en botones y cards (uplift, glow).

## 3. Cambios Técnicos (Archivos)

### `src/index.css`
- Definir un sistema de diseño completo con variables CSS.
- Implementar utilidades para layout (flex, grid), espaciado y tipografía para limpiar el JSX.
- Añadir keyframes para animaciones (fadeInUp, float).

### `src/App.tsx`
- Reestructurar el layout para usar contenedores de ancho completo con constraints internos.
- Añadir elementos decorativos de fondo (orbes de luz, gradientes absolutos).
- Refinar/Reescribir el Hero para que sea "Massive" (Texto grande, alto impacto).
- Rediseñar las Cards de servicios y testimonios para que parezcan "cristal" o bloques tecnológicos sólidos.

## 4. Flujo Lógico del Script
1. Sobrescribir `src/index.css` con el nuevo CSS de alta gama.
2. Sobrescribir `src/App.tsx` con la nueva estructura HTML/React que aprovecha las nuevas clases y añade elementos visuales extra.

## 5. Restricciones
- No instalar librerías de UI pesadas (MUI, Chakra), mantenerlo ligero con CSS puro.
- Mantener la funcionalidad de los links y el formulario.
