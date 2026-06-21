# Redacción para UX (UX Writing)

## El Problema con las Etiquetas de los Botones

**Nunca uses "Aceptar", "Enviar" o "Sí/No".** Son opciones perezosas y ambiguas. Usa patrones específicos de verbo + objeto:

| Incorrecto | Correcto | Motivo |
|------------|----------|--------|
| Aceptar | Guardar cambios | Explica claramente lo que ocurrirá |
| Enviar | Crear cuenta | Enfocado en el resultado obtenido |
| Sí | Eliminar mensaje | Confirma explícitamente la acción |
| Cancelar | Seguir editando | Aclara qué significa "cancelar" en este contexto |
| Clic aquí | Descargar PDF | Describe el destino o resultado |

**Para acciones destructivas**, nombra explícitamente la destrucción:
- Usa "Eliminar" en lugar de "Quitar" (eliminar implica acción permanente, quitar sugiere algo recuperable).
- Usa "Eliminar 5 elementos" en lugar de "Eliminar seleccionados" (muestra la cantidad exacta).

## Mensajes de Error: La Fórmula

Todo mensaje de error debe responder a: (1) ¿Qué ocurrió? (2) ¿Por qué? (3) ¿Cómo solucionarlo? Ejemplo: "La dirección de correo no es válida. Por favor, incluye un símbolo @." en lugar de "Entrada inválida".

### Plantillas para Mensajes de Error

| Situación | Plantilla |
|-----------|-----------|
| **Error de formato** | "[Campo] debe ser [formato]. Ejemplo: [ejemplo]" |
| **Falta campo requerido** | "Por favor, introduce [lo que falta]" |
| **Permiso denegado** | "No tienes acceso a [elemento]. [Qué hacer en su lugar]" |
| **Error de red** | "No pudimos conectar con [servicio]. Comprueba tu conexión e [acción]." |
| **Error de servidor** | "Algo salió mal por nuestra parte. Lo estamos investigando. [Acción alternativa]" |

### No Culpes al Usuario

Redacta los errores de forma constructiva: "Por favor, introduce una fecha en formato DD/MM/AAAA" en lugar de "Has introducido una fecha inválida".

## Los Estados Vacíos son Oportunidades

Los estados vacíos son momentos de iniciación (onboarding): (1) Explica brevemente la situación, (2) Detalla el valor de completarlo, (3) Proporciona una acción clara. Ejemplo: "No hay proyectos todavía. Crea tu primer proyecto para empezar." en lugar del simple "No hay elementos".

## Voz frente a Tono

La **voz** es la personalidad de tu marca — es consistente en todas partes.
El **tono** se adapta a la situación específica.

| Situación | Cambio de Tono |
|-----------|----------------|
| Éxito | Celebratorio y breve: "¡Hecho! Tus cambios ya están publicados." |
| Error | Empático y de ayuda: "Eso no ha funcionado. Prueba lo siguiente..." |
| Cargando | Tranquilizador: "Guardando tu trabajo..." |
| Confirmar acción destructiva | Serio y claro: "¿Eliminar este proyecto? Esta acción no se puede deshacer." |

**Nunca uses el humor en los mensajes de error.** Los usuarios ya se sienten frustrados en ese punto. Sé de ayuda, no gracioso.

## Redacción para la Accesibilidad

**El texto del enlace** debe tener un significado por sí mismo — usa "Ver planes de precios" en lugar de "Haz clic aquí". **El texto alternativo (alt)** describe la información, no la imagen — usa "Los ingresos aumentaron un 40% en el cuarto trimestre" en lugar de "Gráfico". Usa `alt=""` para imágenes puramente decorativas. **Los botones con iconos** necesitan un atributo `aria-label` para dar contexto a los lectores de pantalla.

## Redacción para la Traducción

### Planificar la Expansión de Texto

El texto en alemán es aproximadamente un 30% más largo que en inglés. Reserva espacio para la expansión:

| Idioma | Expansión aproximada |
|--------|---------------------|
| Alemán | +30% |
| Francés | +20% |
| Finlandés | +30-40% |
| Chino | -30% (menos caracteres, pero ancho similar) |

### Patrones Facilidades de Traducción

Mantén las variables numéricas separadas (usa "Mensajes nuevos: 3" en lugar de "Tienes 3 mensajes nuevos"). Usa frases completas como cadenas de texto únicas (el orden de las palabras varía según el idioma). Evita abreviaturas (usa "hace 5 minutos" en lugar de "hace 5 mins"). Proporciona contexto a los traductores sobre dónde aparece cada texto.

## Consistencia: El Problema de la Terminología

Elige un término y manténlo a lo largo de todo el proyecto:

| Inconsistente | Consistente |
|---------------|-------------|
| Borrar / Eliminar / Quitar | Eliminar |
| Ajustes / Configuración / Preferencias | Configuración |
| Iniciar sesión / Acceder / Entrar | Iniciar sesión |
| Crear / Añadir / Nuevo | Crear |

Crea un glosario de terminología y hazlo cumplir. La variedad genera confusión.

## Evita los Textos Redundantes

Si el título de una sección ya lo explica todo, el texto introductorio es redundante. Si el botón es claro, no vuelvas a explicar su acción. Dilo una vez, dilo bien.

## Estados de Carga

Sé específico: "Guardando tu borrador..." en lugar de "Cargando...". Para esperas prolongadas, gestiona las expectativas ("Esto suele tardar unos 30 segundos") o muestra una barra de progreso.

## Diálogos de Confirmación: Úsalos con Moderación

La mayoría de los diálogos de confirmación son fallos de diseño — considera ofrecer la opción de deshacer (undo) en su lugar. Cuando debas confirmar: nombra la acción, explica las consecuencias y usa etiquetas específicas para los botones ("Eliminar proyecto" / "Conservar proyecto", en lugar de "Sí" / "No").

## Instrucciones de Formularios

Muestra el formato esperado con marcadores de posición (placeholders), no con instrucciones de texto largas. Para campos no obvios, explica por qué solicitas esa información.

---

**Evita**: Jerga técnica sin explicación. Culpar a los usuarios ("Has cometido un error" → "Este campo es requerido"). Errores vagos ("Algo salió mal"). Variar la terminología por pura estética. Usar humor en los mensajes de error.
