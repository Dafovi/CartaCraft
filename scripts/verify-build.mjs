import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, join, extname } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve('dist');
const base = `${(process.env.SITE_BASE || '/CartaCraft/').replace(/\/$/, '')}/`;
const origin = process.env.SITE_URL || 'https://dafovi.github.io';
const pages = ['index.html', 'proyecto/index.html', 'launcher/index.html', 'privacidad/index.html', 'contacto/index.html'];
const disclaimer = 'CartaCraft es un proyecto independiente de la comunidad y no está afiliado, patrocinado ni respaldado por Mojang Studios o Microsoft.';
const errors = [];
let references = 0;

async function exists(path) { try { return (await stat(path)).isFile(); } catch { return false; } }
async function files(directory) {
  const items = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(items.map((entry) => entry.isDirectory() ? files(join(directory, entry.name)) : join(directory, entry.name)))).flat();
}

const allFiles = await files(root);
for (const relative of pages) {
  const file = join(root, relative);
  assert(await exists(file), `Falta la página ${relative}`);
  const html = await readFile(file, 'utf8');
  const url = new URL(base + (relative === 'index.html' ? '' : relative.replace('index.html', '')), origin);
  const check = (condition, message) => { if (!condition) errors.push(`${relative}: ${message}`); };
  check((html.match(/<h1(?:\s|>)/g) || []).length === 1, 'Debe tener exactamente un h1');
  check(/<html[^>]*lang="es"/.test(html), 'Falta idioma español');
  check(/<title>[^<]+<\/title>/.test(html), 'Falta título');
  check(/<meta[^>]*name="description"[^>]*content="[^"]+"/.test(html), 'Falta descripción');
  check(html.includes(`href="${url.href}"`), 'Canonical incorrecto');
  check(html.includes(disclaimer), 'Falta el aviso exacto de independencia');
  const socialImage = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/)?.[1];
  check(Boolean(socialImage), 'Falta imagen social OG');
  if (socialImage) {
    const imageUrl = new URL(socialImage);
    check(imageUrl.origin === new URL(origin).origin && imageUrl.pathname.startsWith(base), 'Imagen OG fuera del destino/base');
    check(await exists(join(root, decodeURIComponent(imageUrl.pathname.slice(base.length)))), 'Imagen OG inexistente');
    references++;
  }
  check(!/https?:\/\/[^"\s]*(?:google-analytics|googletagmanager|fonts.googleapis|fonts.gstatic|player.twitch)/.test(html), 'Recurso remoto no previsto');
  check(!/\b(?:lorem ipsum|TODO)\b/i.test(html), 'Texto provisional en página pública');

  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  const idCount = [...html.matchAll(/\bid="([^"]+)"/g)].length;
  check(ids.size === idCount, 'Identificadores duplicados');
  for (const tag of html.matchAll(/<(?:a|link|script|img|source)\b[^>]*>/g)) {
    const value = tag[0].match(/\b(?:href|src)="([^"]+)"/)?.[1];
    if (!value || /^(?:mailto:|data:)/.test(value)) continue;
    if (tag[0].startsWith('<a') && /target="_blank"/.test(tag[0])) check(/rel="[^"\n]*noopener[^"\n]*noreferrer/.test(tag[0]), 'Enlace externo sin rel adecuado');
    if (/^https?:\/\//.test(value)) continue;
    const parsed = new URL(value, url);
    if (value.startsWith('#')) { check(ids.has(parsed.hash.slice(1)), `Ancla inexistente ${value}`); continue; }
    check(parsed.pathname.startsWith(base), `Ruta fuera de base: ${value}`);
    const local = decodeURIComponent(parsed.pathname.slice(base.length));
    const target = join(root, local.endsWith('/') || !local ? local + 'index.html' : local);
    check(await exists(target), `Destino inexistente: ${value}`);
    if (parsed.hash && await exists(target)) {
      const destination = await readFile(target, 'utf8');
      check(destination.includes(`id="${parsed.hash.slice(1)}"`), `Ancla inexistente: ${value}`);
    }
    references++;
  }
  for (const tag of html.matchAll(/<img\b[^>]*>/g)) {
    check(/\balt(?:="[^"]*"|(?=\s|>))/.test(tag[0]), 'Imagen sin alt');
    check(/\bwidth="\d+"/.test(tag[0]) && /\bheight="\d+"/.test(tag[0]), 'Imagen sin dimensiones');
    for (const candidate of (tag[0].match(/\bsrcset="([^"]+)"/)?.[1] || '').split(',').filter(Boolean)) {
      const src = candidate.trim().split(/\s+/)[0];
      const parsed = new URL(src, url);
      check(parsed.pathname.startsWith(base), `srcset fuera de base: ${src}`);
      check(await exists(join(root, decodeURIComponent(parsed.pathname.slice(base.length)))), `srcset inexistente: ${src}`);
      references++;
    }
  }
}
for (const file of allFiles.filter((file) => extname(file) === '.css')) {
  const css = await readFile(file, 'utf8');
  for (const match of css.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
    if (match[1].startsWith('data:')) continue;
    const value = match[1];
    const target = value.startsWith(base) ? join(root, value.slice(base.length)) : resolve(file, '..', value);
    if (!await exists(target)) errors.push(`CSS: recurso inexistente ${value}`);
    references++;
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else {
  console.log(`OK: ${pages.length} páginas; ${references} referencias locales, anclas, srcset y fuentes válidos bajo ${base}.`);
  console.log('OK: títulos, canonical, idioma, h1, dimensiones, enlaces externos y aviso de independencia.');
}
