---
name: optimize
description: Diagnostica y soluciona problemas de rendimiento de la interfaz de usuario en cuanto a velocidad de carga, renderizado, animaciones, imágenes y tamaño de los paquetes de código (bundles). Úsalo cuando el usuario comente que la app va lenta, con tirones (laggy/janky), problemas de rendimiento, tamaño del bundle, tiempo de carga, o cuando desee una experiencia más rápida y fluida.
version: 2.1.1
argument-hint: "[objetivo]"
---

Identifica y soluciona problemas de rendimiento para crear experiencias de usuario más rápidas y fluidas.

## Evaluar Problemas de Rendimiento

Comprende el rendimiento actual e identifica problemas:

1. **Medir el estado actual**:
   - **Core Web Vitals**: Puntuaciones LCP, FID/INP, CLS.
   - **Tiempo de carga**: Tiempo para interactivo (TTI), primera pintura con contenido (FCP).
   - **Tamaño del bundle**: Peso de los archivos JavaScript, CSS e imágenes.
   - **Rendimiento en tiempo de ejecución**: Tasa de fotogramas (FPS), uso de memoria, uso de CPU.
   - **Red**: Cantidad de peticiones, tamaño de los recursos (payloads), cascada de red.

2. **Identificar cuellos de botella**:
   - ¿Qué es lento? (¿La carga inicial? ¿Las interacciones? ¿Las animaciones?).
   - ¿Qué lo está causando? (¿Imágenes grandes? ¿JavaScript costoso? ¿Cálculos repetidos del diseño / layout thrashing?).
   - ¿Qué tan grave es? (¿Es perceptible? ¿Molesto? ¿Bloqueante?).
   - ¿Quién se ve afectado? (¿Todos los usuarios? ¿Solo en móviles? ¿En conexiones lentas?).

**CRÍTICO**: Mide antes y después. La optimización prematura hace perder el tiempo. Optimiza lo que realmente importa.

## Estrategia de Optimización

Crea un plan de mejora sistemático:

### Rendimiento de Carga

**Optimizar Imágenes**:
- Usa formatos modernos (WebP, AVIF).
- Tamaño adecuado (no cargues una imagen de 3000px para mostrarla a 300px).
- Carga perezosa (lazy loading) para imágenes debajo del pliegue (below-the-fold).
- Imágenes responsivas (atributos `srcset`, elemento `picture`).
- Comprime imágenes (una calidad del 80-85% suele ser imperceptible al ojo).
- Usa una red de distribución de contenidos (CDN) para una entrega más rápida.

```html
<img 
  src="hero.webp"
  srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1200.webp 1200w"
  sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
  loading="lazy"
  alt="Imagen principal (Hero)"
/>
```

**Reducir el Paquete de JavaScript (Bundle)**:
- División de código (code splitting) por rutas o por componentes.
- Depuración de código muerto (tree shaking) para eliminar código no utilizado.
- Elimina dependencias sin usar.
- Carga perezosa del código no crítico.
- Usa importaciones dinámicas para componentes pesados.

```javascript
// Carga perezosa de un componente pesado
const HeavyChart = lazy(() => import('./HeavyChart'));
```

**Optimizar CSS**:
- Elimina CSS no utilizado.
- CSS crítico insertado directamente (inline), el resto se carga de forma asíncrona.
- Minimiza los archivos CSS.
- Usa contención CSS (`contain`) para regiones independientes de la página.

**Optimizar Fuentes**:
- Usa `font-display: swap` u `optional`.
- Crea subconjuntos de fuentes (solo los caracteres que necesites).
- Precarga las fuentes críticas.
- Usa fuentes del sistema cuando sea apropiado.
- Limita la cantidad de pesos de fuentes cargados.

```css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap; /* Muestra la fuente alternativa de inmediato */
  unicode-range: U+0020-007F; /* Solo caracteres latinos básicos */
}
```

**Optimizar la Estrategia de Carga**:
- Recursos críticos primero (asíncrono/diferido para lo no crítico).
- Precarga (preload) de recursos críticos.
- Prebúsqueda (prefetch) de las páginas siguientes más probables.
- Service worker para funcionamiento sin conexión y almacenamiento en caché.
- HTTP/2 o HTTP/3 para multiplexación de peticiones.

### Rendimiento de Renderizado

**Evitar la Sacudida del Diseño (Layout Thrashing)**:
```javascript
// ❌ Mal: Alternar lecturas y escrituras (provoca reflows continuos)
elements.forEach(el => {
  const height = el.offsetHeight; // Lectura (fuerza el cálculo del diseño)
  el.style.height = height * 2; // Escritura
});

// ✅ Bien: Agrupar lecturas y luego agrupar escrituras
const heights = elements.map(el => el.offsetHeight); // Todas las lecturas
elements.forEach((el, i) => {
  el.style.height = heights[i] * 2; // Todas las escrituras
});
```

**Optimizar el Renderizado**:
- Usa la propiedad CSS `contain` para aislar regiones independientes.
- Minimiza la profundidad del DOM (las estructuras planas son más rápidas).
- Reduce el tamaño del DOM (menos elementos).
- Usa `content-visibility: auto` para listas largas.
- Desplazamiento virtual (virtual scrolling) para listas extremadamente largas (react-window, react-virtualized).

**Reducir Pintado y Composición**:
- Usa `transform` y `opacity` para las animaciones (aceleración por GPU).
- Evita animar propiedades que afecten al diseño (width, height, top, left).
- Usa `will-change` con moderación para operaciones costosas conocidas.
- Minimiza las áreas de pintado (las áreas más pequeñas se pintan más rápido).

### Rendimiento de las Animaciones

**Aceleración por GPU**:
```css
/* ✅ Acelerado por GPU (rápido) */
.animated {
  transform: translateX(100px);
  opacity: 0.5;
}

/* ❌ Dependiente de la CPU (lento) */
.animated {
  left: 100px;
  width: 300px;
}
```

**Fluidez a 60fps**:
- Apunta a 16ms por fotograma (60fps).
- Usa `requestAnimationFrame` para animaciones mediante JavaScript.
- Regula o limita (debounce/throttle) los controladores de eventos de desplazamiento (scroll).
- Usa animaciones CSS siempre que sea posible.
- Evita ejecutar JavaScript de larga duración durante las animaciones.

**Intersection Observer**:
```javascript
// Detecta de manera eficiente cuando los elementos entran en el viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // El elemento es visible, cargarlo de forma perezosa o animarlo
    }
  });
});
```

### Optimización en React y Frameworks

**Específico de React**:
- Usa `memo()` para evitar renderizados en componentes costosos.
- `useMemo()` y `useCallback()` para cálculos y funciones costosas.
- Virtualización para listas largas.
- División de código en las rutas.
- Evita crear funciones inline en el render.
- Usa el Profiler de React DevTools.

**Independiente del Framework**:
- Minimiza los re-renderizados.
- Limita (debounce) las operaciones costosas.
- Memoriza valores calculados.
- Carga perezosa de rutas y componentes.

### Optimización de Red

**Reducir Peticiones**:
- Combina archivos pequeños.
- Usa sprites SVG para los iconos.
- Inserta directamente (inline) recursos críticos pequeños.
- Elimina scripts de terceros no utilizados.

**Optimizar APIs**:
- Usa paginación (evita cargar todo de golpe).
- GraphQL para solicitar únicamente los campos necesarios.
- Compresión de respuestas (gzip, brotli).
- Cabeceras de caché HTTP.
- CDN para recursos estáticos.

**Optimizar para Conexiones Lentas**:
- Carga adaptativa basada en la conexión (`navigator.connection`).
- Actualizaciones optimistas en la interfaz.
- Priorización de peticiones.
- Mejora progresiva.

## Optimización de Core Web Vitals

### Largest Contentful Paint (LCP < 2.5s)
- Optimiza la imagen principal (hero).
- Inserta directamente (inline) el CSS crítico.
- Precarga recursos clave.
- Usa CDN.
- Renderizado del lado del servidor (SSR).

### First Input Delay (FID < 100ms) / INP (< 200ms)
- Divide las tareas largas.
- Difiere el JavaScript no crítico.
- Usa web workers para cálculos pesados.
- Reduce el tiempo de ejecución de JavaScript.

### Cumulative Layout Shift (CLS < 0.1)
- Establece dimensiones (ancho y alto) en imágenes y videos.
- No inyectes contenido por encima del contenido ya existente.
- Usa la propiedad CSS `aspect-ratio`.
- Reserva espacio para anuncios o elementos incrustados.
- Evita animaciones que provoquen cambios en el diseño.

```css
/* Reservar espacio para la imagen */
.image-container {
  aspect-ratio: 16 / 9;
}
```

## Monitoreo de Rendimiento

**Herramientas recomendadas**:
- Chrome DevTools (Lighthouse, pestaña de Rendimiento).
- WebPageTest.
- Core Web Vitals (Chrome UX Report).
- Analizadores de bundles (webpack-bundle-analyzer).
- Monitoreo de rendimiento (Sentry, DataDog, New Relic).

**Métricas clave**:
- LCP, FID/INP, CLS (Core Web Vitals).
- Tiempo para interactivo (TTI).
- Primera pintura con contenido (FCP).
- Tiempo total de bloqueo (TBT).
- Tamaño del bundle.
- Cantidad de peticiones.

**IMPORTANTE**: Mide en dispositivos reales y bajo condiciones de red reales. Chrome en escritorio con una conexión rápida no es representativo de tus usuarios.

**NUNCA**:
- Optimices sin medir (optimización prematura).
- Sacrifiques la accesibilidad por el rendimiento.
- Rompas la funcionalidad mientras optimizas.
- Uses `will-change` en todas partes (crea nuevas capas y consume memoria).
- Cargues de forma perezosa (lazy load) el contenido que está por encima del pliegue (above-the-fold).
- Te enfoques en micro-optimizaciones mientras ignoras los problemas principales (optimiza primero el cuello de botella más grande).
- Te olvides del rendimiento móvil (suelen ser dispositivos y conexiones más lentas).

## Verificar Mejoras

Prueba que las optimizaciones funcionen:

- **Métricas antes y después**: Compara las puntuaciones de Lighthouse.
- **Monitoreo de usuarios reales**: Registra las mejoras reales en los usuarios.
- **Diferentes dispositivos**: Prueba en un Android de gama baja, no solo en un iPhone de última generación.
- **Conexiones lentas**: Limita la conexión a 3G y evalúa la experiencia.
- **Sin regresiones**: Asegúrate de que todo siga funcionando como se espera.
- **Percepción del usuario**: ¿La aplicación se *siente* más rápida?

Recuerda: El rendimiento es una funcionalidad. Las experiencias rápidas se sienten más receptivas, pulidas y profesionales. Optimiza de manera sistemática, mide implacablemente y prioriza el rendimiento percibido por el usuario.