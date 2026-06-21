---
title: Primeros pasos
tagline: "De cero a tu primer pase de /polish en cinco minutos."
order: 1
description: "Instala Impeccable, ejecuta /impeccable teach una vez para establecer el contexto del proyecto y ejecuta /polish en algo que ya exista. El camino más rápido para ver qué cambia Impeccable en el diseño generado por IA."
---

## Qué construirás

Terminarás este tutorial con Impeccable instalado en tu proyecto, un archivo `.impeccable.md` que capture tu marca y audiencia, y una página pulida a mano que haya pasado por un flujo `/polish`. Tiempo total: unos cinco minutos.

## Requisitos previos

- Un asistente de desarrollo con soporte para habilidades: Claude Code, Cursor, Gemini CLI, Codex CLI o cualquier otra herramienta compatible.
- Un proyecto con al menos un archivo HTML o componente que desees mejorar. Una página de inicio recién creada sirve perfectamente.

## Paso 1. Instalación

Desde la raíz de tu proyecto, ejecuta:

```
npx skills add pbakaus/impeccable
```

Esto detecta de forma automática tu entorno de IA y escribe los archivos de habilidades en la ubicación correcta (por ejemplo, `.claude/skills/`, `.cursor/skills/`). Recarga tu asistente y escribe `/`. Deberías ver `/impeccable`, `/polish`, `/critique` y los demás comandos en el autocompletado.

## Paso 2. Enseñar a Impeccable sobre tu proyecto

Este es el paso más importante. El diseño sin contexto produce resultados genéricos. El comando `/impeccable teach` ejecuta una breve entrevista de descubrimiento y escribe un archivo `.impeccable.md` en la raíz de tu proyecto.

Ejecuta:

```
/impeccable teach
```

La habilidad te hará algunas preguntas clave:

- **¿Para quién es este producto?** Sé específico. No pongas "usuarios", sino "fundadores en solitario que evalúan una nueva herramienta en sus teléfonos entre reuniones".
- **¿Cuál es la voz de la marca en tres palabras?** Elige palabras con significado. "Cálido, mecánico y obstinado" es mejor que "moderno y limpio".
- **¿Cómo debería sentirse la interfaz?** Adjetivos concretos. "Calmado, confiable, rápido" o "juguetón, atrevido, un poco caótico".
- **¿Alguna referencia visual?** Capturas de pantalla, sitios web o sistemas de diseño que admires.
- **¿Referencias negativas?** Cosas a las que el producto no debería parecerse bajo ningún concepto.

Responde con tus propias palabras. La habilidad escribirá un archivo `.impeccable.md` con las respuestas. Cada llamada futura a una habilidad leerá este archivo de forma automática.

Abre `.impeccable.md` y lee lo que ha escrito. Modifica lo que no se sienta del todo correcto. El archivo te pertenece y es tuyo.

## Paso 3. Pulir algo existente

Elige una página que ya esté creada. Una página "Sobre nosotros", una pantalla de configuración, una tabla de precios o cualquier otra. Ejecuta:

```
/polish la página de precios
```

La habilidad revisará la alineación, el espaciado, la tipografía, el color, los estados de interacción, las transiciones y los textos. Realizará correcciones específicas, no una reescritura completa. Espera una serie de pequeños cambios en el código que juntos elevarán la página de "terminada" a "terminada con excelencia".

Un pase típico de pulido se ve así:

```
Alineación visual: corregidos 3 elementos fuera de cuadrícula
Tipografía: ajustado el espaciado del h1, corregida línea viuda en la lista de características
Color: reemplazado un color hex por el token --color-accent
Interacción: añadidos estados hover en los elementos de P+F
Movimiento: suavizada la entrada del modal a 220ms ease-out-quart
Textos: eliminado un texto de prueba residual 'Lorem ipsum'
```

Revisa los cambios en el código (diff). Si algo no se siente correcto, pídele al modelo que te explique el cambio. Si sigues sin estar de acuerdo, reviértelo. Impeccable tiene criterio y opinión, pero no es infalible.

## Qué probar a continuación

- `/critique la landing page` ejecuta una revisión de diseño completa con puntuaciones, pruebas de personas y detección automatizada de antipatrones. Es la mejor manera de encontrar qué corregir después.
- `/audit el proceso de compra` ejecuta comprobaciones de accesibilidad, rendimiento, temas, diseño responsivo y antipatrones. Muy útil antes de lanzar a producción.
- `/impeccable craft una página de precios para clientes corporativos` ejecuta el flujo completo de planificación y construcción desde cero.

## Problemas comunes

- **La habilidad dice "no se encontró contexto de diseño"**. Te saltaste el paso 2. Ejecuta `/impeccable teach` primero.
- **Los comandos no aparecen en el asistente**. Recarga la herramienta de IA después de instalar. Si siguen sin aparecer, comprueba que el instalador haya escrito los archivos en la ubicación esperada (por ejemplo, `.claude/skills/`, `.cursor/skills/`) y que tu software esté configurado para leer ese directorio.
- **El pase de pulido modificó algo que te gustaba**. Dilo claramente. Revierte el cambio, dile al modelo exactamente qué edición quieres deshacer y continúa desde ahí.
