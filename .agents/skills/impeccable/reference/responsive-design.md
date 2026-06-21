# Diseño Responsivo (Responsive Design)

## Mobile-First: Escríbelo Correctamente

Comienza con los estilos base para dispositivos móviles y usa consultas `min-width` para añadir capas de complejidad. Diseñar primero para escritorio (usando `max-width`) provoca que los dispositivos móviles carguen estilos innecesarios en primer lugar.

## Breakpoints: Guiados por el Contenido

No intentes adaptarte a tamaños de dispositivos específicos — deja que el contenido te indique dónde realizar el salto. Empieza con un diseño estrecho, ensánchalo hasta que el diseño se rompa, y añade un breakpoint en ese punto. Tres breakpoints suelen ser suficientes (640, 768, 1024px). Usa `clamp()` para lograr valores fluidos sin breakpoints.

## Detectar el Método de Entrada, no solo el Tamaño de Pantalla

**El tamaño de la pantalla no te indica el método de entrada.** Un ordenador portátil con pantalla táctil, una tableta con teclado — usa consultas de puntero y de hover:

```css
/* Puntero fino (ratón, trackpad) */
@media (pointer: fine) {
  .button { padding: 8px 16px; }
}

/* Puntero grueso (pantalla táctil, lápiz óptico) */
@media (pointer: coarse) {
  .button { padding: 12px 20px; }  /* Área táctil más grande */
}

/* El dispositivo soporta hover */
@media (hover: hover) {
  .card:hover { transform: translateY(-2px); }
}

/* El dispositivo no soporta hover (táctil) */
@media (hover: none) {
  .card { /* Sin estado hover; usa active en su lugar */ }
}
```

**Crítico**: No confíes en el estado hover para proporcionar funcionalidad interactiva. Los usuarios táctiles no pueden realizar hover.

## Áreas Seguras: Gestionar la Muesca (Notch)

Los teléfonos modernos tienen muescas (notches), esquinas redondeadas e indicadores de inicio. Usa la función `env()`:

```css
body {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

/* Con valor de seguridad (fallback) */
.footer {
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
}
```

**Habilita `viewport-fit`** en tu etiqueta meta:
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

## Imágenes Responsivas: Hazlo Bien

### srcset con Descriptores de Ancho

```html
<img
  src="hero-800.jpg"
  srcset="
    hero-400.jpg 400w,
    hero-800.jpg 800w,
    hero-1200.jpg 1200w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Imagen principal (Hero)"
>
```

**Cómo funciona**:
- `srcset` enumera las imágenes disponibles junto con sus anchos reales (descriptores `w`).
- `sizes` indica al navegador el ancho al que se mostrará la imagen.
- El navegador selecciona el mejor archivo basándose en el ancho del viewport Y en la densidad de píxeles del dispositivo.

### Elemento Picture para Dirección de Arte

Cuando necesites diferentes encuadres o composiciones de una imagen (no solo cambiar la resolución):

```html
<picture>
  <source media="(min-width: 768px)" srcset="wide.jpg">
  <source media="(max-width: 767px)" srcset="tall.jpg">
  <img src="fallback.jpg" alt="...">
</picture>
```

## Patrones de Adaptación del Diseño (Layout)

**Navegación**: Tres etapas — menú hamburguesa + panel lateral en móvil, menú horizontal compacto en tablet, y menú completo con etiquetas en escritorio. **Tablas**: Transfórmalas en tarjetas en móvil usando `display: block` y atributos `data-label`. **Divulgación progresiva**: Usa `<details>/<summary>` para contenido que se pueda contraer en móvil.

## Pruebas: No Confíes Únicamente en las DevTools

La emulación de dispositivos de las DevTools es de utilidad para el diseño, pero no detecta:

- Interacciones táctiles reales.
- Restricciones reales de CPU/memoria.
- Patrones de latencia de red.
- Diferencias en el renderizado de fuentes.
- La aparición del teclado en pantalla o la barra del navegador.

**Realiza pruebas al menos en**: Un iPhone real, un Android real y una tableta si aplica. Los teléfonos Android de gama baja revelan problemas de rendimiento que nunca verás en los simuladores de desarrollo.

---

**Evita**: Diseñar primero para escritorio. Detectar el dispositivo en lugar de detectar las características disponibles. Mantener bases de código separadas para móvil y escritorio. Ignorar las tabletas y la orientación horizontal (landscape). Asumir que todos los dispositivos móviles son potentes.
