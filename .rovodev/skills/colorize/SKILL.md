---
name: colorize
description: Añade color estratégico a funcionalidades que resultan demasiado monocromáticas o carecen de interés visual, logrando interfaces más atractivas y expresivas. Úsalo cuando el usuario comente que el diseño se ve gris, aburrido, falto de calidez, que necesita más color o que requiere una paleta más vibrante o expresiva.
version: 2.1.1
user-invocable: true
argument-hint: "[objetivo]"
---

Introduce color de manera estratégica en diseños que resultan demasiado monocromáticos, grises o que carecen de calidez visual y personalidad.

## PREPARACIÓN OBLIGATORIA

Invoca /impeccable — contiene los principios de diseño, antipatrones y el **Protocolo de Recopilación de Contexto**. Sigue el protocolo antes de proceder — si aún no existe un contexto de diseño, DEBES ejecutar /impeccable teach primero. Adicionalmente, recopila: colores de marca existentes.

---

## Evaluar Oportunidades de Color

Analiza el estado actual e identifica oportunidades:

1. **Comprender el estado actual**:
   - **Ausencia de color**: ¿Escala de grises pura? ¿Neutros limitados? ¿Un solo acento tímido?
   - **Oportunidades perdidas**: ¿Dónde podría el color aportar significado, jerarquía o deleite?
   - **Contexto**: ¿Qué es apropiado para este sector y esta audiencia?
   - **Marca**: ¿Existen colores de marca que debamos utilizar?

2. **Identificar dónde aporta valor el color**:
   - **Significado semántico**: Éxito (verde), error (rojo), advertencia (amarillo/naranja), información (azul).
   - **Jerarquía**: Atraer la atención hacia los elementos importantes.
   - **Categorización**: Diferenciar secciones, tipos o estados.
   - **Tono emocional**: Calidez, energía, confianza, creatividad.
   - **Orientación espacial**: Ayudar a los usuarios a navegar y comprender la estructura.
   - **Deleite**: Momentos de interés visual y personalidad.

Si alguno de estos puntos no está claro en el código base, ask the user directly to clarify what you cannot infer.

**CRÍTICO**: Más color ≠ mejor. El color estratégico supera a un arcoíris descontrolado en cualquier situación. Cada color debe tener un propósito.

## Planificar la Estrategia de Color

Crea un plan intencional para la introducción de color:

- **Paleta de colores**: ¿Qué colores coinciden con la marca y el contexto? (Elige un máximo de 2 a 4 colores más allá de los neutros).
- **Color dominante**: ¿Qué color representará el 60% de los elementos coloreados?
- **Colores de acento**: ¿Qué colores aportarán contraste y zonas destacadas? (30% y 10%).
- **Estrategia de aplicación**: ¿Dónde aparecerá cada color y por qué?

**IMPORTANTE**: El color debe mejorar la jerarquía y el significado, no generar caos. Menos es más cuando lo que se destaca importa de verdad.

## Introducir Color de Manera Estratégica

Añade color sistemáticamente a través de estas dimensiones:

### Color Semántico
- **Indicadores de estado**:
  - Éxito: Tonos verdes (esmeralda, bosque, menta).
  - Error: Tonos rojos/rosas (rosa, carmesí, coral).
  - Advertencia: Tonos naranja/ámbar.
  - Información: Tonos azules (cielo, océano, índigo).
  - Neutro: Gris/pizarra para estados inactivos.

- **Etiquetas de estado (Badges)**: Fondos o bordes coloreados para indicar estados (activo, pendiente, completado, etc.).
- **Indicadores de progreso**: Barras, anillos o gráficos coloreados que muestran el nivel de finalización o salud de un proceso.

### Aplicación de Colores de Acento
- **Acciones principales**: Colorea los botones o CTAs más importantes.
- **Enlaces**: Añade color al texto en el que se puede hacer clic (manteniendo la accesibilidad).
- **Iconos**: Colorea iconos clave para facilitar su reconocimiento y aportar personalidad.
- **Encabezados/títulos**: Añade color a los encabezados de sección o a etiquetas clave.
- **Estados hover**: Introduce color al interactuar con los elementos.

### Fondos y Superficies
- **Fondos teñidos**: Reemplaza el gris puro (`#f5f5f5`) por neutros cálidos (`oklch(97% 0.01 60)`) o tintes fríos (`oklch(97% 0.01 250)`).
- **Secciones coloreadas**: Usa colores de fondo sutiles para separar diferentes áreas.
- **Fondos degradados**: Añade profundidad con degradados sutiles e intencionales (evitando el típico degradado púrpura-azul).
- **Tarjetas y superficies**: Tiñe ligeramente las tarjetas o superficies para aportar calidez.

**Usa OKLCH para definir el color**: Es un espacio de color perceptualmente uniforme, lo que significa que pasos de igual valor en luminosidad *se verán* iguales. Excelente para generar escalas armoniosas.

### Visualización de Datos
- **Gráficos**: Usa color para codificar categorías o valores.
- **Mapas de calor**: La intensidad del color muestra la densidad o la importancia.
- **Comparativas**: Codificación por colores para diferentes conjuntos de datos o periodos de tiempo.

### Bordes y Detalles de Acento
- **Bordes de acento**: Añade bordes coloreados (izquierdos/superiores) en tarjetas o secciones.
- **Subrayados**: Subrayados de color para dar énfasis o indicar estados activos.
- **Divisores**: Divisores sutiles de color en lugar de líneas grises.
- **Anillos de enfoque (Focus)**: Indicadores de enfoque coloreados que coincidan con la marca.

### Color en Tipografía
- **Encabezados coloreados**: Usa los colores de la marca para los encabezados de sección (manteniendo el contraste).
- **Texto resaltado**: Color para dar énfasis o indicar categorías.
- **Etiquetas e identificadores**: Pequeñas etiquetas de color para metadatos o categorías.

### Elementos Decorativos
- **Ilustraciones**: Añade ilustraciones o iconos coloreados.
- **Formas**: Formas geométricas en los colores de la marca como elementos de fondo.
- **Degradados**: Superposiciones de degradados coloridos o fondos de tipo malla (mesh).
- **Formas orgánicas (Blobs)**: Formas de color suave para aportar interés visual.

## Equilibrio y Refinamiento

Asegúrate de que la adición de color mejore la experiencia en lugar de saturar:

### Mantener la Jerarquía
- **Color dominante** (60%): El color principal de la marca o el acento más utilizado.
- **Color secundario** (30%): Color de apoyo para aportar variedad.
- **Color de acento** (10%): Alto contraste para momentos clave.
- **Neutros** (el resto): Gris/negro/blanco para dar estructura.

### Accesibilidad
- **Proporciones de contraste**: Garantiza el cumplimiento de las WCAG (4.5:1 para texto, 3:1 para componentes de interfaz).
- **No dependas solo del color**: Usa iconos, etiquetas o patrones junto al color.
- **Prueba para daltonismo**: Verifica que las combinaciones de rojo/verde funcionen para todos los usuarios.

### Cohesión
- **Paleta consistente**: Usa colores de la paleta definida, evita elecciones arbitrarias.
- **Aplicación sistemática**: Mismos significados de color en todo el sitio (el verde siempre = éxito).
- **Consistencia de temperatura**: Las paletas cálidas deben mantenerse cálidas; las frías, frías.

**NUNCA**:
- Uses todos los colores del arcoíris (elige de 2 a 4 colores más allá de los neutros).
- Apliques color de forma aleatoria sin un significado semántico.
- Coloques texto gris sobre fondos de color; se ve lavado. Usa un tono más oscuro de la tarjeta o transparencia en su lugar.
- Uses gris puro para los neutros; añade un sutil tinte de color (cálido o frío) para dar sofisticación.
- Uses negro puro (`#000`) o blanco puro (`#fff`) para áreas grandes.
- Incumplas los requisitos de contraste de las WCAG.
- Uses el color como único indicador visual (problema de accesibilidad).
- Hagas que todo sea colorido (anula el propósito de destacar).
- Uses por defecto degradados púrpura-azul (estética basura de IA).

## Verificar Adición de Color

Prueba que la colorización mejore la experiencia:

- **Mejor jerarquía**: ¿El color guía la atención de manera adecuada?
- **Significado más claro**: ¿El color ayuda a entender estados o categorías?
- **Más atractivo**: ¿La interfaz se siente más cálida y acogedora?
- **Sigue siendo accesible**: ¿Todas las combinaciones de colores cumplen con los estándares WCAG?
- **No es abrumador**: ¿El color es equilibrado y tiene un propósito?

Recuerda: El color es emocional y poderoso. Úsalo para crear calidez, guiar la atención, comunicar significados y expresar personalidad. Pero la moderación y la estrategia importan más que la saturación y la variedad. Sé colorido, pero sé intencional.