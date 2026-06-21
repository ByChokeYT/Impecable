# Color y Contraste

## Espacios de Color: Usa OKLCH

**Deja de usar HSL.** Usa OKLCH (o LCH) en su lugar. Es un espacio de color perceptualmente uniforme, lo que significa que pasos idénticos en luminosidad *se verán* iguales — a diferencia de HSL, donde una luminosidad del 50% en el amarillo se ve muy brillante mientras que un 50% en el azul se ve oscuro.

La función OKLCH toma tres componentes: `oklch(luminosidad croma matiz)` (lightness, chroma, hue), donde la luminosidad es 0-100%, el croma es aproximadamente 0-0.4, y el matiz es 0-360. Para construir un color principal y sus variantes más claras o más oscuras, mantén el croma y el matiz aproximadamente constantes y varía la luminosidad — pero **reduce el croma a medida que te acerques al blanco o al negro**, ya que un croma alto con luminosidades extremas se ve estridente.

El matiz que elijas es una decisión de marca y no debe ser predeterminado. No utilices por reflejo el azul (matiz 250) o el naranja cálido (matiz 60) — esos son los colores por defecto del diseño genérico de IA, no la respuesta correcta para una marca específica.

## Construyendo Paletas Funcionales

### Neutros Teñidos

**El gris puro está muerto.** Un tono neutro con croma cero se siente sin vida junto a una marca con color. Añade un valor de croma minúsculo (0.005-0.015) a todos tus neutros, inclinado hacia el color de tu marca. El croma es tan pequeño que no se leerá como "teñido" conscientemente, pero crea una cohesión subconsciente entre el color de la marca y las superficies de la interfaz.

El matiz hacia el cual tiñas debe provenir de la marca de ESTE proyecto, no de una fórmula del tipo "cálido = amigable, frío = tecnológico". Si el color de tu marca es verde azulado (teal), tus neutros se inclinarán hacia el verde azulado. Si el color de tu marca es el ámbar, se inclinarán hacia el ámbar. El objetivo es lograr cohesión con la marca ESPECÍFICA, no usar una paleta de catálogo.

**Evita** la trampa de teñir siempre hacia el naranja cálido o el azul frío. Esos son los dos valores predeterminados más perezosos y crean su propia monotonía visual entre proyectos.

### Estructura de la Paleta

Un sistema completo necesita:

| Rol | Propósito | Ejemplo |
|-----|-----------|---------|
| **Principal (Primary)** | Marca, CTAs, acciones clave | 1 color, 3-5 tonalidades |
| **Neutro (Neutral)** | Texto, fondos, bordes | Escala de 9-11 tonalidades |
| **Semántico (Semantic)** | Éxito, error, advertencia, info | 4 colores, 2-3 tonalidades cada uno |
| **Superficie (Surface)** | Tarjetas, modales, superposiciones | 2-3 niveles de elevación |

**Prescinde de colores secundarios/terciarios a menos que los necesites.** La mayoría de las aplicaciones funcionan perfectamente con un solo color de acento. Añadir más genera fatiga de decisión y ruido visual.

### La Regla 60-30-10 (Aplicada Correctamente)

Esta regla trata sobre el **peso visual**, no sobre la cantidad de píxeles:

- **60%**: Fondos neutros, espacio en blanco, superficies base.
- **30%**: Colores secundarios: texto, bordes, estados inactivos.
- **10%**: Acento: CTAs, zonas destacadas, estados de enfoque (focus).

El error común: usar el color de acento en todas partes porque es "el color de la marca". Los colores de acento funcionan *porque* son escasos. El uso excesivo anula su impacto.

## Contraste y Accesibilidad

### Requisitos de las WCAG

| Tipo de Contenido | Mínimo AA | Objetivo AAA |
|-------------------|-----------|--------------|
| Texto del cuerpo | 4.5:1 | 7:1 |
| Texto grande (18px+ o 14px negrita) | 3:1 | 4.5:1 |
| Componentes de UI, iconos | 3:1 | 4.5:1 |
| Decoraciones no esenciales | Ninguno | Ninguno |

**El detalle oculto**: El texto de marcador de posición (placeholder) sigue necesitando una relación de 4.5:1. ¿Ese placeholder gris claro que ves en todas partes? Normalmente no cumple con las WCAG.

### Combinaciones de Colores Peligrosas

Estas combinaciones suelen fallar en el contraste o causar problemas de legibilidad:

- Texto gris claro sobre blanco (el fallo de accesibilidad número 1).
- **Texto gris sobre cualquier fondo de color**: el gris se ve lavado y sin vida sobre el color. Usa un tono más oscuro del color de fondo, o transparencia.
- Texto rojo sobre fondo verde (o viceversa): el 8% de los hombres no puede distinguir estos colores.
- Texto azul sobre fondo rojo (vibración visual).
- Texto amarillo sobre blanco (casi siempre falla).
- Texto fino y claro sobre imágenes (contraste impredecible).

### Nunca Uses Gris Puro o Negro Puro

El gris puro (`oklch(50% 0 0)`) y el negro puro (`#000`) no existen en la naturaleza; las sombras y superficies reales siempre tienen un tinte de color. Incluso un croma de 0.005-0.01 es suficiente para sentirse natural sin resultar obviamente teñido (ver el ejemplo de neutros teñidos arriba).

### Pruebas

No confíes en tus ojos. Usa herramientas:

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- DevTools del navegador → Rendimiento/Renderizado → Emular deficiencias visuales
- [Polypane](https://polypane.app/) para pruebas en tiempo real

## Temas: Modo Claro y Oscuro

### El Modo Oscuro no es el Modo Claro Invertido

No te limites a intercambiar colores. El modo oscuro requiere diferentes decisiones de diseño:

| Modo Claro | Modo Oscuro |
|------------|-------------|
| Sombras para dar profundidad | Superficies más claras para dar profundidad (sin sombras) |
| Texto oscuro sobre fondo claro | Texto claro sobre fondo oscuro (reduce el peso de la fuente) |
| Acentos vibrantes | Desatura ligeramente los acentos |
| Fondos blancos | Nunca uses negro puro; usa gris oscuro (oklch 12-18%) |

En el modo oscuro, la profundidad proviene de la luminosidad de la superficie, no de la sombra. Diseña una escala de superficie de 3 pasos donde las elevaciones más altas sean más claras (por ejemplo, 15% / 20% / 25% de luminosidad). Usa el MISMO matiz y croma que el color de tu marca (el que sea para ESTE proyecto; no uses azul por defecto) y varía únicamente la luminosidad. Reduce ligeramente el peso del texto del cuerpo (por ejemplo, 350 en lugar de 400) porque el texto claro sobre fondo oscuro se percibe como más grueso que el texto oscuro sobre fondo claro.

### Jerarquía de Tokens

Usa dos capas: tokens primitivos (`--blue-500`) y tokens semánticos (`--color-primary: var(--blue-500)`). Para el modo oscuro, solo redefine la capa semántica; los tokens primitivos se mantienen iguales.

## El Canal Alfa es un Síntoma de Mal Diseño

El uso excesivo de transparencia (rgba, hsla) suele indicar una paleta incompleta. El canal alfa genera contrastes impredecibles, sobrecarga de rendimiento e inconsistencia. En su lugar, define colores de superposición explícitos para cada contexto. Excepción: anillos de enfoque y estados interactivos donde se necesita visibilidad a través del elemento.

---

**Evita**: Depender únicamente del color para comunicar información. Crear paletas sin roles claros para cada color. Usar negro puro (#000) para áreas grandes. Omitir las pruebas de daltonismo (el 8% de los hombres se ve afectado).
