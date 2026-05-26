# Cómo contribuir

## Agregar un nuevo programa

Todos los programas se definen en `src/app/data/programs.ts`. Solo necesitas editar ese archivo.

### 1. Encuentra el lugar correcto

Agrega el nuevo objeto al array `programs` antes de la línea `export const categories = [...]`.

### 2. Usa esta plantilla

```typescript
{
  id: 'mi-programa',                          // slug único (va en la URL)
  name: 'Mi Programa',                        // nombre visible
  developer: 'Desarrollador',                 // creador u organización
  homepage: 'https://ejemplo.com',            // sitio web oficial
  description:                                // descripción en español
    'Descripción breve del programa y qué lo hace útil.',
  category: 'image-editing',                  // ID de categoría existente
  isProprietary: false,                       // false = gratuito/开源, true = propietario
  alternatives: ['otro-programa'],            // IDs de programas similares
  images: [                                   // URLs de imágenes (Unsplash)
    'https://images.unsplash.com/photo-XXXX?w=800&q=80'
  ],
  tutorials: [                                // puede ser [] si no hay tutoriales
    {
      id: 'mi-programa-tutorial',             // ID único del tutorial
      title: 'Título del tutorial',           // en español
      content: 'Breve descripción.',          // en español
      steps: [                                // pasos en español
        'Paso 1: Haz esto',
        'Paso 2: Haz aquello'
      ]
    }
  ]
}
```

### 3. Actualiza las alternativas

Si el nuevo programa es alternativa de uno existente, agrega su `id` al array `alternatives` de ese programa. Por ejemplo, si agregaste `'mi-programa'` como alternativa a `'gimp'`, actualiza:

```typescript
{
  id: 'gimp',
  ...
  alternatives: ['krita', 'photopea', 'photoshop', 'mi-programa'],
}
```

### 4. Categorías existentes

| ID | Nombre |
|---|---|
| `image-editing` | Edición de Imágenes |
| `video-editing` | Edición de Video |
| `audio-editing` | Edición de Audio |
| `programming` | Programación |
| `graphic-design` | Diseño Gráfico |
| `3d-modeling` | Modelado 3D |
| `office` | Ofimática |
| `browsers` | Navegadores Web |
| `password-manager` | Gestión de Contraseñas |
| `communication` | Comunicación |
| `note-taking` | Toma de Notas |
| `cloud-storage` | Almacenamiento en la Nube |
| `finance` | Finanzas Personales |

### 5. (Opcional) Agregar una categoría nueva

Si ninguna categoría existente es adecuada, agrega una entrada al array `categories` al final del archivo:

```typescript
{ id: 'nueva-categoria', name: 'Nombre de Categoría' }
```

### 6. Verifica

Corre `npm run build` para asegurarte de que no hay errores de TypeScript.

---

## Reglas

- **Idioma**: todo el contenido (descripciones, tutoriales) debe estar en **español**.
- **`isProprietary`**: usa `true` solo para software que no es gratuito ni de código abierto. Estos programas no aparecen en búsquedas pero sí como alternativas.
- **`id`**: debe ser único y URL-safe (sin espacios ni caracteres especiales).
- **`alternatives`**: vincula programas que cumplan una función similar. No hace falta que sea bidireccional estricto, pero es buena práctica.

## Imágenes

Usa fotos de [Unsplash](https://unsplash.com) con el formato:
`https://images.unsplash.com/photo-XXXX?w=800&q=80`

Los programas propietarios deben tener `images: []`.
