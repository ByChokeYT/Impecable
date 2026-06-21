---
tagline: "Lleva los diseños conservadores hacia el impacto visual sin caer en el caos."
---

## Cuándo usarlo

Recurre a `/bolder` cuando la interfaz luzca exactamente igual a todas las demás. Una tipografía sans genérica, grosores de texto medios, sombras suaves, colores de acento tímidos, espaciado correcto pero olvidable. El diseño no está mal, simplemente es demasiado conservador y seguro. Utiliza `/bolder` cuando el proyecto pueda permitirse tener carácter y personalidad, y el estado actual no esté aportando ninguno.

No lo uses en paneles de control (dashboards) que la gente vaya a mirar durante horas. El impacto visual se gana su lugar en páginas de marketing, secciones principales (hero) y contenidos destacados, no en herramientas de gestión operativa.

## Cómo funciona

La habilidad amplifica cuatro ejes sin romper la usabilidad:

1. **Escala**: el tamaño de las fuentes principales (`display`) se incrementa a `clamp(3rem, 6vw, 6rem)` o superior. Encabezados con presencia que llenan la pantalla, no que la esquivan.
2. **Contraste de peso**: grosores ligeros (300) frente a gruesos (800) en lugar de combinar pesos medios. Tensión visual real, no indiferencia.
3. **Compromiso con el color**: el color de acento se muestra en su máxima intensidad, no diluido. Los fondos toman postura (tinta, acento, crema) en lugar de ser siempre blanco puro.
4. **Confianza en la composición**: asimetría, roturas intencionadas de la cuadrícula, citas destacadas, puntuación colgante y saltos drásticos de escala. La estructura tiene voz propia.

Esta habilidad no añade más elementos. Amplifica lo que ya existe. Si el diseño tiene tres colores, `/bolder` no añade un cuarto, sino que se compromete con mayor fuerza con los tres existentes.

## Pruébalo

```
/bolder la sección principal (hero) de la landing page
```

Cambios esperados:

- El encabezado principal pasa de 3rem a `clamp(3.5rem, 7vw, 6.5rem)`, con fuente display y peso 700.
- El subtítulo cambia de regular a cursiva a 1.5rem, desplazándose 8px a la izquierda del encabezado para alinearse ópticamente.
- El fondo cambia de blanco a un degradado suave de crema a blanco, creando un contenedor más cálido.
- El botón de llamada a la acción (CTA) se rellena por completo, se elimina la sombra, se reduce el radio de las esquinas y su estado hover invierte los colores.
- La imagen de apoyo se desplaza ligeramente fuera de la cuadrícula con un margen superior negativo, creando asimetría.

## Problemas comunes

- **Ejecutarlo en la página equivocada.** Los paneles de producto, páginas de configuración y formularios no deben ser atrevidos. Deben ser legibles y claros. Usa `/layout` o `/polish` en su lugar.
- **Confundir fuerza visual con ruido.** Atrevido significa comprometido y seguro de sí mismo. Ruidoso significa gritar. `/bolder` es lo primero. Si el resultado se siente agresivo, haz un pase con `/quieter`.
- **Combinarlo con `/delight` en el mismo pase.** El deleite visual funciona mejor sobre una base estable. Primero da fuerza visual (`bold`), estabiliza y luego añade los detalles de deleite.
