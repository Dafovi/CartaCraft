# CartaCraft — web oficial, primera versión

**Un mundo de aventuras creado para la comunidad de Carta.**

Web estática en español para el proyecto privado de Minecraft Java Edition de la comunidad de [Cartafilou](https://www.twitch.tv/cartafilou). Implementada con Astro, TypeScript estricto y CSS organizado. Conserva la composición, jerarquía y paleta del mockup aprobado e incorpora las seis ilustraciones independientes entregadas por el proyecto. El inventario está en [docs/RECURSOS_PENDIENTES.md](docs/RECURSOS_PENDIENTES.md).

Este repositorio contiene únicamente la página web pública. El servidor, los mods y el launcher se desarrollan por separado. La existencia de un registro de aplicación en Microsoft Entra no implica que Minecraft Services haya autorizado el launcher.

## Instalación y comandos

Requiere Node **22.12 o superior**; Node 24 recomendado (también usado en Actions).

```sh
npm ci
npm run dev
npm run check
npm run build
npm run verify
npm run preview
```

Desarrollo: `http://localhost:4321/CartaCraft/`. Preview de producción: `http://localhost:4321/CartaCraft/` (o el puerto que imprima Astro). `verify` se ejecuta después del build; verifica las cinco páginas, rutas, recursos, fuentes, anclas, srcset, canonical, metadatos, semántica básica y aviso obligatorio.

Las fuentes Fredoka y Nunito Sans están empaquetadas localmente con `@fontsource`, subconjunto latino y `font-display: swap`. Las imágenes originales usadas se optimizan a WebP en el build. No hay React, backend, cuentas, autenticación web, analytics ni embeds de Twitch. `scripts/astro.mjs` desactiva la telemetría de la herramienta únicamente para este proyecto, sin escribir configuración global.

## Estructura

```text
src/
  assets/      seis PNG originales con nombres descriptivos
  components/  Header, Footer, Logo, Hero, Icon,
               SectionTitle, StatusCard, ProjectCTA
  data/        site.ts: navegación, enlace Twitch, estados y helper de base
  layouts/     Layout (SEO y estructura) / InfoLayout (páginas públicas)
  pages/       index, proyecto, launcher, privacidad, contacto
  styles/      global.css y artwork.css: componentes, arte y responsive
public/        favicon SVG decorativo, .nojekyll
scripts/       verify-build.mjs
docs/          recursos pendientes y verificación
.github/       workflow manual de Pages
referencias/   originales preservados; no se copian al sitio público
```

## GitHub Pages: preparado, sin publicar

Destino previsto: **https://dafovi.github.io/CartaCraft/**. Esta URL es la configuración esperada, no una confirmación de publicación.

`astro.config.mjs` define `site: 'https://dafovi.github.io'`, `base: '/CartaCraft/'`, salida estática y barra final. Todos los enlaces usan el helper de base, incluidos favicon y páginas interiores. Las rutas públicas son `/CartaCraft/`, `/CartaCraft/proyecto/`, `/CartaCraft/launcher/`, `/CartaCraft/privacidad/` y `/CartaCraft/contacto/`.

Se pueden configurar `SITE_URL` y `SITE_BASE` como variables de entorno de build y verificación o variables de repositorio en Actions. Si cambia el destino, cambiar ambas, reconstruir y validar. Ejemplo PowerShell:

```powershell
$env:SITE_URL = 'https://dafovi.github.io'
$env:SITE_BASE = '/CartaCraft/'
npm run build
npm run verify
```

Después de autorizar la publicación:

1. Revisar los pendientes de datos y derechos de uso público de recursos de terceros.
2. El repositorio confirmado es `Dafovi/CartaCraft`, con rama `master`. La implementación se incorpora sobre su historial existente; subir código no activa Pages.
3. En GitHub → Settings → Pages, elegir **GitHub Actions** como origen.
4. En Actions, ejecutar manualmente **Publicar CartaCraft en GitHub Pages**. El workflow no se activa al hacer push.
5. El workflow instala con `npm ci`, comprueba tipos, construye, valida y despliega `dist/`. Revisar la URL devuelta y probar enlaces interiores también mediante acceso directo.

Referencia técnica: [guía oficial Astro para GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).

## Accesibilidad y revisión

Un h1 por página, landmarks, idioma español, enlaces descriptivos, navegación activa, enlace para saltar al contenido, foco visible y alt/dimensiones de imágenes. El menú móvil usa un botón con `aria-expanded` y `aria-controls`; Escape cierra y devuelve foco. Sin JavaScript, la navegación permanece visible. Las animaciones son mínimas y respetan `prefers-reduced-motion`.

El color de los botones se oscureció respecto al rosa brillante de referencia para sostener el contraste de texto blanco. La composición sigue el mockup y usa el hero, paneles y logo entregados, sin generar nuevos personajes. En móvil se reserva una franja inferior del hero para mantener visibles a Carta y su gato. Consultar [docs/VERIFICACION.md](docs/VERIFICACION.md) para resultados y límites de QA.

## Privacidad y estado del proyecto

La información pública distingue esta web de las funciones futuras del launcher. No se anuncia aprobación de Microsoft/Mojang, autenticación implementada ni descargas públicas. El servidor está probado localmente, los mods y launcher están en desarrollo y la comunidad está en formación.

GitHub Pages puede procesar registros técnicos aunque la web no añada analítica. Twitch es un enlace externo sin embed. No hay secretos, IDs OAuth ni datos personales añadidos. Antes del lanzamiento del launcher, revisar su implementación y actualizar la información de privacidad con prácticas comprobadas. Falta un canal específico de soporte/privacidad; no se inventó un correo.

## Recursos y licencia

Los seis recursos se copiaron desde los adjuntos con nombres descriptivos; los archivos originales de Descargas no se modificaron. Astro genera las variantes WebP optimizadas sin cambiar las ilustraciones. Los PNG de trabajo se conservan en `src/assets/`; no se sirven completos ni se publican las referencias fotográficas en Pages.

Los nombres y marcas de terceros pertenecen a sus respectivos titulares. Los recursos visuales y las ilustraciones no se ofrecen automáticamente bajo una licencia de reutilización. No se ha definido todavía una licencia para el código de este repositorio. La entrega de una imagen para integrar no equivale a una verificación de derechos de terceros; antes de publicar se mantiene pendiente confirmar los permisos pertinentes, incluidos los elementos de Cinnamoroll.
