# Verificación de la primera versión

Fecha: 9 de octubre de 2026.

## Comandos ejecutados y resultados

| Comando | Resultado |
| --- | --- |
| `npm install` | 267 paquetes instalados; auditoría de instalación: 0 vulnerabilidades reportadas. Se generó `package-lock.json`. |
| `npm run check` | 22 archivos comprobados; 0 errores, 0 advertencias, 0 sugerencias. |
| `npm run build` | Build estático correcto; 5 páginas y 22 variantes WebP de los seis recursos entregados. |
| `npm run verify` | 5 páginas y 147 referencias locales válidas bajo `/CartaCraft/`, incluidas imágenes OG. |
| `npm run preview -- --host 127.0.0.1 --port 4323 --ignore-lock` | Preview local para revisar la versión con arte definitivo. |

El primer intento de Astro Check encontró una restricción de escritura de la telemetría de Astro en la configuración global. Se resolvió desactivando la telemetría en `scripts/astro.mjs` para los comandos del proyecto. El primer preview sandbox no fue accesible por loopback; el preview local para QA se ejecutó con autorización del entorno y se verificó en navegador. Ninguno de estos incidentes requiere cambios globales del usuario.

## Navegador y responsive

Se abrieron directamente Inicio, Proyecto, Launcher, Privacidad y Contacto bajo el subdirectorio real `/CartaCraft/` a **360, 768 y 1440 px**. En las quince combinaciones:

- El ancho desplazable coincide con el ancho de contenido: no hay scroll horizontal.
- Existe exactamente un h1 y el título corresponde a la página.
- No se detectaron imágenes rotas ni errores/advertencias de consola.
- Se verificaron la navegación visible y las rutas interiores.

La home también se comprobó a **390 y 1024 px**, sin desbordamiento. Se revisó visualmente el escritorio completo y la vista móvil. El menú móvil abre con Enter; Escape lo cierra, actualiza `aria-expanded`, oculta la navegación y devuelve foco al botón.

Capturas locales guardadas en `qa/home-desktop.jpg` (1440 px) y `qa/home-mobile.jpg` (360 px). `qa/` está ignorada; no se publica ni forma parte del sitio estático.

## Recursos y contenido

- `verify-build.mjs` comprueba destinos internos, anclas, fuentes CSS, srcset, favicon, canonical, títulos, descripciones, idioma, h1, alt, dimensiones e imágenes OG; los enlaces en pestaña nueva incluyen `noopener noreferrer`.
- Los seis PNG independientes (aproximadamente 12 MB en conjunto) se transforman en variantes WebP responsive. Hero: aproximadamente 78–329 kB según resolución; logo: aproximadamente 9–90 kB; paneles: aproximadamente 48–160 kB; Twitch y gato: aproximadamente 14–67 kB. Las imágenes inferiores usan carga diferida y dimensiones explícitas. El hero usa prioridad de carga alta.
- Se eliminaron las escenas CSS provisionales. Fuentes WOFF2 latinas: aproximadamente 60 kB en total; los WOFF de compatibilidad también se empaquetan, pero el navegador elige un formato.
- No se incluyen el mockup, banner ni fotos del gato en `dist/`. No se generaron personajes ni se recortaron ilustraciones del mockup.
- El servidor se describe como privado y probado localmente; mods y launcher están en desarrollo. No hay descarga, registro o login simulado.
- Se verificó el aviso exacto de independencia en las cinco páginas.

## Límites y revisión antes de publicar

La revisión de accesibilidad es básica (estructura, teclado, foco, alt, tamaños y colores); no equivale a una auditoría formal WCAG ni a pruebas con todos los lectores de pantalla. Se prepararon fallbacks, navegación disponible sin JS y CSS de reducción de movimiento; no se realizó una prueba automatizada específica con JavaScript desactivado.

El workflow está preparado para ejecución manual; no se ejecutó en GitHub y no se confirmó una publicación de Pages. El repositorio `Dafovi/CartaCraft` y su rama `master` fueron confirmados; la implementación se incorpora sobre su historial existente, conservando la información de proyecto y licencia del README.

Los recursos ilustrativos entregados ya están integrados. Antes de publicar, confirmar permisos de recursos y medio específico de soporte/privacidad. Antes de lanzar el launcher, revisar su código y prácticas reales de datos. El inventario y los pendientes están en `RECURSOS_PENDIENTES.md`.
