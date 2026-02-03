# Inicialización de Archivos del Proyecto - Directiva

## Objetivo
Crear los archivos base necesarios para el funcionamiento del sistema agentico y buenas prácticas de desarrollo.

## Entradas (Inputs)
- Ninguna.

## Salidas (Outputs)
- `c:/Users/benja/OneDrive/Desktop/Aitane Web/.gitignore`
- `c:/Users/benja/OneDrive/Desktop/Aitane Web/.env`
- `c:/Users/benja/OneDrive/Desktop/Aitane Web/requirements.txt`

## Lógica de Ejecución (Paso a Paso)
1. Definir el contenido de `.gitignore`:
    - Ignorar `.tmp/`, `__pycache__/`, `.env`, `.DS_Store`.
2. Definir el contenido de `.env`:
    - Archivo vacío o con comentarios de ejemplo.
3. Definir el contenido de `requirements.txt`:
    - Inicialmente vacío o con librerías estándar si se detectan necesarias (por ahora vacío).
4. Escribir los archivos en la raíz del proyecto si no existen.

## Restricciones y Casos Borde (La Memoria)
- [ ] **Alerta:** No sobreescribir archivos si ya existen con contenido útil. Verificar existencia.
