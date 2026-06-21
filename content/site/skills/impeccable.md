---
tagline: "La inteligencia de diseño detrás de cada una de las otras habilidades."
---

## Cuándo usarlo

`/impeccable` es la base. Enseña a tu entorno de IA a diseñar, sin rodeos. Todos los demás comandos de este paquete se apoyan en él para obtener principios de diseño, antipatrones, tipografía, color y guía de distribución (layout).

Llama a `/impeccable` directamente cuando desees un diseño libre con el manual completo cargado. O bien usa uno de los submodos:

### /impeccable craft {#craft}

El flujo completo de planificar y construir (shape-then-build). Comienza ejecutando `/shape` internamente (una entrevista estructurada de descubrimiento sobre el propósito, la audiencia y los objetivos), luego pasa a la implementación con iteración visual, comprobando el resultado en el navegador hasta lograr un acabado pulido y de alta calidad. Es ideal para nuevas funcionalidades desde cero donde deseas pensar antes de construir, sin tener que gestionar cada paso de forma manual.

### /impeccable teach {#teach}

Configuración única para el proyecto. Realiza una breve entrevista de descubrimiento sobre tu marca, audiencia y dirección estética, y luego escribe un archivo `.impeccable.md` en la raíz del proyecto que cualquier llamada futura a una habilidad leerá de forma automática. Ejecútalo una vez por proyecto antes de realizar cualquier trabajo de diseño.

### /impeccable extract {#extract}

Extrae componentes reutilizables, tokens de diseño y patrones de tu código directamente al sistema de diseño. Encuentra patrones de UI repetidos (botones en 12 lugares, tres variantes de tarjeta, colores hex dispersos), los extrae en primitivas compartidas y migra todos los elementos que los llaman. Es mejor usarlo una vez que el producto haya madurado lo suficiente como para revelar los patrones reales; una extracción prematura crea abstracciones que no se ajustan a la realidad.

## Cómo funciona

La mayoría de las interfaces generadas por IA fallan del mismo modo: fuentes genéricas, degradados morados, cuadrículas de tarjetas repetitivas y glassmorphism en todas partes. `/impeccable` le da a tu IA un punto de vista sólido. Carga un manual de diseño con opinión propia junto a una larga lista de antipatrones, y luego impulsa al modelo a comprometerse con una dirección estética clara antes de escribir una sola línea de código.

La habilidad tiene integrado un **Protocolo de Recopilación de Contexto**. No diseñará nada hasta que sepa quién usa el producto, qué intenta lograr y cómo debería sentirse la interfaz. Si aún no existe contexto, te pedirá que ejecutes `/impeccable teach` primero. Esto es intencionado: diseñar sin contexto produce basura visual (slop), y evitar esa basura es la razón por la que existe este paquete.

## Pruébalo

Desde un proyecto limpio, ejecuta una vez:

```
/impeccable teach
```

Responde a las preguntas de descubrimiento. La habilidad escribirá un archivo `.impeccable.md` con tu marca, audiencia y dirección estética. Cada llamada futura la leerá automáticamente.

Luego construye algo:

```
/impeccable build me a pricing page for a developer tool
```

Deberías obtener una página que se comprometa con una dirección estética clara, utilice fuentes no predeterminadas, evite la paleta de colores de IA y tenga un punto de vista real.

## Problemas comunes

- **Omitir `/impeccable teach`.** Sin un archivo `.impeccable.md`, la habilidad tendrá que hacerte preguntas sobre el contexto sobre la marcha, interrumpiendo el flujo. Es más rápido configurarlo una vez al principio.
- **Tratarlo como una guía de estilo rígida.** Es un compañero de diseño con opiniones, no un linter. Las reglas por defecto existen para elevar la calidad mínima, no para anular tu criterio. Si tienes una razón de peso para no seguirlas (guía de marca, restricción de accesibilidad, investigación de usuarios que diga lo contrario), explícalo. La habilidad se adaptará. Lo que produce peor resultado es ignorar las directrices de diseño sin dar una justificación.
- **Esperar que corrija código existente.** Para eso, es mejor recurrir a `/polish`, `/distill` o `/critique`. `/impeccable` está diseñado para la creación desde cero.
