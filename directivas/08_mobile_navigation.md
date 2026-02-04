# DIRECTIVA: [MOBILE_NAVIGATION]

> **ID:** 08_mobile_navigation
> **Script Asociado:** No requiere script (edición directa de código)
> **Estado:** ACTIVO

---

## 1. Objetivos y Alcance
Implementar un menú de navegación móvil funcional que se muestre en dispositivos móviles.
- **Objetivo Principal:** Agregar un drawer/menú móvil que se despliegue cuando el usuario toque el botón hamburguesa.
- **Criterio de Éxito:** Navegación completamente funcional en dispositivos móviles (<768px).

## 2. Problema Identificado

### Estado Actual
- El botón de menú móvil existe y toglea el estado `mobileMenuOpen`
- Pero no hay un menú móvil que se muestre cuando `mobileMenuOpen` es `true`
- En móvil, el `nav-links` está oculto (CSS: `display: none`)
- No hay alternativa visible para navegar

## 3. Solución

### Componentes a Agregar

**1. Mobile Menu Drawer**
- Panel deslizable desde la derecha
- Muestra todos los enlaces de navegación
- Incluye botón de idioma
- Se cierra al hacer clic en un enlace

**2. Estilos CSS**
- Menú de pantalla completa en móvil
- Transición suave de entrada/salida
- Backdrop oscuro detrás del menú
- Z-index apropiado

## 4. Cambios Necesarios

### src/App.tsx
- Agregar menú móvil después del nav-container
- Incluir todos los enlaces con onClick para cerrar el menú
- Agregar backdrop

### src/index.css
- Estilos para `.mobile-menu`
- Estilos para `.mobile-menu-backdrop`
- Transiciones y animaciones

## 5. Restricciones
- Mantener funcionalidad de escritorio intacta
- Preservar i18n en menú móvil
- No romper estilos existentes
