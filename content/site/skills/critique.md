---
tagline: "Una revisión de diseño con puntuaciones, pruebas de personas y detección automatizada."
---

## Cuándo usarlo

Recurre a `/critique` cuando desees una segunda opinión honesta sobre algo que ya has construido. No para verificar si funciona, sino para evaluar "si es realmente bueno". La habilidad califica tu interfaz según las 10 heurísticas de Nielsen, realiza comprobaciones de carga cognitiva, la evalúa a través de diferentes perfiles de personas (arquetipos de usuario) y la cruza con el detector determinista en busca de 25 antipatrones concretos.

Úsalo cuando una página esté funcionalmente terminada y quieras saber si se lee como algo diseñado intencionalmente o como basura visual de la IA (slop).

## Cómo funciona

`/critique` ejecuta dos evaluaciones independientes en paralelo para evitar sesgos:

La primera es una **revisión de diseño por LLM**: el modelo lee tu código fuente, inspecciona visualmente la página en vivo si la automatización del navegador está disponible y contrasta todo con el catálogo de directrices SÍ/NO de Impeccable. Evalúa las heurísticas de Nielsen, cuenta los fallos de carga cognitiva, traza el recorrido emocional a través del flujo y señala indicios de diseño genérico de IA.

La segunda es un **detector automatizado** (`npx impeccable detect`) que encuentra de forma determinista texto con degradados, paletas moradas, bordes con pestaña lateral, tarjetas anidadas, problemas de longitud de línea y otras huellas visibles del diseño genérico de IA.

Ambos informes se fusionan en una única lista priorizada: qué está funcionando bien, de tres a cinco aspectos que necesitan corregirse y preguntas de diseño valiosas que vale la pena responder antes del lanzamiento.

## Pruébalo

Apunta a una página:

```
/critique la sección principal (hero) de la página de inicio
```

Recibirás un informe puntuado. Estructura típica del resultado:

- **Veredicto de basura de IA (AI slop)**: aprobado / reprobado con los indicios específicos detectados.
- **Puntuaciones heurísticas**: 10 valores, de 0 a 4.
- **Carga cognitiva**: recuento de fallos sobre un máximo de 8.
- **Problemas prioritarios**: de tres a cinco elementos, cada uno explicando qué falla, por qué y cómo corregirlo.
- **Preguntas a resolver**: aquellas decisiones de diseño que la interfaz por sí sola no puede tomar por ti.

A partir de ahí, puedes apoyarte en `/polish` o `/distill` para implementar las correcciones.

## Problemas comunes

- **Ejecutarlo sobre trabajo incompleto.** `/critique` está diseñado para páginas terminadas. Un boceto vacío con tres TODOs obtendrá una mala puntuación porque está inacabado, no porque el diseño sea malo.
- **Ignorar las preguntas del final del informe.** Suelen ser las que tienen mayor impacto al resolverse.
- **Tratar las puntuaciones heurísticas como una calificación escolar.** Son diagnósticos, no evaluaciones punitivas. Obtener un 3/4 en una heurística que importa menos para tu contexto específico es perfectamente aceptable.
