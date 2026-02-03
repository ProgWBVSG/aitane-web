# DIRECTIVA: [COMPLETE_REDESIGN]

> **ID:** 05_complete_redesign
> **Script Asociado:** `scripts/05_complete_redesign.py`
> **Estado:** ACTIVO

---

## 1. Objetivos y Alcance
Rediseño completo de la página web AITANE con un enfoque moderno, limpio y profesional estilo SaaS.
- **Objetivo Principal:** Reemplazar el diseño oscuro actual con un diseño limpio, profesional y minimalista.
- **Criterio de Éxito:** Página visualmente pulida, moderna y profesional similar a las referencias (Teachable, Winamp).

## 2. Especificaciones de Diseño

### Paleta de Colores
- **Primary Navy:** #0A192F (headings, footers)
- **Accent Cyan:** #00D9FF (CTAs, highlights)
- **Accent Orange:** #FF6B35 (secondary accents)
- **White:** #FFFFFF (background base)
- **Light Gray:** #F7F9FC (section backgrounds)
- **Text Gray:** #64748B (body text)
- **Dark Text:** #1E293B (headings)

### Tipografía
- Font: Montserrat
- Headings: 700-900 weight
- Body: 400-500 weight
- Responsive sizing con clamp()

### Layout
- Fondo blanco limpio
- Secciones con espaciado generoso
- Cards con sombras sutiles
- Hover effects suaves
- Mobile-first responsive

## 3. Flujo de Implementación
1. Reescribir completamente `src/index.css` con nuevo sistema de diseño.
2. Reescribir `src/App.tsx` con nueva estructura de componentes.
3. Mantener funcionalidad i18n existente.
4. Aplicar nuevo esquema visual a todas las secciones.

## 4. Restricciones
- Mantener la funcionalidad de cambio de idioma (EN/ES).
- No romper la estructura React existente.
- Usar solo CSS vanilla (sin frameworks adicionales).
