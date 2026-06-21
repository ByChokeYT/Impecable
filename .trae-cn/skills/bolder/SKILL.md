---
name: bolder
description: Amplifica diseños conservadores o aburridos para hacerlos más interesantes y estimulantes visualmente. Aumenta el impacto manteniendo la usabilidad. Úsalo cuando el usuario comente que el diseño se ve insípido, genérico, demasiado seguro, carece de personalidad o si desea más carácter e impacto visual.
version: 2.1.1
user-invocable: true
argument-hint: "[objetivo]"
---

Incrementa el impacto visual y la personalidad en diseños que resultan demasiado seguros, genéricos o visualmente planos, creando experiencias más atractivas y memorables.

## PREPARACIÓN OBLIGATORIA

Invoca /impeccable — contiene los principios de diseño, antipatrones y el **Protocolo de Recopilación de Contexto**. Sigue el protocolo antes de proceder — si aún no existe un contexto de diseño, DEBES ejecutar /impeccable teach primero.

---

## Evaluar el Estado Actual

Analiza qué hace que el diseño se sienta demasiado seguro o aburrido:

1. **Identificar fuentes de debilidad**:
   - **Elecciones genéricas**: Fuentes del sistema, colores básicos, diseños estándar.
   - **Escala tímida**: Todo es de tamaño mediano sin ningún dramatismo.
   - **Bajo contraste**: Todo tiene un peso visual similar.
   - **Estático**: Sin movimiento, sin energía, sin vida.
   - **Predecible**: Patrones estándar sin sorpresas.
   - **Jerarquía plana**: Nada destaca ni capta la atención.

2. **Comprender el contexto**:
   - ¿Cuál es la personalidad de la marca? (¿Hasta dónde podemos llegar?)
   - ¿Cuál es el propósito? (El marketing puede ser más atrevido que un panel financiero).
   - ¿Quién es la audiencia? (¿Qué conectará con ellos?)
   - ¿Cuáles son las restricciones? (Guías de marca, accesibilidad, rendimiento).

Si alguno de estos puntos no está claro en el código base, ask the user directly to clarify what you cannot infer.

**CRÍTICO**: "Bolder" (más atrevido) no significa caótico ni estridente. Significa distintivo, memorable y seguro. Piensa en dramatismo intencional, no en caos aleatorio.

**ADVERTENCIA - LA TRAMPA DE LA BASURA DE IA ("AI SLOP")**: Al intentar hacer las cosas "más atrevidas", la IA recurre por defecto a los mismos trucos gastados: degradados cian/púrpura, glassmorphism, acentos de neón sobre fondos oscuros, texto con degradado en las métricas. Esto es lo OPUESTO a ser atrevido; es genérico. Revisa TODAS las directrices de **NO** en la habilidad impeccable antes de continuar. Atrevido significa distintivo, no "más efectos".

## Planificar la Amplificación

Crea una estrategia para aumentar el impacto manteniendo la coherencia:

- **Punto focal**: ¿Cuál debería ser el momento estrella (hero moment)? (Elige UNO, hazlo increíble).
- **Dirección de personalidad**: ¿Caos maximalista? ¿Dramatismo elegante? ¿Energía juguetona? ¿Oscuro y misterioso? Elige un camino.
- **Presupuesto de riesgo**: ¿Qué tan experimentales podemos ser? Desafía los límites dentro de las restricciones.
- **Amplificación de jerarquía**: Haz que lo grande sea MÁS GRANDE y lo pequeño, más pequeño (aumenta el contraste).

**IMPORTANTE**: El diseño atrevido debe seguir siendo usable. El impacto sin funcionalidad es solo adorno.

## Amplificar el Diseño

Incrementa el impacto sistemáticamente a través de estas dimensiones:

### Amplificación Tipográfica
- **Reemplazar fuentes genéricas**: Cambia las fuentes del sistema por opciones distintivas (consulta la habilidad impeccable para inspirarte).
- **Escala extrema**: Crea saltos de tamaño dramáticos (diferencias de 3x-5x, no de 1.5x).
- **Contraste de peso**: Combina pesos de 900 con pesos de 200, no de 600 con 400.
- **Elecciones inesperadas**: Fuentes variables, fuentes display para titulares, anchos condensados/expandidos, tipografía mono como acento intencional (no como un valor predeterminado perezoso de "herramienta de desarrollo").

### Intensificación del Color
- **Aumentar la saturación**: Cambia hacia colores más vibrantes y enérgicos (pero sin llegar a neón).
- **Paleta atrevida**: Introduce combinaciones de colores inesperadas (evita la basura de IA de degradados púrpura-azul).
- **Estrategia de color dominante**: Permite que un solo color atrevido domine el 60% del diseño.
- **Acentos definidos**: Colores de acento de alto contraste que destaquen.
- **Neutros teñidos**: Reemplaza los grises puros por grises teñidos que armonicen con tu paleta.
- **Degradados ricos**: Degradados intencionales de varios pasos (no el clásico púrpura a azul genérico).

### Dramatismo Espacial
- **Saltos de escala extremos**: Haz que los elementos importantes sean de 3 a 5 veces más grandes que su entorno.
- **Romper la cuadrícula**: Deja que los elementos hero escapen de sus contenedores y crucen límites.
- **Diseños asimétricos**: Reemplaza los diseños centrados y equilibrados por una asimetría llena de tensión.
- **Espacio generoso**: Usa el espacio en blanco de forma dramática (huecos de 100-200px, no de 20-40px).
- **Superposición**: Superpone elementos de manera intencional para crear profundidad.

### Efectos Visuales
- **Sombras dramáticas**: Sombras grandes y suaves para dar elevación (pero no sombras paralelas genéricas en rectángulos redondeados).
- **Tratamientos de fondo**: Patrones de malla (mesh), texturas de ruido, patrones geométricos, degradados intencionales (no púrpura a azul).
- **Textura y profundidad**: Grano, semitono (halftone), bitono (duotone), elementos en capas (NO uses glassmorphism, es basura de IA sobreutilizada).
- **Bordes y marcos**: Bordes gruesos, marcos decorativos, formas personalizadas (no rectángulos redondeados con un borde de color en un solo lado).
- **Elementos personalizados**: Detalles ilustrativos, iconos personalizados, detalles decorativos que refuercen la marca.

### Movimiento y Animación
- **Coreografía de entrada**: Animaciones de carga de página escalonadas y dramáticas con retrasos de 50-100ms.
- **Efectos de scroll**: Paralaje, animaciones de revelación, secuencias activadas por el desplazamiento.
- **Microinteracciones**: Efectos de hover satisfactorios, retroalimentación de clic, cambios de estado.
- **Transiciones**: Transiciones suaves y notorias usando ease-out-quart/quint/expo (no uses bounce o elastic, ya que abaratan el efecto).

### Atrevimiento en la Composición
- **Momentos Hero**: Crea puntos focales claros con tratamientos dramáticos.
- **Flujos diagonales**: Escapa de la rigidez horizontal/vertical con disposiciones diagonales.
- **Elementos a sangre (full-bleed)**: Usa todo el ancho/alto del viewport para lograr mayor impacto.
- **Proporciones inesperadas**: ¿Proporción áurea? Olvídala. Prueba con divisiones de 70/30 u 80/20.

**NUNCA**:
- Añas efectos al azar sin un propósito (caos ≠ atrevido).
- Sacrifiques la legibilidad en favor de la estética (el texto de cuerpo debe ser legible).
- Hagas todo atrevido (entonces nada destacará; se necesita contraste).
- Ignores la accesibilidad (el diseño atrevido debe seguir cumpliendo con las normas WCAG).
- Abrumes con movimiento (la fatiga de animación es real).
- Copies estéticas de moda a ciegas (atrevido significa distintivo, no derivado).

## Verificar Calidad

Asegúrate de que la amplificación mantenga la usabilidad y la coherencia:

- **NO es basura de IA**: ¿Se parece a cualquier otro diseño "atrevido" generado por IA? Si es así, empieza de nuevo.
- **Sigue siendo funcional**: ¿Pueden los usuarios realizar tareas sin distracciones?
- **Coherente**: ¿Se siente todo intencional y unificado?
- **Memorable**: ¿Recordarán los usuarios esta experiencia?
- **Rendimiento**: ¿Se ejecutan todos estos efectos de manera fluida?
- **Accesible**: ¿Sigue cumpliendo con los estándares de accesibilidad?

**La prueba**: Si le mostraras esto a alguien y le dijeras "la IA hizo esto más atrevido", ¿lo creería de inmediato? Si es así, has fallado. Atrevido significa distintivo, no "más efectos de IA".

Recuerda: El diseño atrevido es un diseño seguro de sí mismo. Asume riesgos, define posturas y crea experiencias memorables. Pero lo atrevido sin estrategia es solo ruido. Sé intencional, sé dramático, sé inolvidable.