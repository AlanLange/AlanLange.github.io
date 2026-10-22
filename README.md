# Alan Langelan — Portafolio

Portafolio de **Alan Langelan**, Analista Programador (Universidad ORT Uruguay) y desarrollador full stack junior.

**Sitio:** https://alanlange.github.io

## Stack

- Next.js 16 (App Router, exportación estática) · React 19 · TypeScript
- Tailwind CSS 4 · Geist (next/font) · Lucide
- GitHub Actions: lint → typecheck → build → deploy a GitHub Pages

## Desarrollo

```bash
npm ci
npm run dev        # http://localhost:3000
npm run check      # lint + typecheck + build (genera out/)
npm run images     # regenera los WebP de public/projects desde _legacy/img
```

El contenido (proyectos, experiencia, stack, formación) vive en `lib/data.ts` y debe coincidir con el CV
publicado en `public/CV_Analista_Programador.pdf`.

## Despliegue

El workflow `.github/workflows/deploy.yml` publica `out/` en GitHub Pages en cada push a `main`.
Requiere **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Estructura

```
app/          layout, página, sitemap, robots, ícono
components/   secciones y componentes reutilizables
lib/data.ts   contenido del sitio
public/       CV, imagen Open Graph y capturas optimizadas
_legacy/      versión anterior del sitio (HTML + Tailwind CDN) y capturas originales
```
