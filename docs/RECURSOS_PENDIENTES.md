# Recursos visuales y datos pendientes

## Inventario integrado

El 9 de octubre de 2026 el usuario entregó seis activos independientes y pidió renombrarlos antes de subirlos a `Dafovi/CartaCraft`. Se copiaron a `src/assets/` sin modificar los archivos de Descargas, sin generar personajes y sin recortar el mockup. Astro optimiza y redimensiona estas imágenes a WebP en el build, preservando su transparencia cuando existe.

| Nombre en el proyecto | Adjunto original (sufijo) | Tamaño original | Uso |
| --- | --- | --- | --- |
| `hero-carta-gato.png` | `03_02_09 p.m-1.png` | 1672 × 941 | Hero con Carta de espaldas y gato naranja; imagen social OG. |
| `carta-comunidad.png` | `03_02_10 p.m-2.png` | 1672 × 941 | Panel «Qué es CartaCraft», con el texto propio de la ilustración. |
| `launcher-habitacion.png` | `03_02_11 p.m-3.png` | 1672 × 941 | Panel de launcher. |
| `carta-twitch.png` | `03_02_11 p.m-4.png` | 1448 × 1086, transparente | Carta abrazando a Cinnamoroll en la sección de Twitch. |
| `cartacraft-logo.png` | `03_02_13 p.m-5.png` | 2172 × 724, transparente | Logo en header, hero y footer. |
| `gato-naranja.png` | `03_02_14 p.m-6.png` | 1122 × 1402, transparente | Compañero ilustrado en la página de proyecto. |

Los principales recursos ilustrativos que faltaban ya están integrados. Se retiraron el paisaje y la habitación provisionales de CSS, el logo textual provisional y los avatares de reemplazo. El hero usa únicamente la ilustración independiente, detrás de títulos y botones HTML reales. No hay fotos de gatos ni captura completa del mockup en la web. Las seis referencias iniciales se conservan en `referencias/` y no se incluyen en `dist/`.

Se utiliza el favicon decorativo SVG existente; un isotipo oficial específico de favicon puede añadirse si se entrega. No bloquea el build.

## Datos y revisión que siguen pendientes

- Correo público o canal dedicado de soporte/privacidad. No se inventó ninguno; la página muestra Twitch y explica el pendiente.
- Revisar el código real del launcher y los flujos Microsoft/Minecraft antes de precisar autenticación, tratamiento de identificadores/tokens, almacenamiento, retención y borrado. La web informa únicamente de funciones previstas.
- Antes de una política definitiva: confirmar responsable del proyecto, canal de derechos/privacidad y alojamiento efectivo.
- Las ilustraciones entregadas contienen Cinnamoroll y elementos de terceros. El usuario autorizó incorporarlas y subir el proyecto; ello no verifica derechos de terceros. Mantener la comprobación de permisos de uso público antes de activar Pages. No se generó arte nuevo ni se afirma disponer de licencias no verificadas.

El repositorio confirmado es **https://github.com/Dafovi/CartaCraft**, con rama `master`, y el destino preparado es `https://dafovi.github.io/CartaCraft/`. El workflow se ejecuta exclusivamente de forma manual. La subida del código y la publicación de Pages son operaciones separadas.
