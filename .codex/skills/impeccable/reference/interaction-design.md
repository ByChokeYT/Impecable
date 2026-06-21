# Diseño de Interacción (Interaction Design)

## Los Ocho Estados Interactivos

Cada elemento interactivo necesita el diseño de estos estados:

| Estado | Cuándo ocurre | Tratamiento Visual |
|--------|---------------|-------------------|
| **Predeterminado (Default)** | En reposo | Estilo base |
| **Hover** | Cursor encima (no táctil) | Elevación sutil, cambio de color |
| **Enfoque (Focus)** | Enfoque por teclado o código | Anillo visible (ver abajo) |
| **Activo (Active)** | Al ser pulsado/clicado | Efecto presionado, color más oscuro |
| **Desactivado (Disabled)** | No es interactivo | Opacidad reducida, cursor por defecto |
| **Cargando (Loading)** | Procesando acción | Spinner de carga, esqueleto (skeleton) |
| **Error** | Estado no válido | Borde rojo, icono, mensaje de error |
| **Éxito (Success)** | Acción completada | Check verde, confirmación |

**La omisión común**: Diseñar el estado hover sin diseñar el focus, o viceversa. Son estados distintos. Los usuarios de teclado nunca ven el estado hover.

## Anillos de Enfoque: Hazlos Bien

**Nunca apliques `outline: none` sin proporcionar un reemplazo.** Es una infracción de accesibilidad. En su lugar, usa `:focus-visible` para mostrar el anillo de enfoque únicamente a los usuarios de teclado:

```css
/* Ocultar el anillo de enfoque para ratón o pantallas táctiles */
button:focus {
  outline: none;
}

/* Mostrar el anillo de enfoque para teclado */
button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

**Diseño del anillo de enfoque**:
- Alto contraste (mínimo 3:1 respecto a los colores adyacentes).
- Grosor de 2-3px.
- Desfase (offset) desde el elemento (fuera de él, no adentro).
- Consistente en todos los elementos interactivos.

## Diseño de Formularios: Lo No Obvio

**Los marcadores de posición (placeholders) no son etiquetas** — desaparecen en cuanto se empieza a escribir. Usa siempre elementos `<label>` visibles. **Valida al perder el foco (on blur)**, no en cada pulsación de tecla (excepción: la fortaleza de una contraseña). Coloca los mensajes de error **debajo** de los campos de entrada y conéctalos utilizando `aria-describedby`.

## Estados de Carga

**Actualizaciones optimistas**: Muestra el éxito de la acción de inmediato y vuelve atrás si falla. Úsalas para acciones de bajo riesgo (me gusta, seguir), nunca para pagos o acciones destructivas. **Pantallas con esqueleto (skeleton screens) > spinners de carga**: las primeras ofrecen una vista previa de la forma del contenido y se perciben más rápidas que los spinners de carga genéricos.

## Modales: El Enfoque Inerte

Para atrapar el enfoque (focus trap) dentro de los modales solía requerirse un código complejo de JavaScript. Ahora puedes usar el atributo `inert`:

```html
<!-- Cuando el modal está abierto -->
<main inert>
  <!-- El contenido detrás del modal no puede recibir enfoque ni clics -->
</main>
<dialog open>
  <h2>Título del modal</h2>
  <!-- El enfoque permanece dentro del modal -->
</dialog>
```

O bien utiliza el elemento nativo `<dialog>`:

```javascript
const dialog = document.querySelector('dialog');
dialog.showModal();  // Abre el modal con focus trap e implementa el cierre con Escape
```

## La API de Popover

Para bocadillos de información (tooltips), menús desplegables y superposiciones no modales, usa los popovers nativos:

```html
<button popovertarget="menu">Abrir menú</button>
<div id="menu" popover>
  <button>Opción 1</button>
  <button>Opción 2</button>
</div>
```

**Beneficios**: Cierre ligero (hacer clic fuera lo cierra), apilamiento correcto sin batallas de `z-index`, y accesible de forma predeterminada.

## Posicionamiento de Menús Desplegables y Superposiciones

Los menús desplegables renderizados con `position: absolute` dentro de un contenedor que tenga `overflow: hidden` u `overflow: auto` se verán recortados. Este es el fallo de posicionamiento de menús desplegables más común en el código generado por IA.

### Posicionamiento por Anclaje en CSS (CSS Anchor Positioning)

La solución moderna utiliza la API de CSS Anchor Positioning para anclar una superposición a su activador (trigger) sin recurrir a JavaScript:

```css
.trigger {
  anchor-name: --menu-trigger;
}

.dropdown {
  position: fixed;
  position-anchor: --menu-trigger;
  position-area: block-end span-inline-end;
  margin-top: 4px;
}

/* Cambiar arriba si no hay espacio abajo */
@position-try --flip-above {
  position-area: block-start span-inline-end;
  margin-bottom: 4px;
}
```

Debido a que el menú desplegable utiliza `position: fixed`, escapa a cualquier recorte por `overflow` en los elementos ancestros. El bloque `@position-try` gestiona de forma automática los límites de la pantalla. **Soporte de navegadores**: Chrome 125+, Edge 125+. Sin soporte aún en Firefox o Safari; usa una alternativa para ellos.

### Combo Popover + Ancla

Combinar la API de Popover con el posicionamiento por anclaje te ofrece apilamiento, cierre ligero, accesibilidad y posicionamiento correcto en un único patrón:

```html
<button popovertarget="menu" class="trigger">Abrir</button>
<div id="menu" popover class="dropdown">
  <button>Opción 1</button>
  <button>Opción 2</button>
</div>
```

El atributo `popover` coloca al elemento en la **capa superior** (top layer), la cual se sitúa por encima de cualquier otro contenido independientemente del `z-index` o el `overflow`. No requiere crear un portal.

### Patrón Portal / Teleport

En frameworks de componentes, renderiza el menú desplegable en la raíz del documento y posiciónalo usando JavaScript:

- **React**: `createPortal(dropdown, document.body)`
- **Vue**: `<Teleport to="body">`
- **Svelte**: Utiliza una librería de portales o móntalo en `document.body`

Calcula la posición utilizando el método `getBoundingClientRect()` del activador (trigger), y luego aplica `position: fixed` con las coordenadas `top` y `left`. Vuelve a calcular al hacer scroll y al redimensionar la ventana.

### Alternativa con Posicionamiento Fijo (Fixed Positioning Fallback)

Para navegadores sin soporte para el posicionamiento por anclaje, el uso de `position: fixed` con coordenadas calculadas de forma manual evita el recorte por overflow:

```css
.dropdown {
  position: fixed;
  /* top/left definidos mediante JS a partir del getBoundingClientRect() del activador */
}
```

Verifica los límites de la pantalla antes de renderizar. Si el menú desplegable supera el borde inferior, colócalo por encima del activador (trigger). Si supera el borde derecho, alinéalo con el lado derecho del activador.

### Antipatrones

- **`position: absolute` dentro de `overflow: hidden`**: El menú desplegable se recortará. Usa `position: fixed` o la capa superior en su lugar.
- **Valores arbitrarios de z-index** del tipo `z-index: 9999`: Usa una escala semántica para z-index: `dropdown (100) -> sticky (200) -> modal-backdrop (300) -> modal (400) -> toast (500) -> tooltip (600)`.
- **Renderizar el marcado del menú desplegable directamente en línea** sin una vía de escape del contexto de apilamiento del elemento padre. Utiliza `popover` (capa superior), un portal, o `position: fixed`.

## Acciones Destructivas: Deshacer (Undo) > Confirmar

**Ofrecer deshacer es mejor que usar ventanas de diálogo de confirmación** — los usuarios hacen clic en las confirmaciones sin pensarlo dos veces. Elimina el elemento de la UI de inmediato, muestra un aviso (toast) con la opción de deshacer y realiza la eliminación real una vez que el aviso expire. Usa la confirmación únicamente para acciones verdaderamente irreversibles (eliminar la cuenta), acciones de muy alto coste o procesos por lotes.

## Patrones de Navegación por Teclado

### Índice de Tabulación Móvil (Roving Tabindex)

Para grupos de componentes (pestañas, elementos de menú, grupos de botones de opción), solo un elemento puede recibir foco mediante tabulación; las teclas de dirección (flechas) permiten moverse entre ellos:

```html
<div role="tablist">
  <button role="tab" tabindex="0">Pestaña 1</button>
  <button role="tab" tabindex="-1">Pestaña 2</button>
  <button role="tab" tabindex="-1">Pestaña 3</button>
</div>
```

Las teclas de dirección mueven el atributo `tabindex="0"` de un elemento a otro. Al pulsar Tab, el foco salta directamente al siguiente componente de la página.

### Enlaces de Salto (Skip Links)

Proporciona enlaces de salto (`<a href="#main-content">Saltar al contenido principal</a>`) para permitir a los usuarios de teclado saltarse los menús de navegación. Manténlos ocultos fuera de la pantalla y muéstralos únicamente al recibir el enfoque (focus).

## Descubrimiento de Gestos

Acciones como deslizar para eliminar y gestos similares son invisibles. Ofrece pistas de su existencia:

- **Revelación parcial**: Deja que el botón de eliminar asome ligeramente en el borde.
- **Instrucción de inicio (Onboarding)**: Muestra indicaciones de ayuda al usarse por primera vez.
- **Alternativa**: Proporciona siempre una alternativa visual visible (un menú con la opción "Eliminar").

No confíes en los gestos como la única vía para realizar acciones.

---

**Evita**: Eliminar los indicadores de enfoque sin proporcionar alternativas. Usar texto de marcador de posición (placeholder) como etiquetas. Áreas táctiles de tamaño menor a 44x44px. Mensajes de error genéricos. Controles personalizados que no tengan soporte de teclado/ARIA.
