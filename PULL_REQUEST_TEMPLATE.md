# PR: Migración inicial a React + TypeScript

Esta PR inicia la migración del sitio estático a una aplicación React + Vite + TypeScript. Incluye scaffolding, la migración parcial de la página de inicio y algunas mejoras en la estructura para facilitar la modularización futura.

Resumen de cambios

- Scaffolding Vite + React + TypeScript (package.json, vite.config.ts, tsconfig.json, index.html)
- App y routing básico (src/main.tsx, src/App.tsx)
- Página Home migrada parcialmente a React (src/pages/Home.tsx)
- Componentes base: Navbar, Footer
- Interactividad convertida: custom cursor, useReveal hook, ProblemModal
- Consolidación inicial de estilos en src/styles/global.css
- Script para copiar/normalizar assets -> public/assets (scripts/move-assets.js) y actualización de referencias
- Legacy: carpeta original "Landing Page/victoria-ascent-global-website-main/" preservada como fallback

Checklist de QA

- [ ] Clonar la rama modularize/migrate-to-react
- [ ] Ejecutar npm install (postinstall copia assets a public/assets)
- [ ] npm run dev — Validar que el servidor de desarrollo arranque
- [ ] Acceder a / y verificar que la Home cargue correctamente
- [ ] Verificar que imágenes se carguen desde /public/assets
- [ ] Probar la interacción: modal en la sección problema, animaciones reveal, cursor personalizado
- [ ] npm run build — validar que el build se genere sin errores

Notas y pasos siguientes

- Puedo migrar las páginas restantes (acerca-de-nosotros, productos, oportunidad-de-negocio, testimonios, contacto) en PRs separadas o en esta misma PR si prefieres.
- Recomiendo mantener legacy HTML hasta que confirmes que la migración está completa; luego podemos archivar/eliminar.
- Los nombres de archivos en assets se normalizarán (espacios → guiones) por el script; conservamos los archivos originales.

Solicito revisión y pruebas. Si todo está bien, procederé a migrar las demás páginas y a refactorizar estilos a CSS Modules.
