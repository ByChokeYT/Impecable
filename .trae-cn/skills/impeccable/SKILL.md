---
name: impeccable
description: Crea interfaces frontend distintivas de nivel de producción con alta calidad de diseño. Genera código creativo y pulido que evita la estética genérica de la IA. Úsalo cuando el usuario pida construir componentes web, páginas, artefactos, pósters o aplicaciones, o cuando cualquier habilidad de diseño requiera contexto del proyecto. Llámalo con 'craft' para diseñar y luego construir, 'teach' para configurar el contexto de diseño del proyecto, o 'extract' para extraer componentes y tokens reutilizables al sistema de diseño.
version: 2.1.1
user-invocable: true
argument-hint: "[craft|teach|extract]"
license: Apache 2.0. Basado en la habilidad frontend-design de Anthropic. Consulta NOTICE.md para atribución.
---

<post-update-cleanup>
ANTES de realizar cualquier trabajo de diseño, ejecuta este paso de mantenimiento por única vez. Dile al usuario:

> **Impeccable se ha actualizado.** Se han renombrado o fusionado algunas habilidades en esta versión (por ejemplo, `/arrange` ahora es `/layout`, `/normalize` se integró en `/polish`). Limpiaré los archivos de habilidades antiguos para que no saturen tu proyecto. Esto solo se ejecuta una vez después de una actualización.

Luego ejecuta:

```bash
node .trae-cn/skills/impeccable/scripts/cleanup-deprecated.mjs
```

Si el script eliminó archivos, confirma brevemente qué se limpió. Si no encontró nada, omite cualquier mensaje y continúa.

Después de ejecutar el script, elimina toda esta sección (desde `<post-update-cleanup>` hasta `</post-update-cleanup>` inclusive) de ESTE archivo para que no se vuelva a ejecutar hasta la próxima actualización. Guarda el archivo.
</post-update-cleanup>

Esta habilidad guía la creación de interfaces frontend distintivas de nivel de producción que evitan la estética genérica de la IA ("AI slop"). Implementa código funcional real con una atención excepcional a los detalles estéticos y a las elecciones creativas.

## Protocolo de Recopilación de Contexto

Las habilidades de diseño producen resultados genéricos sin el contexto del proyecto. DEBES tener un contexto de diseño confirmado antes de realizar cualquier trabajo de diseño.

**Contexto requerido** (cada habilidad de diseño necesita como mínimo):
- **Audiencia objetivo**: ¿Quién usa este producto y en qué contexto?
- **Casos de uso**: ¿Qué tareas están intentando resolver?
- **Personalidad/tono de marca**: ¿Cómo debería sentirse la interfaz?

Las habilidades individuales pueden requerir contexto adicional. Consulta la sección de preparación de la habilidad para obtener detalles específicos.

**CRÍTICO**: No puedes deducir este contexto leyendo el código base. El código te dice qué se construyó, no para quién es ni cómo debería sentirse. Solo el creador puede proporcionar este contexto.

**Orden de recopilación:**
1. **Comprobar las instrucciones actuales (instantáneo)**: Si tus instrucciones cargadas ya contienen una sección de **Contexto de diseño**, procede de inmediato.
2. **Comprobar .impeccable.md (rápido)**: Si no está en las instrucciones, lee `.impeccable.md` en la raíz del proyecto. Si existe y contiene el contexto requerido, procede.
3. **Ejecutar impeccable teach (REQUERIDO)**: Si ninguna de las fuentes tiene contexto, DEBES ejecutar /impeccable teach AHORA antes de hacer cualquier otra cosa. NO omitas este paso. NO intentes deducir el contexto a partir del código base en su lugar.

---

## Dirección de Diseño

Comprométete con una dirección estética ATREVIDA:
- **Propósito**: ¿Qué problema resuelve esta interfaz? ¿Quién la usa?
- **Tono**: Elige un extremo: brutalmente minimalista, caos maximalista, retro-futurista, orgánico/natural, lujoso/refinado, juguetón/tipo juguete, editorial/revista, brutalista/puro, art déco/geométrico, suave/pastel, industrial/utilitario, etc. Hay muchos estilos para elegir. Úsalos como inspiración pero diseña uno que sea fiel a la dirección estética seleccionada.
- **Restricciones**: Requisitos técnicos (framework, rendimiento, accesibilidad).
- **Diferenciación**: ¿Qué hace que esto sea INOLVIDABLE? ¿Qué es lo único que alguien recordará?

**CRÍTICO**: Elige una dirección conceptual clara y ejecútala con precisión. El maximalismo atrevido y el minimalismo refinado funcionan. La clave es la intencionalidad, no la intensidad.

Luego implementa código funcional que sea:
- De nivel de producción y funcional
- Visualmente impactante y memorable
- Coherente con un punto de vista estético claro
- Meticulosamente refinado en cada detalle

## Directrices de Estética Frontend

### Tipografía {#tipografia}
→ *Consulta la [referencia de tipografía](reference/typography.md) para características OpenType, carga de fuentes web y material más profundo sobre escalas.*

Elige fuentes que sean hermosas, únicas e interesantes. Combina una fuente de exhibición (display) distintiva con una fuente de cuerpo refinada.

<typography_principles>
Aplica siempre estas reglas, no consultes una referencia, solo hazlas:

- Usa una escala tipográfica modular con dimensionamiento fluido (clamp) para los encabezados en páginas de marketing o contenido. Usa escalas fijas en `rem` para interfaces de aplicaciones y paneles de control (ningún sistema de diseño importante usa tipografía fluida en la interfaz de usuario de un producto).
- Usa menos tamaños pero con más contraste. Una escala de 5 pasos con al menos una proporción de 1.25 entre pasos crea una jerarquía más clara que 8 tamaños que están a una distancia de 1.1x.
- La altura de línea (line-height) escala inversamente con la longitud de línea. Las columnas estrechas requieren un interlineado más ajustado; las columnas anchas requieren más espacio. Para texto claro sobre fondos oscuros, AÑADE 0.05-0.1 a tu altura de línea normal; el texto claro se lee como de menor peso y necesita más espacio para respirar.
- Limita la longitud de línea a ~65-75ch. El texto de cuerpo más ancho que eso resulta fatigante de leer.
</typography_principles>

<font_selection_procedure>
HAZ ESTO ANTES DE ESCRIBIR CUALQUIER NOMBRE DE FUENTE.

El modo de fallo natural del modelo es "me dijeron que no usara Inter, así que elegiré mi siguiente fuente favorita, que se convierte en la nueva monocultura". Evita esto realizando el siguiente procedimiento en cada proyecto, en orden:

Paso 1. Lee la descripción una vez. Escribe 3 palabras concretas para la voz de la marca (por ejemplo, "cálido, mecánico y obstinado", "calmo, clínico y cuidadoso", "rápido, denso e indiferente", "hecho a mano y un poco raro"). NO uses "moderno" o "elegante", esas son categorías vacías.

Paso 2. Haz una lista de las 3 fuentes que normalmente elegirías dadas esas palabras. Escríbelas. Lo más probable es que estén en esta lista:

<reflex_fonts_to_reject>
Fraunces
Newsreader
Lora
Crimson
Crimson Pro
Crimson Text
Playfair Display
Cormorant
Cormorant Garamond
Syne
IBM Plex Mono
IBM Plex Sans
IBM Plex Serif
Space Mono
Space Grotesk
Inter
DM Sans
DM Serif Display
DM Serif Text
Outfit
Plus Jakarta Sans
Instrument Sans
Instrument Serif
</reflex_fonts_to_reject>

Rechaza cada fuente que aparezca en la lista reflex_fonts_to_reject. Son tus valores predeterminados de datos de entrenamiento y crean monocultura entre proyectos.

Paso 3. Explora un catálogo de fuentes teniendo en mente las 3 palabras de la marca. Fuentes: Google Fonts, Pangram Pangram, Future Fonts, Adobe Fonts, ABC Dinamo, Klim Type Foundry, Velvetyne. Busca algo que se adapte a la marca como un *objeto físico*: el epígrafe de una exhibición de museo, un letrero de tienda pintado a mano, el manual de una terminal de computadora de los años 70, una etiqueta de tela en el interior de un abrigo, un libro infantil impreso en papel de periódico barato. Rechaza lo primero que "parezca diseñado", eso también es el reflejo entrenado. Sigue buscando.

Paso 4. Verifica el resultado. La fuente adecuada para un estilo "elegante" NO es necesariamente una serif. La fuente adecuada para un estilo "técnico" NO es necesariamente una sans-serif. La fuente adecuada para un estilo "cálido" NO es Fraunces. Si tu elección final coincide con tu patrón reflejo, vuelve al Paso 3.
</font_selection_procedure>

<typography_rules>
SÍ: Usa una escala tipográfica modular con tamaño fluido (clamp()) en los encabezados.
SÍ: Varía los pesos y tamaños de fuente para crear una jerarquía visual clara.
SÍ: Varía tus elecciones de fuentes entre proyectos. Si usaste una fuente display serif en el último proyecto, busca una sans, mono o display en este.

NO: Uses fuentes sobreutilizadas como Inter, Roboto, Arial, Open Sans o las predeterminadas del sistema, pero tampoco te limites a cambiar a tu segunda favorita. Todas las fuentes de la lista reflex_fonts_to_reject anterior están prohibidas. Busca más allá.
NO: Uses tipografía mono como un atajo perezoso para dar vibras "técnicas o de desarrollador".
NO: Coloques iconos grandes con esquinas redondeadas sobre cada encabezado. Rara vez aportan valor y hacen que los sitios parezcan basados en plantillas.
NO: Uses una sola familia tipográfica para toda la página. Combina una fuente display distintiva con una fuente de cuerpo refinada.
NO: Uses una jerarquía tipográfica plana donde los tamaños estén demasiado juntos. Busca al menos una proporción de 1.25 entre los pasos.
NO: Escribas pasajes largos de texto de cuerpo en mayúsculas. Reserva las mayúsculas para etiquetas cortas y encabezados.
</typography_rules>

### Color y Tema
→ *Consulta la [referencia de color](reference/color-and-contrast.md) para material más profundo sobre contraste, accesibilidad y construcción de paletas.*

Comprométete con una paleta cohesiva. Los colores dominantes con acentos definidos superan a las paletas tímidas y distribuidas uniformemente.

<color_principles>
Aplica siempre estas reglas, no consultes una referencia, solo hazlas:

- Usa OKLCH, no HSL. OKLCH es perceptualmente uniforme: los pasos iguales en luminosidad *se ven* iguales, lo cual HSL no ofrece. A medida que te acerques al blanco o al negro, REDUCE la croma: una croma alta en luminosidad extrema se ve estridente. Un azul claro al 85% de luminosidad requiere ~0.08 de croma, no el 0.15 de tu color base.
- Tiñe tus colores neutros hacia el tono de tu marca. Incluso una croma de 0.005-0.01 es perceptible y crea una cohesión subconsciente entre el color de la marca y las superficies de la interfaz. El tono hacia el que tiñes debe provenir de ESTA marca, no de una fórmula de "cálido = amigable" o "frío = tecnológico". Elige primero el tono real de la marca y luego tiñe todo hacia él.
- La regla 60-30-10 se refiere al *peso* visual, no al conteo de píxeles. 60% neutro/superficie, 30% texto secundario y bordes, 10% acento. Los acentos funcionan PORQUE son raros. El uso excesivo destruye su impacto.
</color_principles>

<theme_selection>
El tema (claro vs oscuro) debe DERIVARSE de la audiencia y del contexto de visualización, no elegirse por defecto. Lee la descripción del proyecto y pregunta: ¿cuándo se usa este producto, quién lo usa y en qué entorno físico?

- Un DEX perpetuo consumido durante sesiones de trading rápidas → oscuro
- Un portal de hospital consumido por pacientes ansiosos en teléfonos tarde en la noche → claro
- Una aplicación de lectura infantil → claro
- Un foro de motocicletas clásicas donde los usuarios se sientan en su garaje a las 9 p.m. → oscuro
- Un panel de observabilidad para SREs en una oficina oscura → oscuro
- Una lista de verificación de planificación de bodas para parejas un domingo por la mañana → claro
- Una aplicación de reproductor de música para escuchar con auriculares por la noche → oscuro
- La página de inicio de una revista de comida navegada durante un descanso para el café → claro

No pongas todo en modo claro "para ir a lo seguro". No pongas todo en modo oscuro "para lucir genial". Ambos valores predeterminados son reflejos perezosos. El tema correcto es el que el usuario real desea en su contexto real.
</theme_selection>

<color_rules>
SÍ: Usa funciones de color CSS modernas (oklch, color-mix, light-dark) para paletas perceptualmente uniformes y mantenibles.
SÍ: Tiñe tus colores neutros hacia el tono de tu marca. Incluso un matiz sutil crea una cohesión subconsciente.

NO: Uses texto gris sobre fondos de color; se ve lavado. En su lugar, usa un tono oscuro del color de fondo.
NO: Uses negro puro (#000) o blanco puro (#fff). Siempre tiñe; el negro/blanco puro nunca aparece en la naturaleza.
NO: Uses la paleta de colores de IA: cian sobre oscuro, degradados de púrpura a azul, acentos de neón sobre fondos oscuros.
NO: Uses texto con degradado para impacto; consulta las <absolute_bans> a continuación para ver la definición estricta. Solo colores sólidos para el texto.
NO: Establezcas por defecto el modo oscuro con acentos brillantes. Se ve "genial" pero no requiere decisiones de diseño reales.
NO: Establezcas por defecto el modo claro "para ir a lo seguro". El objetivo es elegir, no refugiarse en una opción segura.
</color_rules>

### Diseño y Espacio {#diseno-y-espacio}
→ *Consulta la [referencia espacial](reference/spatial-design.md) para material más profundo sobre cuadrículas, consultas de contenedor y ajustes ópticos.*

Crea ritmo visual mediante un espaciado variado, no usando el mismo relleno (padding) en todas partes. Adopta la asimetría y las composiciones inesperadas. Rompe la cuadrícula intencionadamente para dar énfasis.

<spatial_principles>
Aplica siempre estas reglas, no consultes una referencia, solo hazlas:

- Usa una escala de espaciado de 4pt con nombres de tokens semánticos (`--space-sm`, `--space-md`), no nombres basados en píxeles (`--spacing-8`). Escala: 4, 8, 12, 16, 24, 32, 48, 64, 96. Una escala de 8pt es demasiado gruesa; a menudo querrás 12px entre dos valores.
- Usa `gap` en lugar de márgenes para el espaciado entre elementos hermanos. Elimina el colapso de márgenes y los trucos de limpieza asociados.
- Varía el espaciado para establecer jerarquía. Un encabezado con espacio adicional arriba se lee como más importante; aprovéchalo. No apliques el mismo padding en todas partes.
- Patrón de cuadrícula autoajustable: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` es la cuadrícula responsiva sin breakpoints para contenido tipo tarjeta.
- Las consultas de contenedor (container queries) son para componentes, las consultas de viewport son para el diseño de la página. Una tarjeta en una barra lateral debe adaptarse al ancho de la barra lateral, no al del viewport.
</spatial_principles>

<spatial_rules>
SÍ: Crea ritmo visual mediante un espaciado variado: agrupaciones estrechas, separaciones generosas.
SÍ: Usa espaciado fluido con clamp() que respire en pantallas más grandes.
SÍ: Usa asimetría y composiciones inesperadas; rompe la cuadrícula intencionadamente para dar énfasis.

NO: Envuelvas todo en tarjetas. No todo necesita un contenedor.
NO: Anides tarjetas dentro de tarjetas. Genera ruido visual; aplana la jerarquía.
NO: Uses cuadrículas de tarjetas idénticas (tarjetas del mismo tamaño con icono + título + texto, repetidas infinitamente).
NO: Uses la plantilla de diseño de métricas hero (número grande, etiqueta pequeña, estadísticas de soporte, acento de degradado).
NO: Centres todo. El texto alineado a la izquierda con diseños asimétricos se siente más diseñado.
NO: Uses el mismo espaciado en todas partes. Sin ritmo, los diseños se sienten monótonos.
NO: Permitas que el texto de cuerpo se extienda más allá de ~80 caracteres por línea. Añade un ancho máximo como 65–75ch para que el ojo pueda seguir el texto fácilmente.
</spatial_rules>

### Detalles Visuales

<absolute_bans>
Estos patrones CSS NUNCA son aceptables. Son los indicadores más reconocibles del diseño de IA. Identifica y rechaza: si te encuentras a punto de escribir cualquiera de estos, detente y reescribe el elemento con una estructura completamente diferente.

PROHIBICIÓN 1: Bordes con franja lateral en tarjetas/elementos de lista/destacados/alertas
  - PATRÓN: `border-left:` o `border-right:` con un ancho mayor a 1px
  - INCLUYE: colores fijos Y variables CSS
  - PROHIBIDO: `border-left: 3px solid red`, `border-left: 4px solid #ff0000`, `border-left: 4px solid var(--color-warning)`, `border-left: 5px solid oklch(...)`, etc.
  - POR QUÉ: este es el "toque de diseño" más sobreutilizado en UIs de administración, paneles de control y aplicaciones médicas. Nunca se ve intencional, independientemente del color, radio, opacidad o si el nombre de la variable es "primary", "warning" o "accent".
  - REESCRITURA: usa una estructura de elemento completamente diferente. No te limites a cambiar por un box-shadow inset. Opta por bordes completos, tintes de fondo, números/iconos al frente o ningún indicador visual en absoluto.

PROHIBICIÓN 2: Texto con degradado
  - PATRÓN: `background-clip: text` (o `-webkit-background-clip: text`) combinado con un fondo degradado
  - PROHIBIDO: cualquier combinación que haga que el relleno del texto provenga de un `linear-gradient`, `radial-gradient` o `conic-gradient`
  - POR QUÉ: el texto con degradado es decorativo en lugar de significativo y es uno de los tres principales indicadores del diseño de IA.
  - REESCRITURA: usa un único color sólido para el texto. Si deseas énfasis, usa el peso o el tamaño, no un relleno degradado.
</absolute_bans>

SÍ: Usa elementos decorativos intencionales y útiles que refuercen la marca.
NO: Uses border-left o border-right mayor a 1px como una franja de acento de color en tarjetas, elementos de lista, destacados o alertas. Consulta las <absolute_bans> anteriores para el patrón CSS estricto.
NO: Uses glassmorphism en todas partes (efectos de desenfoque, tarjetas de vidrio, bordes brillantes utilizados de manera decorativa en lugar de útil).
NO: Uses sparklines como decoración. Gráficos pequeños que se ven sofisticados pero no transmiten nada significativo.
NO: Uses rectángulos redondeados con sombras paralelas genéricas. Seguro, olvidable, podría ser cualquier resultado de IA.
NO: Uses modales a menos que realmente no haya una alternativa mejor. Los modales son perezosos.

### Movimiento
→ *Consulta la [referencia de movimiento](reference/motion-design.md) para tiempos, aceleraciones y reducción de movimiento.*

Enfócate en momentos de alto impacto: una carga de página bien orquestada con revelaciones escalonadas crea más deleite que interacciones microscópicas dispersas.

**SÍ**: Usa el movimiento para transmitir cambios de estado: entradas, salidas, feedback.
**SÍ**: Usa aceleraciones exponenciales (ease-out-quart/quint/expo) para una deceleración natural.
**SÍ**: Para animaciones de altura, usa transiciones de grid-template-rows en lugar de animar height directamente.
**NO**: Animes propiedades de diseño (width, height, padding, margin). Usa únicamente transform y opacity.
**NO**: Uses aceleraciones elásticas o de rebote. Se sienten anticuadas y de mal gusto; los objetos reales desaceleran suavemente.

### Interacción {#interaccion}
→ *Consulta la [referencia de interacción](reference/interaction-design.md) para formularios, enfoque y patrones de carga.*

Haz que las interacciones se sientan rápidas. Usa una UI optimista: actualiza inmediatamente, sincroniza después.

**SÍ**: Usa la divulgación progresiva. Comienza de forma simple, revela la sofisticación a través de la interacción (opciones básicas primero, opciones avanzadas detrás de secciones expandibles; estados de hover que revelan acciones secundarias).
**SÍ**: Diseña estados vacíos que enseñen a usar la interfaz, no que solo digan "no hay nada aquí".
**SÍ**: Haz que cada superficie interactiva se sienta intencional y receptiva.
**NO**: Repitas la misma información (encabezados redundantes, introducciones que repiten el título).
**NO**: Hagas que todos los botones sean principales. Usa botones fantasma (ghost buttons), enlaces de texto, estilos secundarios; la jerarquía importa.

### Responsivo
→ *Consulta la [referencia de diseño responsivo](reference/responsive-design.md) para diseño fluido, mobile-first y consultas de contenedor.*

**SÍ**: Usa consultas de contenedor (@container) para la adaptabilidad a nivel de componente.
**SÍ**: Adapta la interfaz para diferentes contextos, no te limites a encogerla.
**NO**: Ocultes funcionalidades críticas en móviles. Adapta la interfaz, no la amputes.

### Textos de UX (UX Writing)
→ *Consulta la [referencia de redacción de UX](reference/ux-writing.md) para etiquetas, errores y estados vacíos.*

**SÍ**: Haz que cada palabra se gane su lugar.
**NO**: Repitas información que los usuarios ya pueden ver.

---

## La Prueba del "AI Slop"

**Control de calidad crítico**: Si le mostraras esta interfaz a alguien y le dijeras "la IA hizo esto", ¿lo creería de inmediato? Si la respuesta es sí, ese es el problema.

Una interfaz distintiva debería hacer que alguien pregunte "¿cómo se hizo esto?" no "¿qué IA hizo esto?".

Revisa las directrices de "NO" anteriores. Son las huellas dactilares del trabajo generado por IA de 2024-2025.

---

## Principios de Implementación

Adapta la complejidad de la implementación a la visión estética. Los diseños maximalistas necesitan código elaborado con animaciones y efectos extensos. Los diseños minimalistas o refinados necesitan moderación, precisión y una atención cuidadosa al espaciado, la tipografía y los detalles sutiles.

Interpreta de manera creativa y toma decisiones inesperadas que se sientan genuinamente diseñadas para el contexto. Ningún diseño debe ser igual a otro. Varía entre temas claros y oscuros, diferentes fuentes, diferentes estéticas. NUNCA converjas en elecciones comunes entre generaciones.

Recuerda: the model es capaz de realizar un trabajo creativo extraordinario. No te limites. Muestra lo que realmente se puede crear cuando se piensa fuera de lo común y se compromete plenamente con una visión distintiva.

---

## Modo Craft (Construcción)

Si esta habilidad se invoca con el argumento "craft" (por ejemplo, `/impeccable craft [descripción de la función]`), sigue el [flujo de craft](reference/craft.md). Pasa cualquier argumento adicional como la descripción de la función.

---

## Modo Teach (Aprendizaje)

Si esta habilidad se invoca con el argumento "teach" (por ejemplo, `/impeccable teach`), omite todo el trabajo de diseño anterior y en su lugar ejecuta el flujo de aprendizaje a continuación. Esta es una configuración única que recopila el contexto de diseño para el proyecto.

### Paso 1: Explorar el Código Base

Antes de hacer preguntas, escanea a fondo el proyecto para descubrir lo que puedas:

- **README y documentación**: Propósito del proyecto, audiencia objetivo, cualquier objetivo declarado.
- **Package.json / archivos de configuración**: Stack tecnológico, dependencias, librerías de diseño existentes.
- **Componentes existentes**: Patrones de diseño actuales, espaciado, tipografía en uso.
- **Activos de marca**: Logos, favicons, valores de color ya definidos.
- **Tokens de diseño / variables CSS**: Paletas de colores existentes, conjuntos de fuentes, escalas de espaciado.
- **Cualquier guía de estilo o documentación de marca.**

Anota lo que has aprendido y lo que aún no está claro.

### Paso 2: Hacer Preguntas Enfocadas en UX

ask the user directly to clarify what you cannot infer. Enfócate solo en lo que no pudiste deducir del código base:

#### Usuarios y Propósito
- ¿Quién usa esto? ¿Cuál es su contexto al usarlo?
- ¿Qué tarea están tratando de resolver?
- ¿Qué emociones debe evocar la interfaz? (confianza, deleite, calma, urgencia, etc.)

#### Marca y Personalidad
- ¿Cómo describirías la personalidad de la marca en 3 palabras?
- ¿Algún sitio o aplicación de referencia que capture el estilo correcto? ¿Qué específicamente sobre ellos?
- ¿A qué no debería parecerse esto explícitamente? ¿Alguna referencia negativa?

#### Preferencias Estéticas
- ¿Alguna preferencia marcada para la dirección visual? (minimalista, atrevida, elegante, juguetona, técnica, orgánica, etc.)
- ¿Modo claro, modo oscuro o ambos?
- ¿Algún color que deba usarse o evitarse?

#### Accesibilidad e Inclusión
- ¿Requisitos de accesibilidad específicos? (nivel WCAG, necesidades de usuario conocidas)
- ¿Consideraciones para reducción de movimiento, daltonismo u otras adaptaciones?

Omite las preguntas cuya respuesta ya esté clara tras la exploración del código base.

### Paso 3: Escribir el Contexto de Diseño

Sintetiza tus hallazgos y las respuestas del usuario en una sección `## Contexto de diseño`:

```markdown
## Contexto de diseño

### Usuarios
[Quiénes son, su contexto, la tarea a realizar]

### Personalidad de Marca
[Voz, tono, personalidad en 3 palabras, objetivos emocionales]

### Dirección Estética
[Tono visual, referencias, referencias negativas, tema]

### Principios de Diseño
[3-5 principios derivados de la conversación que deben guiar todas las decisiones de diseño]
```

Escribe esta sección en el archivo `.impeccable.md` en la raíz del proyecto. Si el archivo ya existe, actualiza la sección Contexto de diseño en su lugar.

Luego ask the user directly to clarify what you cannot infer. si también desean que el Contexto de diseño se agregue a RULES.md. Si es así, agrégalo o actualiza la sección allí también.

Confirma la finalización y resume los principios de diseño clave que ahora guiarán todo el trabajo futuro.

---

## Modo Extract (Extracción)

Si esta habilidad se invoca con el argumento "extract" (por ejemplo, `/impeccable extract [objetivo]`), sigue el [flujo de extract](reference/extract.md). Pasa cualquier argumento adicional como el objetivo de extracción.