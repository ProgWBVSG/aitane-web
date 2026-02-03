# DIRECTIVA: [FIX_NAV_AND_I18N]

> **ID:** 04_fix_nav_and_i18n
> **Script Asociado:** `scripts/04_fix_nav_and_i18n.py`
> **Estado:** ACTIVO

---

## 1. Objetivos y Alcance
Corregir el tamaño del logo en la barra de navegación y agregar un sistema de cambio de idioma funcional (Español/Inglés).
- **Objetivo Principal:** Reducir el tamaño del logo y añadir un botón toggle de idioma que cambie dinámicamente todo el contenido.
- **Criterio de Éxito:** Logo se ve proporcionado, botón de idioma funcional y todo el contenido se traduce al cambiar idioma.

## 2. Especificaciones Técnicas

### Logo Fix
- Cambiar `h-10` a `h-8` o similar para reducir el tamaño del logo.
- Eliminar `filter: invert(1) brightness(2)` si genera problemas de visualización.

### Sistema i18n
- Crear un diccionario de traducciones en el componente con todas las cadenas de texto.
- Usar `useState` para manejar el idioma actual (`'en'` o `'es'`).
- Crear un botón toggle en la navegación que alterne entre idiomas.
- Aplicar las traducciones a todos los textos del sitio (Hero, About, Services, Testimonials, Contact).

## 3. Flujo de Implementación
1. Definir el objeto `translations` con estructura `{ en: {...}, es: {...} }`.
2. Crear hook `const [lang, setLang] = useState('en')`.
3. Crear función helper `t(key)` que retorne `translations[lang][key]`.
4. Actualizar todos los textos en JSX para usar `t('key')`.
5. Añadir botón de idioma en el nav con iconos o flags.

## 4. Restricciones
- No instalar librerías externas de i18n (react-i18next), mantenerlo simple con estado local.
- Todas las traducciones deben estar completas para ambos idiomas.
