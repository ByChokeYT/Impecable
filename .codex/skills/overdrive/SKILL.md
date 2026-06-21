---
name: overdrive
description: Lleva las interfaces más allá de los límites convencionales con implementaciones técnicamente ambiciosas: shaders, física de resorte, revelaciones controladas por desplazamiento, animaciones a 60fps. Úsalo cuando el usuario quiera deslumbrar, impresionar, ir a por todas o crear algo que se sienta extraordinario.
version: 2.1.1
argument-hint: "[objetivo]"
---

Comienza tu respuesta con:

```
──────────── ⚡ OVERDRIVE ─────────────
》》》 Entrando en modo overdrive...
```

Lleva una interfaz más allá de los límites convencionales. No se trata solo de efectos visuales: se trata de utilizar toda la potencia del navegador para hacer que cualquier parte de una interfaz se sienta extraordinaria: una tabla que maneja un millón de filas, un diálogo que se transforma a partir del elemento que lo activa, un formulario que se valida en tiempo real con comentarios en streaming, o una transición de página que se siente cinematográfica.

## PREPARACIÓN OBLIGATORIA

Invoca $impeccable — contiene los principios de diseño, antipatrones y el **Protocolo de Recopilación de Contexto**. Sigue el protocolo antes de proceder — si aún no existe un contexto de diseño, DEBES ejecutar $impeccable teach primero.

**EXTRA IMPORTANTE PARA ESTA HABILIDAD**: El contexto determina qué significa "extraordinario". Un sistema de partículas en un portafolio creativo es impresionante. El mismo sistema de partículas en una página de configuración es vergonzoso. Pero, ¿una página de configuración con guardados optimistas instantáneos y transiciones de estado animadas? Eso también es extraordinario. Comprende la personalidad y los objetivos del proyecto antes de decidir qué es lo adecuado.

### Proponer Antes de Construir

Esta habilidad tiene el mayor potencial de fallar en la dirección elegida. NO saltes directamente a la implementación. DEBES:

1. **Pensar en 2 o 3 direcciones diferentes**: considera diferentes técnicas, niveles de ambición y enfoques estéticos. Para cada dirección, describe brevemente cómo se vería y se sentiría el resultado.
2. **ask the user directly to clarify what you cannot infer.** para presentar estas direcciones y obtener la elección del usuario antes de escribir cualquier código. Explica los pros y contras (soporte del navegador, coste de rendimiento, complejidad).
3. Solo procede con la dirección que el usuario confirme.

Omitir este paso conlleva el riesgo de construir algo inadecuado que luego deba ser desechado.

### Iterar con la Automatización del Navegador

Los efectos técnicamente ambiciosos casi nunca funcionan al primer intento. DEBES utilizar activamente las herramientas de automatización del navegador para previsualizar tu trabajo, verificar visualmente el resultado e iterar. No asumas que el efecto se ve bien; compruébalo. Espera varias rondas de refinamiento. La distancia entre "funciona técnicamente" y "se ve extraordinario" se reduce mediante la iteración visual, no solo con el código.

---

## Evaluar qué Significa "Extraordinario" Aquí

El tipo correcto de ambición técnica depende completamente del tipo de proyecto en el que estés trabajando. Antes de elegir una técnica, pregúntate: **¿qué haría que un usuario de ESTA interfaz específica dijera "vaya, qué bien hecho"?**

### Para superficies visuales o de marketing
Páginas principales (hero), secciones de destino, landing pages, portafolios: el impacto suele ser sensorial: una revelación controlada por el desplazamiento, un fondo con shaders, una transición de página cinematográfica, o arte generativo que responde al cursor.

### Para interfaces funcionales
Tablas, formularios, diálogos, navegación: el impacto está en cómo se SIENTE: un diálogo que se transforma desde el botón que lo activó a través de la API de Transiciones de Vista (View Transitions), una tabla de datos que renderiza 100k filas a 60fps mediante desplazamiento virtual, un formulario con validación en streaming que se siente instantáneo, o arrastrar y soltar con física de resorte.

### Para interfaces críticas en rendimiento
El impacto es invisible pero se percibe: una búsqueda que filtra 50k elementos sin un solo parpadeo, un formulario complejo que nunca bloquea el hilo principal, o un editor de imágenes que procesa casi en tiempo real. La interfaz simplemente nunca vacila.

### Para interfaces densas en datos
Gráficos y paneles de control (dashboards): el impacto está en la fluidez: renderizado acelerado por GPU a través de Canvas/WebGL para conjuntos de datos masivos, transiciones animadas entre estados de datos, o diseños de grafos dirigidos por fuerzas que se asientan de manera natural.

**El hilo conductor**: algún aspecto de la implementación va más allá de lo que los usuarios esperan de una interfaz web. La técnica sirve a la experiencia, no al revés.

## El Kit de Herramientas

Organizado por lo que intentas lograr, no por el nombre de la tecnología.

### Lograr que las transiciones se sientan cinematográficas
- **API de Transiciones de Vista (View Transitions)** (mismo documento: todos los navegadores; entre documentos: sin soporte en Firefox): transformación de elementos compartidos entre estados. Un elemento de lista que se expande para convertirse en una página de detalle. Un botón que se transforma en un modal. Esto es lo más cercano a las animaciones nativas tipo FLIP.
- **`@starting-style`** (todos los navegadores): anima elementos desde `display: none` a visible usando solo CSS, incluyendo fotogramas clave de entrada.
- **Física de resorte**: movimiento natural con masa, tensión y amortiguación en lugar de curvas cubic-bezier. Bibliotecas: motion (antes Framer Motion), GSAP, o escribe tu propio resolvedor de resorte.

### Vincular la animación a la posición del scroll
- **Animaciones controladas por desplazamiento** (`animation-timeline: scroll()`): solo CSS, sin JavaScript. Paralaje, barras de progreso y secuencias de revelación controladas por la posición del desplazamiento. (Chrome/Edge/Safari; Firefox: solo con flag habilitada. Proporciona siempre una alternativa estática).

### Renderizar más allá de CSS
- **WebGL** (todos los navegadores): efectos de shaders, posprocesamiento, sistemas de partículas. Bibliotecas: Three.js, OGL (ligera), regl. Úsalo para efectos que el CSS no puede expresar.
- **WebGPU** (Chrome/Edge; Safari parcial; Firefox: solo con flag): computación GPU de última generación. Más potente que WebGL pero con soporte limitado en navegadores. Utiliza WebGL2 como alternativa (fallback).
- **Canvas 2D / OffscreenCanvas**: renderizado personalizado, manipulación de píxeles o traslado de renderizados pesados fuera del hilo principal mediante Web Workers + OffscreenCanvas.
- **Cadenas de filtros SVG**: mapas de desplazamiento, turbulencia y morfología para efectos de distorsión orgánica. Animables mediante CSS.

### Hacer que los datos se sientan vivos
- **Desplazamiento virtual**: renderiza solo las filas visibles para tablas o listas con decenas de miles de elementos. No requiere bibliotecas para casos simples; usa TanStack Virtual para casos complejos.
- **Gráficos acelerados por GPU**: visualización de datos renderizada en Canvas o WebGL para conjuntos de datos demasiado grandes para SVG/DOM. Bibliotecas: deck.gl, renderizadores personalizados basados en regl.
- **Transiciones animadas de datos**: transformación entre estados de gráficos en lugar de reemplazo directo. `transition()` de D3 o Transiciones de Vista para gráficos basados en el DOM.

### Animar propiedades complejas
- **`@property`** (todos los navegadores): registra propiedades CSS personalizadas con tipos específicos, permitiendo la animación de degradados, colores y valores complejos que el CSS normalmente no puede interpolar.
- **API de Animaciones Web (WAAPI)** (todos los navegadores): animaciones controladas por JavaScript con el rendimiento del CSS. Composibles, cancelables y reversibles. La base para coreografías complejas.

### Superar los límites del rendimiento
- **Web Workers**: traslada cálculos pesados fuera del hilo principal. Procesamiento de datos masivos, manipulación de imágenes, indexación de búsquedas; cualquier tarea que pueda causar tirones.
- **OffscreenCanvas**: renderizado en un hilo Worker. El hilo principal permanece libre mientras los gráficos complejos se renderizan en segundo plano.
- **WASM**: rendimiento cercano al nativo para funciones con alta carga de cálculo. Procesamiento de imágenes, simulaciones físicas, códecs.

### Interactuar con el dispositivo
- **API de Audio Web**: audio espacial, visualizaciones que reaccionan al audio y retroalimentación sonora. Requiere un gesto del usuario para iniciarse.
- **APIs de Dispositivo**: orientación, luz ambiental, geolocalización. Úsalas con moderación y siempre bajo el permiso del usuario.

**NOTA**: Esta habilidad trata de mejorar cómo se SIENTE una interfaz, no de cambiar lo que el producto HACE. Añadir colaboración en tiempo real, soporte sin conexión o nuevas capacidades en el backend son decisiones de producto, no mejoras de la interfaz. Enfoquémonos en hacer que las funciones existentes se sientan extraordinarias.

## Implementar con Disciplina

### La mejora progresiva no es negociable

Cada técnica debe degradarse con gracia. La experiencia sin la mejora técnica debe seguir siendo buena.

```css
@supports (animation-timeline: scroll()) {
  .hero { animation-timeline: scroll(); }
}
```

```javascript
if ('gpu' in navigator) { /* WebGPU */ }
else if (canvas.getContext('webgl2')) { /* Alternativa WebGL2 */ }
/* La alternativa solo con CSS debe seguir viéndose bien */
```

### Reglas de rendimiento

- Apunta a 60fps. Si baja de 50fps, simplifica.
- Respeta la preferencia `prefers-reduced-motion` (siempre). Proporciona una alternativa estática hermosa.
- Inicializa los recursos pesados de manera perezosa (contextos WebGL, módulos WASM) solo cuando estén cerca del viewport.
- Pausa el renderizado que quede fuera de la pantalla. Detén lo que no se pueda ver.
- Realiza pruebas en dispositivos reales de gama media, no solo en tu máquina de desarrollo.

### El detalle marca la diferencia

La brecha entre lo "llamativo" y lo "extraordinario" está en el último 20% del refinamiento: la curva de suavizado en una animación de resorte, el desfase de tiempo en una revelación escalonada (staggered), o el movimiento secundario sutil que hace que una transición se sienta física. No entregues la primera versión que funcione; entrega la versión que se sienta inevitable.

**NUNCA**:
- Ignores `prefers-reduced-motion`; esto es un requisito de accesibilidad, no una sugerencia.
- Entregues efectos que provoquen tirones en dispositivos de gama media.
- Uses APIs experimentales sin una alternativa funcional.
- Añadas sonido sin la aprobación explícita del usuario.
- Uses la ambición técnica para enmascarcar fundamentos de diseño débiles; corrige esos primeros con las habilidades adecuadas.
- Superpongas múltiples momentos extraordinarios que compitan entre sí; el enfoque crea impacto, el exceso genera ruido.

## Verificar el Resultado

- **La prueba del impacto (wow test)**: Muéstraselo a alguien que no lo haya visto. ¿Reacciona?
- **La prueba de eliminación**: Quítalo. ¿La experiencia se siente empobrecida, o nadie nota la diferencia?
- **La prueba de dispositivos**: Pruébalo en un teléfono móvil, una tablet, un Chromebook. ¿Sigue yendo fluido?
- **La prueba de accesibilidad**: Activa la reducción de movimiento. ¿Sigue siendo hermoso?
- **La prueba del contexto**: ¿Tiene sentido para ESTA marca y esta audiencia?

Recuerda: "Técnicamente extraordinario" no se trata de usar la API más reciente. Se trata de hacer que una interfaz logre cosas que los usuarios no creían que un sitio web pudiera hacer.