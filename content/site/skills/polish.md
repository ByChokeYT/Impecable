---
tagline: "El meticuloso pase final que separa lo bueno de lo excelente."
---

## Cuándo usarlo

`/polish` es el último paso que ejecutas antes de subir a producción. Busca y corrige los pequeños detalles que marcan la diferencia entre una funcionalidad simplemente terminada y una impecable: desalineaciones de medio píxel, espaciados inconsistentes, estados de enfoque (focus) olvidados, transiciones de carga que parpadean o textos que varían en su tono. También alinea el código con tu sistema de diseño, reemplazando valores manuales (hardcoded) por tokens, sustituyendo componentes personalizados por los compartidos del sistema y corrigiendo desviaciones de los patrones establecidos.

Recurre a él cuando la funcionalidad esté completa, todo funcione bien pero sientas que falta refinamiento. También cuando el código se haya desviado del sistema de diseño y necesite alinearse de nuevo.

## Cómo funciona

`/polish` comienza explorando tu sistema de diseño (tokens, escalas de espaciado, componentes compartidos) y luego trabaja de forma metódica en seis dimensiones:

1. **Alineación visual y espaciado**: adhesión estricta a la cuadrícula, consistencia en la escala de espaciado y alineación óptica de iconos.
2. **Tipografía**: consistencia en la jerarquía, longitud de línea óptima, control de líneas viudas y huérfanas, y ajuste de interlineado (kerning) en encabezados principales.
3. **Color y contraste**: uso correcto de tokens, paridad de temas (claro/oscuro), relaciones de contraste según WCAG e indicadores de enfoque legibles.
4. **Estados interactivos**: hover, focus, active, disabled, loading, error y success. Asegura que todos los estados tengan tratamiento visual.
5. **Transiciones y movimiento**: suavizado correcto (easing), evitando saltos bruscos en el layout y respetando `prefers-reduced-motion`.
6. **Textos**: tono consistente en la voz, conjugación correcta, eliminación de textos de prueba y comentarios TODO olvidados.

Esta habilidad tiene una regla clara: pulir es el último paso, no el primero. Si la funcionalidad aún no está completa en su lógica, pulirla es trabajo perdido.

## Pruébalo

```
/polish la página de precios
```

Un resultado típico del proceso:

```
Alineación visual: corregidos 3 elementos fuera de la cuadrícula (base de 8px)
Tipografía: ajustado el espaciado del h1, corregida línea viuda en el testimonio
Interacción: añadido estado hover en preguntas frecuentes, anillo de enfoque en el input de email
Movimiento: suavizada la entrada del modal, añadida alternativa de reducción de movimiento
Textos: eliminado un texto de prueba residual, alineado el tono del botón
```

Cinco correcciones precisas, sin reescrituras estructurales. Ese es el resultado ideal de un pase de pulido.

## Problemas comunes

- **Pulir trabajo inacabado.** Si aún hay comentarios TODO en el código que afectan al flujo, no es el momento. Ejecuta `/polish` únicamente sobre funcionalidades terminadas.
- **Tratar el pulido como un rediseño.** Pulir refina lo que ya existe. Si te encuentras reestructurando la distribución completa de una página, necesitas `/critique` o `/layout` en su lugar.
- **Ejecutar `/polish` sin hacer `/audit` primero.** El pulido corrige sensaciones y detalles visuales. La auditoría corrige problemas medibles y técnicos. Usa ambos.
