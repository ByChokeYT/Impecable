# Flujo de Desarrollo (Craft Flow)

Construye una funcionalidad con una calidad de UX y UI impecable a través de un proceso estructurado: planifica el diseño, carga las referencias adecuadas, desarrolla e itera visualmente hasta lograr un resultado deleitable.

## Paso 1: Planificar el Diseño (Shape)

Ejecuta /shape, proporcionando la descripción de la funcionalidad que el usuario haya indicado.

Espera a que el informe de diseño (design brief) esté completamente confirmado antes de proceder. El informe es tu plano de trabajo, y cada decisión de desarrollo debe estar alineada con él.

Si el usuario ya ejecutó /shape y cuenta con un informe de diseño confirmado, omite este paso y utiliza dicho informe.

## Paso 2: Cargar Referencias

Basándote en la sección "Referencias Recomendadas" del informe de diseño, consulta los archivos de referencia de impeccable correspondientes. Como mínimo, consulta siempre:

- [spatial-design.md](spatial-design.md) para el diseño y espaciado.
- [typography.md](typography.md) para la jerarquía tipográfica.

Luego, añade referencias según las necesidades de la funcionalidad:
- ¿Interacciones complejas o formularios? Consulta [interaction-design.md](interaction-design.md).
- ¿Animación o transiciones? Consulta [motion-design.md](motion-design.md).
- ¿Mucho uso de color o temas? Consulta [color-and-contrast.md](color-and-contrast.md).
- ¿Requisitos responsivos? Consulta [responsive-design.md](responsive-design.md).
- ¿Mucho texto, etiquetas o errores? Consulta [ux-writing.md](ux-writing.md).

## Paso 3: Desarrollar

Implementa la funcionalidad siguiendo el informe de diseño. Trabaja en este orden:

1. **Estructura primero**: Estructura HTML/semántica para el estado principal. Aún sin estilos.
2. **Diseño y espaciado**: Establece el ritmo espacial y la jerarquía visual.
3. **Tipografía y color**: Aplica la escala tipográfica y el sistema de color.
4. **Estados interactivos**: Hover, focus (enfoque), active, disabled.
5. **Estados de casos extremos**: Vacío, cargando, error, desbordamiento, primer uso.
6. **Movimiento**: Transiciones y animaciones intencionadas (si son adecuadas).
7. **Responsivo**: Adapta para diferentes tamaños de pantalla. No te limites a encoger los elementos; rediséñalos para el contexto.

### Durante el Desarrollo
- Realiza pruebas con datos reales (o realistas) en cada paso, evita el texto de relleno.
- Comprueba cada estado a medida que lo construyes, no todos al final.
- Si surge alguna duda de diseño, detente y pregunta en lugar de adivinar.
- Cada elección visual debe estar vinculada a una sección del informe de diseño.

## Paso 4: Iteración Visual

**Este paso es crítico.** No te detengas tras la primera pasada de implementación.

Abre el resultado en una ventana del navegador. Si dispones de herramientas de automatización del navegador, utilízalas para navegar por la página e inspeccionar visualmente el resultado. Si no, pide al usuario que lo abra y te dé su opinión.

Itera visualmente a través de estas comprobaciones:

1. **¿Coincide con el informe de diseño?** Compara el resultado en vivo con cada sección del informe. Corrige las discrepancias.
2. **¿Supera la prueba de basura de IA (AI slop)?** Si alguien viera esto y dijera "la IA hizo esto", ¿lo creería de inmediato? Si es así, necesita una mayor intención de diseño.
3. **Verifica las directrices de NO de impeccable.** Corrige cualquier infracción de los antipatrones.
4. **Comprueba cada estado.** Navega por los estados vacío, de error, de carga y casos extremos. Cada uno debe sentirse intencional, no como una ocurrencia tardía.
5. **Verifica la responsividad.** Cambia el tamaño del viewport. ¿Se adapta bien o simplemente se encoge?
6. **Comprueba los detalles.** Consistencia en el espaciado, claridad en la jerarquía tipográfica, contraste de color, retroalimentación interactiva, tiempos de animación.

Tras cada ronda de correcciones, vuelve a realizar la verificación visual. **Repite hasta que te sientas orgulloso de mostrar el resultado al usuario.** El listón no está en "funciona"; el listón está en "deleitante".

## Paso 5: Presentar

Presenta el resultado al usuario:
- Muestra la funcionalidad en su estado principal.
- Explica los estados clave (vacío, error, responsivo).
- Detalla las decisiones de diseño que se vinculan con el informe original.
- Pregunta: "¿Qué funciona? ¿Qué no?".

Itera basándote en los comentarios. El buen diseño rara vez es perfecto al primer intento.
