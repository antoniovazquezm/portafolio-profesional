# Portafolio — React + Vite + Tailwind CSS

## Uso
```bash
npm install
npm run dev      # desarrollo
npm run build    # producción (carpeta dist/)
```

## Personalizar
Todo tu contenido está en `src/data/content.js` (nombre, about, proyectos, trabajos, certificaciones, redes).
La navegación usa anclas: `#aboutme`, `#proyectosYTrabajos`, `#certificaciones`, `#contacto`.
Para agregar una sección nueva: añade su entrada en `nav` (content.js), crea el componente con `<section id="...">` y agrégalo en `App.jsx`.
