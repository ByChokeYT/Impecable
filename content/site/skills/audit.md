---
tagline: "Control de calidad técnica en 5 dimensiones con niveles de severidad P0 a P3."
---

## Cuándo usarlo

`/audit` es el equivalente técnico de `/critique`. Mientras que `/critique` se pregunta "si esto se siente bien", `/audit` pregunta "si esto aguanta el tipo". Ejecuta comprobaciones de accesibilidad, rendimiento, temas (color/modo oscuro), diseño responsivo y antipatrones contra la implementación, califica cada dimensión del 0 al 4 y produce un plan de acción clasificado por prioridades P0 a P3.

Úsalo antes de pasar a producción, durante un sprint de calidad o cada vez que un responsable técnico diga "deberíamos revisar la accesibilidad".

## Cómo funciona

La habilidad escanea tu código a través de cinco dimensiones clave:

1. **Accesibilidad**: contraste según WCAG, roles ARIA, navegación por teclado, HTML semántico y etiquetas de formularios.
2. **Rendimiento**: saltos de diseño (layout thrashing), animaciones costosas en rendimiento, falta de carga diferida (lazy loading) y peso del paquete (bundle).
3. **Temas**: colores harcodeados en el código, soporte de modo oscuro y consistencia en el uso de tokens.
4. **Responsivo**: comportamiento en puntos de interrupción, objetivos táctiles y manejo de la pantalla en móviles.
5. **Antipatrones**: las mismas 25 comprobaciones deterministas que realiza el detector.

Cada dimensión recibe una puntuación de 0 a 4. Cada hallazgo recibe una prioridad: P0 bloquea el lanzamiento, P1 debe solucionarse en el sprint actual, P2 se planifica para el siguiente ciclo y P3 es para pulido menor. Recibes un único informe estructurado que puedes copiar directamente a tu gestor de tareas (como Jira o GitHub Issues).

`audit` no corrige nada directamente; su función es documentar y analizar. Canaliza los hallazgos hacia `/polish`, `/harden` u `/optimize` dependiendo de su categoría.

## Pruébalo

```
/audit el flujo de pago
```

Resultado esperado:

```
Accesibilidad: 2/4 (parcial)
  P0: Faltan etiquetas visibles en 4 campos de entrada
  P1: Contraste de 3.1:1 en el estado desactivado del botón
  P2: Sin indicador de enfoque visible en el menú desplegable personalizado

Rendimiento: 3/4 (bueno)
  P1: La imagen principal no tiene carga diferida (340KB)
  ...
```

Asigna las tareas P0 a `/harden`, las P1 de temas y tipografía a `/typeset` y `/polish`, y el resto a `/polish`.

## Problemas comunes

- **Confundirlo con `/critique`.** `audit` evalúa la calidad de la implementación. `critique` evalúa la calidad del diseño y la experiencia de usuario. Ejecuta ambos para obtener una visión completa.
- **Corregir tareas P3 antes que las P0.** La escala de prioridades existe por una razón. Comienza siempre por el nivel superior.
- **Omitir las dimensiones que asumes que están bien.** Los temas y el diseño responsivo son las áreas que la mayoría de los desarrolladores asumen que funcionan correctamente hasta que se prueban en profundidad.
