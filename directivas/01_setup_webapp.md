# DIRECTIVA: [SETUP_WEBAPP]

> **ID:** 01_setup_webapp
> **Script Asociado:** `scripts/01_setup_webapp.py`
> **Última Actualización:** 2026-02-03
> **Estado:** ACTIVO

---

## 1. Objetivos y Alcance
Establecer la estructura base de la aplicación web para "AITANE" utilizando React, Vite y TypeScript.
- **Objetivo Principal:** Crear un entorno de desarrollo funcional sin usar `create-vite` interactivo para evitar conflictos con carpetas existentes (`directivas/`, `scripts/`).
- **Criterio de Éxito:** Ejecutar `npm run dev` levanta el servidor localmente y muestra la página de inicio básica.

## 2. Especificaciones de Entrada/Salida (I/O)

### Entradas (Inputs)
- **Logo:** `C:/Users/benja/.gemini/antigravity/brain/15f7d8b5-1840-465c-88ae-2938289acf74/uploaded_media_1770103705705.png` (Debe ser copiado a `public/logo.png`).
- **Configuración Visual:**
  - Tipografía: Montserrat.
  - Colores: Navy Blue (#0A192F - Estimado, ajustar luego), White (#FFFFFF).

### Salidas (Outputs)
- **Archivos Estructurales:**
  - `package.json`, `tsconfig.json`, `vite.config.ts`, `index.html`.
  - Carpeta `src/` con `main.tsx`, `App.tsx`, `index.css`.
  - Carpeta `public/` con el logo.

## 3. Flujo Lógico (Algoritmo)

1.  **Validación:** Comprobar si existen `package.json` para evitar sobrescritura accidental destructiva.
2.  **Generación de Configuración:** Escribir archivos de configuración (`package.json`, `vite.config.ts`, `tsconfig.json`) con las dependencias necesarias.
3.  **Generación de Estructura:** Crear directorios `src` y `public`.
4.  **Generación de Código Base:** Escribir `src/main.tsx`, `src/App.tsx` (con estructura básica Hero/About/Services), y `src/index.css` (importando Montserrat).
5.  **Gestión de Assets:** Copiar el archivo del logo desde la ruta de entrada a `public/logo.png`.
6.  **Instalación:** Ejecutar `npm install` automáticamente.

## 4. Herramientas y Librerías
- **Stack:** React, TypeScript, Vite.
- **Estilos:** CSS Vanilla (Variables CSS para tema).
- **Iconos:** `lucide-react` (para iconos de servicios).

## 5. Restricciones y Casos Borde
- **Directorio No Vacío:** El script debe convivir con `directivas/` y `scripts/`. No debe borrar estos directorios.
- **Permisos:** Asegurar acceso de escritura para `package.json`.

## 6. Protocolo de Errores y Aprendizajes
(Pendiente de primera ejecución)
