---
tagline: "Atenúa los diseños que resultan demasiado agresivos o estridentes sin perder su intención original."
---

## Cuándo usarlo

`/quieter` es el contrapeso a `/bolder`. Recurre a él cuando una interfaz sea visualmente agresiva, sobreestimulante o intente llamar la atención en todas partes con la máxima intensidad. Colores neón sobre fondo oscuro, texto con degradados por doquier, 6 colores de acento, animaciones en cada elemento y sombras exageradas de 20px. Usa `/quieter` cuando el diseño necesite respirar y desees refinamiento sin perder el punto de vista inicial.

También es muy útil si has ejecutado `/bolder` previamente y el resultado ha quedado un poco exagerado.

## Cómo funciona

La habilidad trabaja reduciendo la intensidad en cuatro ejes:

1. **Color**: desatura, reduce la croma en OKLCH y repliega los acentos a un único color principal más un soporte atenuado. No se permiten más de dos colores intencionados.
2. **Contraste**: suaviza los contrastes extremos entre luces y sombras acortando el rango. Los fondos pasan de negro o blanco puro a tonos papel y tinta.
3. **Decoración**: elimina sombras que no aporten nada, quita bordes que no estructuren y retira degradados que solo aporten "energía" pero no aporten jerarquía real.
4. **Movimiento y efectos**: ralentiza y suaviza las animaciones, elimina cualquier reproducción automática y prescinde de efectos parallax o desenfoques a menos que sirvan a la legibilidad.

La habilidad conserva la intención del diseño. Si el original tenía un punto de vista claro, la versión atenuada mantiene el mismo punto de vista pero con mayor madurez y confianza. Busca refinamiento, no neutralización total.

## Pruébalo

```
/quieter la página de precios
```

Cambios esperados:

- Se elimina el texto con degradado en los precios, reemplazándolo por un color de tinta sólido con un punto más de grosor.
- Los tres colores de acento se reducen a uno solo (ej. magenta) y los otros dos se convierten en variantes neutras.
- Las sombras de las tarjetas pasan de `0 20px 40px rgba(0,0,0,0.2)` a un sutil borde de un píxel (`0 1px 0 var(--color-mist)`).
- El fondo cambia de un degradado oscuro a un color papel con un suave tono crema en la cabecera.
- La animación del hero de 1.2s y 3 elementos escalonados se simplifica a un único desvanecimiento de 260ms.

## Problemas comunes

- **Aplicarlo en exceso.** `/quieter` puede eliminar la personalidad si lo ejecutas sobre algo que ya estaba medido y equilibrado. Úsalo cuando el diseño sea realmente estridente, no cuando sea simplemente asertivo.
- **Confundir atenuar (`quieter`) con simplificar (`distill`).** `quieter` reduce la intensidad visual. `distill` elimina elementos físicos de la interfaz. Son procesos diferentes.
- **Ejecutarlo ante una crítica que dice que la página está "muy cargada".** "Cargada" suele significar que hay demasiados elementos en pantalla, no que sean demasiado intensos. Prueba primero con `/distill`.
