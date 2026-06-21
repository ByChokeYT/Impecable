---
name: adapt
description: Adapta diseños para que funcionen en diferentes tamaños de pantalla, dispositivos, contextos o plataformas. Implementa puntos de interrupción (breakpoints), diseños fluidos y objetivos táctiles. Úsalo cuando el usuario mencione diseño responsivo, diseños móviles, puntos de interrupción, adaptación de viewport o compatibilidad entre dispositivos.
version: 2.1.1
---

Adapta los diseños existentes para que funcionen de manera efectiva en diferentes contextos: diferentes tamaños de pantalla, dispositivos, plataformas o casos de uso.

## PREPARACIÓN OBLIGATORIA

Invoca /impeccable — contiene los principios de diseño, antipatrones y el **Protocolo de Recopilación de Contexto**. Sigue el protocolo antes de proceder — si aún no existe un contexto de diseño, DEBES ejecutar /impeccable teach primero. Adicionalmente, recopila: plataformas/dispositivos objetivo y contextos de uso.

---

## Evaluar el Desafío de Adaptación

Comprende qué necesita adaptación y por qué:

1. **Identificar el contexto de origen**:
   - ¿Para qué se diseñó originalmente? (¿Web de escritorio? ¿App móvil?)
   - ¿Qué suposiciones se hicieron? (¿Pantalla grande? ¿Entrada de ratón? ¿Conexión rápida?)
   - ¿Qué funciona bien en el contexto actual?

2. **Comprender el contexto objetivo**:
   - **Dispositivo**: ¿Móvil, tableta, escritorio, TV, reloj, impresión?
   - **Método de entrada**: ¿Táctil, ratón, teclado, voz, gamepad?
   - **Restricciones de pantalla**: ¿Tamaño, resolución, orientación?
   - **Conexión**: ¿Wifi rápido, 3G lento, sin conexión?
   - **Contexto de uso**: ¿En movimiento vs. escritorio, mirada rápida vs. lectura enfocada?
   - **Expectativas del usuario**: ¿Qué esperan los usuarios en esta plataforma?

3. **Identificar los desafíos de adaptación**:
   - ¿Qué no cabrá? (Contenido, navegación, funcionalidades)
   - ¿Qué no funcionará? (Estados hover en pantallas táctiles, objetivos táctiles diminutos)
   - ¿Qué es inapropiado? (Patrones de escritorio en móviles, patrones móviles en escritorio)

**CRÍTICO**: La adaptación no es solo escalar, es repensar la experiencia para el nuevo contexto.

## Planificar la Estrategia de Adaptación

Crea una estrategia adecuada para el contexto:

### Adaptación Móvil (Escritorio → Móvil)

**Estrategia de Diseño (Layout)**:
- Una sola columna en lugar de varias columnas
- Apilado vertical en lugar de elementos uno al lado del otro
- Componentes de ancho completo en lugar de anchos fijos
- Navegación inferior en lugar de navegación superior o lateral

**Estrategia de Interacción**:
- Objetivos táctiles de 44x44px como mínimo (que no dependan del hover)
- Gestos de deslizamiento (swipe) donde sea apropiado (listas, carruseles)
- Hojas inferiores (bottom sheets) en lugar de menús desplegables
- Diseño enfocado en el pulgar (controles al alcance del pulgar)
- Áreas de toque más grandes con más espaciado

**Estrategia de Contenido**:
- Divulgación progresiva (no muestres todo a la vez)
- Priorizar el contenido principal (contenido secundario en pestañas/acordeones)
- Texto más corto (más conciso)
- Texto más grande (16px mínimo)

**Estrategia de Navegación**:
- Menú de hamburguesa o navegación inferior
- Reducir la complejidad de la navegación
- Cabeceras fijas (sticky) para dar contexto
- Botón de retroceso en el flujo de navegación

### Adaptación para Tabletas (Enfoque Híbrido)

**Estrategia de Diseño (Layout)**:
- Diseños de dos columnas (no de una ni de tres columnas)
- Paneles laterales para contenido secundario
- Vistas maestro-detalle (lista + detalle)
- Adaptable según la orientación (vertical vs. horizontal)

**Estrategia de Interacción**:
- Soporte tanto para tacto como para puntero
- Objetivos táctiles de 44x44px pero permitiendo diseños más densos que en el teléfono
- Cajones de navegación lateral
- Formularios de varias columnas donde sea apropiado

### Adaptación para Escritorio (Móvil → Escritorio)

**Estrategia de Diseño (Layout)**:
- Diseños de varias columnas (usa el espacio horizontal)
- Navegación lateral siempre visible
- Múltiples paneles de información simultáneos
- Anchos fijos con restricciones de ancho máximo (no estirar a 4K)

**Estrategia de Interacción**:
- Estados hover para información adicional
- Atajos de teclado
- Menús contextuales con clic derecho
- Arrastrar y soltar donde sea útil
- Selección múltiple con Shift/Cmd

**Estrategia de Contenido**:
- Mostrar más información por adelantado (menos divulgación progresiva)
- Tablas de datos con muchas columnas
- Visualizaciones más ricas
- Descripciones más detalladas

### Adaptación para Impresión (Pantalla → Impresión)

**Estrategia de Diseño (Layout)**:
- Saltos de página en puntos lógicos
- Eliminar navegación, pie de página y elementos interactivos
- Blanco y negro (o color limitado)
- Márgenes adecuados para la encuadernación

**Estrategia de Contenido**:
- Expandir el contenido abreviado (mostrar URLs completas, secciones ocultas)
- Añadir números de página, encabezados y pies de página
- Incluir metadatos (fecha de impresión, título de la página)
- Convertir gráficos a versiones aptas para impresión

### Adaptación para Correo Electrónico (Web → Email)

**Estrategia de Diseño (Layout)**:
- Ancho estrecho (600px máx.)
- Una sola columna
- CSS integrado en línea (sin hojas de estilo externas)
- Diseños basados en tablas (para compatibilidad con clientes de correo)

**Estrategia de Interacción**:
- Llamados a la acción (CTAs) grandes y obvios (botones, no enlaces de texto)
- Sin estados hover (no son confiables)
- Enlaces profundos a la aplicación web para interacciones complejas

## Implementar Adaptaciones

Aplica los cambios de manera sistemática:

### Puntos de Interrupción Responsivos (Breakpoints)

Elige breakpoints adecuados:
- Móvil: 320px-767px
- Tableta: 768px-1023px
- Escritorio: 1024px+
- O breakpoints basados en el contenido (donde el diseño se rompa)

### Técnicas de Adaptación de Diseño

- **CSS Grid/Flexbox**: Reorganiza los diseños automáticamente
- **Container Queries**: Se adaptan según el contenedor, no el viewport
- **`clamp()`**: Tamaño fluido entre un mínimo y un máximo
- **Media queries**: Diferentes estilos para diferentes contextos
- **Propiedades de visualización**: Muestra/oculta elementos por contexto

### Adaptación Táctil

- Aumenta el tamaño de los objetivos táctiles (mínimo 44x44px)
- Añade más espaciado entre elementos interactivos
- Elimina interacciones que dependan del hover
- Añade retroalimentación táctil (efectos de ondas, resaltados)
- Considera las zonas del pulgar (es más fácil llegar al final que al principio de la pantalla)

### Adaptación de Contenido

- Usa `display: none` con moderación (sigue descargándose)
- Mejora progresiva (contenido principal primero, mejoras en pantallas más grandes)
- Carga perezosa (lazy loading) para contenido fuera de pantalla
- Imágenes responsivas (`srcset`, elemento `picture`)

### Adaptación de Navegación

- Transforma la navegación compleja en menú de hamburguesa/cajón en móvil
- Barra de navegación inferior para aplicaciones móviles
- Navegación lateral persistente en escritorio
- Migas de pan (breadcrumbs) en pantallas pequeñas para dar contexto

**IMPORTANTE**: Realiza pruebas en dispositivos reales, no solo en las herramientas de desarrollo del navegador. La emulación de dispositivos es útil pero no es perfecta.

**NUNCA**:
- Ocultes funcionalidad principal en móvil (si es importante, haz que funcione)
- Asumas que escritorio = dispositivo potente (considera la accesibilidad, máquinas antiguas)
- Uses una arquitectura de información diferente entre contextos (confunde al usuario)
- Rompas las expectativas del usuario para la plataforma (los usuarios de móviles esperan patrones móviles)
- Olvides la orientación horizontal en móviles/tabletas
- Uses breakpoints genéricos a ciegas (usa breakpoints basados en el contenido)
- Ignores el tacto en escritorio (muchos dispositivos de escritorio tienen pantallas táctiles)

## Verificar Adaptaciones

Prueba minuciosamente en todos los contextos:

- **Dispositivos reales**: Prueba en teléfonos, tabletas y computadoras reales
- **Diferentes orientaciones**: Vertical y horizontal
- **Diferentes navegadores**: Safari, Chrome, Firefox, Edge
- **Diferentes sistemas operativos**: iOS, Android, Windows, macOS
- **Diferentes métodos de entrada**: Tacto, ratón, teclado
- **Casos extremos**: Pantallas muy pequeñas (320px), pantallas muy grandes (4K)
- **Conexiones lentas**: Prueba en una red con velocidad limitada

Recuerda: Eres un experto en diseño multiplataforma. Crea experiencias que se sientan nativas en cada contexto manteniendo la consistencia de la marca y la funcionalidad. Adapta intencionadamente, prueba minuciosamente.