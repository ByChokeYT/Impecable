# Impeccable CLI

Detecta anti-patrones de interfaz de usuario (UI) y problemas de calidad de diseño desde la línea de comandos. Escanea archivos HTML, CSS, JSX, TSX, Vue y Svelte en busca de 25 patrones específicos que incluyen indicios de interfaz generada por IA, violaciones de accesibilidad y problemas generales de calidad del diseño.

## Inicio rápido

```bash
# Instala las habilidades en tu entorno de IA (Claude, Cursor, Gemini, etc.)
npx impeccable skills install

# Actualiza las habilidades a la última versión
npx impeccable skills update

# Muestra la lista de todos los comandos disponibles
npx impeccable skills help

# Escanea archivos o directorios en busca de anti-patrones
npx impeccable detect src/

# Escanea una URL activa (requiere Puppeteer)
npx impeccable detect https://example.com

# Salida JSON para CI/herramientas
npx impeccable detect --json src/

# Modo de solo expresiones regulares (más rápido, sin jsdom)
npx impeccable detect --fast src/
```

## Qué detecta

**Indicios de basura de IA**: patrones que gritan "la IA generó esto":
- Bordes de acento de pestaña lateral, texto con degradado en los encabezados
- Degradados morados/violeta y paletas de cian sobre fondo oscuro
- Modo oscuro con brillos acentuados, conflictos entre bordes y border-radius

**Problemas de tipografía**: fuentes sobreutilizadas (Inter, Roboto), jerarquía de tipos plana, familias tipográficas únicas

**Color y Contraste**: violaciones de WCAG AA, texto gris sobre fondos de color, negro/blanco puro

**Diseño y composición**: tarjetas anidadas, espaciado monótono, diseños con todo centrado

**Movimiento**: aceleración elástica o de rebote, transiciones de propiedades de diseño (layout)

**Calidad**: texto de cuerpo diminuto, rellenos reducidos, líneas de longitud excesiva, objetivos táctiles pequeños

25 detecciones en total. Consulta la lista completa en [impeccable.style](https://impeccable.style).

## Códigos de salida

- `0`: no se encontraron problemas
- `2`: se detectaron anti-patrones

## Opciones

```
impeccable detect [opciones] [archivo-o-directorio-o-url...]

  --fast    Modo de solo expresiones regulares (omite jsdom, más rápido pero menos preciso)
  --json    Muestra los hallazgos en formato JSON
  --help    Muestra la ayuda
```

## Requisitos

- Node.js 18+
- `jsdom` (incluido como dependencia, utilizado para el escaneo de HTML)
- `puppeteer` (opcional, solo necesario para el escaneo de URLs)

## Parte de Impeccable

Esta CLI es parte de [Impeccable](https://impeccable.style), un paquete de habilidades de diseño entre proveedores para herramientas de desarrollo impulsadas por IA. La suite completa incluye 22 comandos de dirección para Claude, Cursor, Gemini, Codex y más.

## Licencia

[Apache 2.0](https://github.com/pbakaus/impeccable/blob/main/LICENSE)
