---
name: clarify
description: Mejora los textos de la interfaz (copy de UX), mensajes de error, microcopy, etiquetas e instrucciones poco claras para que sean fáciles de entender. Úsalo cuando el usuario mencione textos confusos, etiquetas poco claras, mensajes de error deficientes, instrucciones difíciles de seguir o cuando desee una mejor redacción para UX.
version: 2.1.1
argument-hint: "[objetivo]"
---

Identifica y mejora los textos de la interfaz que sean poco claros, confusos o estén mal redactados para hacer que el producto sea más fácil de entender y usar.

## PREPARACIÓN OBLIGATORIA

Invoca $impeccable — contiene los principios de diseño, antipatrones y el **Protocolo de Recopilación de Contexto**. Sigue el protocolo antes de proceder — si aún no existe un contexto de diseño, DEBES ejecutar $impeccable teach primero. Adicionalmente, recopila: nivel técnico de la audiencia y estado mental de los usuarios en este contexto.

---

## Evaluar el Texto Actual

Identifica qué hace que el texto sea poco claro o ineficaz:

1. **Encontrar problemas de claridad**:
   - **Jerga**: Términos técnicos que los usuarios no entenderán.
   - **Ambigüedad**: Múltiples interpretaciones posibles.
   - **Voz pasiva**: "Tu archivo ha sido subido" vs. "Subimos tu archivo".
   - **Longitud**: Demasiado detallado o demasiado escueto.
   - **Suposiciones**: Asumir que el usuario posee conocimientos que no tiene.
   - **Falta de contexto**: Los usuarios no saben qué hacer ni por qué.
   - **Tono inadecuado**: Demasiado formal, demasiado informal o inapropiado para la situación.

2. **Comprender el contexto**:
   - ¿Quién es la audiencia? (¿Técnica? ¿Público general? ¿Usuarios primerizos?)
   - ¿Cuál es el estado mental del usuario? (¿Estresado por un error? ¿Tranquilo tras un éxito?)
   - ¿Cuál es la acción? (¿Qué queremos que hagan los usuarios?)
   - ¿Cuál es la restricción? (¿Límites de caracteres? ¿Limitaciones de espacio?)

**CRÍTICO**: Un texto claro ayuda a los usuarios a tener éxito. El texto confuso genera frustración, errores y tickets de soporte.

## Planificar Mejoras en los Textos

Crea una estrategia para lograr una comunicación más clara:

- **Mensaje principal**: ¿Qué es la ÚNICA cosa que los usuarios necesitan saber?
- **Acción requerida**: ¿Qué deben hacer los usuarios a continuación (si aplica)?
- **Tono**: ¿Cómo debería sentirse esto? (¿De ayuda? ¿Disculpándose? ¿Alentador?)
- **Restricciones**: Límites de longitud, voz de marca, consideraciones de localización.

**IMPORTANTE**: La buena redacción de UX es invisible. Los usuarios deben entender de inmediato sin percatarse de las palabras.

## Mejorar el Texto Sistemáticamente

Refina el texto en estas áreas comunes:

### Mensajes de Error
**Mal**: "Error 403: Prohibido"
**Bien**: "No tienes permiso para ver esta página. Contacta a tu administrador para obtener acceso."

**Mal**: "Entrada inválida"
**Bien**: "Las direcciones de correo necesitan un símbolo @. Prueba con: nombre@ejemplo.com"

**Principios**:
- Explica qué salió mal en un lenguaje sencillo.
- Sugiere cómo solucionarlo.
- No culpes al usuario.
- Incluye ejemplos cuando sea útil.
- Proporciona un enlace a la ayuda o soporte si aplica.

### Etiquetas de Formulario e Instrucciones
**Mal**: "F. Nac. (DD/MM/AAAA)"
**Bien**: "Fecha de nacimiento" (con un marcador de posición que muestre el formato).

**Mal**: "Introduce el valor aquí"
**Bien**: "Tu correo electrónico" o "Nombre de la empresa".

**Principios**:
- Usa etiquetas claras y específicas (no marcadores de posición genéricos).
- Muestra el formato esperado con ejemplos.
- Explica por qué estás pidiendo el dato (cuando no sea obvio).
- Coloca las instrucciones antes del campo, no después.
- Mantén claros los indicadores de campos obligatorios.

### Botones y Textos de Llamada a la Acción (CTA)
**Mal**: "Haz clic aquí" | "Enviar" | "OK"
**Bien**: "Crear cuenta" | "Guardar cambios" | "Entendido, gracias"

**Principios**:
- Describe la acción específicamente.
- Usa la voz activa (verbo + sustantivo).
- Adáptate al modelo mental del usuario.
- Sé específico ("Guardar" es mejor que "OK").

### Textos de Ayuda y Tooltips
**Mal**: "Este es el campo de nombre de usuario"
**Bien**: "Elige un nombre de usuario. Puedes cambiarlo más tarde en Configuración."

**Principios**:
- Aporta valor (no te limites a repetir la etiqueta).
- Responde a la pregunta implícita ("¿Qué es esto?" o "¿Por qué necesito esto?").
- Mantén el texto breve pero completo.
- Enlaza a documentación detallada si es necesario.

### Estados Vacíos (Empty States)
**Mal**: "No hay elementos"
**Bien**: "Aún no tienes proyectos. Crea tu primer proyecto para comenzar."

**Principios**:
- Explica por qué está vacío (si no es obvio).
- Muestra la siguiente acción claramente.
- Haz que sea acogedor, no un callejón sin salida.

### Mensajes de Éxito
**Mal**: "Éxito"
**Bien**: "¡Configuración guardada! Tus cambios se aplicarán de inmediato."

**Principios**:
- Confirma qué sucedió.
- Explica qué ocurre a continuación (si es relevante).
- Sé breve pero completo.
- Sincronízate con el momento emocional del usuario (celebra los logros importantes).

### Estados de Carga
**Mal**: "Cargando..." (durante más de 30 segundos).
**Bien**: "Analizando tus datos... esto suele tardar entre 30 y 60 segundos."

**Principios**:
- Establece expectativas (¿cuánto tiempo?).
- Explica qué está sucediendo (cuando no sea obvio).
- Muestra el progreso siempre que sea posible.
- Ofrece una opción de salida si es apropiado ("Cancelar").

### Diálogos de Confirmación
**Mal**: "¿Estás seguro?"
**Bien**: "¿Eliminar 'Proyecto Alfa'? Esta acción no se puede deshacer."

**Principios**:
- Indica la acción específica.
- Explica las consecuencias (especialmente para acciones destructivas).
- Usa etiquetas claras en los botones ("Eliminar proyecto", no "Sí").
- No abuses de las confirmaciones (solo para acciones de riesgo).

### Navegación y Orientación
**Mal**: Etiquetas genéricas como "Elementos" | "Cosas" | "Objetos"
**Bien**: Etiquetas específicas como "Tus proyectos" | "Miembros del equipo" | "Configuración"

**Principios**:
- Sé específico y descriptivo.
- Usa un lenguaje que los usuarios entiendan (evita la jerga interna).
- Haz que la jerarquía sea clara.
- Considera el rastro de información (breadcrumbs, ubicación actual).

## Aplicar Principios de Claridad

Cada fragmento de texto debe seguir estas reglas:

1. **Sé específico**: "Introduce tu correo" en lugar de "Introduce el valor".
2. **Sé conciso**: Recorta palabras innecesarias (pero sin sacrificar la claridad).
3. **Sé activo**: "Guardar cambios" en lugar de "Los cambios se guardarán".
4. **Sé humano**: "Vaya, algo salió mal" en lugar de "Se produjo un error en el sistema".
5. **Sé de ayuda**: Dile a los usuarios qué hacer, no solo qué sucedió.
6. **Sé consistente**: Usa los mismos términos en todas partes (no cambies palabras solo por variar).

**NUNCA**:
- Uses jerga sin explicación.
- Culpas a los usuarios ("Cometiste un error" → "Este campo es obligatorio").
- Seas impreciso ("Algo salió mal" sin explicación).
- Uses la voz pasiva de manera innecesaria.
- Escribas explicaciones excesivamente largas (sé conciso).
- Uses el humor en los errores (sé empático en su lugar).
- Asumas conocimientos técnicos por parte del usuario.
- Varíes la terminología (elige un término y manténlo).
- Repitas información (encabezados que repiten introducciones, explicaciones redundantes).
- Uses marcadores de posición como las únicas etiquetas (desaparecen cuando el usuario escribe).

## Verificar Mejoras

Prueba que las mejoras de redacción funcionen:

- **Comprensión**: ¿Pueden los usuarios entender el texto sin contexto adicional?
- **Orientación a la acción**: ¿Saben los usuarios qué hacer a continuación?
- **Brevedad**: ¿Es el texto lo más corto posible sin perder claridad?
- **Consistencia**: ¿Coincide con la terminología utilizada en otras partes del sitio?
- **Tono**: ¿Es apropiado para la situación?

Recuerda: Eres un experto en claridad con excelentes habilidades de comunicación. Escribe como si le estuvieras explicando el funcionamiento a un amigo inteligente que no está familiarizado con el producto. Sé claro, sé útil, sé humano.