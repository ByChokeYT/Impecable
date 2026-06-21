---
name: layout
description: Mejora el diseño (layout), el espaciado y el ritmo visual. Corrige cuadrículas monótonas, espaciados inconsistentes y jerarquías visuales débiles. Úsalo cuando el usuario comente que el diseño se siente mal estructurado, existan problemas de espaciado, jerarquía visual, interfaces saturadas, problemas de alineación o se busque una mejor composición.
version: 2.1.1
argument-hint: "[objetivo]"
---

Evalúa y mejora el diseño (layout) y el espaciado cuando se sientan monótonos, saturados o estructuralmente débiles, transformando disposiciones genéricas en composiciones intencionadas y rítmicas.

## PREPARACIÓN OBLIGATORIA

Invoca $impeccable — contiene los principios de diseño, antipatrones y el **Protocolo de Recopilación de Contexto**. Sigue el protocolo antes de proceder — si aún no existe un contexto de diseño, DEBES ejecutar $impeccable teach primero.

---

## Evaluar el Diseño Actual

Analiza qué aspectos del diseño espacial actual resultan débiles:

1. **Espaciado**:
   - ¿El espaciado es consistente o arbitrario? (Valores de padding/margin aleatorios).
   - ¿Todo el espaciado es idéntico? (El mismo padding en todas partes = ausencia de ritmo).
   - ¿Los elementos relacionados están agrupados de forma estrecha, dejando un espacio generoso entre grupos?

2. **Jerarquía visual**:
   - Aplica la prueba del entrecejo (squint test): entorna los ojos (metafóricamente) — ¿puedes seguir identificando el elemento más importante, el segundo más importante y las agrupaciones claras?
   - ¿Se logra la jerarquía de manera efectiva? (El espacio y el peso por sí solos pueden ser suficientes — ¿está funcionando el enfoque actual?).
   - ¿El espacio en blanco guía la mirada hacia lo que realmente importa?

3. **Cuadrícula y estructura**:
   - ¿Existe una estructura subyacente clara o el diseño se siente aleatorio?
   - ¿Se utilizan cuadrículas de tarjetas idénticas en todas partes? (Icono + encabezado + texto, repetido sin cesar).
   - ¿Está todo centrado? (La alineación a la izquierda con diseños asimétricos suele sentirse más diseñada, aunque no es una regla estricta).

4. **Ritmo y variedad**:
   - ¿El diseño tiene ritmo visual? (Alternancia de espaciados estrechos y generosos).
   - ¿Todas las secciones están estructuradas de la misma manera? (Repetición monótona).
   - ¿Existen momentos intencionados de sorpresa o énfasis?

5. **Densidad**:
   - ¿El diseño está demasiado apretado? (Falta espacio para respirar).
   - ¿El diseño está demasiado disperso? (Espacio en blanco excesivo sin un propósito).
   - ¿La densidad coincide con el tipo de contenido? (Las interfaces densas en datos necesitan un espaciado más ajustado; las páginas de marketing necesitan más aire).

**CRÍTICO**: Los problemas de diseño (layout) suelen ser la causa principal de que una interfaz se sienta "rara", incluso cuando los colores y las fuentes son correctos. El espacio es un material de diseño; úsalo con intención.

## Planificar Mejoras de Diseño (Layout)

Consulta la [referencia de diseño espacial](reference/spatial-design.md) en la habilidad impeccable para obtener una guía detallada sobre cuadrículas, ritmo y consultas de contenedor (container queries).

Crea un plan sistemático:

- **Sistema de espaciado**: Usa una escala consistente, ya sea la escala integrada de un framework (por ejemplo, Tailwind), tokens basados en rem o un sistema personalizado. Los valores específicos importan menos que la consistencia.
- **Estrategia de jerarquía**: ¿Cómo comunicará la importancia el espacio?
- **Enfoque de diseño**: ¿Qué estructura se adapta al contenido? Flexbox para 1D, Grid para 2D, áreas con nombre para diseños de página complejos.
- **Ritmo**: ¿Dónde debería ser el espaciado estrecho vs. generoso?

## Mejorar el Diseño Sistemáticamente

### Establecer un Sistema de Espaciado

- Usa una escala de espaciado consistente: las escalas de los frameworks (Tailwind, etc.), los tokens basados en rem o una escala personalizada funcionan perfectamente. Lo que importa es que los valores provengan de un conjunto definido, no de números arbitrarios.
- Nombra los tokens semánticamente si utilizas propiedades personalizadas: de `--space-xs` a `--space-xl`, evita nombres del tipo `--spacing-8`.
- Usa `gap` para el espaciado de elementos hermanos en lugar de márgenes; elimina los trucos para resolver el colapso de márgenes.
- Aplica `clamp()` para lograr un espaciado fluido que respire en pantallas más grandes.

### Crear Ritmo Visual

- **Agrupación estrecha** para elementos relacionados (8-12px entre hermanos).
- **Separación generosa** entre secciones distintas (48-96px).
- **Espaciado variado** dentro de las secciones: no cada fila necesita la misma separación.
- **Composiciones asimétricas**: rompe el patrón predecible de contenido centrado cuando tenga sentido.

### Elegir la Herramienta de Diseño Adecuada

- **Usa Flexbox para diseños 1D**: Filas de elementos, barras de navegación, grupos de botones, contenido de tarjetas, la mayoría de los componentes internos. Flexbox es más simple y adecuado para la gran mayoría de las tareas de diseño.
- **Usa Grid para diseños 2D**: Estructuras a nivel de página, paneles de control (dashboards), interfaces densas en datos, cualquier elemento donde las filas Y las columnas necesiten un control coordinado.
- **No uses Grid por defecto** cuando Flexbox con `flex-wrap` sea más sencillo y flexible.
- Usa `repeat(auto-fit, minmax(280px, 1fr))` para cuadrículas responsivas sin breakpoints.
- Usa áreas de cuadrícula con nombre (`grid-template-areas`) para diseños de página complejos; redéfinelas en los breakpoints.

### Romper la Monotonía de las Cuadrículas de Tarjetas

- No utilices por defecto cuadrículas de tarjetas para todo; el espaciado y la alineación crean agrupaciones visuales de forma natural.
- Usa tarjetas solo cuando el contenido sea verdaderamente diferente y requiera acción; nunca anides tarjetas dentro de otras tarjetas.
- Varía el tamaño de las tarjetas, haz que abarquen varias columnas o mezcla tarjetas con contenido sin tarjeta para romper la repetición.

### Fortalecer la Jerarquía Visual

- Usa la menor cantidad de recursos necesarios para lograr una jerarquía clara. El espacio por sí solo puede ser suficiente: un espacio en blanco generoso alrededor de un elemento atrae la mirada. Algunos de los diseños más sofisticados logran ritmo únicamente con el espacio y el peso. Añade color o contraste de tamaño solo cuando los medios más simples no sean suficientes.
- Ten en cuenta el flujo de lectura: en idiomas occidentales, el ojo escanea de arriba a izquierda hacia abajo a la derecha, pero la ubicación de la acción principal depende del contexto (por ejemplo, abajo a la derecha en diálogos, arriba en la navegación).
- Crea agrupaciones de contenido claras a través de la proximidad y la separación.

### Gestionar la Profundidad y la Elevación

- Crea una escala semántica para `z-index` (dropdown → sticky → modal-backdrop → modal → toast → tooltip).
- Diseña una escala de sombras consistente (sm → md → lg → xl); las sombras deben ser sutiles.
- Usa la elevación para reforzar la jerarquía, no como decoración.

### Ajustes Ópticos

- Si un icono se ve visualmente descentrado a pesar de estar geométricamente centrado, ajústalo ligeramente; pero hazlo solo si estás seguro de que realmente se ve mal. No hagas ajustes especulativos.

**NUNCA**:
- Uses valores de espaciado arbitrarios fuera de tu escala.
- Hagas que todo el espaciado sea igual; la variedad crea la jerarquía.
- Envuelvas todo en tarjetas; no todo necesita un contenedor.
- Anides tarjetas dentro de otras tarjetas; usa espaciado y divisores para establecer jerarquías internas.
- Uses cuadrículas de tarjetas idénticas en todas partes (icono + título + texto, repetidos).
- Centres todo; la alineación a la izquierda con asimetría se siente más diseñada.
- Uses por defecto el diseño de métrica hero (número grande, etiqueta pequeña, estadísticas, degradado) como plantilla. Si se muestran datos de usuario reales, una métrica destacada puede funcionar; pero debe mostrar datos reales, no números decorativos.
- Uses CSS Grid por defecto cuando Flexbox sea más sencillo; usa la herramienta más simple para cada tarea.
- Uses valores de z-index arbitrarios (999, 9999); construye una escala semántica.

## Verificar Mejoras de Diseño

- **Prueba del entrecejo (Squint test)**: ¿Puedes identificar las acciones principales, secundarias y las agrupaciones con la vista desenfocada?
- **Ritmo**: ¿La página tiene una alternancia satisfactoria de espaciados estrechos y generosos?
- **Jerarquía**: ¿El contenido más importante resulta obvio en menos de 2 segundos?
- **Espacio para respirar**: ¿El diseño se siente cómodo, no apretado ni desperdiciado?
- **Consistencia**: ¿El sistema de espaciado se aplica de manera uniforme?
- **Responsividad**: ¿El diseño se adapta con gracia en los diferentes tamaños de pantalla?

Recuerda: El espacio es la herramienta de diseño menos aprovechada. Un diseño con el ritmo y la jerarquía adecuados puede hacer que incluso el contenido más simple se sienta pulido e intencional.