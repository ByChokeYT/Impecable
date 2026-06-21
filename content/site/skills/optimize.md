---
tagline: "Diagnostica y corrige el rendimiento de la interfaz de usuario, desde LCP hasta el tamaño del paquete."
---

## Cuándo usarlo

`/optimize` es para interfaces que se sienten lentas. El primer renderizado tarda demasiado, el scroll da tirones, las imágenes aparecen tarde, las interacciones van con lag o el paquete del cliente descarga 800KB de JavaScript. Úsalo cuando las métricas Web Vitals sean deficientes o cuando los usuarios se quejen de que la aplicación va lenta.

No lo uses como una optimización prematura. Si la métrica LCP es de 1.1s y el INP es de 80ms, detente. En ese punto, el trabajo de diseño y funcionalidad importa más.

## Cómo funciona

La habilidad trabaja sobre cinco dimensiones de rendimiento:

1. **Carga y Web Vitals**: LCP, INP, CLS. Identifica qué está bloqueando el primer renderizado, qué retrasa la interacción y qué provoca cambios acumulativos de diseño.
2. **Renderizado**: Re-renders innecesarios, falta de memorización, reconciliaciones costosas en el DOM o lecturas repetidas de propiedades de diseño (layout thrash) dentro de bucles.
3. **Animaciones**: Comprueba si se están animando propiedades de diseño. Asegura que solo se utilicen `transform` y `opacity` y evalúa si la propiedad `will-change` beneficia o perjudica el rendimiento.
4. **Imágenes y recursos**: Carga diferida (`lazy loading`), imágenes responsivas (`srcset`, `sizes`), formatos modernos (WebP, AVIF) y definición explícita de dimensiones para evitar el CLS.
5. **Tamaño del paquete (Bundle size)**: Importaciones no utilizadas, dependencias excesivamente grandes, falta de división de código (`code-splitting`) y código muerto.

La habilidad mide el rendimiento antes y después. Cada corrección se cuantifica. Si un cambio no mejora una métrica, se revierte.

## Pruébalo

```
/optimize la página de inicio
```

Resultado esperado:

```
LCP: 3.2s → 1.4s
  - Imagen de portada precargada (preload) (-800ms)
  - Eliminada hoja de estilos de fuentes que bloqueaba el renderizado (-240ms)
  - Script de analíticas pospuesto (defer) (-180ms)

INP: 240ms → 90ms
  - Función de scroll controlada con debounce
  - Memorización aplicada al renderizado de listas costosas
  - Eliminada lectura síncrona del layout en el bucle de eventos

CLS: 0.18 → 0.02
  - Dimensiones explícitas añadidas a la imagen de portada y al logo
  - Espacio reservado para la etiqueta asíncrona del encabezado

Paquete (Bundle): 340KB → 180KB
  - Eliminada importación completa de lodash no utilizada (52KB)
  - División de código en la ruta del playground (78KB)
  - Eliminado conjunto de iconos obsoletos (30KB)
```

## Problemas comunes

- **Optimizar antes de medir.** Sin métricas de base, es imposible saber qué ha funcionado. Ejecuta `/optimize` basándote en números de Web Vitals reales, no en sensaciones.
- **Perseguir mejoras insignificantes.** Una mejora de 20ms en el INP que requiere una semana de trabajo rara vez compensa. La optimización tiene un retorno decreciente; aprende cuándo detenerte.
- **Olvidar volver a medir tras cada cambio.** La compilación final podría haber empeorado el rendimiento de una forma que la habilidad no predijo. Verifica siempre.
