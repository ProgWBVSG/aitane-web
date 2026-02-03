# DIRECTIVA: [TYPESCRIPT_BUILD_FIX]

> **ID:** 07_typescript_build_fix
> **Script Asociado:** `scripts/07_typescript_build_fix.py`
> **Estado:** ACTIVO

---

## 1. Objetivos y Alcance
Corregir error de TypeScript en tiempo de build para permitir deployment en Vercel.
- **Objetivo Principal:** Solucionar el error TS7053 en `src/App.tsx` línea 146.
- **Criterio de Éxito:** El comando `npm run build` se ejecuta sin errores.

## 2. Problema Identificado

### Error
```
Element implicitly has an 'any' type because expression of type 'string' 
can't be used to index type '{ en: {...}, es: {...} }'
```

### Causa
En la línea 140, `lang` está tipado como `string`:
```typescript
const [lang, setLang] = useState('en');
```

En la línea 146, TypeScript no puede inferir que `translations[lang]` es válido porque `lang` es de tipo `string`, no `'en' | 'es'`.

## 3. Solución

Cambiar el tipo de `lang` de `string` a `'en' | 'es'`:

```typescript
const [lang, setLang] = useState<'en' | 'es'>('en');
```

Esto permite a TypeScript entender que `lang` solo puede ser `'en'` o `'es'`, y por lo tanto, `translations[lang]` es un acceso válido.

## 4. Flujo de Implementación
1. Modificar línea 140 en `src/App.tsx`
2. Verificar que no hay otros errores de tipo
3. Ejecutar `npm run build` para validar
4. Commit y push a GitHub

## 5. Restricciones
- No cambiar la estructura de `translations`
- Mantener toda la funcionalidad existente
- No agregar dependencias adicionales
