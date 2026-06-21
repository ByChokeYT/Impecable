# Diseño Espacial (Spatial Design)

## Sistemas de Espaciado

### Usa una Base de 4pt en lugar de 8pt

Los sistemas basados en 8pt son demasiado gruesos — con frecuencia necesitarás 12px (un término medio entre 8 y 16). Usa 4pt para lograr granularidad: 4, 8, 12, 16, 24, 32, 48, 64, 96px.

### Nombra los Tokens Semánticamente

Define los nombres según la relación del elemento (`--space-sm`, `--space-lg`), no por su valor absoluto (`--spacing-8`). Usa la propiedad `gap` en lugar de márgenes para la separación de elementos hermanos — elimina el colapso de márgenes y los trucos para corregirlo.

## Sistemas de Cuadrícula (Grid)

### La Cuadrícula Autoajustable

Usa `repeat(auto-fit, minmax(280px, 1fr))` para lograr cuadrículas responsivas sin recurrir a breakpoints. Las columnas tendrán al menos 280px de ancho y se mostrarán tantas como quepan por fila, distribuyendo de forma equitativa el espacio sobrante. Para estructuras complejas, usa áreas de cuadrícula con nombre (`grid-template-areas`) y redéfinelas en los breakpoints.

## Jerarquía Visual

### La Prueba del Entrecejo (Squint Test)

Entorna los ojos (o haz una captura de pantalla y difumínala). ¿Puedes seguir identificando:
- ¿El elemento más importante?
- ¿El segundo más importante?
- ¿Las agrupaciones claras?

Si tras el difuminado todo se ve con el mismo peso visual, tienes un problema de jerarquía.

### Jerarquía a través de Múltiples Dimensiones

No confíes únicamente en el tamaño. Combina recursos:

| Recurso | Jerarquía Fuerte | Jerarquía Débil |
|---------|------------------|-----------------|
| **Tamaño** | Relación de 3:1 o superior | Relación menor a 2:1 |
| **Peso** | Negrita frente a Regular | Medium frente a Regular |
| **Color** | Alto contraste | Tonos similares |
| **Posición** | Arriba/izquierda (principal) | Abajo/derecha |
| **Espacio** | Rodeado de espacio en blanco | Saturado |

**La mejor jerarquía utiliza 2 o 3 dimensiones simultáneamente**: Un encabezado que sea más grande, en negrita Y que cuente con más espacio en blanco por encima de él.

### Las Tarjetas no son Obligatorias

Se abusa del uso de tarjetas. El espaciado y la alineación crean agrupaciones visuales de forma natural. Usa tarjetas únicamente cuando el contenido sea verdaderamente diferente y accionable, los elementos requieran una comparación visual directa en una cuadrícula, o el contenido necesite límites de interacción muy claros. **Nunca anides tarjetas dentro de otras tarjetas** — utiliza el espaciado, la tipografía y divisores sutiles para establecer jerarquías internas dentro de una tarjeta.

## Consultas de Contenedor (Container Queries)

Las consultas de viewport son para estructurar la página en su conjunto. **Las consultas de contenedor son para los componentes individuales**:

```css
.card-container {
  container-type: inline-size;
}

.card {
  display: grid;
  gap: var(--space-md);
}

/* El diseño de la tarjeta cambia según el tamaño de su contenedor, no del viewport */
@container (min-width: 400px) {
  .card {
    grid-template-columns: 120px 1fr;
  }
}
```

**Por qué es importante**: Una tarjeta en una barra lateral estrecha se mantiene compacta, mientras que la misma tarjeta situada en el área de contenido principal se expande de forma automática, sin requerir trucos basados en el viewport.

## Ajustes Ópticos

El texto alineado a `margin-left: 0` puede verse visualmente sangrado debido al espacio en blanco de las propias letras — utiliza un margen negativo (`-0.05em`) para lograr una alineación óptica precisa. Los iconos geométricamente centrados a menudo se ven descentrados; los iconos de reproducción (play) necesitan desplazarse hacia la derecha y las flechas deben inclinarse hacia su dirección de movimiento.

### Áreas Táctiles frente a Tamaño Visual

Los botones pueden verse pequeños pero necesitan áreas de pulsación amplias (mínimo de 44px). Usa padding o pseudoelementos para ampliar el área de acción:

```css
.icon-button {
  width: 24px;  /* Tamaño visual */
  height: 24px;
  position: relative;
}

.icon-button::before {
  content: '';
  position: absolute;
  inset: -10px;  /* Amplía el área táctil a 44px */
}
```

## Profundidad y Elevación

Crea escalas semánticas para `z-index` (dropdown → sticky → modal-backdrop → modal → toast → tooltip) en lugar de usar valores numéricos arbitrarios. Para las sombras, diseña una escala de elevación consistente (sm → md → lg → xl). **Idea clave**: Las sombras deben ser sutiles — si la detectas con total claridad a primera vista, probablemente sea demasiado fuerte.

---

**Evita**: Valores de espaciado arbitrarios fuera de tu escala. Hacer que todo el espaciado sea igual (la variedad crea la jerarquía). Crear jerarquía únicamente a través del tamaño — combina el tamaño, peso, color y espacio en blanco.
