---
title: Crítica con la capa visual
tagline: "Utiliza /critique junto con la capa del navegador para revisar una página activa con datos reales."
order: 2
description: "Ejecuta una crítica de diseño completa que combine la evaluación de LLM, el detector determinista y una capa visual en el navegador para ver exactamente qué elementos activan los antipatrones en la página."
---

## Qué construirás

Ejecutarás una crítica de diseño completa contra una página activa en tu navegador, mostrando cada antipatrón señalado directamente en el elemento que lo causó. Sin capturas de pantalla, sin suposiciones y sin largos informes de texto que tengas que mapear manualmente en tu código.

Tiempo total: unos diez minutos.

## Requisitos previos

- Impeccable instalado en tu proyecto (consulta el tutorial de [primeros pasos](/tutorials/getting-started) si aún no lo has hecho).
- Un entorno de IA que admita automatización del navegador (como Claude Code con su extensión de Chrome o similares).
- Una página que quieras criticar, ya sea en local (`localhost:3000/pricing`) o desplegada en producción.

## Paso 1. Ejecutar /critique

Desde tu asistente de IA, ejecuta:

```
/critique la página de precios en localhost:3000/pricing
```

La habilidad inicia dos evaluaciones independientes en paralelo. Se ejecutan en subagentes separados para que una no influya en la otra.

### Qué hace la evaluación por LLM

La primera evaluación analiza tu código fuente y, si tiene automatización del navegador habilitada, abre la página activa en una nueva pestaña. Recorre el catálogo completo de directrices SÍ/NO de Impeccable y califica la página según las 10 heurísticas de Nielsen, la lista de verificación de carga cognitiva de 8 puntos y el ajuste de marca definido en tu `.impeccable.md`.

Esta pestaña abierta se etiquetará con `[LLM]` en el título del navegador para que puedas identificarla con facilidad.

### Qué hace el detector automatizado

La segunda evaluación ejecuta `npx impeccable detect` sobre la página de forma determinista, evaluando 25 reglas específicas que se activan o no: texto con degradados, paletas moradas, bordes con pestaña lateral, tarjetas anidadas, longitud de línea inadecuada, bajo contraste, texto de cuerpo muy pequeño, entre otras.

Recibirás una respuesta estructurada en JSON con cada hallazgo indicando su selector HTML en la página, la regla activada y una breve descripción.

## Paso 2. Abrir la capa visual (Visual Overlay)

Impeccable incluye un Modo Visual que resalta cada antipatrón detectado directamente en la pantalla de la página. Así es como se ve al ejecutarse en una página de inicio sintética diseñada con estética synthwave (y deliberadamente llena de errores de diseño):

<div class="tutorial-embed">
  <div class="tutorial-embed-header">
    <span class="tutorial-embed-dot red"></span>
    <span class="tutorial-embed-dot yellow"></span>
    <span class="tutorial-embed-dot green"></span>
    <span class="tutorial-embed-title">Capa de detección en vivo</span>
  </div>
  <iframe src="/antipattern-examples/visual-mode-demo.html" class="tutorial-embed-iframe" loading="lazy" title="Capa visual de Impeccable ejecutándose en una página de demostración"></iframe>
</div>

Cada elemento contorneado muestra una etiqueta flotante con el nombre de la regla activada. Pasa el cursor sobre un contorno para ver el informe completo de la regla. Esto es exactamente lo que verás en tu propia página.

Dispones de tres formas de abrir esta capa:

1. **[Extensión de Chrome](https://chromewebstore.google.com/detail/impeccable/bdkgmiklpdmaojlpflclinlofgjfpabf)**: activación a un clic en cualquier página. Pulsa el icono de Impeccable en la barra de herramientas y cada antipatrón se resaltará instantáneamente.
2. **Dentro de `/critique`**: la habilidad abre una pestaña del navegador etiquetada como `[Human]` con el detector activo de forma automática durante la fase del navegador. No necesitas hacer nada adicional.
3. **CLI independiente**: `npx impeccable live` inicia un servidor local que sirve el script del detector. Puedes inyectarlo en cualquier página añadiendo una etiqueta `<script>`.

Para este tutorial, la opción más sencilla es la extensión de Chrome. Instálala, navega a tu página de precios y pulsa el icono de Impeccable. Verás aparecer la capa con los contornos visuales de inmediato.

## Paso 3. Fusionar las dos evaluaciones

De vuelta en tu terminal con tu asistente de IA, `/critique` habrá terminado y mostrará un reporte unificado. El resultado se verá parecido a esto:

```
Veredicto de basura de IA (AI slop): REPROBADO
  Indicios detectados: gradient-text (2), ai-color-palette (1),
                       nested-cards (1), side-tab (3)

Puntuación heurística (promedio 2.8/4):
  Visibilidad del estado del sistema: 3 (bueno)
  Adecuación entre el sistema y el mundo real: 2 (parcial)
  Consistencia y estándares: 2 (parcial)
  ...

Carga cognitiva: 3/8 fallos (moderado)
  Opciones visibles en la decisión principal: 6 (alerta)
  Puntos de decisión acumulados arriba: sí (alerta)
  Divulgación progresiva: ausente en los selectores avanzados de precios

Qué funciona bien:
  - Jerarquía clara en los precios
  - Título principal contundente y con fuerza visual

Problemas prioritarios:
  1. El hero utiliza texto con degradado en el precio principal
     Por qué: indicio típico de IA, reduce el contraste y la legibilidad
     Corrección: usar color de tinta sólido con un punto más de grosor
  2. La tabla de comparación de funciones tiene 4 niveles de tarjetas anidadas
     Por qué: genera ruido visual y confunde la jerarquía
     Corrección: aplanar la estructura a una tabla simple con filas cebradas

Preguntas a resolver:
  - ¿El nivel gratuito es un producto real o solo un canal de captación?
  - ¿Qué siente un usuario al llegar aquí desde un anuncio frente a una búsqueda?
```

## Paso 4. Corregir los problemas

El informe te entrega una lista de tareas prioritarias. Puedes ir resolviéndolas una a una, pedirle al modelo que las corrija todas juntas o seguir cualquier otro flujo. Lo que importa es usar la capa visual para verificar las correcciones:

1. Mantén la pestaña del navegador con la capa abierta.
2. Realiza las correcciones correspondientes en tu código (o pídele a la IA que lo haga).
3. Recarga la página. La capa volverá a escanearla y las marcas de los problemas resueltos desaparecerán.

Este ciclo de retroalimentación inmediata es la razón por la que la capa visual es tan potente. Ves cómo impactan tus cambios en tiempo real y te aseguras de no subir a producción una "solución" que en realidad no resuelva la regla de diseño.

## Paso 5. Volver a ejecutar /critique al terminar

Una vez hayas resuelto la lista de problemas prioritarios, ejecuta `/critique` de nuevo. El objetivo es obtener un veredicto limpio en el apartado de "basura de IA" y al menos una media de 3.5 en las puntuaciones heurísticas. Los fallos de carga cognitiva deberían situarse por debajo de 2.

Si alguna regla sigue activándose, corrígela o escribe un comentario de supresión de regla en el código explicando por qué no aplica en tu contexto específico (el detector respeta directivas especiales de supresión de reglas, pero te aconsejamos usarlas con prudencia).

## Qué probar a continuación

- `/audit la misma página` para detectar los problemas de implementación que la crítica de diseño no cubre (accesibilidad, rendimiento y temas).
- `/polish` si el reporte de crítica está limpio y deseas un pase final de refinamiento y detalle.
- `/distill` si la crítica señala que la página está "muy cargada" o hay problemas de "carga cognitiva". Simplificar elimina lo sobrante.

## Problemas comunes

- **La capa no muestra fallos pero critique sigue señalando problemas**. El detector determinista encuentra patrones de código e implementación. La crítica por LLM evalúa criterios subjetivos de diseño. Son herramientas complementarias, no redundantes.
- **La evaluación del LLM y el detector determinista discrepan**. Es normal. El LLM aplica criterios subjetivos de diseño. El detector evalúa reglas deterministas de código. Si discrepan, analiza ambos puntos de vista y toma una decisión.
- **La capa visual rompe el layout de la página**. Sucede en raras ocasiones si algún estilo CSS propio interfiere con los estilos inyectados de la capa. Utiliza la [extensión de Chrome](https://chromewebstore.google.com/detail/impeccable/bdkgmiklpdmaojlpflclinlofgjfpabf) para tener una experiencia más estable, o ejecuta `npx impeccable detect` desde tu CLI y corrige los problemas a mano.
