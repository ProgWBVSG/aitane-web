# DIRECTIVA: [GITHUB_SETUP]

> **ID:** 06_github_setup
> **Script Asociado:** `scripts/06_github_setup.py`
> **Estado:** ACTIVO

---

## 1. Objetivos y Alcance
Inicializar un repositorio de Git local, crear commits y preparar para subir a GitHub.
- **Objetivo Principal:** Configurar control de versiones y subir el código a GitHub.
- **Criterio de Éxito:** Repositorio creado en GitHub con todo el código subido correctamente.

## 2. Especificaciones Técnicas

### Pre-requisitos
- Git instalado en el sistema
- Cuenta de GitHub activa
- Archivo `.gitignore` configurado (ya existe)

### Flujo de Trabajo
1. Verificar que `.gitignore` incluya:
   - `node_modules/`
   - `.tmp/`
   - `.env`
   - Archivos del cerebro de Antigravity si no son relevantes
2. Inicializar repositorio local con `git init`
3. Añadir todos los archivos con `git add .`
4. Crear commit inicial con mensaje descriptivo
5. **El usuario debe crear el repositorio en GitHub manualmente**
6. Añadir remote con `git remote add origin <URL>`
7. Push a GitHub con `git push -u origin main`

## 3. Restricciones y Casos Borde
- **No incluir archivos sensibles:** `.env` debe estar en `.gitignore`
- **No incluir `node_modules/`:** Demasiado pesado, se reinstala con `npm install`
- **Carpeta `.tmp/`:** Excluir datos temporales

## 4. Protocolo de Errores
- Si git no está instalado, el script debe indicarlo claramente
- Si el usuario no ha creado el repo en GitHub, proporcionar instrucciones
