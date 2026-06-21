# Flujo de Extracción (Extract Flow)

Identifica patrones reutilizables, componentes y tokens de diseño, y luego extráelos y consolídalos dentro del sistema de diseño para su reutilización sistemática.

## Paso 1: Descubrir el Sistema de Diseño

Encuentra el sistema de diseño, la librería de componentes o el directorio de UI compartido. Comprende su estructura: organización de los componentes, convenciones de nomenclatura, estructura de los tokens de diseño y convenciones de importación/exportación.

**CRÍTICO**: Si no existe un sistema de diseño, {{ask_instruction}} antes de crear uno. Comprende primero la ubicación y estructura de preferencia.

## Paso 2: Identificar Patrones

Busca oportunidades de extracción en el área objetivo:

- **Componentes repetidos**: Patrones de UI similares que se utilicen 3 o más veces (botones, tarjetas, campos de entrada).
- **Valores fijos (hardcoded)**: Colores, espaciado, tipografía o sombras que deberían ser tokens de diseño.
- **Variaciones inconsistentes**: Múltiples implementaciones de un mismo concepto.
- **Patrones de composición**: Patrones de diseño (layout) o interacción que se repitan (filas de formularios, grupos de barras de herramientas, estados vacíos).
- **Estilos tipográficos**: Combinaciones repetidas de tamaño de fuente + peso + altura de línea.
- **Patrones de animación**: Combinaciones repetidas de suavizado (easing), duración o fotogramas clave (keyframes).

Evalúa el valor: solo extrae elementos que se utilicen 3 o más veces con la misma intención. La abstracción prematura es peor que la duplicación.

## Paso 3: Planificar la Extracción

Crea un plan sistemático:

- **Componentes a extraer**: ¿Qué elementos de UI se convertirán en componentes reutilizables?
- **Tokens a crear**: ¿Qué valores fijos se convertirán en tokens de diseño?
- **Variantes a soportar**: ¿Qué variaciones necesita cada componente?
- **Convenciones de nomenclatura**: Nombres de componentes, de tokens y de propiedades (props) que coincidan con los patrones existentes.
- **Ruta de migración**: Cómo refactorizar los usos actuales para consumir las nuevas versiones compartidas.

**IMPORTANTE**: Los sistemas de diseño crecen de manera incremental. Extrae lo que sea claramente reutilizable ahora, no todo lo que podría llegar a serlo en el futuro.

## Paso 4: Extraer y Enriquecer

Construye versiones mejoradas y reutilizables:

- **Componentes**: API de propiedades clara y con valores predeterminados sensatos, variantes adecuadas para diferentes casos de uso, accesibilidad integrada (ARIA, navegación por teclado, gestión de enfoque), documentación y ejemplos de uso.
- **Tokens de diseño**: Nomenclatura clara (primitivos frente a semánticos), jerarquía y organización adecuadas, documentación de cuándo usar cada token.
- **Patrones**: Cuándo utilizar cada patrón, ejemplos de código, variaciones y combinaciones.

## Paso 5: Migrar

Reemplaza los usos existentes con las nuevas versiones compartidas:

- **Buscar todas las instancias**: Localiza los patrones que has extraído.
- **Reemplazar sistemáticamente**: Actualiza cada uso para que consuma la versión compartida.
- **Probar exhaustivamente**: Asegura la paridad visual y funcional.
- **Eliminar código muerto**: Quita las implementaciones antiguas.

## Paso 6: Documentar

Actualiza la documentación del sistema de diseño:

- Añade los nuevos componentes a la librería de componentes.
- Documenta el uso y los valores de los tokens.
- Añade ejemplos y directrices de uso.
- Actualiza cualquier Storybook o catálogo de componentes existente.

**NUNCA**:
- Extraigas implementaciones de un solo uso o específicas de un contexto sin generalizarlas previamente.
- Crees componentes tan genéricos que acaben resultando inútiles.
- Extraigas sin tener en cuenta las convenciones del sistema de diseño existente.
- Omitas los tipos de TypeScript adecuados o la documentación de las propiedades (props).
- Crees tokens para absolutamente cada valor individual (los tokens deben tener un significado semántico).
- Extraigas elementos que difieran en su intención (dos botones que se ven similares pero cumplen funciones distintas deben permanecer separados).

Recuerda: Un buen sistema de diseño es un sistema vivo. Extrae patrones a medida que surjan, enriquécelos con criterio y mantenlos de forma consistente.
