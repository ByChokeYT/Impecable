# Instrucciones del proyecto para Claude

## CSS

CSS puro escrito a mano, sin Tailwind, sin paso de compilación. El cargador de HTML de Bun resuelve `<link rel="stylesheet">` e integra las cadenas de `@import` en línea automáticamente tanto para `bun run dev` como para `bun run build`.

La arquitectura CSS:
- `public/css/main.css` - Punto de entrada principal, importa los parciales y define tokens/reset
- `public/css/workflow.css` - Sección de comandos, terminal de vidrio (glass terminal), estilos de estudios de casos
- `public/css/gallery.css`, `skill-demos.css`, `problem-section.css` - parciales de sección

Edita cualquiera de estos directamente y recarga; no se requiere reconstrucción.

## Servidor de desarrollo

```bash
bun run dev        # Servidor de desarrollo de Bun en http://localhost:3000
bun run preview    # Compilación + vista previa local de Cloudflare Pages
```

## Despliegue

Alojado en Cloudflare Pages. Los activos estáticos se sirven desde `build/`, las rutas de la API se manejan mediante reescrituras de `_redirects` (JSON) y Pages Functions (descargas).

```bash
bun run deploy     # Compilar + desplegar en Cloudflare Pages
```

## Sistema de compilación

El sistema de compilación compila habilidades y comandos desde `source/` a formatos específicos de proveedores en `dist/`:

```bash
bun run build      # Compilar todos los proveedores
bun run rebuild    # Limpiar y reconstruir
```

Los archivos fuente utilizan marcadores de posición que se reemplazan por proveedor:
- `{{model}}` - Nombre del modelo (Claude, Gemini, GPT, etc.)
- `{{config_file}}` - Nombre del archivo de configuración (CLAUDE.md, .cursorrules, etc.)
- `{{ask_instruction}}` - Cómo hacer preguntas al usuario

## Pruebas

```bash
bun run test       # Ejecutar todas las pruebas
```

Las pruebas unitarias (compilación, lógica del detector) se ejecutan a través de `bun test`. Las pruebas de integración (detección HTML basada en jsdom) se ejecutan a través de `node --test` porque bun es demasiado lento con jsdom. El script `test` maneja esta división automáticamente.

## CLI

El CLI reside en este repositorio bajo `bin/` y `src/`. Publicado en npm como `impeccable`.

```bash
npx impeccable detect [archivo-o-dir-o-url...]   # detectar anti-patrones
npx impeccable detect --fast --json src/         # solo expresiones regulares, salida JSON
npx impeccable live                              # iniciar servidor de superposición del navegador
npx impeccable skills install                    # instalar habilidades
npx impeccable --help                            # mostrar ayuda
```

El detector del navegador (`src/detect-antipatterns-browser.js`) se genera a partir del motor principal. Después de cambiar `src/detect-antipatterns.mjs`, reconstrúyelo:

```bash
bun run build:browser
```

**IMPORTANTE**: Utiliza siempre `node` (no `bun`) para ejecutar el CLI de detección. La implementación de jsdom en Bun es extremadamente lenta y hará que los escaneos con archivos HTML se cuelguen durante minutos.

## Versiones

Hay tres componentes con versiones independientes. Incrementa solo el/los que realmente cambiaron:

**CLI** (paquete npm):
- `package.json` → `version`
- Incrementar cuando: Cambie el código del CLI (`bin/`, `src/detect-antipatterns.mjs`, etc.)

**Skills** (Plugin de Claude Code / definiciones de habilidades):
- `.claude-plugin/plugin.json` → `version`
- `.claude-plugin/marketplace.json` → `plugins[0].version`
- Incrementar cuando: Cambie el contenido de las habilidades (`source/skills/`, cambie el conteo de habilidades, etc.)

**Extensión de Chrome**:
- `extension/manifest.json` → `version`
- Incrementar cuando: Cambie el código de la extensión (`extension/`)

**Historial de cambios del sitio web** (`public/index.html`):
- Texto del enlace de versión en el Hero + nueva entrada en el historial de cambios
- Actualizar solo para cambios dirigidos al usuario, no detalles internos de compilación/herramientas
- Usa la versión más destacada que haya cambiado (ej. versión de habilidades para la consolidación de habilidades)

## Añadir nuevas habilidades

Al añadir una nueva habilidad invocable por el usuario, actualiza el recuento de comandos en **todas** estas ubicaciones:

- `public/index.html` → descripciones meta, cuadro del hero, encabezado de sección
- `public/cheatsheet.html` → descripción meta, subtítulo, `commandCategories`, `commandRelationships`
- `public/js/data.js` → `commandProcessSteps`, `commandCategories`, `commandRelationships`
- `public/js/components/framework-viz.js` → `commandSymbols`, `commandNumbers`
- `public/js/demos/commands/` → nuevo archivo de demostración + importación en `index.js`
- `README.md` → introducción, recuento de comandos, tabla de comandos
- `NOTICE.md` → recuento de comandos de dirección
- `AGENTS.md` → recuento de comandos de introducción
- `.claude-plugin/plugin.json` → descripción
- `.claude-plugin/marketplace.json` → descripción de metadatos + descripción del plugin

## Framework de evaluaciones (evals) (privado, gitignored)

Existe un framework de evaluación controlado en `evals/` que mide si la habilidad `/impeccable` mejora o perjudica el diseño frontend generado por IA. Ejecuta el mismo prompt a través de un modelo con y sin la habilidad cargada, genera una huella digital (fingerprint) para cada generación y agrega los resultados en un informe de sesgo. Todo el directorio `evals/` está en el archivo gitignore; está diseñado para permanecer privado (comercial).

**Si estás retomando tareas de evaluación en una nueva sesión, lee primero `evals/AGENT.md`.** Captura todo lo que hemos aprendido: opciones de modelos, política de tamaño de muestra, lecciones aprendidas, flujos de trabajo comunes y trampas. No intentes reinventar el flujo de trabajo desde cero; existe un contexto previo significativo.

### Orientación rápida

- **Modelo base principal**: `gpt-5.4` con `--reasoning-effort medium`. Inteligencia avanzada a un costo de ~5-10 veces menor que el razonamiento alto. **NO utilices `--reasoning-effort high`** a menos que lo necesites específicamente: los tokens de razonamiento cuentan para `max_completion_tokens` y cuestan alrededor de $1-2 por archivo sin ningún beneficio de calidad para nuestro caso de uso.
- **Modelo de validación secundario**: `qwen/qwen3.6-plus` a través de OpenRouter. Relativamente económico, calidad de diseño decente, sin controles de razonamiento.
- **NO utilices Haiku como objetivo principal de evaluación.** Ignora la mayoría de las reglas negativas de la habilidad. Aprendimos esto de la manera difícil: nos llevó por muchos caminos equivocados al principio.
- **Política de tamaño de muestra**: n=10 por nicho para iteraciones rápidas, **n=20 para validación de barrido (el estándar)**, n=50 reservado para la línea base final publicada. n=20 es el tamaño de muestra más pequeño donde se estabilizan los hallazgos raros del detector y las comparaciones A/B son estadísticamente significativas.

### Comandos rápidos

```bash
# Inicia siempre el servidor local primero; la galería/visor no se puede cargar a través de file:// (CORS)
bun run evals/runner/serve.ts

# Flujo de trabajo estándar: generar → detectar → agregar → snapshot
bun run evals/runner/run.ts --with-refs --model gpt-5.4 --reasoning-effort medium
bun run evals/runner/detect.ts
bun run evals/runner/aggregate.ts
bun run evals/runner/snapshot.ts <slug> --title "..." --note "..."

# Iteración dirigida económica (no contamina current/)
bun run evals/runner/run.ts --with-refs --scratch mi-prueba \
  --niches 06 --n 10 --condition skill-on --model qwen/qwen3.6-plus

# Ver resultados en el navegador
open http://localhost:8723/viewer.html
```

### Reglas críticas

- **Ejecuta siempre una pequeña prueba de humo (n=2-5 en un solo nicho) antes de cualquier barrido.** El rendimiento se degrada en ejecuciones largas y las estimaciones de tiempo pueden fallar por un factor de 10 a 20. Una vez perdimos más de 11 horas en un barrido estimado en 40 minutos.
- **Ejecuciones largas en segundo plano.** Utiliza `run_in_background: true` para cualquier barrido de más de ~50 generaciones. El ejecutor es reanudable, por lo que es seguro matarlo y reiniciarlo.
- **No mezcles versiones de prompts en el mismo conjunto de datos.** La comprobación de seguridad de `variant.json` obliga a cumplir esto para `current/` (se debe pasar `--rebuild-skill-on` después de editar un prompt). Los directorios de scratch se borran automáticamente al cambiar de prompt.
- **Snapshot primero, cambios después.** Ten siempre un punto de referencia conocido en `evals/output/snapshots/` antes de editar la habilidad, para que puedas comparar el antes y el después.
- **El usuario es la fuente de verdad sobre la calidad estética.** El fingerprinting y el detector son señales útiles pero no miden si el diseño es realmente "bueno". Haz que el usuario revise la galería para cualquier cambio significativo.

Consulta `evals/AGENT.md` para ver la referencia completa: tabla detallada de comparación de modelos, lecciones aprendidas completas, todos los flujos de trabajo comunes y la lista de trampas.
