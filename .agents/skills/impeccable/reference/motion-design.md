# Diseño de Movimiento (Motion Design)

## Duración: La Regla 100/300/500

El ritmo (timing) importa más que la curva de suavizado (easing). Estas duraciones se sienten correctas para la mayoría de las interfaces:

| Duración | Caso de Uso | Ejemplos |
|----------|-------------|----------|
| **100-150ms** | Retroalimentación instantánea | Pulsación de botón, toggle, cambio de color |
| **200-300ms** | Cambios de estado | Abrir menú, tooltip, estados hover |
| **300-500ms** | Cambios de diseño (layout) | Acordeón, modal, panel lateral (drawer) |
| **500-800ms** | Animaciones de entrada | Carga de página, revelaciones de sección principal |

**Las animaciones de salida son más rápidas que las de entrada** — usa aproximadamente el 75% de la duración de entrada.

## Suavizado (Easing): Elige la Curva Adecuada

**No utilices `ease`.** Es una solución intermedia que rara vez resulta óptima. En su lugar:

| Curva | Para qué usarla | CSS |
|-------|-----------------|-----|
| **ease-out** | Elementos que entran | `cubic-bezier(0.16, 1, 0.3, 1)` |
| **ease-in** | Elementos que salen | `cubic-bezier(0.7, 0, 0.84, 0)` |
| **ease-in-out** | Alternancia de estados (ir y volver) | `cubic-bezier(0.65, 0, 0.35, 1)` |

**Para microinteracciones, usa curvas exponenciales** — se sienten naturales porque imitan la física real (fricción, desaceleración):

```css
/* Quart out - suave, refinada (recomendada por defecto) */
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);

/* Quint out - ligeramente más dramática */
--ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);

/* Expo out - rápida, decidida */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
```

**Evita las curvas con rebote (bounce) y elásticas.** Estuvieron de moda en 2015, pero ahora se perciben vulgares y poco profesionales. Los objetos reales no rebotan al detenerse — desaceleran suavemente. Los efectos de rebote (overshoot) desvían la atención hacia la propia animación en lugar de enfocarla en el contenido.

## Las Únicas Dos Propiedades que Debes Animar

Usa únicamente **transform** y **opacity** — cualquier otra propiedad provoca un nuevo cálculo del diseño de la página (layout recalculation). Para animaciones de altura (acordeones), usa `grid-template-rows: 0fr → 1fr` en lugar de animar `height` directamente.

## Animaciones Escalonadas (Staggered)

Usa propiedades personalizadas de CSS para lograr un escalonamiento más limpio: `animation-delay: calc(var(--i, 0) * 50ms)` con `style="--i: 0"` en cada elemento. **Limita el tiempo total de escalonamiento** — 10 elementos a 50ms = 500ms en total. Para muchos elementos, reduce el retraso por elemento o limita el número de elementos escalonados.

## Movimiento Reducido

Esto no es opcional. Los trastornos vestibulares afectan aproximadamente al 35% de los adultos mayores de 40 años.

```css
/* Definir animaciones de forma normal */
.card {
  animation: slide-up 500ms ease-out;
}

/* Proporcionar alternativa para movimiento reducido */
@media (prefers-reduced-motion: reduce) {
  .card {
    animation: fade-in 200ms ease-out;  /* Transición de desvanecimiento en lugar de movimiento */
  }
}

/* O desactivar por completo */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Qué conservar**: Las animaciones funcionales como barras de progreso, spinners de carga (ralentizados) e indicadores de enfoque deben seguir funcionando, solo que sin movimiento espacial.

## Rendimiento Percibido

**A nadie le importa lo rápido que sea tu sitio — sino lo rápido que se perciba.** La percepción puede ser tan efectiva como el rendimiento real.

**El umbral de los 80ms**: Nuestro cerebro almacena la información sensorial durante unos 80ms para sincronizar la percepción. Cualquier acción por debajo de 80ms se siente instantánea y simultánea. Este es tu objetivo para las microinteracciones.

**Tiempo activo frente a pasivo**: La espera pasiva (observar un spinner de carga) se siente más larga que el compromiso activo. Estrategias para equilibrar la balanza:

- **Inicio preventivo**: Comienza las transiciones de inmediato mientras se realiza la carga (zoom de aplicaciones iOS, UI de esqueleto). El usuario percibe que el trabajo ya se está realizando.
- **Finalización temprana**: Muestra el contenido de forma progresiva — no esperes a que esté todo listo (almacenamiento de vídeo en búfer, imágenes progresivas, streaming de HTML).
- **UI optimista**: Actualiza la interfaz de inmediato y gestiona los fallos de forma elegante. Los "me gusta" de Instagram funcionan sin conexión — la interfaz se actualiza al instante y se sincroniza después. Úsalo para acciones de bajo riesgo; evítalo en pagos o procesos destructivos.

**El suavizado (easing) afecta a la duración percibida**: El suavizado de entrada (acelerar hacia el final) hace que las tareas se sientan más cortas debido a que el efecto de pico-fin pondera con fuerza los momentos finales. El suavizado de salida se siente satisfactorio para las entradas de elementos, pero el suavizado de entrada hacia el final de una tarea comprime el tiempo percibido.

**Precaución**: Las respuestas demasiado rápidas pueden disminuir el valor percibido. Los usuarios pueden desconfiar de resultados instantáneos en operaciones complejas (búsquedas, análisis). A veces, un breve retraso transmite que se está realizando un "trabajo real".

## Rendimiento

No uses `will-change` de manera preventiva — úsalo únicamente cuando la animación sea inminente (`:hover`, `.animating`). Para animaciones activadas por scroll, usa Intersection Observer en lugar de eventos de scroll; deja de observar tras animar una vez. Crea tokens de movimiento para mantener la consistencia (duraciones, curvas de suavizado y transiciones comunes).

---

**Evita**: Animar todo (la fatiga por animación es real). Usar más de 500ms para la retroalimentación de la interfaz. Ignorar `prefers-reduced-motion`. Usar animaciones para ocultar una carga lenta.
