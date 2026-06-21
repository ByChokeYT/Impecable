---
name: audit
description: "Ejecuta comprobaciones de calidad técnica en accesibilidad, rendimiento, temas, diseño responsivo y antipatrones. Genera un informe puntuado con niveles de severidad P0-P3 y un plan de acción. Úsalo cuando el usuario solicite una revisión de accesibilidad, auditoría de rendimiento o evaluación de calidad técnica."
argument-hint: "[área (funcionalidad, página, componente...)]"
user-invocable: true
---

## PREPARACIÓN OBLIGATORIA

Invoca {{command_prefix}}impeccable — contiene los principios de diseño, antipatrones y el **Protocolo de Recopilación de Contexto**. Sigue el protocolo antes de proceder — si aún no existe un contexto de diseño, DEBES ejecutar {{command_prefix}}impeccable teach primero.

---

Ejecuta comprobaciones sistemáticas de calidad **técnica** y genera un informe detallado. No corrijas los problemas; regístralos para que otros comandos se encarguen de solucionarlos.

Esta es una auditoría a nivel de código, no una crítica de diseño. Evalúa aquello que sea medible y verificable en la implementación.

## Análisis Diagnóstico

Realiza comprobaciones exhaustivas en 5 dimensiones. Califica cada dimensión del 0 al 4 utilizando los siguientes criterios.

### 1. Accesibilidad (A11y)

**Puntos a comprobar**:
- **Problemas de contraste**: Proporciones de contraste de texto < 4.5:1 (o 7:1 para AAA).
- **Falta de ARIA**: Elementos interactivos sin los roles, etiquetas o estados adecuados.
- **Navegación por teclado**: Indicadores de enfoque (focus) ausentes, orden de tabulación ilógico, trampas de teclado.
- **HTML semántico**: Jerarquía de encabezados incorrecta, falta de puntos de referencia (landmarks), divs en lugar de botones.
- **Texto alternativo**: Descripciones de imagen ausentes o deficientes.
- **Problemas en formularios**: Campos de entrada sin etiquetas, mensajes de error deficientes, falta de indicadores de campos obligatorios.

**Puntuación 0-4**: 0 = Inaccesible (falla WCAG A), 1 = Deficiencias graves (pocas etiquetas ARIA, sin navegación por teclado), 2 = Parcial (cierto esfuerzo en accesibilidad, deficiencias significativas), 3 = Bueno (se cumple en su mayoría WCAG AA, deficiencias menores), 4 = Excelente (cumple totalmente con WCAG AA, se aproxima a AAA).

### 2. Rendimiento

**Puntos a comprobar**:
- **Saturación del diseño (Layout thrashing)**: Lectura/escritura de propiedades de diseño en bucles.
- **Animaciones costosas**: Animar propiedades de diseño (width, height, top, left) en lugar de transform/opacity.
- **Falta de optimización**: Imágenes sin carga perezosa (lazy loading), recursos no optimizados, falta de will-change.
- **Tamaño del paquete (Bundle size)**: Importaciones innecesarias, dependencias sin usar.
- **Rendimiento de renderizado**: Re-renders innecesarios, falta de memoización.

**Puntuación 0-4**: 0 = Problemas graves (saturación de diseño, nada optimizado), 1 = Problemas importantes (sin carga perezosa, animaciones costosas), 2 = Parcial (cierta optimización, persisten deficiencias), 3 = Bueno (optimizado en su mayoría, mejoras menores posibles), 4 = Excelente (rápido, ligero y bien optimizado).

### 3. Temas (Theming)

**Puntos a comprobar**:
- **Colores fijos (Hard-coded)**: Colores que no utilizan tokens de diseño.
- **Modo oscuro roto**: Ausencia de variantes para modo oscuro, bajo contraste en el tema oscuro.
- **Tokens inconsistentes**: Uso de tokens incorrectos, mezcla de tipos de tokens.
- **Problemas al cambiar de tema**: Valores que no se actualizan al cambiar el tema.

**Puntuación 0-4**: 0 = Sin soporte de temas (todo fijo), 1 = Tokens mínimos (la mayoría fijo), 2 = Parcial (existen tokens pero se usan de manera inconsistente), 3 = Bueno (se usan tokens, valores fijos menores), 4 = Excelente (sistema de tokens completo, el modo oscuro funciona perfectamente).

### 4. Diseño Responsivo

**Puntos a comprobar**:
- **Anchos fijos**: Anchos definidos en el código que rompen el diseño en móviles.
- **Objetivos táctiles**: Elementos interactivos con tamaño inferior a 44x44px.
- **Desplazamiento horizontal**: Desbordamiento de contenido en pantallas estrechas.
- **Escalado de texto**: Diseños que se rompen cuando aumenta el tamaño del texto.
- **Falta de puntos de interrupción (Breakpoints)**: Sin variantes para móviles/tabletas.

**Puntuación 0-4**: 0 = Solo escritorio (se rompe en móviles), 1 = Problemas graves (algunos breakpoints, fallos frecuentes), 2 = Parcial (funciona en móviles, detalles toscos), 3 = Bueno (responsivo, problemas menores de objetivos táctiles o desbordamiento), 4 = Excelente (fluido, todos los viewports, objetivos táctiles correctos).

### 5. Antipatrones (CRÍTICO)

Comprueba con respecto a TODAS las directrices de **NO** en la habilidad impeccable. Busca indicadores de basura de IA ("AI slop") (paleta de colores de IA, texto con degradado, glassmorphic en exceso, métricas hero, cuadrículas de tarjetas repetitivas, fuentes genéricas) y antipatrones de diseño generales (gris sobre color, tarjetas anidadas, aceleración elástica, textos redundantes).

**Puntuación 0-4**: 0 = Galería de basura de IA (5+ indicadores), 1 = Estética de IA muy marcada (3-4 indicadores), 2 = Algunos indicadores (1-2 visibles), 3 = Mayormente limpio (solo problemas sutiles), 4 = Sin indicadores de IA (diseño distintivo e intencional).

## Generar Informe

### Puntuación de Salud de la Auditoría

| # | Dimensión | Puntuación | Hallazgo Clave |
|---|-----------|------------|----------------|
| 1 | Accesibilidad | ? | [problema de a11y más crítico o "--"] |
| 2 | Rendimiento | ? | |
| 3 | Diseño Responsivo | ? | |
| 4 | Temas | ? | |
| 5 | Antipatrones | ? | |
| **Total** | | **??/20** | **[Rango de Calificación]** |

**Rangos de Calificación**: 18-20 Excelente (pulido menor), 14-17 Bueno (abordar dimensiones débiles), 10-13 Aceptable (se requiere trabajo significativo), 6-9 Deficiente (reforma importante), 0-5 Crítico (problemas fundamentales).

### Veredicto de Antipatrones
**Comienza aquí.** Aprobado/Fallo: ¿Esto parece generado por IA? Enumera los indicadores específicos. Sé brutalmente honesto.

### Resumen Ejecutivo
- Puntuación de Salud de la Auditoría: **??/20** ([rango de calificación])
- Total de problemas encontrados (conteo por severidad: P0/P1/P2/P3)
- Los 3-5 problemas más críticos
- Siguientes pasos recomendados

### Hallazgos Detallados por Severidad

Etiqueta cada problema con la **severidad P0-P3**:
- **P0 Bloqueante**: Impide completar la tarea — corregir inmediatamente.
- **P1 Mayor**: Dificultad significativa o violación de WCAG AA — corregir antes del lanzamiento.
- **P2 Menor**: Molestia, existe una solución alternativa — corregir en la siguiente iteración.
- **P3 Pulido**: Deseable de corregir, sin impacto real para el usuario — corregir si el tiempo lo permite.

Para cada problema, documenta:
- **[P?] Nombre del problema**
- **Ubicación**: Componente, archivo, línea
- **Categoría**: Accesibilidad / Rendimiento / Temas / Responsivo / Antipatrón
- **Impacto**: Cómo afecta a los usuarios
- **WCAG/Estándar**: Qué norma infringe (si aplica)
- **Recomendación**: Cómo solucionarlo
- **Comando sugerido**: Qué comando usar (preferiblemente de: {{available_commands}})

### Patrones y Problemas Sistémicos

Identifica problemas recurrentes que indiquen deficiencias en el sistema en lugar de errores aislados:
- "Los colores fijos aparecen en más de 15 componentes, se deberían usar tokens de diseño".
- "Los objetivos táctiles son sistemáticamente demasiado pequeños (<44px) en toda la experiencia móvil".

### Aspectos Positivos

Destaca lo que está funcionando bien — buenas prácticas a mantener y replicar.

## Acciones Recomendadas

Enumera los comandos recomendados en orden de prioridad (P0 primero, luego P1 y P2):

1. **[P?] `{{command_prefix}}nombre-del-comando`** — Descripción breve (contexto específico a partir de los hallazgos).
2. **[P?] `{{command_prefix}}nombre-del-comando`** — Descripción breve (contexto específico).

**Reglas**: Recomienda solo comandos que estén en: {{available_commands}}. Asocia los hallazgos al comando más adecuado. Finaliza con `{{command_prefix}}polish` como paso final si se recomendaron correcciones.

Después de presentar el resumen, dile al usuario:

> Puedes pedirme que ejecute estos comandos uno por uno, todos a la vez o en el orden que prefieras.
>
> Vuelve a ejecutar `{{command_prefix}}audit` después de las correcciones para ver cómo mejora tu puntuación.

**IMPORTANTE**: Sé exhaustivo pero ofrece soluciones viables. Demasiados problemas P3 generan ruido. Concéntrate en lo que realmente importa.

**NUNCA**:
- Reportes problemas sin explicar su impacto (¿por qué es importante esto?).
- Ofrezcas recomendaciones genéricas (sé específico y práctico).
- Olvides mencionar los aspectos positivos (celebra lo que sí funciona).
- Olvides priorizar (no todo puede ser P0).
- Reportes falsos positivos sin verificación.

Recuerda: Eres un auditor de calidad técnica. Documenta sistemáticamente, prioriza sin piedad, cita ubicaciones de código específicas y proporciona rutas claras de mejora.
