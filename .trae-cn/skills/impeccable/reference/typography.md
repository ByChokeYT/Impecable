# Tipografía (Typography)

## Principios Clásicos de Tipografía

### Ritmo Vertical

La altura de línea (line-height) debe ser la unidad base para TODO el espaciado vertical. Si el texto del cuerpo tiene `line-height: 1.5` en una fuente de `16px` (= 24px), los valores de espaciado deben ser múltiplos de 24px. Esto crea una armonía subconsciente — el texto y el espacio comparten una base matemática común.

### Escala Modular y Jerarquía

El error común: demasiados tamaños de fuente que están demasiado cerca unos de otros (14px, 15px, 16px, 18px...). Esto empaña la jerarquía visual.

**Usa menos tamaños pero con más contraste.** Un sistema de 5 tamaños cubre la mayoría de las necesidades:

| Rol | Relación Típica | Caso de Uso |
|-----|-----------------|-------------|
| xs | 0.75rem | Leyendas, textos legales |
| sm | 0.875rem | UI secundaria, metadatos |
| base | 1rem | Texto del cuerpo |
| lg | 1.25-1.5rem | Subencabezados, texto introductorio |
| xl+ | 2-4rem | Titulares, texto principal (hero) |

Relaciones populares: 1.25 (tercera mayor), 1.333 (cuarta perfecta), 1.5 (quinta perfecta). Elige una relación y comprométete con ella.

### Legibilidad y Longitud de Línea (Measure)

Usa unidades `ch` para limitar el ancho de las cajas de texto basándote en caracteres (`max-width: 65ch`). La altura de línea escala de forma inversa con respecto a la longitud de la línea — las columnas estrechas necesitan menos interlineado, las columnas anchas necesitan más.

**Detalle no obvio**: Incrementa la altura de línea para texto claro sobre fondos oscuros. El peso tipográfico percibido es menor, por lo que el texto necesita más espacio para respirar. Añade entre 0.05 y 0.1 a tu altura de línea habitual.

## Selección y Combinación de Fuentes

### Elegir Fuentes con Personalidad

**Evita las fuentes predeterminadas invisibles**: Inter, Roboto, Open Sans, Lato, Montserrat. Están por todas partes, lo que hace que tu diseño se sienta genérico. Son aceptables para documentación o herramientas técnicas donde la personalidad de la marca no es el objetivo — pero si buscas un diseño con carácter, busca en otro lado.

**Elige la fuente basándote en la marca de la funcionalidad, no en preajustes de categoría.** El error más común de la tipografía generada por IA es recurrir siempre a la misma serif "elegante" para cada marca editorial, la misma sans "moderna" para cada proyecto tecnológico, o la misma serif de revista para cada marca premium. Esos reflejos automáticos uniformizan el diseño de los proyectos. La fuente correcta es aquella cuyo carácter físico coincide con *esta marca específica*, su audiencia y su momento.

Un proceso de selección efectivo:

1. Lee la descripción de la marca o funcionalidad. Escribe tres palabras concretas para definir la voz de la marca. Evita palabras vacías como "moderno" o "elegante". Intenta cosas como: "cálido, mecánico y de opinión clara", "calmo, clínico y cuidadoso", "rápido, denso y directo" o "artesanal y un poco extraño".
2. Imagina la fuente como un objeto físico que la marca pudiera fabricar o distribuir: una cinta de máquina de escribir, un cartel de tienda pintado a mano, un manual de terminal de ordenador de los años 70, una etiqueta de tela cosida en el interior de un abrigo, la leyenda de una vitrina de museo, un formulario de impuestos, o un libro infantil impreso en papel de periódico barato. El objeto físico que mejor encaje con las tres palabras te indicará el *tipo* de tipografía adecuado.
3. Explora un catálogo de fuentes (Google Fonts, Pangram Pangram, Adobe Fonts, Future Fonts, ABC Dinamo) con ese objeto físico en mente. **Rechaza lo primero que "parezca de diseñador".** Ese es tu reflejo aprendido de diseño genérico. Sigue buscando.
4. Evita tus fuentes por defecto de proyectos anteriores. Si te descubres seleccionando la misma tipografía destacada (display) que usaste la última vez, oblígate a elegir algo diferente.

**Reflejos contra los que debes luchar**:
- Un proyecto técnico o de utilidad NO necesita una serif "para dar calidez". La mayoría de las herramientas técnicas deben verse como herramientas técnicas.
- Un proyecto editorial o premium NO necesita la misma serif expresiva que todo el mundo usa en este momento. Lo premium puede ser moderno de estilo suizo, neogrotesco, una tipografía monoespaciada literal, o una sans humanista discreta.
- Un producto infantil NO necesita una fuente display redondeada infantil. Los libros para niños usan tipografías reales de calidad.
- Un proyecto "moderno" NO necesita una sans geométrica. Lo más moderno que puedes hacer hoy en día es no usar la fuente que usa todo el mundo.

**Las fuentes del sistema están infravaloradas**: `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui` se ven integradas en el sistema operativo, se cargan al instante y son extremadamente legibles. Considéralas para aplicaciones donde el rendimiento sea prioritario frente a la personalidad.

### Principios de Combinación (Pairing)

**La verdad no obvia**: Con frecuencia no necesitas una segunda fuente. Una familia tipográfica bien elegida en múltiples pesos crea una jerarquía más limpia que dos familias compitiendo entre sí. Añade una segunda fuente únicamente cuando necesites un contraste real y deliberado (por ejemplo, titulares llamativos en display + cuerpo en serif).

Al combinar fuentes, busca el contraste en múltiples ejes:
- Serif + Sans (contraste de estructura).
- Geométrica + Humanista (contraste de personalidad).
- Display condensada + Cuerpo ancho (contraste de proporción).

**Nunca combines fuentes que sean similares pero no idénticas** (por ejemplo, dos sans-serif geométricas). Crean tensión visual sin establecer una jerarquía clara.

### Carga de Fuentes Web

El problema del salto de diseño (layout shift): las fuentes cargan tarde, el texto se reajusta y los usuarios ven cómo salta el contenido. Aquí está la solución:

```css
/* 1. Usar font-display: swap para visibilidad inmediata */
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap;
}

/* 2. Coincidir las métricas de la fuente de fallback para minimizar el salto */
@font-face {
  font-family: 'CustomFont-Fallback';
  src: local('Arial');
  size-adjust: 105%;        /* Escalar para coincidir con la altura de la x */
  ascent-override: 90%;     /* Coincidir con la altura de los ascendentes */
  descent-override: 20%;    /* Coincidir con la profundidad de los descendentes */
  line-gap-override: 10%;   /* Coincidir con el interlineado */
}

body {
  font-family: 'CustomFont', 'CustomFont-Fallback', sans-serif;
}
```

Herramientas como [Fontaine](https://github.com/unjs/fontaine) calculan estos valores de superposición de métricas de forma automática.

## Tipografía Web Moderna

### Tipografía Fluida

La tipografía fluida mediante `clamp(mín, preferido, máx)` escala el texto de forma gradual con respecto al tamaño de la pantalla (viewport). El valor intermedio (por ejemplo, `5vw + 1rem`) controla el ritmo de escalado — a mayor `vw`, más rápido escala. Añade un desfase en `rem` para evitar que el texto colapse a cero en pantallas pequeñas.

**Usa tipografía fluida para**: Encabezados y textos destacados en páginas de marketing o de contenidos donde el texto domine el diseño y necesite respirar a través de los diferentes tamaños de pantalla.

**Usa escalas fijas en `rem` para**: Interfaces de aplicaciones, paneles de control (dashboards) e interfaces densas en datos. Ningún sistema de diseño de aplicaciones importante (Material, Polaris, Primer, Carbon) utiliza tipografía fluida en la UI de su producto — las escalas fijas con ajustes opcionales mediante breakpoints ofrecen la predictibilidad espacial que necesitan los diseños basados en contenedores. El texto del cuerpo también debe mantenerse fijo, incluso en páginas de marketing, ya que la diferencia de tamaño en las pantallas es demasiado pequeña como para justificar su escalado fluido.

### Características OpenType

La mayoría de los desarrolladores desconocen su existencia. Úsalas para pulir los detalles:

```css
/* Números tabulares para alineación de datos */
.data-table { font-variant-numeric: tabular-nums; }

/* Fracciones tipográficas correctas */
.recipe-amount { font-variant-numeric: diagonal-fractions; }

/* Versalitas para abreviaturas */
abbr { font-variant-caps: all-small-caps; }

/* Desactivar ligaduras en código */
code { font-variant-ligatures: none; }

/* Habilitar interletraje (normalmente activado por defecto, pero sé explícito) */
body { font-kern-style: normal; }
```

Comprueba qué características soporta tu fuente en [Wakamai Fondue](https://wakamaifondue.com/).

## Arquitectura del Sistema Tipográfico

Nombra tus tokens tipográficos semánticamente (`--text-body`, `--text-heading`), nunca por su valor absoluto (`--font-size-16`). Incluye familias de fuentes, escalas de tamaño, pesos, alturas de línea y espaciados de letras en tu sistema de tokens.

## Consideraciones de Accesibilidad

Más allá de las relaciones de contraste habituales, ten en cuenta:

- **Nunca desactives el zoom**: El atributo `user-scalable=no` rompe la accesibilidad. Si tu diseño se rompe con un zoom del 200%, corrige el diseño.
- **Usa rem/em para los tamaños de fuente**: Esto respeta las preferencias y configuraciones del navegador de tus usuarios. Nunca uses `px` para el texto del cuerpo.
- **Texto del cuerpo mínimo a 16px**: Los tamaños inferiores cansan la vista y no cumplen con las WCAG en dispositivos móviles.
- **Áreas de pulsación adecuadas**: Los enlaces de texto necesitan un padding o un interlineado que cree un área de contacto mínima de 44px.

---

**Evita**: Más de 2 o 3 familias tipográficas por proyecto. Omitir las definiciones de fuentes de fallback. Ignorar el rendimiento en la carga de fuentes (FOUT/FOIT). Usar fuentes decorativas para el texto del cuerpo.
