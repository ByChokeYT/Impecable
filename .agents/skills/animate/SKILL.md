---
name: animate
description: Revisa una funcionalidad y mejórala con animaciones intencionadas, microinteracciones y efectos de movimiento que mejoren la usabilidad y el deleite. Úsalo cuando el usuario mencione agregar animación, transiciones, microinteracciones, diseño de movimiento, efectos hover o hacer que la interfaz se sienta más viva.
version: 2.1.1
user-invocable: true
argument-hint: "[objetivo]"
---

Analiza una funcionalidad y añade estratégicamente animaciones y microinteracciones que mejoren la comprensión, proporcionen retroalimentación (feedback) y generen deleite.

## PREPARACIÓN OBLIGATORIA

Invoca /impeccable — contiene los principios de diseño, antipatrones y el **Protocolo de Recopilación de Contexto**. Sigue el protocolo antes de proceder — si aún no existe un contexto de diseño, DEBES ejecutar /impeccable teach primero. Adicionalmente, recopila: restricciones de rendimiento.

---

## Evaluar Oportunidades de Animación

Analiza dónde el movimiento mejoraría la experiencia:

1. **Identificar áreas estáticas**:
   - **Falta de retroalimentación**: Acciones sin confirmación visual (clics en botones, envíos de formularios, etc.).
   - **Transiciones bruscas**: Cambios de estado instantáneos que se sienten abruptos (mostrar/ocultar, cargas de página, cambios de ruta).
   - **Relaciones poco claras**: Relaciones espaciales o jerárquicas que no resultan obvias.
   - **Falta de deleite**: Interacciones funcionales pero que no generan ninguna emoción positiva.
   - **Falta de orientación**: Oportunidades para dirigir la atención o explicar el comportamiento de la interfaz.

2. **Comprender el contexto**:
   - ¿Cuál es la personalidad? (¿Juguetona vs. seria, enérgica vs. tranquila?)
   - ¿Cuál es el presupuesto de rendimiento? (¿Móvil primero? ¿Página compleja?)
   - ¿Quién es la audiencia? (¿Usuarios sensibles al movimiento? ¿Usuarios expertos que buscan velocidad?)
   - ¿Qué es lo más importante? (¿Una sola animación principal de alto impacto vs. muchas microinteracciones?)

Si alguno de estos puntos no está claro en el código base, ask the user directly to clarify what you cannot infer.

**CRÍTICO**: Respeta `prefers-reduced-motion`. Proporciona siempre alternativas no animadas para los usuarios que las necesiten.

## Planificar la Estrategia de Animación

Crea un plan de animación con un propósito claro:

- **Momento estrella (Hero moment)**: ¿Cuál es la animación distintiva del proyecto? (¿Carga de página? ¿Sección hero? ¿Interacción clave?)
- **Capa de retroalimentación**: ¿Qué interacciones necesitan confirmación visual?
- **Capa de transición**: ¿Qué cambios de estado necesitan suavizarse?
- **Capa de deleite**: ¿Dónde podemos sorprender y deleitar al usuario?

**IMPORTANTE**: Una sola experiencia bien coordinada supera a muchas animaciones dispersas por todas partes. Concéntrate en momentos de alto impacto.

## Implementar Animaciones

Añade movimiento de manera sistemática a través de estas categorías:

### Animaciones de Entrada

- **Coreografía de carga de página**: Escalona la revelación de elementos (retrasos de 100-150ms), combinando opacidad (fade) y deslizamiento (slide).
- **Sección Hero**: Entrada dramática para el contenido principal (escala, paralaje o efectos creativos).
- **Revelaciones de contenido**: Animaciones activadas por el desplazamiento (scroll) utilizando Intersection Observer.
- **Entrada de modales/cajones**: Deslizamiento suave + desvanecimiento, desvanecimiento del fondo (backdrop) y gestión del enfoque del teclado.

### Microinteracciones

- **Retroalimentación en botones**:
  - Hover: Escala sutil (1.02-1.05), cambio de color, aumento de sombra.
  - Clic: Reducción rápida de escala seguida de un retorno (0.95 → 1), efecto de onda (ripple).
  - Carga: Estado de spinner o pulso.
- **Interacciones en formularios**:
  - Enfoque de campos (focus): Transición de color del borde, escala ligera o brillo.
  - Validación: Sacudida (shake) en caso de error, marca de verificación en caso de éxito, transiciones de color suaves.
- **Interruptores (Toggles)**: Deslizamiento suave + transición de color (200-300ms).
- **Casillas de verificación/botones de radio**: Animación de la marca de verificación, efecto de onda.
- **Me gusta/favorito**: Escala + rotación, efectos de partículas, transición de color.

### Transiciones de Estado

- **Mostrar/ocultar**: Opacidad + deslizamiento (nunca instantáneo), tiempos adecuados (200-300ms).
- **Expandir/colapsar**: Transición de altura con manejo de desbordamiento (overflow), rotación de iconos.
- **Estados de carga**: Desvanecimientos en pantallas de esqueleto (skeleton screens), animaciones de spinner, barras de progreso.
- **Éxito/error**: Transiciones de color, animaciones de iconos, pulsos suaves de escala.
- **Activar/desactivar**: Transiciones de opacidad, cambios en el cursor.

### Navegación y Flujo

- **Transiciones de página**: Desvanecimiento cruzado entre rutas, transiciones de elementos compartidos.
- **Cambio de pestañas**: Indicador deslizante, desvanecimiento/deslizamiento del contenido.
- **Carrusel/deslizador**: Transformaciones suaves, puntos de ajuste (snap points), inercia de movimiento.
- **Efectos de scroll**: Capas de paralaje, cabeceras fijas con cambios de estado, indicadores de progreso de lectura.

### Retroalimentación y Orientación

- **Pistas en hover**: Desvanecimiento de tooltips, cambios en el cursor, resaltado de elementos.
- **Arrastrar y soltar**: Efecto de elevación (sombra + escala), resaltado de zonas de caída, reposicionamiento suave.
- **Copiar/pegar**: Destello breve de resaltado al pegar, confirmación de "copiado".
- **Flujo de enfoque**: Ruta resaltada a través de un formulario o flujo de trabajo.

### Momentos de Deleite

- **Estados vacíos**: Animaciones flotantes sutiles en las ilustraciones.
- **Acciones completadas**: Confeti, florituras en la marca de verificación, celebraciones de éxito.
- **Easter eggs (secretos)**: Interacciones ocultas para que el usuario las descubra.
- **Animaciones contextuales**: Efectos climáticos, temas según la hora del día, toques estacionales.

## Implementación Técnica

Usa las técnicas adecuadas para cada animación:

### Tiempos y Aceleración (Easing)

**Duraciones según el propósito:**
- **100-150ms**: Retroalimentación instantánea (pulsación de botón, interruptor).
- **200-300ms**: Cambios de estado (hover, apertura de menú).
- **300-500ms**: Cambios de diseño/layout (acordeón, modal).
- **500-800ms**: Animaciones de entrada (carga de página).

**Curvas de aceleración (usa estas, evita los valores por defecto de CSS):**
```css
/* Recomendado - desaceleración natural */
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);    /* Suave, refinado */
--ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);   /* Un poco más dinámico */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);     /* Seguro, decisivo */

/* EVITAR - se sienten anticuadas y de mal gusto */
/* bounce: cubic-bezier(0.34, 1.56, 0.64, 1); */
/* elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6); */
```

**Las animaciones de salida son más rápidas que las de entrada.** Usa aproximadamente el 75% de la duración de entrada.

### Animaciones CSS
```css
/* Preferible para animaciones simples y declarativas */
- Transiciones para cambios de estado
- @keyframes para secuencias complejas
- Solo transform + opacity (aceleradas por GPU)
```

### Animación con JavaScript
```javascript
/* Úsala para animaciones complejas e interactivas */
- Web Animations API para control programático
- Framer Motion para React
- GSAP para secuencias complejas
```

### Rendimiento

- **Aceleración por GPU**: Usa `transform` y `opacity`, evita animar propiedades de diseño que provoquen reflow.
- **will-change**: Añádelo con moderación solo para animaciones costosas conocidas.
- **Reducir repintado**: Minimiza los repintados del navegador, usa `contain` donde sea apropiado.
- **Monitorear FPS**: Asegura 60fps constantes en los dispositivos objetivo.

### Accesibilidad
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**NUNCA**:
- Uses curvas de aceleración bounce (rebote) o elastic (elástica); se sienten anticuadas y distraen del contenido.
- Animes propiedades de diseño (width, height, top, left); usa transform en su lugar.
- Uses duraciones superiores a 500ms para la retroalimentación; hace que la UI se sienta lenta.
- Animes sin un propósito claro; cada movimiento debe tener una razón.
- Ignores `prefers-reduced-motion`; esto es una violación de accesibilidad.
- Animes todo; la fatiga de animación hace que la interfaz sea agotadora.
- Bloquees la interacción del usuario durante las animaciones a menos que sea estrictamente necesario.

## Verificar Calidad

Prueba minuciosamente las animaciones:

- **Suave a 60fps**: Sin tirones (jank) en los dispositivos objetivo.
- **Se siente natural**: Las curvas de aceleración se sienten orgánicas, no robóticas.
- **Tiempos adecuados**: Ni demasiado rápidas (bruscas) ni demasiado lentas (pesadas).
- **Soporte de reducción de movimiento**: Las animaciones se desactivan o simplifican correctamente.
- **Sin bloqueos**: Los usuarios pueden interactuar durante o después de las animaciones.
- **Aporta valor**: Hace que la interfaz sea más clara o más agradable.

Recuerda: El movimiento debe mejorar la comprensión y dar retroalimentación, no ser solo un adorno. Anima con propósito, respeta el rendimiento y ten siempre presente la accesibilidad. La gran animación es casi invisible: simplemente hace que todo se sienta correcto.