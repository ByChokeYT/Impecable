---
name: typeset
description: "Mejora la tipografía corrigiendo la elección de fuentes, jerarquía, tamaño, peso y legibilidad para que el texto se sienta intencionado. Úsalo cuando el usuario mencione fuentes, tipografía, legibilidad, jerarquía de texto, que el tamaño de letra se ve raro o cuando desee una tipografía más pulida e intencionada."
argument-hint: "[objetivo]"
user-invocable: true
---

## PREPARACIÓN OBLIGATORIA

Invoca {{command_prefix}}impeccable — contiene los principios de diseño, antipatrones y el **Protocolo de Recopilación de Contexto**. Sigue el protocolo antes de proceder — si aún no existe un contexto de diseño, DEBES ejecutar {{command_prefix}}impeccable teach primero.

---

Evalúa y mejora la tipografía cuando se sienta genérica, inconsistente o mal estructurada, transformando textos con apariencia predeterminada en tipografías intencionadas y bien diseñadas.

## Evaluar la Tipografía Actual

Analiza qué aspectos de la tipografía actual resultan débiles o genéricos:

1. **Elección de fuentes**:
   - ¿Estamos utilizando fuentes predeterminadas invisibles? (Inter, Roboto, Arial, Open Sans, fuentes del sistema).
   - ¿La fuente coincide con la personalidad de la marca? (Una marca juguetona no debería usar una tipografía corporativa rígida).
   - ¿Hay demasiadas familias tipográficas? (Más de 2 o 3 casi siempre genera desorden).

2. **Jerarquía**:
   - ¿Se pueden diferenciar a simple vista los encabezados, el cuerpo de texto y las leyendas (captions)?
   - ¿Los tamaños de fuente están demasiado próximos? (14px, 15px, 16px = jerarquía difusa).
   - ¿Los contrastes de peso son lo suficientemente fuertes? (Medium vs. Regular apenas se distingue).

3. **Tamaño y escala**:
   - ¿Existe una escala tipográfica consistente o los tamaños son arbitrarios?
   - ¿El texto del cuerpo cumple con el mínimo de legibilidad? (16px+).
   - ¿La estrategia de tamaño es adecuada para el contexto? (Escalas fijas en `rem` para interfaces de aplicaciones; escalas fluidas con `clamp()` para encabezados de páginas de marketing o de contenidos).

4. **Legibilidad**:
   - ¿La longitud de las líneas es cómoda? (El rango ideal es de 45 a 75 caracteres).
   - ¿La altura de línea (line-height) es adecuada para la fuente y el contexto?
   - ¿Hay suficiente contraste entre el texto y el fondo?

5. **Consistencia**:
   - ¿Los mismos elementos están estilizados de la misma manera en todo el sitio?
   - ¿Los pesos de las fuentes se usan de manera coherente? (No uses negrita en una sección y seminegrita en otra para cumplir el mismo rol).
   - ¿El espaciado entre letras (letter-spacing) es intencional o es el predeterminado en todas partes?

**CRÍTICO**: El objetivo no es hacer que el texto sea "más adornado", sino hacerlo más claro, legible e intencionado. La buena tipografía es invisible; la mala tipografía distrae.

## Planificar Mejoras Tipográficas

Consulta la [referencia de tipografía](reference/typography.md) en la habilidad impeccable para obtener una guía detallada sobre escalas, emparejamiento de fuentes y estrategias de carga.

Crea un plan sistemático:

- **Selección de fuentes**: ¿Es necesario reemplazar las fuentes? ¿Qué encaja con la marca/contexto?
- **Escala tipográfica**: Establece una escala modular (por ejemplo, una relación de 1.25) con una jerarquía clara.
- **Estrategia de pesos**: ¿Qué pesos cumplen qué funciones? (Regular para el cuerpo, Semibold para etiquetas, Bold para encabezados, o lo que mejor se adapte).
- **Espaciado**: Alturas de línea, espaciado entre letras y márgenes entre elementos tipográficos.

## Mejorar la Tipografía Sistemáticamente

### Selección de Fuentes

Si es necesario reemplazar las fuentes:
- Elige fuentes que reflejen la personalidad de la marca.
- Combínalas buscando un contraste real (serif + sans-serif, geométrica + humanista), o bien utiliza una sola familia en múltiples pesos.
- Asegúrate de que la carga de fuentes web no provoque saltos en el diseño (`font-display: swap`, fuentes alternativas con métricas coincidentes).

### Establecer la Jerarquía

Construye una escala tipográfica clara:
- **5 tamaños cubren la mayoría de las necesidades**: leyenda, secundario, cuerpo, subencabezado, encabezado.
- **Usa una relación consistente** entre niveles (1.25, 1.333 o 1.5).
- **Combina dimensiones**: Tamaño + peso + color + espacio para lograr una jerarquía fuerte; no dependas solo del tamaño.
- **Interfaces de aplicaciones (App UIs)**: Usa una escala tipográfica fija basada en `rem`, opcionalmente ajustada en 1 o 2 breakpoints. El tamaño fluido perjudica la predictibilidad espacial que necesitan los diseños densos basados en contenedores.
- **Páginas de marketing / contenido**: Usa tamaño fluido mediante `clamp(mín, preferido, máx)` para encabezados y textos destacados. Mantén fijo el texto del cuerpo.

### Corregir la Legibilidad

- Establece un ancho máximo (`max-width`) en los contenedores de texto usando unidades `ch` (`max-width: 65ch`).
- Ajusta la altura de línea (line-height) según el contexto: más ajustada para encabezados (1.1-1.2), más holgada para el cuerpo (1.5-1.7).
- Incrementa ligeramente la altura de línea para texto claro sobre fondo oscuro.
- Asegúrate de que el texto del cuerpo tenga al menos 16px / 1rem.

### Refinar Detalles

- Usa `tabular-nums` para tablas de datos y números que deban alinearse en columnas.
- Aplica un espaciado entre letras (`letter-spacing`) adecuado: ligeramente abierto para versalitas y mayúsculas, predeterminado o ajustado para textos destacados grandes.
- Usa nombres de tokens semánticos (`--text-body`, `--text-heading`), evita nombres basados en el valor (`--font-16`).
- Establece `font-kerning: normal` y considera las características OpenType cuando sea apropiado.

### Consistencia de Pesos

- Define roles claros para cada peso y respétalos.
- No uses más de 3 o 4 pesos (Regular, Medium, Semibold, Bold es más que suficiente).
- Carga únicamente los pesos que uses realmente (cada peso añade tiempo de carga a la página).

**NUNCA**:
- Uses más de 2 o 3 familias tipográficas.
- Elijas tamaños de forma arbitraria; comprométete con una escala modular.
- Establezcas el texto del cuerpo por debajo de 16px.
- Uses fuentes decorativas o display para el texto del cuerpo.
- Desactives el zoom del navegador (`user-scalable=no`).
- Uses `px` para los tamaños de fuente; usa `rem` para respetar las preferencias de accesibilidad del usuario.
- Uses Inter/Roboto/Open Sans por defecto cuando la personalidad de la marca sea importante.
- Combines fuentes que sean similares pero no idénticas (por ejemplo, dos tipografías sans-serif geométricas).

## Verificar Mejoras Tipográficas

- **Jerarquía**: ¿Puedes identificar de inmediato el encabezado frente al cuerpo de texto y la leyenda?
- **Legibilidad**: ¿El texto del cuerpo resulta cómodo de leer en pasajes largos?
- **Consistencia**: ¿Los elementos con el mismo rol tienen estilos idénticos en todo el sitio?
- **Personalidad**: ¿La tipografía refleja el carácter de la marca?
- **Rendimiento**: ¿Las fuentes web se cargan de forma eficiente sin provocar saltos en el diseño (CLS)?
- **Accesibilidad**: ¿El texto cumple con las relaciones de contraste de las WCAG? ¿Se puede ampliar con zoom al 200%?

Recuerda: La tipografía es la base del diseño de interfaces; transporta la mayor parte de la información. Conseguir que sea correcta es la mejora con mayor impacto que puedes realizar.
