---
tagline: "Añade color estratégico a interfaces monocromáticas sin caer en lo estridente."
---

## Cuándo usarlo

`/colorize` es el contrapeso a la tendencia de hacer "todo gris". Paneles de control (dashboards) que parecen una pared beige, formularios sin ningún color de acento o páginas de contenido que podrían pertenecer a cualquier producto SaaS genérico. Úsalo cuando la interfaz sea funcional pero emocionalmente plana, y desees aportar calidez sin caer en la típica paleta de colores de IA (degradados de púrpura a rosa, neón cian, brillos intensos sobre modo oscuro).

## Cómo funciona

La habilidad comienza leyendo el color de tu marca (si existe en tu configuración) y luego decide en qué partes de la interfaz el color se gana su lugar:

1. **La acción principal** obtiene la expresión más fuerte del tono de la marca.
2. **Los acentos secundarios** obtienen variantes atenuadas o matizadas, no un segundo color completo que compita con el principal.
3. **Los colores neutros** se tiñen ligeramente hacia el tono de la marca con una croma muy baja (alrededor de 0.005 a 0.01), lo cual es casi imperceptible por píxel pero crea una cohesión visual subconsciente.
4. **Las categorías de contenido** obtienen un sistema de acentos limitado e intencionado, nunca un arcoíris de colores.

De manera crucial, utiliza OKLCH en lugar de HSL para que los pasos de luminosidad se vean perceptualmente uniformes. A medida que la luminosidad se acerca a los extremos (blanco o negro), la croma disminuye de forma automática. Así es como se consigue un color que se siente diseñado con criterio, no calculado por una fórmula matemática.

## Pruébalo

```
/colorize el panel de control (dashboard)
```

Cambios esperados:

- El color de la marca pasa de un valor hex rígido a `--color-accent: oklch(62% 0.18 240)`.
- Los neutros se tiñen con una croma de 0.007 hacia el tono de la marca.
- El botón principal obtiene el color de acento completo; los botones secundarios se configuran en tonos neutros tipo tinta/bruma.
- Las series de gráficos utilizan 3 tonos distintos con luminosidad equivalente, evitando que una serie domine visualmente sobre las demás.
- La ilustración del estado vacío recibe un baño de color con un acento suave.

## Problemas comunes

- **Ejecutarlo sin definir un color de marca.** `colorize` necesita un punto de partida. Si `.impeccable.md` no especifica uno, te lo preguntará. No dejes que el modelo elija los colores genéricos predeterminados de la IA.
- **Esperar que corrija la paleta de colores de la IA.** Si tu diseño actual ya tiene degradados morados y cian neón, primero debes ejecutar `/quieter`, y luego aplicar `/colorize` para reconstruir con mejor criterio.
- **Usarlo en interfaces que ya tienen mucho color.** Ese es un trabajo para `/quieter`. `colorize` añade color, no lo elimina.
