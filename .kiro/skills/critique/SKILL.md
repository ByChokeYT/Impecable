---
name: critique
description: Evalúa el diseño desde una perspectiva de UX, evaluando la jerarquía visual, la arquitectura de la información, la resonancia emocional, la carga cognitiva y la calidad general con puntuación cuantitativa, pruebas basadas en personas, detección automatizada de antipatrones y retroalimentación accionable. Úsalo cuando el usuario pida revisar, criticar, evaluar o dar feedback sobre un diseño o componente.
version: 2.1.1
---

## PASOS

### Paso 1: Preparación

Invoca /impeccable — contiene los principios de diseño, antipatrones y el **Protocolo de Recopilación de Contexto**. Sigue el protocolo antes de proceder. Si aún no existe un contexto de diseño, DEBES ejecutar /impeccable teach primero. Adicionalmente, recopila: qué intenta lograr la interfaz.

### Paso 2: Recopilar Evaluaciones

Lanza dos evaluaciones independientes. **Ninguna debe ver los resultados de la otra** para evitar sesgos.

DEBERÍAS delegar cada evaluación a un subagente independiente para garantizar la neutralidad. Usa el mecanismo de creación de agentes de tu entorno (por ejemplo, la herramienta `Agent` de Claude Code o la invocación de subagentes en Codex). Los subagentes deben devolver sus hallazgos como texto estructurado. NO muestres los resultados al usuario todavía.

Si no hay subagentes disponibles en el entorno actual, completa cada evaluación de manera secuencial, anotando las conclusiones de forma interna antes de proceder.

**Aislamiento de pestañas**: Cuando la automatización del navegador esté disponible, cada evaluación DEBE crear su propia pestaña nueva. Nunca reutilices una pestaña existente, incluso si ya está abierta en la URL correcta. Esto evita que las dos evaluaciones interfieran con el estado de página de la otra.

#### Evaluación A: Revisión de Diseño por el LLM

Lee los archivos fuente relevantes (HTML, CSS, JS/TS) y, si dispones de automatización del navegador, inspecciona visualmente la página en vivo. **Crea una nueva pestaña** para esto; no reutilices pestañas existentes. Después de navegar, etiqueta la pestaña cambiando el título del documento:
```javascript
document.title = '[LLM] ' + document.title;
```
Piensa como un director de diseño. Evalúa:

**Detección de Basura de IA (CRÍTICO)**: ¿Se ve esto como cualquier otra interfaz generada por IA? Realiza la evaluación con respecto a TODAS las directrices de **NO** en la habilidad impeccable. Comprueba si hay paletas de colores de IA, texto con degradado, brillos oscuros, glassmorphism, diseños de métricas hero, cuadrículas de tarjetas idénticas, fuentes genéricas y cualquier otro indicador. **La prueba**: Si alguien te dijera "la IA hizo esto", ¿lo creerías de inmediato?

**Revisión Integral de Diseño**: Jerarquía visual (flujo de lectura, claridad de la acción principal), arquitectura de la información (estructura, agrupación, carga cognitiva), resonancia emocional (¿coincide con la marca y la audiencia?), descubribilidad (¿son obvios los elementos interactivos?), composición (equilibrio, espacio en blanco, ritmo), tipografía (jerarquía, legibilidad, elección de fuentes), color (uso intencional, cohesión, accesibilidad), estados y casos extremos (vacío, carga, error, éxito), textos de interfaz/microcopy (claridad, tono, utilidad).

**Carga Cognitiva** (consulta la [referencia de carga cognitiva](reference/cognitive-load.md)):
- Ejecuta la lista de verificación de carga cognitiva de 8 elementos. Reporta la cantidad de fallos: 0-1 = baja (bueno), 2-3 = moderada, 4+ = crítica.
- Cuenta las opciones visibles en cada punto de decisión. Si es >4, indícalo.
- Comprueba la divulgación progresiva: ¿se revela la complejidad solo cuando es necesario?

**Viaje Emocional**:
- ¿Qué emoción evoca esta interfaz? ¿Es intencional?
- **Regla del pico y el fin (Peak-end rule)**: ¿El momento más intenso es positivo? ¿La experiencia termina bien?
- **Valles emocionales**: Comprueba si hay picos de ansiedad en momentos de alta importancia (pagos, eliminación de datos, confirmaciones). ¿Existen intervenciones de diseño (indicadores de progreso, textos de tranquilidad, opciones de deshacer)?

**Heurísticas de Nielsen** (consulta la [referencia de puntuación de heurísticas](reference/heuristics-scoring.md)):
Califica cada una de las 10 heurísticas del 0 al 4. Esta puntuación se presentará en el informe final.

Devuelve conclusiones estructuradas que cubran: veredicto de basura de IA, puntuaciones heurísticas, evaluación de carga cognitiva, qué está funcionando (2-3 elementos), problemas prioritarios (3-5 con qué/por qué/corrección), observaciones menores y preguntas provocadoras.

#### Evaluación B: Detección Automatizada

Ejecuta el detector determinista integrado, que marca 25 patrones específicos (indicadores de basura de IA + calidad general del diseño).

**Escaneo por CLI**:
```bash
npx impeccable --json [--fast] [objetivo]
```

- Pasa archivos HTML/JSX/TSX/Vue/Svelte o directorios como `[objetivo]` (cualquier archivo con etiquetas de marcado). No pases archivos únicamente de CSS.
- Para URLs, omite el escaneo por CLI (requiere Puppeteer). Usa la visualización del navegador en su lugar.
- Para directorios grandes (más de 200 archivos analizables), usa `--fast` (solo expresiones regulares, omite jsdom).
- Para más de 500 archivos, limita el alcance o consulta al usuario.
- Código de salida 0 = limpio, 2 = hallazgos detectados.

**Visualización en navegador** (cuando las herramientas de automatización del navegador están disponibles Y el objetivo es una página visible):

La superposición (overlay) es una **ayuda visual para el usuario**. Destaca los problemas directamente en su navegador. NO te desplaces por la página para tomar capturas de pantalla de las superposiciones. En su lugar, lee la salida de la consola para obtener los resultados mediante código.

1. **Inicia el servidor de detección en vivo**:
   ```bash
   npx impeccable live &
   ```
   Anota el puerto impreso en stdout (asignado automáticamente). Usa `--port=PORT` para definir uno fijo.
2. **Crea una nueva pestaña** y navega a la página (usa la URL del servidor de desarrollo para archivos locales, o la URL directa). No reutilices pestañas existentes.
3. **Etiqueta la pestaña** mediante la herramienta de javascript para que el usuario pueda distinguirla:
   ```javascript
   document.title = '[Human] ' + document.title;
   ```
4. **Desplázate al inicio** para asegurarte de que la página esté en la parte superior antes de realizar la inyección.
5. **Inyecta** mediante la herramienta de javascript (reemplaza PORT con el puerto obtenido en el paso 1):
   ```javascript
   const s = document.createElement('script'); s.src = 'http://localhost:PORT/detect.js'; document.head.appendChild(s);
   ```
6. Espera 2-3 segundos para que el detector renderice las superposiciones.
7. **Lee los resultados de la consola** usando la herramienta para leer mensajes de consola con el patrón `impeccable`. El detector registra todos los hallazgos con el prefijo `[impeccable]`. NO te desplaces por la página para tomar capturas de pantalla de las superposiciones.
8. **Limpieza**: Detén el servidor en vivo cuando termines:
   ```bash
   npx impeccable live stop
   ```

Para objetivos con múltiples vistas, inyecta en 3-5 páginas representativas. Si la inyección falla, continúa únicamente con los resultados de la CLI.

Devuelve: hallazgos de la CLI (JSON), hallazgos de la consola del navegador (si aplica) y cualquier falso positivo identificado.

### Paso 3: Generar Informe Combinado de Crítica

Sintetiza ambas evaluaciones en un único informe. NO te limites a concatenar. Entrelaza los hallazgos señalando dónde coinciden la revisión del LLM y el detector, dónde el detector capturó problemas que el LLM pasó por alto y dónde los hallazgos del detector son falsos positivos.

Estructura tus comentarios como lo haría un director de diseño:

#### Puntuación de Salud del Diseño
> *Consulta la [referencia de puntuación de heurísticas](reference/heuristics-scoring.md)*

Presenta las puntuaciones de las 10 heurísticas de Nielsen en una tabla:

| # | Heurística | Puntuación | Problema Clave |
|---|------------|------------|----------------|
| 1 | Visibilidad del Estado del Sistema | ? | [hallazgo específico o "n/a" si es sólido] |
| 2 | Relación entre el Sistema y el Mundo Real | ? | |
| 3 | Control y Libertad del Usuario | ? | |
| 4 | Consistencia y Estándares | ? | |
| 5 | Prevención de Errores | ? | |
| 6 | Reconocimiento antes que Recuerdo | ? | |
| 7 | Flexibilidad y Eficiencia de Uso | ? | |
| 8 | Estética y Diseño Minimalista | ? | |
| 9 | Recuperación frente a Errores | ? | |
| 10 | Ayuda y Documentación | ? | |
| **Total** | | **??/40** | **[Rango de Calificación]** |

Sé honesto con las puntuaciones. Un 4 significa genuinamente excelente. La mayoría de las interfaces reales obtienen entre 20 y 32 puntos.

#### Veredicto de Antipatrones

**Comienza aquí.** ¿Esto parece generado por IA?

**Evaluación del LLM**: Tu propia valoración sobre los indicadores de basura de IA. Analiza la sensación estética general, la similitud de los diseños, la composición genérica y las oportunidades perdidas para aportar personalidad.

**Escaneo determinista**: Resume lo que encontró el detector automatizado, indicando cantidades y ubicaciones de archivos. Señala cualquier problema adicional que el detector haya identificado y que tú hayas pasado por alto, e indica los falsos positivos.

**Superposiciones visuales** (si se utilizó el navegador): Dile al usuario que las superposiciones ahora son visibles en la pestaña **[Human]** en su navegador, destacando los problemas detectados. Resume la información reportada en la consola.

#### Impresión General
Una breve reacción intuitiva: qué funciona, qué no y cuál es la mayor oportunidad de mejora.

#### Qué está Funcionando
Destaca 2-3 aspectos bien resueltos. Sé específico sobre por qué funcionan.

#### Problemas Prioritarios
Los 3-5 problemas de diseño más importantes, ordenados por relevancia.

Para cada problema, añade una etiqueta de **severidad P0-P3** (consulta las definiciones en la referencia correspondientes):
- **[P?] Qué**: Nombra el problema claramente.
- **Por qué importa**: Cómo perjudica al usuario o afecta a los objetivos.
- **Solución**: Qué hacer al respecto (sé concreto).
- **Comando sugerido**: Qué comando podría resolverlo (tomado de: /adapt, /animate, /audit, /bolder, /clarify, /colorize, /critique, /delight, /distill, /harden, /layout, /optimize, /overdrive, /polish, /quieter, /shape, /typeset).

#### Señales de Alerta de Personas
> *Consulta la [referencia de personas](reference/personas.md)*

Selecciona automáticamente las 2-3 personas más relevantes para este tipo de interfaz (usa la tabla de selección en la referencia). Si el archivo `.kiro/settings.json` contiene una sección `## Contexto de diseño` proveniente de `impeccable teach`, genera también 1-2 personas específicas del proyecto basándote en la información de la audiencia y de la marca.

Para cada persona seleccionada, simula la acción principal del usuario y enumera las señales de alerta específicas detectadas:

**Alex (Usuario Avanzado)**: No se detectaron atajos de teclado. El formulario requiere 8 clics para la acción principal. Onboarding forzado mediante modal. Alto riesgo de abandono.

**Jordan (Primerizo)**: Navegación basada solo en iconos en la barra lateral. Jerga técnica en los mensajes de error ("404 Not Found"). Sin ayuda visible. Abandonará en el paso 2.

Sé específico. Nombra los elementos e interacciones exactos que fallan para cada persona. No escribas descripciones genéricas de las personas; detalla qué se rompió específicamente para ellas.

#### Observaciones Menores
Notas rápidas sobre problemas más pequeños que vale la pena abordar.

#### Preguntas para Considerar
Preguntas provocadoras que podrían inspirar mejores soluciones:
- "¿Qué pasaría si la acción principal fuera más prominente?"
- "¿Es necesario que esto se sienta tan complejo?"
- "¿Cómo se vería una versión con mayor personalidad y seguridad?"

**Recuerda**:
- Sé directo. Los comentarios imprecisos hacen perder el tiempo a todos.
- Sé específico. "El botón de enviar", no "algunos elementos".
- Explica qué está mal Y por qué es importante para los usuarios.
- Ofrece sugerencias concretas, evita frases vagas como "considera explorar...".
- Prioriza sin piedad. Si todo es importante, nada lo es.
- No suavices las críticas. Los desarrolladores necesitan comentarios honestos para entregar un gran diseño.

### Paso 4: Preguntar al Usuario

**Después de presentar las conclusiones**, realiza preguntas dirigidas basándote en lo que realmente encontraste. ask the user directly to clarify what you cannot infer. Estas respuestas darán forma al plan de acción.

Haz preguntas similares a estas (adáctalas a los hallazgos reales; NO hagas preguntas genéricas):

1. **Dirección prioritaria**: Basándote en los problemas detectados, pregunta qué categoría le importa más al usuario en este momento. Por ejemplo: "Detecté problemas con la jerarquía visual, el uso de color y el exceso de información. ¿Qué área deberíamos abordar primero?". Ofrece las 2-3 categorías principales de problemas como opciones.

2. **Intención de diseño**: Si la crítica detectó una incoherencia de tono, pregunta si fue intencional. Por ejemplo: "La interfaz se siente fría y corporativa. ¿Es este el tono deseado, o debería sentirse más cálida/atrevida/juguetona?". Ofrece 2-3 direcciones de tono como opciones basadas en lo que resolvería los problemas detectados.

3. **Alcance**: Pregunta cuánto desea abarcar el usuario. Por ejemplo: "Encontré N problemas. ¿Quieres abordarlos todos o enfocarnos en los 3 principales?". Ofrece opciones de alcance como "Solo los 3 principales", "Todos los problemas", "Solo problemas críticos".

4. **Restricciones** (opcional; preguntar solo si es relevante): Si los hallazgos afectan a muchas áreas, pregunta si hay alguna zona intocable. Por ejemplo: "¿Debería mantenerse alguna sección tal como está?". Esto evita que el plan modifique elementos que el usuario da por terminados.

**Reglas para las preguntas**:
- Cada pregunta debe hacer referencia a hallazgos específicos del informe. Nunca hagas preguntas genéricas del tipo "¿quién es tu audiencia?".
- Limítate a un máximo de 2-4 preguntas. Respeta el tiempo del usuario.
- Ofrece opciones concretas, no preguntas abiertas.
- Si las conclusiones son sencillas (por ejemplo, solo 1-2 problemas claros), omite las preguntas y ve directamente al Paso 5.

### Paso 5: Acciones Recomendadas

**Después de recibir las respuestas del usuario**, presenta un resumen de acciones priorizado que refleje las prioridades y el alcance definidos en el Paso 4.

#### Resumen de Acciones

Enumera los comandos recomendados en orden de prioridad, según las respuestas del usuario:

1. **`/nombre-del-comando`**: Breve descripción de qué corregir (contexto específico basado en los hallazgos de la crítica).
2. **`/nombre-del-comando`**: Breve descripción (contexto específico).
...

**Reglas para las recomendaciones**:
- Recomienda solo comandos de: /adapt, /animate, /audit, /bolder, /clarify, /colorize, /critique, /delight, /distill, /harden, /layout, /optimize, /overdrive, /polish, /quieter, /shape, /typeset.
- Ordena primero según las prioridades indicadas por el usuario, y luego por el impacto.
- La descripción de cada elemento debe aportar suficiente contexto para que el comando sepa en qué concentrarse.
- Asocia cada Problema Prioritario al comando adecuado.
- Omite los comandos que no vayan a solucionar ningún problema detectado.
- Si el usuario eligió un alcance limitado, incluye únicamente los elementos dentro de ese alcance.
- Si el usuario marcó zonas como intocables, excluye los comandos que afectarían a dichas áreas.
- Finaliza con `/polish` como paso final si se recomendaron correcciones.

Después de presentar el resumen, dile al usuario:

> Puedes pedirme que ejecute estos comandos uno por uno, todos a la vez o en el orden que prefieras.
>
> Vuelve a ejecutar `/critique` después de las correcciones para ver cómo mejora tu puntuación.