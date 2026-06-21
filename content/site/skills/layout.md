---
tagline: "Corrige la distribución, el espaciado y el ritmo visual."
---

## Cuándo usarlo

`/layout` es para páginas donde técnicamente no hay errores, pero el contenido no tiene espacio para respirar. Relleno (`padding`) idéntico en todas partes, cuadrículas de tarjetas monótonas, textos que llegan de borde a borde de la pantalla o una jerarquía visual que depende únicamente del tamaño de la fuente. Úsalo cuando la distribución "se sienta rara" y no logres identificar el motivo exacto.

Buenas razones para usarlo: "todo se siente amontonado", "parece un muro de contenido", "no sé a dónde mirar primero".

## Cómo funciona

La habilidad analiza y corrige la distribución espacial a través de cinco dimensiones:

1. **Espaciado**: ¿La escala de espaciado es consistente o hay huecos aleatorios de 13px? ¿Los elementos relacionados se agrupan estrechamente con espacios generosos entre grupos? ¿Existe algún ritmo visual?
2. **Jerarquía visual**: ¿La vista del usuario se dirige a la acción principal en menos de 2 segundos? ¿La jerarquía ayuda a estructurar o todos los elementos compiten por la atención?
3. **Cuadrícula y estructura**: ¿Existe una cuadrícula subyacente o el diseño es aleatorio? ¿Los elementos están alineados correctamente con sus líneas base?
4. **Ritmo**: ¿La página alterna de forma dinámica entre espaciados ajustados y generosos, o todo es uniforme y monótono?
5. **Densidad**: ¿La distribución es demasiado apretada o desperdicia espacio? ¿La densidad visual se adapta al tipo de contenido?

Las correcciones suelen consistir en reconstruir la escala de espaciado, introducir asimetrías, transformar cuadrículas monótonas en una distribución variada con elementos principales y de apoyo, y dar espacio real a las acciones primarias.

## Pruébalo

```
/layout la página de configuración
```

Cambios típicos:

- La escala de espaciado se unifica en múltiplos de 4pt (8 / 16 / 24 / 48 / 96px).
- Los saltos de sección se establecen en 48px, los espacios entre filas en 16px y los grupos de campos de formulario en 8px.
- Las acciones principales se separan del flujo del formulario con un margen de 32px.
- Se eliminan los bordes decorativos innecesarios, reemplazándolos por agrupaciones basadas en el espaciado.
- Se reequilibran las proporciones de la barra lateral y la columna principal (ej. 280px / flex en lugar de porcentajes rígidos).

## Problemas comunes

- **Confundir ordenar (`layout`) con simplificar (`distill`).** Si el problema es que hay demasiados elementos en pantalla, ejecuta `/distill` primero. `layout` es para organizar un conjunto de elementos que ya es el adecuado.
- **Esperar que rescate una cuadrícula rota.** Si la página no tiene una estructura de cuadrícula clara, esta habilidad construirá una desde cero. Ten en cuenta que la diferencia en el código (diff) será mayor de lo esperado.
- **Ignorar el veredicto de jerarquía.** Si la habilidad te indica que "nada es principal", ningún ajuste de espaciado solucionará eso. Necesitas tomar una decisión sobre el contenido, no un ajuste de diseño.
