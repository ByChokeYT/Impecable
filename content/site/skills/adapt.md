---
tagline: "Haz que los diseños funcionen en diferentes pantallas, dispositivos y contextos sin amputar funciones."
---

## Cuándo usarlo

`/adapt` sirve para tomar un diseño creado para un contexto y hacer que funcione en otro. Móvil desde escritorio, tableta desde móvil, impresión desde web, integrado desde independiente, correo electrónico desde panel de control. Utilízalo cuando el diseño de origen sea sólido pero se desmorone en otros puntos de interrupción (breakpoints), al usar controles táctiles o en un contenedor diferente.

No es para construir un diseño responsivo desde cero. Para eso, comienza con `/impeccable` y planifica el diseño responsivo desde el principio. `/adapt` está pensado para cuando "nunca pensamos en el móvil" y hay que solucionarlo a posteriori.

## Cómo funciona

La habilidad trabaja sobre cuatro dimensiones de ajuste contextual:

1. **Puntos de interrupción y diseño fluido**: colapsa múltiples columnas en una sola, ajusta los rangos de tamaño dinámico (`clamp`), introduce nuevos puntos de interrupción cuando el diseño se rompe visualmente.
2. **Objetivos táctiles**: áreas de contacto mínimas de 44px, espacio suficiente entre objetivos adyacentes, zonas de toque más grandes que los límites visuales cuando sea necesario.
3. **Patrones de navegación**: las barras laterales de escritorio se convierten en menús inferiores o paneles deslizantes en móviles, las barras de herramientas densas se colapsan en menús, los estados hover reciben equivalentes táctiles.
4. **Prioridad del contenido**: decide qué debe ser visible de inmediato, qué se puede contraer en elementos desplegables y qué se puede eliminar por completo para ese contexto.

La regla no negociable: adaptar, no amputar. Las funcionalidades críticas no pueden desaparecer en el móvil solo porque sea incómodo adaptarlas. Encuentra una manera de encajarlas, rediseña la interacción o reconsidera si realmente eran críticas en la versión de escritorio.

## Pruébalo

```
/adapt la página de configuración para móviles
```

Cambios esperados:

- Las cuadrículas de tres columnas pasan a ser de una sola columna con encabezados de sección que actúan como divisores pegajosos (sticky).
- La navegación lateral se mueve a un menú de desplazamiento horizontal sobre el contenido.
- Los selectores y botones obtienen un espaciado vertical adicional de 8px para cumplir con el objetivo táctil de 44px.
- El texto de ayuda en línea pasa a revelarse mediante pulsación (tap), no por hover.
- La sección de "Zona de peligro" se expande por completo en móvil en lugar de colapsarse, porque contiene acciones irreversibles y queremos que los usuarios las vean claramente.

## Problemas comunes

- **Amputar funcionalidades.** Si la versión móvil oculta cosas que la versión de escritorio sí puede hacer, eso es una regresión, no una adaptación. Defiende la funcionalidad.
- **Tratar el móvil como un "escritorio pequeño".** El móvil es un contexto diferente: pulgares, interrupciones constantes, sesiones cortas. Adáptate al contexto de uso, no solo al ancho del viewport.
- **Omitir `/harden` después.** Los diseños responsivos suelen revelar casos límite imprevistos. Ejecuta el comando de fortalecimiento después de adaptar para detectar los problemas que solo se muestran en pantallas de 320px.
