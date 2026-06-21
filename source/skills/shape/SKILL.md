---
name: shape
description: "Planifica la UX y la UI de una funcionalidad antes de escribir código. Realiza una entrevista estructurada de descubrimiento y produce un informe de diseño (design brief) que guiará la implementación. Úsalo durante la fase de planificación para establecer la dirección del diseño, las restricciones y la estrategia antes de escribir código."
argument-hint: "[funcionalidad a diseñar]"
user-invocable: true
---

## PREPARACIÓN OBLIGATORIA

Invoca {{command_prefix}}impeccable — contiene los principios de diseño, antipatrones y el **Protocolo de Recopilación de Contexto**. Sigue el protocolo antes de proceder. Si aún no existe un contexto de diseño, DEBES ejecutar {{command_prefix}}impeccable teach primero.

---

Planifica la UX y la UI de una funcionalidad antes de escribir cualquier línea de código. Esta habilidad produce un **informe de diseño (design brief)**: un artefacto estructurado que guía la implementación a través del descubrimiento y no de la adivinación.

**Alcance**: Planificación del diseño únicamente. Esta habilidad NO escribe código. Produce el pensamiento estructurado que hace que el código sea de calidad.

**Resultado**: Un informe de diseño (design brief) que se puede entregar a {{command_prefix}}impeccable craft, {{command_prefix}}impeccable, o a cualquier otra habilidad de implementación.

## Filosofía

La mayoría de las interfaces generadas por IA fallan no debido a un mal código, sino a la falta de reflexión previa. Saltan directamente a "aquí hay una cuadrícula de tarjetas" sin antes preguntar "¿qué intenta lograr el usuario?". Esta habilidad invierte ese proceso: comprender en profundidad primero, para que la implementación sea precisa después.

## Fase 1: Entrevista de Descubrimiento

**NO escribas código ni tomes decisiones de diseño durante esta fase.** Tu único objetivo es comprender la funcionalidad en profundidad para poder tomar decisiones de diseño excelentes más adelante.

Realiza estas preguntas en la conversación, adaptándolas según las respuestas. No las lances todas de golpe; mantén un diálogo natural. {{ask_instruction}}

### Propósito y Contexto
- ¿Para qué sirve esta funcionalidad? ¿Qué problema resuelve?
- ¿Quién la usará específicamente? (Evita responder "los usuarios"; sé específico: rol, contexto, frecuencia de uso).
- ¿Cómo se define el éxito? ¿Cómo sabrás que esta funcionalidad está cumpliendo su objetivo?
- ¿Cuál es el estado de ánimo del usuario cuando llega a esta funcionalidad? (¿Tiene prisa? ¿Está explorando? ¿Ansioso? ¿Concentrado?).

### Contenido y Datos
- ¿Qué contenido o datos muestra o recopila esta funcionalidad?
- ¿Cuáles son los rangos realistas? (Mínimo, típico, máximo; por ejemplo, 0 elementos, 5 elementos, 500 elementos).
- ¿Cuáles son los casos extremos? (Estado vacío, estado de error, primer uso, usuario avanzado).
- ¿Hay contenido dinámico? ¿Qué cambia y con qué frecuencia?

### Objetivos de Diseño
- ¿Qué es lo único y más importante que un usuario debería hacer o entender aquí?
- ¿Cómo debería sentirse esto? (¿Rápido/eficiente? ¿Calmo/confiable? ¿Divertido/juguetón? ¿Premium/refinado?).
- ¿Existen patrones ya establecidos en el producto con los que esto deba ser consistente?
- ¿Hay ejemplos específicos (dentro o fuera del producto) que capturen la idea de lo que quieres lograr?

### Restricciones
- ¿Existen restricciones técnicas? (Framework, presupuesto de rendimiento, compatibilidad de navegadores).
- ¿Hay restricciones de contenido? (Localización/idiomas, longitud de texto dinámico, contenido generado por el usuario).
- ¿Requisitos móviles/responsivos?
- ¿Requisitos de accesibilidad más allá de WCAG AA?

### Anti-objetivos
- ¿Qué NO debería ser esto? ¿Qué dirección sería incorrecta?
- ¿Cuál es el mayor riesgo si esto se hace mal?

## Fase 2: Informe de Diseño (Design Brief)

Después de la entrevista, sintetiza todo en un informe de diseño estructurado. Preséntalo al usuario para su confirmación antes de considerar esta habilidad completada.

### Estructura del Informe (Brief)

**1. Resumen de la Funcionalidad** (2-3 frases)
Qué es, para quién es y qué necesita lograr.

**2. Acción Principal del Usuario**
Lo único y más importante que el usuario debe hacer o entender aquí.

**3. Dirección de Diseño**
Cómo debe sentirse. Qué enfoque estético encaja. Haz referencia al contexto de diseño del proyecto definido en `.impeccable.md` y explica cómo debería expresarlo esta funcionalidad.

**4. Estrategia de Diseño (Layout)**
Enfoque espacial de alto nivel: qué recibe el énfasis, qué queda en segundo plano, cómo fluye la información. Describe la jerarquía visual y el ritmo, sin especificar CSS de forma prematura.

**5. Estados Clave**
Enumera cada estado que necesita la funcionalidad: predeterminado, vacío, cargando, error, éxito y casos extremos. Para cada uno, anota qué necesita ver y sentir el usuario.

**6. Modelo de Interacción**
Cómo interactúan los usuarios con esta funcionalidad. ¿Qué ocurre al hacer clic, pasar el cursor (hover), desplazarse (scroll)? ¿Qué retroalimentación reciben? ¿Cuál es el flujo desde la entrada hasta la finalización?

**7. Requisitos de Contenido**
Qué textos, etiquetas, mensajes de estado vacío, mensajes de error y microcopy se necesitan. Detalla el contenido dinámico y sus rangos reales.

**8. Referencias Recomendadas**
Basándote en el informe, enumera qué archivos de referencia de impeccable serían más útiles durante la implementación (por ejemplo, `spatial-design.md` para diseños complejos, `motion-design.md` para funciones animadas, `interaction-design.md` para funciones con muchos formularios).

**9. Preguntas Abiertas**
Cualquier punto no resuelto que la persona encargada de la implementación deba definir durante la fase de desarrollo.

---

{{ask_instruction}} Obtén la confirmación explícita del informe antes de terminar. Si el usuario no está de acuerdo con alguna sección, revisa las preguntas de descubrimiento pertinentes.

Una vez confirmado, el informe de diseño está completo. El usuario puede entregárselo a {{command_prefix}}impeccable o utilizarlo para guiar cualquier otro enfoque de implementación. (Si el usuario desea realizar todo el flujo de descubrimiento y luego desarrollo en un solo paso, debe usar {{command_prefix}}impeccable craft en su lugar, que ejecuta esta habilidad de forma interna).
