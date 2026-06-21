---
tagline: "Corrige la tipografía que se siente genérica, inconsistente o accidental."
---

## Cuándo usarlo

Recurre a `/typeset` cuando el texto de una página parezca tipografía predeterminada del navegador en lugar de una diseñada con intención. Jerarquía confusa, tres tamaños de letra que parecen iguales, texto de cuerpo a 14px, una fuente de exhibición (`display`) que en realidad es solo Inter en negrita, o titulares con el interlineado descuidado.

Razones comunes de uso: "la jerarquía se siente plana", "la legibilidad es mala", "las fuentes se ven genéricas".

## Cómo funciona

La habilidad evalúa la tipografía a través de cinco dimensiones:

1. **Selección de fuentes**: ¿Estás usando opciones predeterminadas e invisibles (Inter, Roboto, Arial, Open Sans)? ¿La tipografía se adapta a la marca? ¿Hay más de 2 o 3 familias tipográficas en uso?
2. **Jerarquía**: ¿El encabezado, el cuerpo y el pie de foto se diferencian claramente a simple vista? ¿El contraste de tamaño es de al menos 1.25x entre pasos? ¿Los contrastes de grosor son legibles?
3. **Escala y tamaño**: ¿Existe una escala tipográfica coherente? ¿El texto del cuerpo tiene al menos 16px de tamaño? ¿La escala es fija en `rem` para UIs de productos o fluida con `clamp` para páginas de marketing y contenido?
4. **Legibilidad**: Longitud de línea restringida a entre 45 y 75 caracteres, altura de línea (`line-height`) ajustada para la tipografía y el contexto, y contraste de color óptimo.
5. **Consistencia**: El mismo elemento utiliza el mismo tratamiento en todas partes; sin anulaciones manuales de tamaño de fuente (`font-size`) aisladas en el código.

A continuación, corrige lo que encuentra: selecciona tipografías distintivas, construye una escala tipográfica modular, amplía el contraste de jerarquía y define la longitud de línea y el interlineado adecuados.

## Pruébalo

```
/typeset la maquetación del artículo
```

Cambios esperados:

- La fuente display cambia de Inter 700 a una tipografía display con carácter real.
- La escala tipográfica se reconstruye: 3rem / 2rem / 1.25rem / 1rem / 0.875rem (proporción de 1.333).
- El texto del cuerpo se incrementa de 14px a 16px.
- La longitud de la línea se limita a `max-width: 68ch` en la columna del artículo.
- Altura de línea de 1.6 para el cuerpo y 1.1 para el texto display principal.
- Se eliminan los valores manuales de `font-size` dispersos en los estilos de los componentes.

## Problemas comunes

- **Pedir una nueva fuente sin contexto.** `typeset` elegirá las fuentes basándose en la voz de marca definida en `.impeccable.md`. Si no has ejecutado `/impeccable teach`, las recomendaciones serán genéricas.
- **Usar `typeset` cuando el problema real es la distribución.** Si los párrafos se leen bien pero la página se siente apretada, necesitas `/layout`.
- **Esperar escalas fluidas con `clamp` en interfaces de aplicaciones.** `typeset` utiliza escalas fijas basadas en `rem` para interfaces de productos y paneles de control. La tipografía fluida se reserva para páginas de marketing y artículos donde el ancho de la columna varía significativamente.
