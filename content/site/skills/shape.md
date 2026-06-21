---
tagline: "Piensa antes de construir. Diseña un brief estratégico mediante el descubrimiento, no por adivinación."
---

## Cuándo usarlo

`/shape` es el lugar donde nace una funcionalidad. Antes de escribir código, antes de discutir el estilo de la cabecera y antes de elegir cualquier tipografía. Úsalo para forzar una conversación de descubrimiento sobre el propósito, los usuarios, el contenido y las restricciones del sistema, y luego plasma las respuestas en un reporte de diseño (`brief`) en el que las habilidades de implementación puedan apoyarse.

Recurre a él cuando vayas a empezar una funcionalidad, cuando la descripción de una tarea sea vaga o te encuentres escribiendo JSX solo para descubrir qué debería hacer el producto.

## Cómo funciona

La mayoría de las interfaces generadas por IA fallan no debido a un mal código, sino a la falta de reflexión previa. El modelo salta directamente a crear "una cuadrícula de tarjetas" sin preguntar "qué está intentando lograr el usuario". `/shape` invierte ese orden.

La habilidad ejecuta una entrevista estructurada de descubrimiento en el chat. No escribirá código durante esta fase. Las preguntas cubren:

- **Propósito y contexto**: para qué sirve la funcionalidad, quién la usa y qué estado de ánimo tiene al usarla.
- **Contenido y datos**: qué se muestra, rangos realistas de datos, casos límite y qué elementos son dinámicos.
- **Objetivos de diseño**: la prioridad número uno, el sentimiento que debe evocar la interfaz y ejemplos de referencia.
- **Restricciones**: técnicas, de contenido, accesibilidad y localización.

Responde de forma natural. La habilidad te hará preguntas de seguimiento fluidas, no es un formulario rígido. Al final, genera un `brief` de diseño: un artefacto estructurado que puedes pasar a `/impeccable` o a cualquier otra habilidad de implementación.

Nota: si deseas el flujo completo (entrevista de descubrimiento y luego pasar directo a construir), usa `/impeccable craft`. Este ejecuta `/shape` internamente y luego continúa con la implementación e iteración visual. El comando `/shape` independiente es para cuando solo deseas el `brief`, de modo que puedas usarlo con el enfoque de implementación que prefieras.

## Pruébalo

```
/shape una página de preferencias para el boletín de resumen diario
```

Espera una conversación de 5 a 10 preguntas. La habilidad te preguntará cosas como "quién es la persona que abre esto, ¿ya está comprometida con el producto o solo tiene curiosidad?" y "¿qué ocurre cuando el usuario se da de baja de todo, ocultamos la función o mostramos algo?". Tú respondes y el `brief` se materializa.

Desde ahí, puedes entregar el informe a `/impeccable`, `/polish` o cualquier otra habilidad, o usarlo como referencia mientras programas a mano.

## Problemas comunes

- **Omitirlo porque parece lento.** La entrevista toma unos 5 minutos. Las reescrituras de código que te ahorras se miden en horas.
- **Tratar el `brief` como una especificación técnica estricta.** Es una brújula, no una lista de verificación inflexible. Captura la intención de diseño, no la interfaz de usuario final.
- **Responder con "estándar" o "normal".** La clave de este paso es la especificidad. Si un usuario está "con prisa, en el móvil y entre reuniones", dilo. Eso cambia todas las decisiones de diseño posteriores.
