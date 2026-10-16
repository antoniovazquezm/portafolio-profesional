

export const profile = {
  name: 'Antonio Vázquez Montalban',
  role: 'Frontend Developer con enfoque en UI/UX y soluciones empresariales.',
  tagline:
    'Construyo experiencias web rápidas, accesibles y con buen diseño.',
  location: 'Puebla, México',
  nationality: 'Mexicana y Española',
  email: 'antuane.vazquez04@gmail.com',
  cvUrl: '/AntonioVazquez_CV.pdf', // enlace a tu CV en PDF
  photo: '/IMG_8174.png', 
  roles: ['Frontend con React', 'Interfaces con Tailwind CSS', 'APIs y Node.js'],
}

export const nav = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'aboutme', label: 'Sobre mí' },
  { id: 'proyectosYTrabajos', label: 'Proyectos y Trabajos' },
  { id: 'educacion', label: 'Educación'},
  { id: 'certificaciones', label: 'Certificaciones' },
  { id: 'contacto', label: 'Contacto' },
]

export const about = {
  paragraphs: [
    'Me apasiona el desarrollo frontend, el diseño UI/UX y la creación de interfaces intuitivas y atractivas utilizando tecnologías como React. También me interesa el manejo de bases de datos y el desarrollo de soluciones empresariales mediante herramientas como SAP.'

  ],
  stats: [
    { value: '1+', label: 'Año de experiencia' },
    { value: '5+', label: 'Proyectos' },
    { value: '2', label: 'Certificaciones' },
  ],
  skills: [
    { group: 'Frontend', items: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML5'] },
    { group: 'Backend', items: ['Python', 'C', 'C++', 'Django', 'API'] },
    { group: 'Herramientas', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'SAP', 'Canva'] },
  ],
}
export const education = [
  {
    degree: 'Ingeniería en Sistemas Computacionales',
    school: 'Universidad Iberoamericana Puebla',
    period: '2022 - Actualidad',
    status: 'En curso', // por ejemplo: 'Titulado', 'En curso', 'Pasante'
    description:
      'Estudiante de 9° semestre',
    highlights: [
      'Subsecretario de Consejo estudiantil 2024 - 2025',
      '1° lugar en Hackathon interno: Empoderando la recuperación',
      'Equipo representativo de voleibol de sala varonil',
      'Italiano A1/A2 durante Primavera y Otoño 2023'
    ],
  },
  {
    degree: 'Ingeniería Informática',
    school: 'Universidad de DEUSTO campus Bilbao',
    period: 'Enero 2025 - Junio 2025',
    status: 'Intercambio Académico', // por ejemplo: 'Titulado', 'En curso', 'Pasante'
    description:
      'Intercambio Académico por parte de la IBERO Puebla',
    highlights: [
      'Implementación de ERP SAP en empresas',
      'Planificación de proyectos',
    ],
  },
  {
    degree: 'Preparatoria IB',
    school: 'Fundación Colegio Americano de Puebla',
    period: '2019 - 2022',
    status: 'Concluido',
    description: 'Bajo el programa Diploma del Bachillerato Internacional',
    highlights: ['Inglés', 'Liderazgo','Trabajo en equipo', 'Pensamiento crítico'],
  },
]

export const projects = [
  {
    title: 'Prototipado de Portafolio',
    type: 'Proyecto',
    description: 'Proyecto de prototipado de Interacción Persona Máquina Verano 2026. Prototipo de alta fidelidad de un portafolio. Incluye un card sorting, mapa de sitio, moodboards y link al prototipado',
    tags: ['Figma'],
    demo: 'https://www.figma.com/proto/TX0RNVB0Hy3AzptoKCJ553/Prototipo-Alta-Fidelidad_Antonio-Vazquez-Montalban?node-id=17-125&t=dhcP7tA1IU90Iwfx-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
    repo: 'https://www.figma.com/design/TX0RNVB0Hy3AzptoKCJ553/Prototipo-Alta-Fidelidad_Antonio-Vazquez-Montalban?node-id=0-1&t=WOFuKQFl07XvDot8-1',
  },
  {
    title: 'U-FIT',
    type: 'Trabajo',
    description: '1er lugar en el Hackathon Interno Primavera 2024: Empoderando la Recuperación. U-FIT es una aplicación Aplicación para calcular las calorías y sus derivaciones en macronutrientes.',
    tags: ['Python', 'QTdesigner', 'Pandas', 'Backend'],
    repo: 'https://github.com/antoniovazquezm/hackaton_starbies',
  },
  {
    title: 'Uso de múltiples estructuras de datos',
    type: 'Proyecto',
    description: 'Proyecto que conecta las diferentes estructuras de datos',
    tags: ['Estructuras de datos', 'Backend'],
    repo: 'https://github.com/antoniovazquezm/proyectoFinalEstructura',
  },
  {
    title: 'Prototipo de Software para la gestión de inventarios y fortalecimiento organizacional en microempresas v1',
    type: 'Proyecto',
    description:
      'Desarrollo colaborativo de una aplicación web para la microempresa Sanaté Agua Alcalina Puebla que lleva el control de sus inventarios desde la materia prima, hasta el producto terminado; alertas de stock en vivo y cálculo de merma productiva. El proyecto fue trabajado de forma multidisciplinar, combinando la Ingeniería Industrial y la Ingeniería en Sistemas',
    tags: ['React', 'Vite', 'Testing', 'Tailwind', 'NoSQL', 'UX/UI', 'Frontend'],
    period: 'Otoño 2025',
    repo: 'https://lnkd.in/p/gnB9zbQZ'
  },
  {
    title: 'Prototipo de Prototipo de software para la gestión de inventarios, pronóstico de demanda y Control de mermas en microempresas del sector purificador de agua v2 ',
    type: 'Proyecto',
    description:
      'Segunda versión del prototipo para Sanaté Agua Alcalina Puebla, implementación evaluación mediante KPIs',
    tags: ['React', 'Vite', 'SQL', 'Testing', 'Tailwind', 'UX/UI', 'Frontend', 'ISO', 'KPI'],
    period: 'Otoño 2025 — Actualidad',
  },
]

export const certifications = [
  {
    title: 'Introducción al Internet de las Cosas y Transformación Digital',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    url: 'https://www.netacad.com/certificates/?issuanceId=8ac770fc-d376-45a4-8b06-8e50f1c1ff44',
  },
  {
    title: 'Introducción a las Tecnologías Emergentes: Edición 2024',
    issuer: 'Santander Open Academy',
    date: '2024',
    url: 'https://drive.google.com/file/d/1PMvt4WKFAolMj8hG8ZVG1xUIKwn61Cbx/view?usp=sharing',
  },
  
]

export const socials = [
  { label: 'GitHub', url: 'https://github.com/antoniovazquezm' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/antonio-vázquez-montalban-3aa877238' },
]
