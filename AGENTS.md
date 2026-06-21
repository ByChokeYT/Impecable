# Impeccable

El vocabulario que no sabías que necesitabas. 1 habilidad, 18 comandos y anti-patrones seleccionados para un estilo impecable. Funciona con Cursor, Claude Code, Gemini CLI y Codex CLI.

## Propósito del repositorio

Mantener una **única fuente de verdad** para las habilidades y comandos enfocados en diseño, y luego transformarlos automáticamente a formatos específicos de cada proveedor. Cada proveedor tiene diferentes capacidades (frontmatter, argumentos, archivos modulares), por lo que utilizamos un sistema de compilación para generar las salidas correspondientes.

## Arquitectura: Opción A (Origen rico en funciones)

Utilizamos un **formato de origen rico en funciones** que se transforma para cada proveedor:

- **Archivos fuente** (`source/`): Metadatos completos con frontmatter YAML, argumentos y descripciones
- **Sistema de compilación** (`scripts/`): Transforma la fuente → formatos específicos del proveedor
- **Distribución** (`dist/`): Archivos de salida confirmados para 4 proveedores

### ¿Por qué la opción A?

Cursor no admite frontmatter ni argumentos (el mínimo común denominador). En lugar de limitar a todos los proveedores, nosotros:
1. Autorizamos con metadatos completos en los archivos fuente
2. Generamos versiones con todas las funciones para los proveedores que lo admiten (Claude Code, Gemini, Codex)
3. Generamos versiones simplificadas para Cursor (eliminando frontmatter y confiando en la adición de texto)

## Estructura del repositorio

```
impeccable/
├── source/                      # ¡EDITA ESTOS! Única fuente de verdad
│   ├── commands/                # Definiciones de comandos con frontmatter
│   │   └── normalize.md
│   └── skills/                  # Definiciones de habilidades con frontmatter
│       └── impeccable/
├── dist/                        # Salidas generadas (comitadas para los usuarios)
│   ├── cursor/                  # Comandos + Habilidades de agentes
│   │   └── .cursor/
│   │       ├── commands/*.md
│   │       └── skills/*/SKILL.md
│   ├── claude-code/             # Con todas las funciones
│   │   └── .claude/
│   │       ├── commands/*.md
│   │       └── skills/*/SKILL.md
│   ├── gemini/                  # Comandos TOML + habilidades modulares
│   │   ├── .gemini/
│   │   │   └── commands/*.toml
│   │   ├── GEMINI.md
│   │   └── GEMINI.*.md
│   └── codex/                   # Prompts personalizados + Habilidades de agentes
│       └── .codex/
│           ├── prompts/*.md
│           └── skills/*/SKILL.md
├── api/                         # Vercel Functions (producción)
│   ├── skills.js                # GET /api/skills
│   ├── commands.js              # GET /api/commands
│   └── download/
│       ├── [type]/[provider]/[id].js   # Descargas individuales
│       └── bundle/[provider].js        # Descargas de paquetes
├── public/                      # Sitio web para impeccable.style
│   ├── index.html               # Página principal
│   ├── css/                     # CSS modular (9 archivos)
│   │   ├── main.css             # Punto de entrada con importaciones
│   │   ├── tokens.css           # Sistema de diseño
│   │   └── ...                  # Estilos de componentes
│   └── app.js                   # JS Vanilla
├── server/                      # Servidor Bun (desarrollo local únicamente)
│   ├── index.js                 # Sirve el sitio web + rutas de la API
│   └── lib/
│       └── api-handlers.js      # Lógica compartida de la API (usada por servidor y funciones)
├── scripts/                     # Sistema de compilación (Bun)
│   ├── build.js                 # Organizador principal
│   ├── lib/
│   │   ├── utils.js             # Utilidades compartidas
│   │   ├── zip.js               # Generación de ZIP
│   │   └── transformers/        # Transformadores específicos del proveedor
│   │       ├── cursor.js
│   │       ├── claude-code.js
│   │       ├── gemini.js
│   │       └── codex.js
├── README.md                    # Documentación del usuario final
├── DEVELOP.md                   # Documentación para desarrolladores
└── package.json                 # Scripts de Bun
```

## Sitio Web (impeccable.style)

**Pila tecnológica:**
- JavaScript Vanilla (sin frameworks)
- CSS moderno con el empaquetador de Bun (anidamiento, colores OKLCH, @import)
- **Desarrollo local**: Servidor Bun con rutas nativas (`server/index.js`)
- **Producción**: Vercel Functions con entorno de ejecución de Bun (directorio `/api`)
- Desplegado en Vercel con el entorno de ejecución de Bun

**Configuración dual:**
- El directorio `/api` contiene Vercel Functions individuales para producción
- El directorio `/server` contiene el servidor Bun monolítico para desarrollo local
- `/server/lib/api-handlers.js` contiene la lógica compartida utilizada por ambos
- Cero duplicación: Las funciones de la API y el servidor de desarrollo importan los mismos controladores

**Diseño:**
- Estética de precisión editorial
- Cormorant Garamond (títulos) + Instrument Sans (cuerpo)
- Espacio de color OKLCH para colores vibrantes y perceptualmente uniformes
- Diseño de barra lateral editorial (título a la izquierda, contenido a la derecha)
- Arquitectura CSS modular (9 archivos)

**Endpoints de la API** (Vercel Functions):
- `/` - Página de inicio (HTML estático)
- `/api/skills` - Lista JSON de todas las habilidades
- `/api/commands` - Lista JSON de todos los comandos
- `/api/download/[type]/[provider]/[id]` - Descarga de archivo individual
- `/api/download/bundle/[provider]` - Descarga de paquete ZIP

## Formato del archivo fuente

### Comandos (`source/commands/*.md`)

```yaml
---
name: nombre-del-comando
description: Descripción clara de lo que hace este comando
args:
  - name: nombrearg
    description: Descripción del argumento
    required: false
---

Instrucciones del comando aquí. Utiliza marcadores de posición {{nombrearg}} para los argumentos.
```

### Habilidades (`source/skills/*.md`)

```yaml
---
name: nombre-de-la-habilidad
description: Descripción clara de lo que proporciona esta habilidad
license: Información de licencia (opcional)
---

Instrucciones de la habilidad para el LLM aquí.
```

## Sistema de compilación

Utiliza **Bun** para compilaciones rápidas. Arquitectura modular:

- **`utils.js`**: Funciones compartidas (parseFrontmatter, readSourceFiles, writeFile, etc.)
- **Patrón de transformador**: Cada proveedor tiene un archivo específico
- **Registro**: `transformers/index.js` exporta todos los transformadores
- **Script principal**: `build.js` organiza todo (~50 líneas)

Ejecuta: `bun run build`

## Transformaciones de proveedores

### 1. Cursor (Estándar de Habilidades del Agente)
- **Comandos**: Solo el cuerpo → `dist/cursor/.cursor/commands/*.md` (sin soporte para frontmatter)
- **Habilidades**: Estándar de Habilidades del Agente → `dist/cursor/.cursor/skills/{name}/SKILL.md`
  - Frontmatter YAML completo con nombre/descripción
  - Archivos de referencia en los subdirectorios de habilidades
- **Instalación**: Extrae el ZIP en la raíz de tu proyecto, crea la carpeta `.cursor/`
- **Nota**: Las habilidades de agente requieren el canal Nightly de Cursor

### 2. Claude Code (Con todas las funciones)
- **Comandos**: Frontmatter YAML completo → `dist/claude-code/.claude/commands/*.md`
- **Habilidades**: Frontmatter YAML completo → `dist/claude-code/.claude/skills/{name}/SKILL.md`
- **Preserva**: Todos los metadatos y argumentos
- **Formato**: Coincide con la [especificación de habilidades de Anthropic](https://github.com/anthropics/skills)
- **Instalación**: Extrae el ZIP en la raíz de tu proyecto, crea la carpeta `.claude/`

### 3. Gemini CLI (Con todas las funciones)
- **Comandos**: Formato TOML → `dist/gemini/.gemini/commands/*.toml`
  - Utiliza las claves `description` y `prompt`
  - Transforma `{{argname}}` → `{{args}}` (Gemini utiliza una única cadena de argumentos)
- **Habilidades**: Modulares con importaciones → `dist/gemini/GEMINI.{name}.md` (nivel raíz)
  - El archivo principal `GEMINI.md` utiliza la sintaxis de importación `@./GEMINI.{name}.md`
  - Gemini carga automáticamente los archivos importados
- **Instalación**: Extrae el ZIP en la raíz de tu proyecto, crea la carpeta `.gemini/` y los archivos de habilidad

### 4. Codex CLI (Con todas las funciones)
- **Comandos**: Formato de prompt personalizado → `dist/codex/.codex/prompts/*.md`
  - Utiliza `description` y `argument-hint` en el frontmatter
  - Transforma `{{argname}}` → `$ARGNAME` (variables en mayúsculas)
  - Se invoca como `/prompts:<nombre>`
- **Habilidades**: Estándar de Habilidades del Agente → `dist/codex/.codex/skills/{name}/SKILL.md`
  - Mismo formato SKILL.md que Claude Code con frontmatter YAML
  - Archivos de referencia en los subdirectorios de habilidades
- **Instalación**: Extrae el ZIP en la raíz de tu proyecto, crea la carpeta `.codex/`

## Decisiones clave de diseño

### ¿Por qué subir dist/?
Los usuarios finales pueden copiar los archivos directamente sin necesidad de herramientas de compilación.

### ¿Por qué transformadores separados?
- Cada proveedor ocupa ~30-85 líneas, fácil de entender
- Se puede modificar uno sin afectar a los demás
- Es fácil añadir nuevos proveedores

### ¿Por qué Bun?
- Mucho más rápido que Node.js (2-4x)
- Caja de herramientas todo en uno (entorno de ejecución + gestor de paquetes)
- Cero configuración, nativo de TypeScript
- Compatible con Node.js (funciona con el código existente)

### ¿Por qué habilidades modulares para Gemini/Codex?
- Mejor gestión del contexto (carga solo lo que se necesita)
- Organización de archivos más limpia
- Gemini: Utiliza la función de importación nativa `@file.md`
- Codex: Utiliza el patrón de enrutamiento con la guía AGENTS.md

### ¿Por qué JS Vanilla para el sitio web?
- Sin complejidad de compilación
- Bun maneja todo de forma nativa
- Funciones modernas (ES6+, anidamiento de CSS, colores OKLCH)
- Rápido, ligero, mantenible

## Añadir nuevo contenido

1. **Crea el archivo fuente** en `source/commands/` o `source/skills/`
2. **Añade el frontmatter** con nombre, descripción, argumentos (para comandos) o licencia (para habilidades)
3. **Escribe el cuerpo** con las instrucciones/prompts
4. **Compila**: `bun run build`
5. **Prueba** con tu proveedor
6. **Sube** tanto los archivos fuente como los generados en dist/

## Notas importantes

- **La fuente es la verdad**: Edita siempre en `source/`, nunca edites en `dist/` directamente
- **Prueba en todos los proveedores**: Los cambios afectan a 4 salidas diferentes
- **Gestión de argumentos**: Escribe prompts que funcionen tanto con marcadores de posición como añadiendo texto al final
- **Limitaciones de Cursor**: Sin soporte para frontmatter/argumentos, diseña para una degradación elegante

## Documentación

- **README.md**: Guía del usuario final (instalación, uso, inicio rápido de desarrollo)
- **DEVELOP.md**: Guía del colaborador (arquitectura, sistema de compilación, añadir contenido)
- **Este archivo (AGENTS.md)**: Contexto para asistentes de IA y nuevos desarrolladores

## Enlaces a la documentación de proveedores

- [Especificación de Habilidades de Agente](https://agentskills.io/specification) - Estándar abierto
- [Comandos de Cursor](https://cursor.com/docs/agent/chat/commands)
- [Reglas de Cursor](https://cursor.com/docs/context/rules)
- [Habilidades de Cursor](https://cursor.com/docs/context/skills)
- [Comandos de barra diagonal de Claude Code](https://code.claude.com/docs/en/slash-commands)
- [Habilidades de Anthropic](https://github.com/anthropics/skills)
- [Comandos personalizados de Gemini CLI](https://cloud.google.com/blog/topics/developers-practitioners/gemini-cli-custom-slash-commands)
- [GEMINI.md en Gemini CLI](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/gemini-md.md)
- [Comandos de barra diagonal de Codex CLI](https://developers.openai.com/codex/guides/slash-commands)
- [Habilidades de Codex CLI](https://developers.openai.com/codex/skills/)
