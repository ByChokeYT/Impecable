---
tagline: "Movimiento intencionado que comunica estados, no simple decoración."
---

## Cuándo usarlo

`/animate` es para interfaces que se sienten sin vida, donde los cambios de estado son instantáneos y bruscos, donde los elementos de carga aparecen de golpe o donde el usuario no llega a confiar en que su clic se haya registrado. Úsalo para añadir pequeños movimientos que comuniquen lo que está sucediendo: entradas, salidas, confirmaciones y transiciones entre estados.

No lo uses para añadir rebotes o resortes elásticos solo para dar "energía". Eso es decoración, y esta habilidad evitará ese tipo de excesos.

## Cómo funciona

La habilidad identifica momentos estáticos que se beneficiarían del movimiento y luego los aplica con estricta disciplina:

1. **Entradas y salidas**: los elementos aparecen y desaparecen con desvanecimientos (`fades`) de 200 a 300ms acompañados de sutiles traslaciones en el eje Y o escalado, nunca modificando propiedades de diseño (layout).
2. **Retroalimentación de estado**: hover, active, focus, loading y success se comunican mediante movimiento en lugar de cambios bruscos de color o forma.
3. **Transiciones entre vistas**: transiciones de elementos compartidos (shared-element transitions) donde tenga sentido y desvanecimiento cruzado (`fade-through`) en el resto de casos.
4. **Progreso y carga**: pantallas con esqueleto (`skeleton screens`), barras determinadas y movimientos que indiquen que el sistema sigue procesando.
5. **Reducción de movimiento**: cada animación cuenta con una alternativa para usuarios con la preferencia de accesibilidad `prefers-reduced-motion`.

La aceleración es siempre exponencial (ease-out-quart, quint o expo) porque los objetos reales desaceleran suavemente. No hay rebotes, ni elasticidad, ni transiciones lineales excepto para indicadores de progreso continuos.

La habilidad anima únicamente `transform` y `opacity`. Si ves que está animando `width`, `height`, `top` o `left`, está haciendo un mal uso. Utiliza `grid-template-rows` para las transiciones de altura.

## Pruébalo

```
/animate el flujo de registro
```

Adiciones típicas:

- El campo de correo obtiene un brillo de enfoque progresivo en focus-visible (opacidad + sombra, 180ms).
- El botón de envío muestra un indicador de carga en su interior, en lugar de un spinner separado al lado del botón.
- La pantalla de éxito entra con opacidad y un desplazamiento translateY(8px) en 260ms mediante `ease-out-quart`.
- El mensaje de error aparece deslizándose hacia abajo usando `grid-template-rows` (no animando height directamente) en 220ms.
- Alternativa con `@media (prefers-reduced-motion: reduce)` para cada transición.

## Problemas comunes

- **Pedir "más animación".** Animar no es un dial que se sube al máximo. Añade movimiento donde sirva para comunicar, no en toda la interfaz.
- **Eliminar las alternativas de reducción de movimiento.** La habilidad las añade de forma automática. Es un requisito no negociable para la accesibilidad.
