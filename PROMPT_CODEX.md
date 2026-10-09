# CartaCraft — Encargo de implementación para Codex

## Rol y objetivo
Actúa como desarrollador frontend senior con criterio de UX/UI, accesibilidad, rendimiento y publicación estática. Construye la primera versión PUBLICABLE de la web oficial CartaCraft desde cero, en este repositorio. El diseño adjunto `referencias/cartacraft-home-aprobada.png` es la referencia visual APROBADA: respétala en estructura, jerarquía, identidad y atmósfera. No propongas otro diseño ni conviertas el mockup en una imagen de fondo.

CartaCraft es un proyecto privado de Minecraft Java Edition para la comunidad de la streamer Cartafilou (Carta): https://www.twitch.tv/cartafilou. Su launcher independiente sigue en desarrollo. Necesitamos una URL pública real para presentar qué es CartaCraft y qué hará CartaCraft Launcher en procesos asociados a Microsoft/Minecraft Services. No afirmes aprobación, asociación oficial, inicio de sesión ya funcionando ni descargas disponibles.

## Referencias en orden de prioridad
1. `referencias/cartacraft-home-aprobada.png`: composición de la página, secciones y dirección estética FINAL. En el hero hay una gata/personaje anime de espaldas y un GATO NARANJA ATIGRADO (no Cinnamoroll). NO hay cascada en el fondo del hero. Mantener ambas decisiones.
2. `referencias/avatar-original-carta.png`: identidad exacta de Carta para las ilustraciones, silueta delgada, cabello largo rojo cereza, orejas blancas con negro, gafas rosadas, pasadores negros en X, chaqueta negra, top lila, collar de corazón. No reinterpretarla como una persona de proporciones voluminosas.
3. `referencias/gato-referencia-1.png`, `gato-referencia-2.png`, `gato-referencia-3.png`: naranja atigrado, ojos verdosos, orejas prominentes, complexión delgada, cola anillada. El hero debe tener una ilustración inspirada en el gato, NO incrustar las fotografías en la web.
4. `referencias/banner-original-cartafilou.png`: colores y estética original streamer, estrellas, rosa fucsia, violeta, azul nocturno, energía kawaii y cósmica.

IMPORTANTE SOBRE ACTIVOS: Las referencias NO equivalen a ilustraciones finales separadas. No recortes a ciegas del mockup para obtener componentes si quedan textos, bordes o partes de otros elementos. Construye la interfaz con HTML/CSS/astro y usa solo ilustraciones bien recortadas o activos independientes que se puedan utilizar sin artefactos. NO generes personajes sustitutos arbitrarios. Si te faltan hero art o ilustraciones separadas, crea un layout de calidad con fondos CSS/gradientes/decoración CSS, con espacios claramente preparados y documenta qué activos faltan; NO uses la captura entera como fondo ni fabriques imágenes inexistentes. Puedes utilizar el avatar original como referencia; no uses una foto del gato donde debería ir el personaje ilustrado. Si hay herramientas de generación de imágenes disponibles, solicita aprobación antes de reemplazar o generar los personajes definitivos.

## Stack y alcance
- Astro (versión estable compatible) con TypeScript estricto, CSS modular o global organizado. Evitar React salvo necesidad demostrada.
- Web estática, sin backend, base de datos, cuentas, analytics, cookies publicitarias ni dependencias innecesarias.
- GitHub Pages. Preparar `astro.config.*` con `site: 'https://dafovi.github.io'` y `base: '/CartaCraft/'` si el repositorio será `dafovi/CartaCraft`. Comprobar las rutas y assets con ese subdirectorio. Si el repositorio final cambia, dejar el valor configurable y documentarlo.
- Crear GitHub Actions de despliegue de Astro a Pages si el repo tiene ese destino. No hacer push ni publicar sin permiso explícito; sí dejar instrucciones.
- Fuente: titulares amigables tipo Fredoka; cuerpo tipo Nunito Sans, con fallbacks locales y font-display adecuado; evaluar coste de fuentes remotas y privacidad. Iconografía consistente de una biblioteca pequeña o SVGs propios.
- Paleta aproximada: #080B25, #121636, #211047, #FF4AAE, #4385FF, #B97CFF, #C41249, #F9EAFB. Son puntos de partida; ajustar para contrastes WCAG.

## Estructura requerida y fidelidad al mockup
1. HEADER: logo textual CartaCraft, navegación Inicio / Proyecto / Launcher / Privacidad / Contacto, botón o CTA que no simule registro ni acceso inexistente. Menú responsive operable con teclado.
2. HERO: bienvenida a CartaCraft, subtítulo 'Una aventura de Minecraft creada para la comunidad de Carta.', CTA a la descripción del proyecto y CTA a la página/section launcher. Fondo nocturno voxel/fantasía, luces cálidas, construcción o castillo lejano, árboles rosados; SIN cascadas. Carta de espaldas, junto al gato naranja ilustrado, SOLO si hay recursos de arte finales adecuados.
3. QUÉ ES CARTACRAFT: es un proyecto PRIVADO de Minecraft Java creado para comunidad de Cartafilou. Mods propios y eventos en desarrollo; evitar texto que los anuncie como ya disponibles. Ilustración lateral de Carta y Cinnamoroll únicamente cuando exista un asset apropiado y haya autorización para usarlo públicamente.
4. LAUNCHER: presentación de CartaCraft Launcher, etiqueta 'En desarrollo', explicar inicio de sesión oficial Microsoft/Minecraft, verificación de licencia, instalación/actualización de dependencias y mods como FUNCIONES PREVISTAS. Añadir aviso visible 'Aún no disponible para descarga pública'. Nada de botones de descarga funcionales o enlaces falsos.
5. ESTADO DEL PROYECTO: tarjetas para Servidor privado (probado localmente, no abierto al público), Mods propios (en desarrollo), Launcher (en desarrollo) y Comunidad (en formación/impulsada por Carta). No indicar cifras de jugadores ni 'siempre activa' sin confirmación.
6. TWITCH: sección con enlace real https://www.twitch.tv/cartafilou (target/rel adecuados). No integrar tracking de Twitch por defecto.
7. FOOTER: navegación funcional + aviso EXACTO: 'CartaCraft es un proyecto independiente de la comunidad y no está afiliado, patrocinado ni respaldado por Mojang Studios o Microsoft.' No mostrar redes sociales sin URLs verificadas.
8. PÁGINAS INDEPENDIENTES: `/proyecto/`, `/launcher/`, `/privacidad/`, `/contacto/`; coherencia visual y contenido conciso. Evitar páginas vacías o lorem ipsum. Si no hay correo de contacto público autorizado, NO inventarlo: incluir Twitch como canal público y marcar en documentación que falta un medio específico de soporte/privacidad antes de la revisión final.

## Privacidad y precisión técnica
- Texto claro y verificable sobre la WEB, sin asumir que toda ausencia de analytics significa ausencia de tratamiento por GitHub u otros terceros. Explicar hosting y potenciales registros del proveedor con prudencia.
- Distinguir las FUNCIONES FUTURAS del launcher de las prácticas IMPLEMENTADAS. Microsoft OAuth puede implicar procesamiento de identificadores/tokens y servicios de Microsoft; NO afirmar manejo exacto de tokens, almacenamiento, retención, cifrado o borrado sin revisar la implementación real del launcher. Señalar esta revisión como condición antes de una versión legal definitiva.
- No crear una política aparentemente definitiva con afirmaciones no verificadas. Añadir estado/bloques TODO informativos en documentación, pero la página publicada debe ser legible y honesta.
- No utilizar marcas/logos oficiales como si CartaCraft fuera oficial. No distribuir archivos propietarios Minecraft. Cinnamoroll es un personaje de terceros: no generar ni publicar arte nuevo basado en él sin comprobar autorización de uso; dejar assets opcionales y documentados.

## Calidad e ingeniería
- Semántica HTML real: un solo h1 por página, landmarks, encabezados jerárquicos, textos alternativos relevantes, foco visible, navegación por teclado y contraste suficiente.
- Animaciones discretas; prefers-reduced-motion; sin parallax pesado ni lluvia constante de partículas.
- Responsive desde 360px hasta 1440px+, sin desbordamiento horizontal; tipografía fluida, imágenes optimizadas en WebP/AVIF cuando proceda, lazy loading fuera de hero, tamaños para evitar CLS.
- SEO: titles/descriptions por página, canonical consistente, OG y favicon cuando existan recursos válidos, sitemap opcional.
- Componentización proporcional: Header, Footer, Layout, Hero, SectionTitle, StatusCard, ProjectCTA; datos configurables sin sobreingeniería.
- `README.md` con instalación, scripts, estructura, pendientes de assets, GitHub Pages, checks, privacidad y publicación. Crear `.gitignore`, scripts de build y `astro check`.
- No incorporar secretos, credenciales, client secrets ni IDs de Microsoft al frontend sin necesidad. No implementar autenticación en la web (solo explicar el launcher).

## Plan de ejecución
Fase 1: inspeccionar repositorio y referencias, describir en pocas líneas la arquitectura y los activos faltantes, y mostrar plan de archivos. Si hay estructura existente, conservar lo útil.
Fase 2: implementar homepage y páginas informativas con la máxima fidelidad alcanzable sin recursos inventados; usar CSS y componentes reales. Trabajar sección por sección.
Fase 3: ejecutar instalación, chequeo de tipos, build de producción y validación de enlaces/rutas con `base='/CartaCraft/'`; corregir fallos.
Fase 4: entregar reporte final: archivos creados, comandos ejecutados y resultados, URL esperada sin fingir que ya está publicada, instrucciones de publicación y lista breve de activos/datos pendientes para lograr fidelidad total.

Criterio de éxito: la home se reconoce como el diseño aprobado, es una web REAL, la información es cierta y apta para presentar el proyecto, corre en móvil y GitHub Pages, y jamás se convierte en un pantallazo del mockup. No hacer commit/push ni publicar sin mi autorización.
