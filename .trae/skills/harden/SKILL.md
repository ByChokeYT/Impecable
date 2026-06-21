---
name: harden
description: Prepara las interfaces para producción: manejo de errores, estados vacíos, flujos de inducción (onboarding), internacionalización (i18n), desbordamiento de texto y gestión de casos extremos. Úsalo cuando el usuario pida robustecer, preparar para producción, manejar casos extremos, añadir estados de error, diseñar estados vacíos, mejorar la inducción o corregir problemas de desbordamiento e i18n.
version: 2.1.1
user-invocable: true
argument-hint: "[objetivo]"
---

Fortalece las interfaces frente a casos extremos, errores, problemas de internacionalización y escenarios de uso del mundo real que suelen romper los diseños idealizados.

## Evaluar Necesidades de Robustecimiento (Hardening)

Identifica debilidades y casos extremos:

1. **Probar con entradas extremas**:
   - Texto muy largo (nombres, descripciones, títulos).
   - Texto muy corto (vacío, un solo carácter).
   - Caracteres especiales (emojis, texto RTL de derecha a izquierda, acentos).
   - Números grandes (millones, miles de millones).
   - Gran cantidad de elementos (más de 1000 elementos de lista, más de 50 opciones).
   - Sin datos (estados vacíos).

2. **Probar escenarios de error**:
   - Fallos de red (sin conexión, conexión lenta, tiempo de espera agotado).
   - Errores de API (400, 401, 403, 404, 500).
   - Errores de validación.
   - Errores de permisos.
   - Límite de peticiones superado (rate limiting).
   - Operaciones concurrentes.

3. **Probar la internacionalización (i18n)**:
   - Traducciones largas (el alemán suele ser un 30% más largo que el inglés).
   - Idiomas RTL (árabe, hebreo).
   - Juegos de caracteres (chino, japonés, coreano, emojis).
   - Formatos de fecha y hora.
   - Formatos numéricos (1,000 frente a 1.000).
   - Símbolos de moneda.

**CRÍTICO**: Los diseños que solo funcionan con datos perfectos no están listos para producción. Hazlos robustos frente a la realidad.

## Dimensiones del Robustecimiento

Mejora la resiliencia sistemáticamente:

### Desbordamiento de Texto y Ajuste de Línea (Wrapping)

**Manejo de texto largo**:
```css
/* Una sola línea con puntos suspensivos */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Varias líneas con recorte */
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Permitir ajuste/salto de palabra */
.wrap {
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}
```

**Desbordamiento en Flex/Grid**:
```css
/* Evitar que los elementos flex se desborden */
.flex-item {
  min-width: 0; /* Permitir encogerse por debajo del tamaño del contenido */
  overflow: hidden;
}

/* Evitar que los elementos grid se desborden */
.grid-item {
  min-width: 0;
  min-height: 0;
}
```

**Tamaño de texto responsivo**:
- Usa `clamp()` para una tipografía fluida.
- Establece tamaños mínimos legibles (14px en móvil).
- Prueba el escalado del texto (zoom al 200%).
- Asegúrate de que los contenedores se expandan junto con el texto.

### Internacionalización (i18n)

**Expansión del texto**:
- Añade un margen de espacio del 30-40% para las traducciones.
- Usa flexbox/grid que se adapte al contenido.
- Prueba con el idioma más largo (normalmente el alemán).
- Evita anchos fijos en los contenedores de texto.

```jsx
// ❌ Mal: Asume texto corto en inglés
<button className="w-24">Submit</button>

// ✅ Bien: Se adapta al contenido
<button className="px-4 py-2">Submit</button>
```

**Soporte RTL (derecha a izquierda)**:
```css
/* Usa propiedades lógicas */
margin-inline-start: 1rem; /* No margin-left */
padding-inline: 1rem; /* No padding-left/right */
border-inline-end: 1px solid; /* No border-right */

/* O usa el atributo dir */
[dir="rtl"] .arrow { transform: scaleX(-1); }
```

**Soporte de juegos de caracteres**:
- Usa codificación UTF-8 en todas partes.
- Prueba con caracteres chinos, japoneses y coreanos (CJK).
- Prueba con emojis (pueden ocupar entre 2 y 4 bytes).
- Maneja diferentes alfabetos (latino, cirílico, árabe, etc.).

**Formato de Fecha/Hora y Números**:
```javascript
// ✅ Usa la API Intl para formatear correctamente
new Intl.DateTimeFormat('es-ES').format(date); // 15/1/2024
new Intl.DateTimeFormat('de-DE').format(date); // 15.1.2024

new Intl.NumberFormat('es-ES', { 
  style: 'currency', 
  currency: 'EUR' 
}).format(1234.56); // 1.234,56 €
```

**Pluralización**:
```javascript
// ❌ Mal: Asume la pluralización del inglés
`${count} item${count !== 1 ? 's' : ''}`

// ✅ Bien: Usa una biblioteca de i18n adecuada
t('items', { count }) // Maneja reglas de plural complejas
```

### Manejo de Errores

**Errores de red**:
- Muestra mensajes de error claros.
- Proporciona un botón de reintento.
- Explica qué sucedió.
- Ofrece modo sin conexión (si aplica).
- Maneja escenarios de tiempo de espera agotado (timeout).

```jsx
// Estados de error con recuperación
{error && (
  <ErrorMessage>
    <p>No se pudieron cargar los datos. {error.message}</p>
    <button onClick={retry}>Intentar de nuevo</button>
  </ErrorMessage>
)}
```

**Errores de validación de formulario**:
- Errores integrados (inline) cerca de los campos correspondientes.
- Mensajes claros y específicos.
- Sugiere correcciones.
- No bloquees el envío de forma innecesaria.
- Preserva la entrada de datos del usuario en caso de error.

**Errores de API**:
- Maneja cada código de estado de forma adecuada:
  - 400: Muestra errores de validación.
  - 401: Redirige a la página de inicio de sesión.
  - 403: Muestra error de falta de permisos.
  - 404: Muestra estado de elemento no encontrado.
  - 429: Muestra mensaje de límite de peticiones superado.
  - 500: Muestra un error genérico y ofrece opciones de soporte.

**Degradación aceptable (Graceful degradation)**:
- La funcionalidad principal debe funcionar sin JavaScript.
- Las imágenes deben tener texto alternativo (alt).
- Mejora progresiva (progressive enhancement).
- Alternativas (fallbacks) para funciones no soportadas.

### Casos Extremos y Condiciones de Límite

**Estados vacíos (Empty states)**:
- Sin elementos en la lista.
- Sin resultados de búsqueda.
- Sin notificaciones.
- Sin datos que mostrar.
- Proporciona una acción siguiente clara.

**Estados de carga**:
- Carga inicial.
- Carga de paginación.
- Actualización (refresh).
- Muestra qué se está cargando ("Cargando tus proyectos...").
- Estimaciones de tiempo para operaciones largas.

**Grandes conjuntos de datos**:
- Paginación o desplazamiento virtual (virtual scrolling).
- Capacidades de búsqueda/filtrado.
- Optimización del rendimiento.
- No cargues los 10,000 elementos a la vez.

**Operaciones concurrentes**:
- Evita el doble envío (desactiva el botón mientras se realiza la carga).
- Controla las condiciones de carrera (race conditions).
- Actualizaciones optimistas con opción de revertir (rollback).
- Resolución de conflictos.

**Estados de permisos**:
- Sin permisos para ver.
- Sin permisos para editar.
- Modo de solo lectura.
- Explicación clara del motivo.

**Compatibilidad de navegadores**:
- Polyfills para características modernas.
- Alternativas para CSS no soportado.
- Detección de características (no detección de navegador).
- Prueba en los navegadores objetivo.

### Inducción (Onboarding) y Primera Experiencia

Las funciones preparadas para producción funcionan para los usuarios novatos, no solo para los usuarios expertos. Diseña los flujos que guían a los nuevos usuarios a encontrar valor en el producto:

**Estados vacíos**: Cada pantalla sin datos necesita:
- Qué aparecerá aquí (descripción o ilustración).
- Por qué le importa al usuario.
- Un CTA claro para crear el primer elemento o comenzar desde una plantilla.
- Interés visual (no solo un espacio en blanco con la frase "Aún no hay elementos").

Tipos de estados vacíos a gestionar:
- **Primer uso**: enfatizar el valor, proporcionar plantillas.
- **Limpiado por el usuario**: toque ligero, fácil de recrear.
- **Sin resultados**: sugerir una búsqueda diferente, ofrecer limpiar los filtros.
- **Sin permisos**: explicar el motivo y cómo obtener acceso.

**Primera experiencia**: Lleva a los usuarios a su momento de revelación ("aha moment") lo más rápido posible.
- Muestra, no cuentes: prefiere ejemplos prácticos sobre descripciones largas.
- Divulgación progresiva: enseña una cosa a la vez, no todo al principio.
- Haz que la inducción sea opcional: permite omitirla a los usuarios experimentados.
- Proporciona valores predeterminados inteligentes para que la configuración obligatoria sea mínima.

**Descubrimiento de funcionalidades**: Enseña las funciones cuando los usuarios las necesiten, no antes.
- Tooltips contextuales en el punto de uso (breves, descartables, de una sola vez).
- Insignias o indicadores en funciones nuevas o que no se han utilizado.
- Celebra los eventos de activación de forma sutil (un mensaje emergente/toast, no un modal).

**NUNCA**:
- Obligues a pasar por un onboarding largo antes de poder tocar el producto.
- Muestres el mismo tooltip repetidamente (registra y respeta cuando un usuario los descarte).
- Bloquees toda la interfaz durante una guía interactiva.
- Crees tutoriales aislados desconectados del producto real.
- Diseñes estados vacíos que solo digan "Sin elementos" sin ofrecer una acción siguiente.

### Validación y Desinfección de Entradas

**Validación del lado del cliente**:
- Campos obligatorios.
- Validación de formato (correo, teléfono, URL).
- Límites de longitud.
- Coincidencia de patrones (regex).
- Reglas de validación personalizadas.

**Validación del lado del servidor** (siempre):
- Nunca confíes únicamente en el lado del cliente.
- Valida y desinfecta todas las entradas.
- Protege contra ataques de inyección (SQL, XSS, etc.).
- Límite de peticiones (rate limiting).

**Manejo de restricciones**:
```html
<!-- Establece restricciones claras -->
<input 
  type="text"
  maxlength="100"
  pattern="[A-Za-z0-9]+"
  required
  aria-describedby="username-hint"
/>
<small id="username-hint">
  Solo letras y números, hasta 100 caracteres
</small>
```

### Resiliencia en Accesibilidad

**Navegación por teclado**:
- Toda la funcionalidad debe ser accesible mediante el teclado.
- Orden de tabulación lógico.
- Gestión del enfoque en ventanas modales.
- Enlaces de salto (skip links) para contenido largo.

**Soporte de lectores de pantalla**:
- Etiquetas ARIA adecuadas.
- Anuncia los cambios dinámicos (regiones activas / live regions).
- Texto alternativo descriptivo.
- HTML semántico.

**Sensibilidad al movimiento**:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Modo de alto contraste**:
- Prueba en el modo de alto contraste de Windows.
- No dependas únicamente del color.
- Proporciona pistas visuales alternativas.

### Resiliencia en Rendimiento

**Conexiones lentas**:
- Carga progresiva de imágenes.
- Pantallas de esqueleto (skeleton screens).
- Actualizaciones optimistas de la interfaz.
- Soporte sin conexión (service workers).

**Fugas de memoria**:
- Limpia los escuchadores de eventos (event listeners).
- Cancela suscripciones.
- Limpia temporizadores/intervalos.
- Cancela peticiones pendientes al desmontar el componente.

**Limitación y Regulación (Throttling & Debouncing)**:
```javascript
// Limitar la búsqueda al escribir
const debouncedSearch = debounce(handleSearch, 300);

// Limitar la ejecución al desplazarse
const throttledScroll = throttle(handleScroll, 100);
```

## Estrategias de Prueba

**Prueba manual**:
- Prueba con datos extremos (muy largos, muy cortos, vacíos).
- Prueba en diferentes idiomas.
- Prueba sin conexión.
- Prueba con conexión lenta (limita la velocidad a 3G).
- Prueba con un lector de pantalla.
- Prueba la navegación solo con teclado.
- Prueba en navegadores antiguos.

**Prueba automatizada**:
- Pruebas unitarias para casos extremos.
- Pruebas de integración para escenarios de error.
- Pruebas E2E para rutas críticas.
- Pruebas de regresión visual.
- Pruebas de accesibilidad (axe, WAVE).

**IMPORTANTE**: Robustecer consiste en esperar lo inesperado. Los usuarios reales harán cosas que nunca imaginaste.

**NUNCA**:
- Asumas que la entrada de datos será perfecta (valida todo).
- Ignores la internacionalización (diseña para un público global).
- Dejes los mensajes de error genéricos ("Se produjo un error").
- Olvides los escenarios sin conexión.
- Confíes únicamente en la validación del lado del cliente.
- Uses anchos fijos para el texto.
- Asumas que la longitud del texto siempre será similar a la del inglés.
- Bloquees toda la interfaz cuando un solo componente falle.

## Verificar Robustecimiento

Prueba minuciosamente los casos extremos:

- **Texto largo**: Prueba nombres con más de 100 caracteres.
- **Emojis**: Usa emojis en todos los campos de texto.
- **RTL**: Prueba con árabe o hebreo.
- **CJK**: Prueba con chino, japonés o coreano.
- **Problemas de red**: Desactiva internet, limita la velocidad de conexión.
- **Grandes conjuntos de datos**: Prueba con más de 1000 elementos.
- **Acciones concurrentes**: Haz clic en enviar 10 veces seguidas rápidamente.
- **Errores**: Fuerza errores de la API, prueba todos los estados de error.
- **Vacío**: Elimina todos los datos, prueba los estados vacíos.

Recuerda: Estás preparando el código para la realidad de producción, no para la perfección de una demostración. Espera que los usuarios introduzcan datos extraños, pierdan la conexión a mitad del proceso y utilicen tu producto de formas inesperadas. Construye resiliencia en cada componente.