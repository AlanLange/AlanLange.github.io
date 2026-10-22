// Convierte las capturas originales (_legacy/img) a WebP livianos en public/projects.
// Uso: npm run images
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCES = {
  GP: "gestion-pacientes",
  Barber: "barberia-fullstack",
};

const slug = (name) =>
  name
    .replace(/\.png$/i, "")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();

for (const [src, dest] of Object.entries(SOURCES)) {
  const inDir = path.join("_legacy", "img", src);
  const outDir = path.join("public", "projects", dest);
  await mkdir(outDir, { recursive: true });
  for (const file of await readdir(inDir)) {
    if (!/\.png$/i.test(file)) continue;
    const out = path.join(outDir, `${slug(file)}.webp`);
    const info = await sharp(path.join(inDir, file))
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(out);
    console.log(`${out}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
  }
}
