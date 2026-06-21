---
name: quieter
description: Atenúa diseños visualmente agresivos o sobreestimulantes, reduciendo la intensidad pero preservando la calidad. Úsalo cuando el usuario comente que el diseño es demasiado atrevido, ruidoso, abrumador, agresivo o estridente, o cuando busque una estética más tranquila y refinada.
version: 2.1.1
---

Reduce la intensidad visual en diseños que resultan demasiado atrevidos, agresivos o sobreestimulantes, logrando una estética más refinada y accesible sin perder efectividad.

## PREPARACIÓN OBLIGATORIA

Invoca /impeccable — contiene los principios de diseño, antipatrones y el **Protocolo de Recopilación de Contexto**. Sigue el protocolo antes de proceder — si aún no existe un contexto de diseño, DEBES ejecutar /impeccable teach primero.

---

## Evaluar el Estado Actual

Analiza qué hace que el diseño se sienta demasiado intenso:

1. **Identificar fuentes de intensidad**:
   - **Saturación de color**: Colores excesivamente brillantes o saturados.
   - **Contraste extremo**: Demasiadas yuxtaposiciones de alto contraste.
   - **Peso visual**: Exceso de elementos gruesos o pesados compitiendo entre sí.
   - **Exceso de animación**: Demasiado movimiento o efectos excesivamente dramáticos.
   - **Complejidad**: Demasiados elementos visuales, patrones o decoraciones.
   - **Escala**: Todo es grande y ruidoso, sin jerarquía clara.

2. **Comprender el contexto**:
   - ¿Cuál es el propósito? (Marketing frente a herramienta técnica o experiencia de lectura).
   - ¿Quién es la audiencia? (Algunos contextos necesitan transmitir energía).
   - ¿Qué está funcionando? (Conserva las buenas ideas).
   - ¿Cuál es el mensaje principal? (Preserva lo que verdaderamente importa).

Si alguno de estos puntos no está claro en el código base, ask the user directly to clarify what you cannot infer.

**CRÍTICO**: "Quieter" (más tranquilo) no significa aburrido o genérico. Significa refinado, sofisticado y agradable a la vista. Piensa en lujo, no en pereza.

## Planificar el Refinamiento

Crea una estrategia para reducir la intensidad manteniendo el impacto:

- **Enfoque de color**: ¿Desaturar o cambiar hacia tonos más sofisticados?
- **Enfoque de jerarquía**: ¿Qué elementos deben seguir siendo llamativos (muy pocos) y cuáles deben pasar a segundo plano?
- **Enfoque de simplificación**: ¿Qué se puede eliminar por completo?
- **Enfoque de sofisticación**: ¿Cómo podemos transmitir calidad a través de la moderación?

**IMPORTANTE**: Lograr un gran diseño tranquilo es más difícil que lograr un diseño llamativo. La sutileza requiere precisión.

## Refinar el Diseño

Reduce la intensidad sistemáticamente a través de estas dimensiones:

### Refinamiento del Color
- **Reducir saturación**: Pasa de colores totalmente saturados a una saturación del 70-85%.
- **Suavizar la paleta**: Reemplaza colores brillantes por tonos apagados y sofisticados.
- **Reducir variedad de color**: Usa menos colores y con mayor intención.
- **Dominancia neutra**: Deja que los tonos neutros hagan la mayor parte del trabajo, usando el color solo como acento (regla del 10%).
- **Contrastes más suaves**: Alto contraste solo donde sea estrictamente necesario.
- **Grises teñidos**: Usa grises teñidos de cálido o frío en lugar de gris puro; aporta sofisticación sin resultar llamativo.
- **Nunca gris sobre color**: Si tienes texto gris sobre un fondo de color, usa un tono más oscuro de ese color o transparencia en su lugar.

### Reducción del Peso Visual
- **Tipografía**: Reduce los pesos de las fuentes (900 → 600, 700 → 500), disminuye el tamaño donde sea adecuado.
- **Jerarquía a través de la sutileza**: Usa el peso, el tamaño y el espacio en lugar de recurrir al color y a los elementos gruesos.
- **Espacio en blanco**: Aumenta el espacio para respirar, reduce la densidad.
- **Bordes y líneas**: Reduce el grosor, disminuye la opacidad o elimínalos por completo.

### Simplificación
- **Eliminar elementos decorativos**: Degradados, sombras, patrones o texturas que no cumplan un propósito claro.
- **Simplificar formas**: Reduce las esquinas redondeadas extremas, simplifica las formas personalizadas.
- **Reducir capas**: Aplana la jerarquía visual donde sea posible.
- **Limpiar efectos**: Reduce o elimina efectos de desenfoque (blur), brillos o sombras múltiples.

### Reducción del Movimiento
- **Reducir intensidad de animación**: Distancias más cortas (10-20px en lugar de 40px), suavizados más sutiles.
- **Eliminar animaciones decorativas**: Conserva el movimiento funcional, elimina adornos.
- **Microinteracciones sutiles**: Reemplaza efectos dramáticos por retroalimentación suave.
- **Suavizado (Easing) refinado**: Usa ease-out-quart para lograr un movimiento suave y discreto; nunca uses rebotes (bounce) o efectos elásticos.
- **Elimina animaciones por completo** si no cumplen un propósito claro.

### Refinamiento de la Composición
- **Reducir saltos de escala**: Menor diferencia de tamaño entre elementos para lograr una sensación más calmada.
- **Alinear a la cuadrícula**: Devuelve los elementos desalineados a una alineación sistemática.
- **Espaciado homogéneo**: Reemplaza las variaciones extremas de espaciado por un ritmo consistente.

**NUNCA**:
- Hagas que todo tenga el mismo tamaño o peso (la jerarquía sigue importando).
- Elimines todo el color (tranquilo ≠ escala de grises).
- Elimines toda la personalidad (mantén el carácter a través del refinamiento).
- Sacrifiques la usabilidad por la estética (los elementos funcionales siguen necesitando indicaciones claras).
- Hagas todo pequeño y ligero (se necesitan algunos puntos de anclaje visual).

## Verificar Calidad

Asegúrate de que el refinamiento mantiene la calidad:

- **Sigue siendo funcional**: ¿Pueden los usuarios seguir realizando tareas fácilmente?
- **Sigue siendo distintivo**: ¿Conserva el carácter del diseño o se ha vuelto genérico?
- **Mejor lectura**: ¿Es el texto más fácil de leer durante periodos prolongados?
- **Sofisticación**: ¿Se siente más premium y de alta calidad?

Recuerda: El diseño tranquilo es un diseño seguro de sí mismo. No necesita gritar. Menos es más, pero menos también es más difícil. Refina con precisión y mantén la intencionalidad.