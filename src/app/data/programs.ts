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
    alternatives: ['krita', 'photopea'],
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
    alternatives: ['gimp', 'photopea'],
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
  }
]

export const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'image-editing', name: 'Edición de Imágenes' },
  { id: 'video-editing', name: 'Edición de Video' },
  { id: 'audio-editing', name: 'Edición de Audio' },
  { id: 'programming', name: 'Programación' },
  { id: 'graphic-design', name: 'Diseño Gráfico' }
]
