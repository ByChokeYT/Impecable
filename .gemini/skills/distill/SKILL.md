---
name: distill
description: Reduce los diseños a su esencia eliminando la complejidad innecesaria. El gran diseño es simple, potente y limpio. Úsalo cuando el usuario pida simplificar, ordenar, reducir ruido, eliminar elementos o hacer que una interfaz de usuario sea más limpia y enfocada.
version: 2.1.1
---

Elimina la complejidad innecesaria de los diseños, revelando los elementos esenciales y aportando claridad mediante una simplificación implacable.

## PREPARACIÓN OBLIGATORIA

Invoca /impeccable — contiene los principios de diseño, antipatrones y el **Protocolo de Recopilación de Contexto**. Sigue el protocolo antes de proceder — si aún no existe un contexto de diseño, DEBES ejecutar /impeccable teach primero.

---

## Evaluar el Estado Actual

Analiza qué hace que el diseño se sienta complejo o saturado:

1. **Identificar fuentes de complejidad**:
   - **Exceso de elementos**: Botones compitiendo, información redundante, saturación visual.
   - **Variación excesiva**: Demasiados colores, fuentes, tamaños y estilos sin un propósito claro.
   - **Sobrecarga de información**: Todo es visible al mismo tiempo, sin divulgación progresiva.
   - **Ruido visual**: Bordes, sombras, fondos o decoraciones innecesarios.
   - **Jerarquía confusa**: No queda claro qué es lo más importante.
   - **Exceso de funcionalidades (Feature creep)**: Demasiadas opciones, acciones o caminos a seguir.

2. **Encontrar la esencia**:
   - ¿Cuál es el objetivo principal del usuario? (Debe ser UNO solo).
   - ¿Qué es realmente necesario frente a lo que sería "agradable tener"?
   - ¿Qué se puede eliminar, ocultar o combinar?
   - ¿Cuál es el 20% del diseño que aporta el 80% del valor?

Si alguno de estos puntos no está claro en el código base, ask the user directly to clarify what you cannot infer.

**CRÍTICO**: La simplicidad no consiste en eliminar funcionalidades, sino en eliminar obstáculos entre los usuarios y sus objetivos. Cada elemento debe justificar su existencia.

## Planificar la Simplificación

Crea una estrategia de edición implacable:

- **Propósito central**: ¿Cuál es la ÚNICA cosa que esto debe lograr?
- **Elementos esenciales**: ¿Qué es verdaderamente necesario para lograr ese propósito?
- **Divulgación progresiva**: ¿Qué se puede ocultar hasta que sea necesario?
- **Oportunidades de consolidación**: ¿Qué se puede combinar o integrar?

**IMPORTANTE**: Simplificar es difícil. Requiere decir "no" a buenas ideas para dar cabida a una ejecución excelente. Sé implacable.

## Simplificar el Diseño

Elimina la complejidad sistemáticamente a través de estas dimensiones:

### Arquitectura de la Información
- **Reducir el alcance**: Elimina acciones secundarias, funciones opcionales e información redundante.
- **Divulgación progresiva**: Oculta la complejidad detrás de puntos de entrada claros (acordeones, modales, flujos paso a paso).
- **Combinar acciones relacionadas**: Fusiona botones similares, consolida formularios y agrupa contenido relacionado.
- **Jerarquía clara**: UNA acción principal, unas pocas acciones secundarias y todo lo demás terciario u oculto.
- **Eliminar redundancia**: Si ya se explica en otra parte, no lo repitas aquí.

### Simplificación Visual
- **Reducir la paleta de colores**: Usa 1 o 2 colores más los neutros, evita usar 5 o 7 colores.
- **Limitar la tipografía**: Una sola familia tipográfica, 3 o 4 tamaños como máximo y 2 o 3 pesos.
- **Eliminar decoraciones**: Prescinde de bordes, sombras y fondos que no aporten a la jerarquía o a la función.
- **Aplanar la estructura**: Reduce el anidamiento, elimina contenedores innecesarios (nunca anides tarjetas dentro de otras tarjetas).
- **Eliminar tarjetas innecesarias**: Las tarjetas no son necesarias para un diseño básico; usa el espaciado y la alineación en su lugar.
- **Espaciado consistente**: Usa una sola escala de espaciado, elimina los huecos arbitrarios.

### Simplificación del Diseño (Layout)
- **Flujo lineal**: Reemplaza cuadrículas complejas por un flujo vertical simple siempre que sea posible.
- **Eliminar barras laterales**: Mueve el contenido secundario al flujo principal u ocúltalo.
- **Ancho completo**: Usa el espacio disponible con generosidad en lugar de recurrir a diseños complejos de varias columnas.
- **Alineación consistente**: Elige alineación a la izquierda o al centro, y manténla.
- **Espacio en blanco generoso**: Deja respirar al contenido, no lo acumules todo de forma apretada.

### Simplificación de Interacciones
- **Reducir opciones**: Menos botones, menos opciones y un camino a seguir más claro (la paradoja de la elección es real).
- **Valores predeterminados inteligentes**: Haz que las opciones comunes sean automáticas, pregunta solo cuando sea necesario.
- **Acciones integradas (Inline)**: Reemplaza los flujos de modales por edición en la propia línea siempre que sea posible.
- **Eliminar pasos**: ¿El registro puede realizarse en un solo paso en lugar de tres? ¿Se puede simplificar el proceso de pago?
- **CTAs claros**: UN paso siguiente obvio, evita tener cinco acciones compitiendo.

### Simplificación del Contenido
- **Textos más cortos**: Reduce cada frase a la mitad, y luego vuelve a hacerlo.
- **Voz activa**: "Guardar cambios" en lugar de "Los cambios serán guardados".
- **Eliminar jerga**: El lenguaje sencillo siempre gana.
- **Estructura escaneable**: Párrafos cortos, listas de viñetas, encabezados claros.
- **Solo información esencial**: Elimina textos de relleno comercial, legalismos o vacilaciones.
- **Eliminar texto redundante**: Sin encabezados que repitan introducciones, sin explicaciones repetidas; dilo una sola vez.

### Simplificación del Código
- **Eliminar código sin usar**: CSS muerto, componentes que no se utilizan, archivos huérfanos.
- **Aplanar árboles de componentes**: Reduce la profundidad de anidamiento.
- **Consolidar estilos**: Fusiona estilos similares, usa utilidades de forma consistente.
- **Reducir variantes**: ¿Ese componente realmente necesita 12 variaciones, o con 3 cubres el 90% de los casos?

**NUNCA**:
- Elimines funcionalidad necesaria (simplicidad ≠ sin funciones).
- Sacrifiques la accesibilidad por la simplicidad (siguen siendo necesarias etiquetas claras y ARIA).
- Hagas las cosas tan simples que dejen de ser claras (misterio ≠ minimalismo).
- Elimines información que los usuarios necesitan para tomar decisiones.
- Elimines la jerarquía por completo (algunas cosas deben seguir destacando).
- Simplifiques en exceso dominios complejos (ajusta la complejidad a la complejidad real de la tarea).

## Verificar la Simplificación

Asegúrate de que la simplificación mejore la usabilidad:

- **Finalización de tareas más rápida**: ¿Pueden los usuarios lograr sus objetivos más rápidamente?
- **Reducción de la carga cognitiva**: ¿Es más fácil entender qué hacer?
- **Sigue estando completo**: ¿Se puede acceder aún a todas las funciones necesarias?
- **Jerarquía más clara**: ¿Es obvio qué es lo más importante?
- **Mejor rendimiento**: ¿El diseño más simple carga más rápido?

## Documentar la Complejidad Eliminada

Si eliminaste funcionalidades u opciones:
- Documenta por qué fueron eliminadas.
- Considera si necesitan puntos de acceso alternativos.
- Anota cualquier retroalimentación de usuario a monitorear.

Recuerda: Tienes gran gusto y criterio. Simplificar es un acto de confianza: saber qué conservar y tener el valor de eliminar el resto. Como dijo Antoine de Saint-Exupéry: "La perfección se alcanza no cuando no hay nada más que añadir, sino cuando no queda nada más que quitar".