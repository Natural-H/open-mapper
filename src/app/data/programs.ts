export type Bucket = 'main' | 'extras'

export interface Program {
  id: string
  name: string
  developer: string
  homepage: string
  description: string
  category: string
  isProprietary: boolean
  alternatives?: string[] // IDs of alternative programs
  images: string[]
  tutorials: Tutorial[]
  scoopName?: string
  scoopBucket?: Bucket
}

export interface Tutorial {
  id: string
  title: string
  content: string
  steps: string[]
}

export const programs: Program[] = [
  {
    id: 'gimp',
    name: 'GIMP',
    developer: 'The GIMP Development Team',
    homepage: 'https://www.gimp.org',
    description:
      'GIMP (GNU Image Manipulation Program) es un editor de imágenes gratuito y de código abierto. Ofrece herramientas avanzadas de retoque fotográfico, composición y creación de imágenes.',
    category: 'image-editing',
    isProprietary: false,
    alternatives: ['krita', 'photopea', 'photoshop'],
    scoopBucket: 'extras',
    scoopName: 'gimp',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'gimp-basic-editing',
        title: 'Edición básica de imágenes',
        content: 'Aprende a realizar ediciones básicas en GIMP',
        steps: [
          'Abre GIMP y carga tu imagen (Archivo > Abrir)',
          'Usa la herramienta de recorte para ajustar el tamaño',
          'Ajusta brillo y contraste (Colores > Brillo-Contraste)',
          'Guarda tu imagen editada (Archivo > Exportar como)'
        ]
      },
      {
        id: 'gimp-layers',
        title: 'Trabajar con capas',
        content: 'Las capas te permiten trabajar de forma no destructiva',
        steps: [
          'Abre el panel de capas (Ventanas > Paneles empotrables > Capas)',
          'Crea una nueva capa (Capa > Nueva capa)',
          'Reorganiza capas arrastrándolas',
          'Ajusta la opacidad de cada capa según necesites'
        ]
      }
    ]
  },
  {
    id: 'krita',
    name: 'Krita',
    developer: 'Krita Foundation',
    homepage: 'https://krita.org',
    description:
      'Krita es un programa profesional de pintura digital gratuito y de código abierto. Diseñado por artistas para artistas, ofrece herramientas avanzadas para ilustración, concept art y texturizado.',
    category: 'image-editing',
    isProprietary: false,
    alternatives: ['gimp', 'photopea', 'illustrator'],
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'krita-brushes',
        title: 'Uso de pinceles',
        content: 'Domina los pinceles de Krita para crear arte digital',
        steps: [
          'Selecciona la herramienta Pincel (B)',
          'Explora los presets de pinceles en el panel derecho',
          'Ajusta el tamaño con [ y ]',
          'Experimenta con diferentes modos de fusión'
        ]
      }
    ]
  },
  {
    id: 'photopea',
    name: 'Photopea',
    developer: 'Ivan Kutskir',
    homepage: 'https://www.photopea.com',
    description:
      'Photopea es un editor de imágenes online gratuito que funciona en el navegador. Compatible con formatos PSD, XCF, Sketch y más, ofrece una interfaz similar a Photoshop.',
    category: 'image-editing',
    isProprietary: false,
    alternatives: ['gimp', 'krita'],
    images: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'photopea-online',
        title: 'Primeros pasos en Photopea',
        content: 'Comienza a editar imágenes sin instalar nada',
        steps: [
          'Visita photopea.com en tu navegador',
          'Arrastra una imagen o crea un nuevo proyecto',
          'Usa las herramientas del panel izquierdo',
          'Exporta tu trabajo (Archivo > Exportar como)'
        ]
      }
    ]
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    developer: 'Adobe Inc.',
    homepage: 'https://www.adobe.com/products/photoshop.html',
    description:
      'Adobe Photoshop es el software profesional líder en edición de imágenes y diseño gráfico.',
    category: 'image-editing',
    isProprietary: true,
    alternatives: ['gimp', 'krita', 'photopea'],
    images: [],
    tutorials: []
  },
  {
    id: 'davinci-resolve',
    name: 'DaVinci Resolve',
    developer: 'Blackmagic Design',
    homepage: 'https://www.blackmagicdesign.com/products/davinciresolve',
    description:
      'DaVinci Resolve es un software profesional de edición de video, corrección de color, postproducción de audio y efectos visuales. La versión gratuita ofrece características de nivel profesional.',
    category: 'video-editing',
    isProprietary: false,
    alternatives: ['kdenlive', 'shotcut'],
    images: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
      'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'davinci-basic-editing',
        title: 'Edición básica de video',
        content: 'Aprende los fundamentos de edición en DaVinci Resolve',
        steps: [
          'Crea un nuevo proyecto y configura la resolución',
          'Importa tus clips de video (Media Pool)',
          'Arrastra clips a la línea de tiempo',
          'Usa la herramienta de corte (C) para editar',
          'Exporta tu video (Deliver > Add to Render Queue)'
        ]
      },
      {
        id: 'davinci-color-correction',
        title: 'Corrección de color',
        content: 'Mejora el aspecto visual de tus videos',
        steps: [
          'Cambia a la pestaña Color',
          'Selecciona un clip en la línea de tiempo',
          'Usa las ruedas de color para ajustar tonos',
          'Aplica LUTs para looks cinematográficos'
        ]
      }
    ]
  },
  {
    id: 'kdenlive',
    name: 'Kdenlive',
    developer: 'KDE Community',
    homepage: 'https://kdenlive.org',
    description:
      'Kdenlive es un editor de video de código abierto multiplataforma. Ofrece edición multipista, efectos y transiciones para crear videos profesionales.',
    category: 'video-editing',
    isProprietary: false,
    alternatives: ['davinci-resolve', 'shotcut'],
    images: [
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'kdenlive-timeline',
        title: 'Uso de la línea de tiempo',
        content: 'Organiza tus clips en la línea de tiempo',
        steps: [
          'Añade clips al proyecto',
          'Arrastra clips a las pistas de video/audio',
          'Usa las herramientas de corte (X) y selección (S)',
          'Añade transiciones entre clips'
        ]
      }
    ]
  },
  {
    id: 'shotcut',
    name: 'Shotcut',
    developer: 'Meltytech, LLC',
    homepage: 'https://shotcut.org',
    description:
      'Shotcut es un editor de video gratuito, de código abierto y multiplataforma. Soporta una amplia variedad de formatos de video sin necesidad de importar.',
    category: 'video-editing',
    isProprietary: false,
    alternatives: ['kdenlive', 'davinci-resolve'],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'shotcut-filters',
        title: 'Aplicar filtros y efectos',
        content: 'Mejora tus videos con filtros',
        steps: [
          'Selecciona un clip en la línea de tiempo',
          'Abre el panel Filtros',
          'Haz clic en + para añadir un filtro',
          'Ajusta los parámetros del filtro'
        ]
      }
    ]
  },
  {
    id: 'premiere-pro',
    name: 'Adobe Premiere Pro',
    developer: 'Adobe Inc.',
    homepage: 'https://www.adobe.com/products/premiere.html',
    description:
      'Adobe Premiere Pro es el software profesional líder en edición de video.',
    category: 'video-editing',
    isProprietary: true,
    alternatives: ['davinci-resolve', 'kdenlive', 'shotcut'],
    images: [],
    tutorials: []
  },
  {
    id: 'audacity',
    name: 'Audacity',
    developer: 'Audacity Team',
    homepage: 'https://www.audacityteam.org',
    description:
      'Audacity es un editor de audio multipista gratuito y de código abierto. Ideal para grabar, editar y mezclar audio con facilidad.',
    category: 'audio-editing',
    isProprietary: false,
    alternatives: ['ardour', 'ocenaudio'],
    images: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
      'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'audacity-recording',
        title: 'Grabar audio',
        content: 'Captura audio de calidad con Audacity',
        steps: [
          'Configura tu dispositivo de entrada (botón de micrófono)',
          'Haz clic en el botón rojo para grabar',
          'Detén la grabación con el botón cuadrado',
          'Edita y exporta (Archivo > Exportar)'
        ]
      },
      {
        id: 'audacity-noise-removal',
        title: 'Eliminar ruido de fondo',
        content: 'Limpia tus grabaciones de ruido no deseado',
        steps: [
          'Selecciona una sección con solo ruido',
          'Ve a Efecto > Reducción de ruido',
          "Haz clic en 'Obtener perfil de ruido'",
          'Selecciona todo el audio y aplica el efecto'
        ]
      }
    ]
  },
  {
    id: 'ardour',
    name: 'Ardour',
    developer: 'Paul Davis & Ardour Community',
    homepage: 'https://ardour.org',
    description:
      'Ardour es una estación de trabajo de audio digital profesional. Ofrece grabación multipista, edición y mezcla para producción musical.',
    category: 'audio-editing',
    isProprietary: false,
    alternatives: ['audacity', 'ocenaudio'],
    images: [
      'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'ardour-tracks',
        title: 'Crear y gestionar pistas',
        content: 'Organiza tu proyecto con pistas',
        steps: [
          'Haz clic derecho en el espacio de pistas',
          "Selecciona 'Añadir pista/bus'",
          'Configura el tipo y número de pistas',
          'Nombra tus pistas para mejor organización'
        ]
      }
    ]
  },
  {
    id: 'ocenaudio',
    name: 'Ocenaudio',
    developer: 'Ocenaudio Team',
    homepage: 'https://www.ocenaudio.com',
    description:
      'Ocenaudio es un editor de audio multiplataforma fácil de usar y rápido. Perfecto para edición de audio simple y efectiva.',
    category: 'audio-editing',
    isProprietary: false,
    alternatives: ['audacity', 'ardour'],
    images: [
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'ocenaudio-effects',
        title: 'Aplicar efectos en tiempo real',
        content: 'Previsualiza efectos antes de aplicarlos',
        steps: [
          'Selecciona una porción de audio',
          'Abre el panel de Efectos',
          'Elige un efecto y ajusta parámetros',
          'Escucha la previsualización en tiempo real'
        ]
      }
    ]
  },
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    developer: 'Microsoft',
    homepage: 'https://code.visualstudio.com',
    description:
      'Visual Studio Code es un editor de código fuente gratuito y altamente extensible. Soporta depuración, control de Git integrado y múltiples lenguajes de programación.',
    category: 'programming',
    isProprietary: false,
    alternatives: ['vscodium', 'atom'],
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'vscode-extensions',
        title: 'Instalar extensiones',
        content: 'Amplía las capacidades de VS Code',
        steps: [
          'Abre el panel de Extensiones (Ctrl+Shift+X)',
          'Busca la extensión que necesitas',
          'Haz clic en Instalar',
          'Recarga VS Code si es necesario'
        ]
      },
      {
        id: 'vscode-shortcuts',
        title: 'Atajos de teclado esenciales',
        content: 'Aumenta tu productividad con atajos',
        steps: [
          'Ctrl+P: Abrir archivo rápidamente',
          'Ctrl+Shift+P: Paleta de comandos',
          'Ctrl+`: Abrir terminal integrada',
          'Alt+Shift+F: Formatear documento'
        ]
      }
    ]
  },
  {
    id: 'vscodium',
    name: 'VSCodium',
    developer: 'VSCodium Community',
    homepage: 'https://vscodium.com',
    description:
      'VSCodium es Visual Studio Code sin la telemetría de Microsoft. Es completamente de código abierto y respeta tu privacidad.',
    category: 'programming',
    isProprietary: false,
    alternatives: ['vscode', 'atom'],
    images: [
      'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'vscodium-migration',
        title: 'Migrar desde VS Code',
        content: 'Transfiere tu configuración fácilmente',
        steps: [
          'Exporta tus extensiones de VS Code',
          'Copia tu configuración (settings.json)',
          'Instala VSCodium',
          'Importa extensiones y configuración'
        ]
      }
    ]
  },
  {
    id: 'atom',
    name: 'Atom',
    developer: 'GitHub (Archivado)',
    homepage: 'https://github.com/atom/atom',
    description:
      'Atom fue un editor de texto de código abierto desarrollado por GitHub. Nota: El proyecto fue archivado en diciembre de 2022.',
    category: 'programming',
    isProprietary: false,
    alternatives: ['vscode', 'vscodium'],
    images: [
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'atom-packages',
        title: 'Gestión de paquetes',
        content: 'Personaliza Atom con paquetes',
        steps: [
          'Abre Configuración (Ctrl+,)',
          'Ve a la sección Install',
          'Busca el paquete deseado',
          'Instala y configura según necesites'
        ]
      }
    ]
  },
  {
    id: 'canva',
    name: 'Canva',
    developer: 'Canva Pty Ltd',
    homepage: 'https://www.canva.com',
    description:
      'Canva es una plataforma de diseño gráfico online que ofrece una versión gratuita con plantillas y herramientas de diseño.',
    category: 'graphic-design',
    isProprietary: false,
    alternatives: ['inkscape', 'figma'],
    images: [
      'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'canva-templates',
        title: 'Usar plantillas',
        content: 'Crea diseños profesionales rápidamente',
        steps: [
          'Busca una plantilla que se ajuste a tu proyecto',
          'Personaliza textos y colores',
          'Añade tus propias imágenes',
          'Descarga o comparte tu diseño'
        ]
      }
    ]
  },
  {
    id: 'inkscape',
    name: 'Inkscape',
    developer: 'Inkscape Project',
    homepage: 'https://inkscape.org',
    description:
      'Inkscape es un editor de gráficos vectoriales profesional y de código abierto. Ideal para ilustraciones, iconos, logotipos y diseño web.',
    category: 'graphic-design',
    isProprietary: false,
    alternatives: ['canva', 'figma'],
    images: [
      'https://images.unsplash.com/photo-1609921205586-7e8a57516512?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'inkscape-paths',
        title: 'Trabajar con trazados',
        content: 'Domina las herramientas de vectores',
        steps: [
          'Selecciona la herramienta Bézier (B)',
          'Haz clic para crear puntos',
          'Ajusta las curvas con los nodos',
          'Usa la herramienta de nodos (N) para editar'
        ]
      }
    ]
  },
  {
    id: 'figma',
    name: 'Figma',
    developer: 'Figma, Inc.',
    homepage: 'https://www.figma.com',
    description:
      'Figma es una herramienta de diseño de interfaz colaborativa basada en la nube. Ofrece una versión gratuita con funciones completas para equipos pequeños.',
    category: 'graphic-design',
    isProprietary: false,
    alternatives: ['inkscape', 'canva'],
    images: [
      'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'figma-components',
        title: 'Crear componentes reutilizables',
        content: 'Acelera tu flujo de diseño con componentes',
        steps: [
          'Diseña un elemento que quieras reutilizar',
          'Selecciónalo y crea un componente (Ctrl+Alt+K)',
          'Duplica instancias del componente',
          'Los cambios en el componente se reflejan en todas las instancias'
        ]
      }
    ]
  },
  {
    id: 'blender',
    name: 'Blender',
    developer: 'Blender Foundation',
    homepage: 'https://www.blender.org',
    description:
      'Blender es un conjunto de herramientas de creación 3D gratuito y de código abierto. Soporta modelado, animación, simulación, renderizado, composición y edición de video.',
    category: '3d-modeling',
    isProprietary: false,
    alternatives: ['freecad', 'maya', '3ds-max'],
    images: [
      'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80',
      'https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'blender-basic-modeling',
        title: 'Modelado básico',
        content: 'Aprende los fundamentos del modelado 3D en Blender',
        steps: [
          'Abre Blender y familiarízate con la interfaz',
          'Selecciona el cubo por defecto y presiónalo con S para escalarlo',
          'Usa Tab para entrar en modo edición',
          'Selecciona caras, bordes o vértices con 1, 2, 3',
          'Aplica modificadores como Subdivision Surface para suavizar'
        ]
      },
      {
        id: 'blender-render',
        title: 'Renderizado básico',
        content: 'Crea tu primer render en Blender con Eevee',
        steps: [
          'Cambia a la pestaña Shading',
          'Añade un material al objeto seleccionado',
          'Configura la iluminación con luces del tipo Point o Sun',
          'Ajusta la cámara y presiona F12 para renderizar'
        ]
      }
    ]
  },
  {
    id: 'freecad',
    name: 'FreeCAD',
    developer: 'FreeCAD Community',
    homepage: 'https://www.freecad.org',
    description:
      'FreeCAD es un modelador CAD 3D paramétrico gratuito y de código abierto. Ideal para diseño de ingeniería, arquitectura y diseño de productos.',
    category: '3d-modeling',
    isProprietary: false,
    alternatives: ['blender', 'fusion-360'],
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'freecad-sketch',
        title: 'Crear un croquis paramétrico',
        content: 'Diseña piezas con croquis y restricciones',
        steps: [
          'Selecciona el banco de trabajo Sketcher',
          'Crea un nuevo croquis y elige un plano',
          'Dibuja formas con las herramientas de geometría',
          'Aplica restricciones dimensionales y geométricas',
          'Conviértelo en un objeto 3D con Pad en el banco PartDesign'
        ]
      }
    ]
  },
  {
    id: 'maya',
    name: 'Autodesk Maya',
    developer: 'Autodesk Inc.',
    homepage: 'https://www.autodesk.com/products/maya',
    description:
      'Autodesk Maya es un software profesional de modelado 3D, animación y renderizado utilizado en la industria del cine y los videojuegos.',
    category: '3d-modeling',
    isProprietary: true,
    alternatives: ['blender'],
    images: [],
    tutorials: []
  },
  {
    id: '3ds-max',
    name: 'Autodesk 3ds Max',
    developer: 'Autodesk Inc.',
    homepage: 'https://www.autodesk.com/products/3ds-max',
    description:
      'Autodesk 3ds Max es un software profesional de modelado, animación y renderizado 3D.',
    category: '3d-modeling',
    isProprietary: true,
    alternatives: ['blender'],
    images: [],
    tutorials: []
  },
  {
    id: 'fusion-360',
    name: 'Autodesk Fusion 360',
    developer: 'Autodesk Inc.',
    homepage: 'https://www.autodesk.com/products/fusion-360',
    description:
      'Fusion 360 es una plataforma CAD/CAM/CAE en la nube para diseño de productos y manufactura.',
    category: '3d-modeling',
    isProprietary: true,
    alternatives: ['freecad', 'blender'],
    images: [],
    tutorials: []
  },
  {
    id: 'libreoffice',
    name: 'LibreOffice',
    developer: 'The Document Foundation',
    homepage: 'https://www.libreoffice.org',
    description:
      'LibreOffice es una suite ofimática gratuita y de código abierto. Incluye procesador de texto, hoja de cálculo, presentaciones y más.',
    category: 'office',
    isProprietary: false,
    alternatives: ['onlyoffice', 'microsoft-office'],
    images: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'libreoffice-writer',
        title: 'Writer: tu procesador de textos',
        content: 'Crea documentos profesionales con LibreOffice Writer',
        steps: [
          'Abre LibreOffice Writer',
          'Escribe tu contenido y usa los estilos predefinidos',
          'Inserta imágenes (Insertar > Imagen)',
          'Exporta a PDF (Archivo > Exportar como PDF)'
        ]
      },
      {
        id: 'libreoffice-calc',
        title: 'Calc: hojas de cálculo',
        content: 'Domina las fórmulas y funciones en Calc',
        steps: [
          'Abre una hoja de cálculo en LibreOffice Calc',
          'Introduce datos en las celdas',
          'Usa fórmulas comenzando con = (ej. =SUMA(A1:A10))',
          'Crea gráficos con Insertar > Gráfico'
        ]
      }
    ]
  },
  {
    id: 'onlyoffice',
    name: 'OnlyOffice',
    developer: 'Ascensio System SIA',
    homepage: 'https://www.onlyoffice.com',
    description:
      'OnlyOffice es una suite ofimática de código abierto compatible con formatos de Microsoft Office. Ofrece editor de documentos, hojas de cálculo y presentaciones.',
    category: 'office',
    isProprietary: false,
    alternatives: ['libreoffice', 'microsoft-office'],
    images: [
      'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'onlyoffice-collab',
        title: 'Colaboración en tiempo real',
        content: 'Trabaja en documentos con tu equipo',
        steps: [
          'Abre un documento en OnlyOffice',
          'Comparte el enlace con colaboradores',
          'Edita simultáneamente viendo cambios en tiempo real',
          'Usa comentarios y sugerencias para revisar'
        ]
      }
    ]
  },
  {
    id: 'microsoft-office',
    name: 'Microsoft Office',
    developer: 'Microsoft Corporation',
    homepage: 'https://www.microsoft.com/microsoft-365',
    description:
      'Microsoft Office es la suite ofimática más utilizada del mundo. Incluye Word, Excel, PowerPoint y más.',
    category: 'office',
    isProprietary: true,
    alternatives: ['libreoffice', 'onlyoffice'],
    images: [],
    tutorials: []
  },
  {
    id: 'firefox',
    name: 'Mozilla Firefox',
    developer: 'Mozilla Foundation',
    homepage: 'https://www.mozilla.org/firefox',
    description:
      'Firefox es un navegador web gratuito y de código abierto que prioriza la privacidad y la seguridad del usuario.',
    category: 'browsers',
    isProprietary: false,
    alternatives: ['brave', 'google-chrome'],
    images: [
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'firefox-privacy',
        title: 'Configurar privacidad',
        content: 'Protege tu privacidad en Firefox',
        steps: [
          'Abre Ajustes > Privacidad y Seguridad',
          'Activa la protección contra rastreo mejorada',
          'Configura el bloqueo de cookies',
          'Usa el modo de navegación privada (Ctrl+Shift+P)'
        ]
      },
      {
        id: 'firefox-extensions',
        title: 'Extensiones esenciales',
        content: 'Amplía las capacidades de Firefox',
        steps: [
          'Abre el menú y selecciona Complementos y temas',
          'Busca uBlock Origin para bloquear anuncios',
          'Instala Bitwarden para gestión de contraseñas',
          'Explora más extensiones según tus necesidades'
        ]
      }
    ]
  },
  {
    id: 'brave',
    name: 'Brave',
    developer: 'Brave Software Inc.',
    homepage: 'https://brave.com',
    description:
      'Brave es un navegador web gratuito y de código abierto centrado en la privacidad. Bloquea anuncios y rastreadores por defecto.',
    category: 'browsers',
    isProprietary: false,
    alternatives: ['firefox', 'google-chrome'],
    images: [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'brave-basics',
        title: 'Primeros pasos en Brave',
        content: 'Configura Brave para una navegación segura',
        steps: [
          'Descarga e instala Brave desde brave.com',
          'Configura Brave Rewards si lo deseas',
          'Activa el bloqueo de anuncios desde el escudo en la barra',
          'Importa marcadores desde otro navegador'
        ]
      }
    ]
  },
  {
    id: 'google-chrome',
    name: 'Google Chrome',
    developer: 'Google LLC',
    homepage: 'https://www.google.com/chrome',
    description:
      'Google Chrome es el navegador web más utilizado del mundo. Su motor Chromium es la base de muchos otros navegadores.',
    category: 'browsers',
    isProprietary: true,
    alternatives: ['firefox', 'brave'],
    images: [],
    tutorials: []
  },
  {
    id: 'bitwarden',
    name: 'Bitwarden',
    developer: 'Bitwarden Inc.',
    homepage: 'https://bitwarden.com',
    description:
      'Bitwarden es un gestor de contraseñas gratuito y de código abierto. Ofrece sincronización multiplataforma y compartición segura.',
    category: 'password-manager',
    isProprietary: false,
    alternatives: ['keepassxc', '1password'],
    images: [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'bitwarden-setup',
        title: 'Configurar Bitwarden',
        content: 'Comienza a gestionar tus contraseñas de forma segura',
        steps: [
          'Crea una cuenta gratuita en bitwarden.com',
          'Instala la extensión del navegador',
          'Añade tu primera contraseña con el icono +',
          'Usa el generador de contraseñas seguras'
        ]
      },
      {
        id: 'bitwarden-import',
        title: 'Importar contraseñas',
        content: 'Transfiere tus contraseñas desde otros gestores',
        steps: [
          'Exporta tus contraseñas desde tu gestor actual',
          'En Bitwarden ve a Herramientas > Importar datos',
          'Selecciona el formato correspondiente',
          'Sube el archivo y verifica los datos importados'
        ]
      }
    ]
  },
  {
    id: 'keepassxc',
    name: 'KeePassXC',
    developer: 'KeePassXC Team',
    homepage: 'https://keepassxc.org',
    description:
      'KeePassXC es un gestor de contraseñas local y de código abierto. Tus datos se almacenan en un archivo encriptado que solo tú controlas.',
    category: 'password-manager',
    isProprietary: false,
    alternatives: ['bitwarden', '1password'],
    images: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'keepassxc-usage',
        title: 'Usar KeePassXC',
        content: 'Gestiona tus contraseñas localmente',
        steps: [
          'Descarga e instala KeePassXC',
          'Crea una nueva base de datos con una contraseña maestra',
          'Añade entradas con el botón +',
          'Usa el auto-relleno en tu navegador con la extensión'
        ]
      }
    ]
  },
  {
    id: '1password',
    name: '1Password',
    developer: 'AgileBits Inc.',
    homepage: 'https://1password.com',
    description:
      '1Password es un gestor de contraseñas premium con sincronización en la nube y funciones avanzadas de seguridad.',
    category: 'password-manager',
    isProprietary: true,
    alternatives: ['bitwarden', 'keepassxc'],
    images: [],
    tutorials: []
  },
  {
    id: 'element',
    name: 'Element',
    developer: 'Element / New Vector Ltd',
    homepage: 'https://element.io',
    description:
      'Element es un cliente de mensajería descentralizado basado en el protocolo Matrix. Ofrece comunicación cifrada de extremo a extremo.',
    category: 'communication',
    isProprietary: false,
    alternatives: ['discord', 'slack'],
    images: [
      'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'element-basics',
        title: 'Primeros pasos en Element',
        content: 'Comienza a comunicarte de forma segura',
        steps: [
          'Crea una cuenta en matrix.org o usa un homeserver',
          'Descarga Element en tu dispositivo',
          'Inicia sesión y crea o únete a salas',
          'Activa el cifrado de extremo a extremo en las salas'
        ]
      }
    ]
  },
  {
    id: 'discord',
    name: 'Discord',
    developer: 'Discord Inc.',
    homepage: 'https://discord.com',
    description:
      'Discord es una plataforma de comunicación para comunidades. Ofrece chat de texto, voz y video de forma gratuita.',
    category: 'communication',
    isProprietary: true,
    alternatives: ['element', 'slack'],
    images: [],
    tutorials: []
  },
  {
    id: 'slack',
    name: 'Slack',
    developer: 'Salesforce Inc.',
    homepage: 'https://slack.com',
    description:
      'Slack es una plataforma de mensajería empresarial con canales, videollamadas e integraciones.',
    category: 'communication',
    isProprietary: true,
    alternatives: ['element', 'discord'],
    images: [],
    tutorials: []
  },
  {
    id: 'logseq',
    name: 'Logseq',
    developer: 'Logseq Community',
    homepage: 'https://logseq.com',
    description:
      'Logseq es una plataforma de conocimiento de código abierto para tomar notas, organizar ideas y gestionar proyectos. Basado en archivos Markdown y Org-mode.',
    category: 'note-taking',
    isProprietary: false,
    alternatives: ['obsidian', 'notion'],
    images: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'logseq-basics',
        title: 'Primeros pasos en Logseq',
        content: 'Aprende a tomar notas con Logseq',
        steps: [
          'Descarga Logseq desde logseq.com',
          'Crea una página nueva con /new page',
          'Usa [[]] para enlazar páginas entre sí',
          'Organiza con tags y bloques anidados'
        ]
      }
    ]
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    developer: 'Obsidian Inc.',
    homepage: 'https://obsidian.md',
    description:
      'Obsidian es una aplicación de notas que crea una base de conocimiento personal. Conecta tus ideas a través de enlaces y grafos.',
    category: 'note-taking',
    isProprietary: false,
    alternatives: ['logseq', 'notion'],
    images: [
      'https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'obsidian-vault',
        title: 'Crear tu bóveda de conocimiento',
        content: 'Organiza tus notas en Obsidian',
        steps: [
          'Abre Obsidian y crea una nueva bóveda',
          'Crea notas con Ctrl+N',
          'Enlaza notas con [[nombre de la nota]]',
          'Explora tu grafo de conocimiento con el botón Graph View'
        ]
      },
      {
        id: 'obsidian-plugins',
        title: 'Extensiones esenciales',
        content: 'Potencia Obsidian con plugins',
        steps: [
          'Abre Ajustes > Plugins comunitarios',
          'Desactiva el modo seguro',
          'Busca e instala plugins como Kanban o Calendar',
          'Configura cada plugin según tus necesidades'
        ]
      }
    ]
  },
  {
    id: 'notion',
    name: 'Notion',
    developer: 'Notion Labs Inc.',
    homepage: 'https://www.notion.so',
    description:
      'Notion es una plataforma todo-en-uno para tomar notas, gestionar proyectos y colaborar. Combina documentos, bases de datos y wikis.',
    category: 'note-taking',
    isProprietary: true,
    alternatives: ['logseq', 'obsidian'],
    images: [],
    tutorials: []
  },
  {
    id: 'nextcloud',
    name: 'Nextcloud',
    developer: 'Nextcloud GmbH',
    homepage: 'https://nextcloud.com',
    description:
      'Nextcloud es una plataforma de almacenamiento en la nube autogestionada. Ofrece sincronización de archivos, calendario, contactos y colaboración.',
    category: 'cloud-storage',
    isProprietary: false,
    alternatives: ['syncthing', 'google-drive'],
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'nextcloud-setup',
        title: 'Configurar Nextcloud',
        content: 'Instala y configura tu propio servidor en la nube',
        steps: [
          'Instala Nextcloud en tu servidor (Nextcloud All-in-One recomendado)',
          'Configura el dominio y SSL',
          'Crea usuarios y comparte archivos',
          'Instala los clientes de escritorio y móvil para sincronizar'
        ]
      }
    ]
  },
  {
    id: 'syncthing',
    name: 'Syncthing',
    developer: 'Syncthing Community',
    homepage: 'https://syncthing.net',
    description:
      'Syncthing es una herramienta de sincronización de archivos peer-to-peer gratuita y de código abierto. Tus datos nunca pasan por un servidor central.',
    category: 'cloud-storage',
    isProprietary: false,
    alternatives: ['nextcloud', 'google-drive'],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'syncthing-basics',
        title: 'Sincronizar archivos con Syncthing',
        content: 'Configura la sincronización entre dispositivos',
        steps: [
          'Instala Syncthing en todos tus dispositivos',
          'Abre la interfaz web en http://localhost:8384',
          'Añade un dispositivo remoto con el ID del otro equipo',
          'Configura carpetas compartidas y espera la sincronización'
        ]
      }
    ]
  },
  {
    id: 'google-drive',
    name: 'Google Drive',
    developer: 'Google LLC',
    homepage: 'https://drive.google.com',
    description:
      'Google Drive es un servicio de almacenamiento en la nube con 15 GB gratuitos. Se integra con Google Docs, Sheets y Slides.',
    category: 'cloud-storage',
    isProprietary: true,
    alternatives: ['nextcloud', 'syncthing'],
    images: [],
    tutorials: []
  },
  {
    id: 'gnucash',
    name: 'GnuCash',
    developer: 'GnuCash Project',
    homepage: 'https://www.gnucash.org',
    description:
      'GnuCash es un software de contabilidad personal y empresarial gratuito y de código abierto. Ofrece contabilidad por partida doble, presupuestos e informes.',
    category: 'finance',
    isProprietary: false,
    alternatives: ['actual-budget', 'ynab'],
    images: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'gnucash-setup',
        title: 'Configurar GnuCash',
        content: 'Comienza a gestionar tus finanzas',
        steps: [
          'Descarga e instala GnuCash',
          'Crea un nuevo archivo de contabilidad',
          'Configura tus cuentas (ingresos, gastos, activos)',
          'Registra tus transacciones diarias'
        ]
      }
    ]
  },
  {
    id: 'actual-budget',
    name: 'Actual Budget',
    developer: 'Actual Budget Community',
    homepage: 'https://actualbudget.org',
    description:
      'Actual Budget es una aplicación de presupuesto personal gratuita y de código abierto. Ofrece sincronización y reglas automáticas para categorizar gastos.',
    category: 'finance',
    isProprietary: false,
    alternatives: ['gnucash', 'ynab'],
    images: [
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80'
    ],
    tutorials: [
      {
        id: 'actual-budget-basics',
        title: 'Crear tu primer presupuesto',
        content: 'Organiza tus finanzas con Actual Budget',
        steps: [
          'Instala Actual Budget o usa la versión en la nube',
          'Conecta tus cuentas bancarias o añade manualmente',
          'Define categorías de gasto',
          'Asigna presupuesto a cada categoría cada mes'
        ]
      }
    ]
  },
  {
    id: 'ynab',
    name: 'You Need A Budget (YNAB)',
    developer: 'YNAB LLC',
    homepage: 'https://www.ynab.com',
    description:
      'YNAB es una aplicación de presupuesto personal que sigue el método de darle un trabajo a cada dólar.',
    category: 'finance',
    isProprietary: true,
    alternatives: ['gnucash', 'actual-budget'],
    images: [],
    tutorials: []
  }
]
export const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'image-editing', name: 'Edición de Imágenes' },
  { id: 'video-editing', name: 'Edición de Video' },
  { id: 'audio-editing', name: 'Edición de Audio' },
  { id: 'programming', name: 'Programación' },
  { id: 'graphic-design', name: 'Diseño Gráfico' },
  { id: '3d-modeling', name: 'Modelado 3D' },
  { id: 'office', name: 'Ofimática' },
  { id: 'browsers', name: 'Navegadores Web' },
  { id: 'password-manager', name: 'Gestión de Contraseñas' },
  { id: 'communication', name: 'Comunicación' },
  { id: 'note-taking', name: 'Toma de Notas' },
  { id: 'cloud-storage', name: 'Almacenamiento en la Nube' },
  { id: 'finance', name: 'Finanzas Personales' }
]
