# Open Mapper

Open Mapper es una aplicación web para descubrir alternativas gratuitas y de código abierto a software propietario popular. Explorá programas por categoría, compará alternativas y seguí tutoriales paso a paso.

---

## Programas disponibles

Actualmente hay **42 programas** organizados en **14 categorías**:

| Categoría | Programas |
|---|---|
| Edición de Imágenes | GIMP, Krita, Photopea, Photoshop† |
| Edición de Video | DaVinci Resolve, Kdenlive, Shotcut, Premiere Pro† |
| Edición de Audio | Audacity, Ardour, Ocenaudio |
| Programación | VS Code, VSCodium, Atom |
| Diseño Gráfico | Canva, Inkscape, Figma |
| Modelado 3D | Blender, FreeCAD, Maya†, 3ds Max†, Fusion 360† |
| Ofimática | LibreOffice, OnlyOffice, Microsoft Office† |
| Navegadores Web | Firefox, Brave, Google Chrome† |
| Gestión de Contraseñas | Bitwarden, KeePassXC, 1Password† |
| Comunicación | Element, Discord†, Slack† |
| Toma de Notas | Logseq, Obsidian, Notion† |
| Almacenamiento en la Nube | Nextcloud, Syncthing, Google Drive† |
| Finanzas Personales | GnuCash, Actual Budget, YNAB† |

† Software propietario (mostrado solo como alternativa, no aparece en búsquedas)

### Estructura de datos

Cada programa se define con esta interfaz en `src/app/data/programs.ts`:

```typescript
interface Program {
  id: string              // Identificador único (slug)
  name: string            // Nombre visible
  developer: string       // Desarrollador/organización
  homepage: string        // Sitio web oficial
  description: string     // Descripción en español
  category: string        // ID de categoría
  isProprietary: boolean  // true = se oculta de búsquedas
  alternatives?: string[] // IDs de programas alternativos
  images: string[]        // URLs de imágenes Unsplash
  tutorials: Tutorial[]   // Tutoriales paso a paso
  scoopName?: string      // Nombre del paquete en Scoop
  scoopBucket?: Bucket    // Bucket de Scoop ('main' | 'extras')
}
```

---

## Cómo agregar un programa

1. Abrí `src/app/data/programs.ts`
2. Agregá un nuevo objeto al array `programs` siguiendo el formato existente
3. Si el programa es la alternativa de otro existente, actualizá el array `alternatives` de ese programa
4. Si la categoría no existe, agregala al array `categories` al final del archivo

Ver [`CONTRIBUTING.md`](./CONTRIBUTING.md) para instrucciones detalladas.

---

## Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```