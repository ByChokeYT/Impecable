---
name: polish
description: "Realiza una ronda final de control de calidad corrigiendo problemas de alineación, espaciado, consistencia y detalles minuciosos antes de publicar. Úsalo cuando el usuario comente sobre pulir, dar toques finales, revisión previa al lanzamiento, que algo se ve raro o cuando desee pasar de un buen resultado a uno excelente."
argument-hint: "[objetivo]"
user-invocable: true
---

## PREPARACIÓN OBLIGATORIA

Invoca {{command_prefix}}impeccable — contiene los principios de diseño, antipatrones y el **Protocolo de Recopilación de Contexto**. Sigue el protocolo antes de proceder — si aún no existe un contexto de diseño, DEBES ejecutar {{command_prefix}}impeccable teach primero. Adicionalmente, recopila: el nivel de exigencia de calidad (MVP vs. producto insignia).

---

Realiza una ronda final meticulosa para detectar todos los pequeños detalles que diferencian el trabajo aceptable del excelente. La diferencia entre algo publicado y algo pulido.

## Descubrimiento del Sistema de Diseño

Antes de pulir, comprende el sistema sobre el que vas a trabajar:

1. **Buscar el sistema de diseño**: Busca documentación del sistema de diseño, librerías de componentes, guías de estilo o definiciones de tokens. Estudia los patrones principales: tokens de color, escala de espaciado, estilos tipográficos, API de componentes.
2. **Anotar las convenciones**: ¿Cómo se importan los componentes compartidos? ¿Qué escala de espaciado se utiliza? ¿Qué colores provienen de tokens en lugar de valores fijos (hardcoded)? ¿Qué patrones de interacción y movimiento están establecidos?
3. **Identificar desviaciones (drift)**: ¿Dónde se desvía la funcionalidad objetivo con respecto al sistema? Valores fijos que deberían ser tokens, componentes personalizados que duplican a los compartidos, espaciados que no coinciden con la escala.

Si existe un sistema de diseño, el pulido debe alinear la funcionalidad con él. Si no existe ninguno, realiza el pulido respetando las convenciones visibles en el código base.

## Evaluación Previa al Pulido

Comprende el estado actual y los objetivos:

1. **Revisar completitud**:
   - ¿Es funcionalmente completo?
   - ¿Hay problemas conocidos que deban conservarse (márcalos con TODOs)?
   - ¿Cuál es el nivel de exigencia de calidad? (¿Un MVP o una funcionalidad insignia?).
   - ¿Cuándo se lanza? (¿De cuánto tiempo disponemos para pulir?).

2. **Identificar áreas a pulir**:
   - Inconsistencias visuales.
   - Problemas de espaciado y alineación.
   - Ausencia de estados de interacción.
   - Inconsistencias en los textos (copy).
   - Casos extremos y estados de error.
   - Fluidez en las cargas y transiciones.

**CRÍTICO**: El pulido es el último paso, no el primero. No pulas código que no sea funcionalmente completo.

## Pulir Sistemáticamente

Trabaja a través de estas dimensiones metódicamente:

### Alineación Visual y Espaciado

- **Alineación perfecta al píxel**: Todo se alinea con respecto a la cuadrícula.
- **Espaciado consistente**: Todos los huecos (gaps) usan la escala de espaciado (sin huecos aleatorios de 13px).
- **Alineación óptica**: Ajusta según el peso visual (los iconos pueden necesitar desplazamientos para centrarse ópticamente).
- **Consistencia responsiva**: El espaciado y la alineación funcionan en todos los breakpoints.
- **Adherencia a la cuadrícula**: Los elementos encajan con la cuadrícula base.

**Verificación**:
- Activa la superposición de cuadrícula y verifica la alineación.
- Comprueba el espaciado con el inspector del navegador.
- Realiza pruebas en múltiples tamaños de pantalla.
- Busca elementos que se "sientan" descentrados o raros.

### Refinamiento de la Tipografía

- **Consistencia en la jerarquía**: Los mismos elementos usan los mismos tamaños y pesos en todo el sitio.
- **Longitud de línea**: Entre 45 y 75 caracteres para el texto del cuerpo.
- **Altura de línea (line-height)**: Adecuada para el tamaño de la fuente y el contexto.
- **Viudas y huérfanas**: Evita palabras sueltas en la última línea de un párrafo.
- **Separación de palabras**: Adecuada para el idioma y el ancho de la columna.
- **Interletraje (Kerning)**: Ajusta el espacio entre letras donde sea necesario (especialmente en titulares).
- **Carga de fuentes**: Evita parpadeos de texto invisible (FOIT) o texto sin estilo (FOUT).

### Color y Contraste

- **Relaciones de contraste**: Todo el texto debe cumplir con los estándares WCAG.
- **Uso consistente de tokens**: Sin colores fijos en el código; todos deben usar tokens de diseño.
- **Consistencia del tema**: Debe funcionar correctamente en todas las variantes del tema (claro/oscuro).
- **Significado del color**: Mismos colores significan lo mismo en todo el sitio.
- **Enfoque (Focus) accesible**: Indicadores de enfoque visibles y con suficiente contraste.
- **Neutros teñidos**: Evita el gris puro o el negro puro; añade un sutil tinte de color (croma de 0.01).
- **Gris sobre color**: Nunca coloques texto gris sobre fondos de color; usa un tono de ese color o transparencia.

### Estados de Interacción

Cada elemento interactivo necesita definir todos sus estados:

- **Predeterminado (Default)**: Estado en reposo.
- **Hover**: Retroalimentación sutil al pasar el cursor (color, escala, sombra).
- **Enfoque (Focus)**: Indicador de enfoque por teclado (nunca lo elimines sin proporcionar un sustituto).
- **Activo (Active)**: Retroalimentación al hacer clic o pulsar.
- **Desactivado (Disabled)**: Claramente no interactivo.
- **Cargando (Loading)**: Retroalimentación para acciones asíncronas.
- **Error**: Estado de validación o error.
- **Éxito**: Finalización exitosa.

**La falta de estados genera confusión y rompe la experiencia de usuario**.

### Microinteracciones y Transiciones

- **Transiciones fluidas**: Todos los cambios de estado deben estar animados adecuadamente (150-300ms).
- **Suavizado (Easing) consistente**: Usa ease-out-quart/quint/expo para una desaceleración natural. Nunca uses rebotes (bounce) o efectos elásticos, ya que se ven anticuados.
- **Sin tirones**: Animaciones a 60fps; anima únicamente `transform` y `opacity`.
- **Movimiento adecuado**: El movimiento sirve a un propósito, no es mera decoración.
- **Movimiento reducido**: Respeta la preferencia `prefers-reduced-motion`.

### Contenido y Copy

- **Terminología consistente**: Las mismas cosas deben llamarse igual en todas partes.
- **Mayúsculas consistentes**: Uso coherente de mayúsculas en títulos o en frases iniciales.
- **Gramática y ortografía**: Sin errores tipográficos o faltas de ortografía.
- **Longitud apropiada**: Ni demasiado detallado ni demasiado escueto.
- **Puntuación consistente**: Puntos finales en frases, evita puntos en las etiquetas de los botones (a menos que todas las lleven).

### Iconos e Imágenes

- **Estilo consistente**: Todos los iconos deben pertenecer a la misma familia o tener un estilo visual coincidente.
- **Tamaño adecuado**: Iconos con tamaños consistentes según el contexto.
- **Alineación correcta**: Los iconos deben alinearse ópticamente con el texto adyacente.
- **Texto alternativo**: Todas las imágenes deben tener texto alternativo descriptivo.
- **Estados de carga**: Las imágenes no deben causar saltos en el diseño (CLS); usa relaciones de aspecto adecuadas.
- **Soporte de alta definición (Retina)**: Recursos a 2x para pantallas de alta densidad de píxeles.

### Formularios y Entradas

- **Consistencia de etiquetas**: Todos los campos de entrada deben estar correctamente etiquetados.
- **Indicadores de obligatoriedad**: Claros y consistentes.
- **Mensajes de error**: Útiles y consistentes.
- **Orden de tabulación**: Navegación lógica mediante teclado.
- **Enfoque automático (Auto-focus)**: Adecuado (no abuses de él).
- **Momento de validación**: Consistente (al perder el foco / blur vs. al enviar / submit).

### Casos Extremos y Estados de Error

- **Estados de carga**: Todas las acciones asíncronas deben tener retroalimentación de carga.
- **Estados vacíos**: Diseños atractivos y de ayuda, evita dejar espacios vacíos sin contenido.
- **Estados de error**: Mensajes de error claros con opciones de recuperación.
- **Estados de éxito**: Confirmación de acciones exitosas.
- **Contenido largo**: Capacidad para manejar nombres, descripciones, etc., extremadamente largos.
- **Sin contenido**: Capacidad para manejar la falta de datos con elegancia.
- **Sin conexión**: Manejo adecuado de la falta de conexión (si aplica).

### Responsividad

- **Todos los breakpoints**: Realiza pruebas en móvil, tablet y escritorio.
- **Áreas táctiles**: Mínimo de 44x44px en dispositivos táctiles.
- **Texto legible**: Texto no menor a 14px en móvil.
- **Sin desplazamiento horizontal**: El contenido debe ajustarse al viewport.
- **Ajuste lógico**: El contenido se adapta de forma lógica al cambiar el tamaño.

### Rendimiento

- **Carga inicial rápida**: Optimiza la ruta crítica.
- **Sin cambios en el diseño**: Los elementos no deben saltar después de cargar (CLS).
- **Interacciones fluidas**: Sin retrasos ni tirones.
- **Imágenes optimizadas**: Formatos y tamaños adecuados.
- **Carga perezosa**: Carga perezosa del contenido que queda fuera de la pantalla.

### Calidad del Código

- **Eliminar console.logs**: Evita mensajes de depuración en producción.
- **Eliminar código comentado**: Limpia el código muerto.
- **Eliminar importaciones sin usar**: Limpia las dependencias no utilizadas.
- **Nombres consistentes**: Las variables y funciones deben seguir las convenciones establecidas.
- **Seguridad tipográfica**: Evita el tipo `any` en TypeScript o errores ignorados.
- **Accesibilidad**: Etiquetas ARIA correctas e HTML semántico.

## Lista de Verificación de Pulido

Revisa de manera sistemática:

- [ ] Alineación visual perfecta en todos los breakpoints.
- [ ] El espaciado utiliza tokens de diseño de forma consistente.
- [ ] Jerarquía tipográfica consistente.
- [ ] Todos los estados de interacción implementados.
- [ ] Todas las transiciones fluidas (60fps).
- [ ] Los textos son coherentes y están pulidos.
- [ ] Los iconos son consistentes y tienen el tamaño adecuado.
- [ ] Todos los formularios están etiquetados y validados correctamente.
- [ ] Los estados de error son de utilidad.
- [ ] Los estados de carga son claros.
- [ ] Los estados vacíos son acogedores.
- [ ] Las áreas táctiles tienen un mínimo de 44x44px.
- [ ] Las relaciones de contraste cumplen con WCAG AA.
- [ ] La navegación por teclado funciona correctamente.
- [ ] Indicadores de enfoque visibles.
- [ ] Sin errores ni advertencias en la consola.
- [ ] Sin cambios de diseño al cargar (CLS).
- [ ] Funciona en todos los navegadores soportados.
- [ ] Respeta la preferencia de movimiento reducido.
- [ ] El código está limpio (sin TODOs, console.logs o código comentado).

**IMPORTANTE**: El pulido reside en los detalles. Haz zoom. Observa de cerca. Usa la app tú mismo. Los pequeños detalles marcan la diferencia.

**NUNCA**:
- Pulas antes de que la funcionalidad sea completa.
- Dediques horas a pulir si el lanzamiento es en 30 minutos (haz triaje).
- Introduzcas errores (bugs) mientras pules (realiza pruebas exhaustivas).
- Ignores problemas sistemáticos (si el espaciado está mal en todas partes, corrige el sistema).
- Dejes partes toscas mientras perfeccionas una sola cosa (mantén un nivel de calidad consistente).
- Crees componentes personalizados de un solo uso cuando ya existan equivalentes en el sistema de diseño.
- Uses valores fijos (hardcode) que deberían ser tokens de diseño.

## Verificación Final

Antes de marcar la tarea como completada:

- **Úsalo tú mismo**: Interactúa realmente con la funcionalidad.
- **Prueba en dispositivos reales**: No te limites a las DevTools del navegador.
- **Pide a otra persona que lo revise**: Una mirada fresca detecta cosas nuevas.
- **Compara con el diseño original**: Verifica que coincida con el diseño previsto.
- **Prueba todos los estados**: No te limites a probar la ruta feliz.

## Limpieza

Después de pulir, asegura la calidad del código:

- **Reemplaza implementaciones personalizadas**: Si el sistema de diseño proporciona un componente que habías reimplementado, cámbialo por la versión compartida.
- **Elimina código huérfano**: Borra estilos, componentes o archivos que ya no se utilicen tras el pulido.
- **Consolida tokens**: Si introdujiste nuevos valores, comprueba si deberían convertirse en tokens.
- **Verifica el principio DRY**: Busca duplicaciones que se hayan podido introducir al pulir y consolídalas.

Recuerda: Tienes una atención al detalle impecable y un gusto exquisito. Pule hasta que la experiencia se sienta natural, se vea intencionada y funcione a la perfección. Cuida los detalles; importan de verdad.
