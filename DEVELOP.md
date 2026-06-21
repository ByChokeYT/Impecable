# Guía del desarrollador

Documentación para colaboradores de Impeccable.

## Arquitectura

Las habilidades fuente en `source/skills/` son transformadas en formatos específicos de proveedor mediante una factoría basada en configuración. Cada proveedor se define como un objeto de configuración en `scripts/lib/transformers/providers.js` -- agregar un nuevo proveedor requiere únicamente una nueva entrada de configuración.

Para obtener información detallada sobre las capacidades de cada entorno (qué campos de frontmatter admite cada uno, sistemas de marcadores de posición, estructuras de directorios), consulta [HARNESSES.md](HARNESSES.md).

## Formato fuente

### Habilidades (`source/skills/{name}/SKILL.md`)

```yaml
---
name: nombre-de-la-habilidad
description: Qué proporciona esta habilidad
argument-hint: "[objetivo]"
user-invocable: true
license: Información de licencia (opcional)
compatibility: Requisitos del entorno (opcional)
---

Las instrucciones de tu habilidad aquí...
```

**Campos de Frontmatter** (basados en la [especificación de Agent Skills](https://agentskills.io/specification)):
- `name` (requerido): Identificador de la habilidad (1-64 caracteres, minúsculas/números/guiones)
- `description` (requerido): Qué proporciona la habilidad (1-1024 caracteres)
- `user-invocable` (opcional): Booleano -- si es `true`, la habilidad se puede invocar como un comando de barra diagonal (slash command)
- `argument-hint` (opcional): Sugerencia que se muestra durante el autocompletado (ej. `[objetivo]`, `[área (característica, página...)]`)
- `license` (opcional): Información de licencia/atribución
- `compatibility` (opcional): Requisitos del entorno (1-500 caracteres)
- `metadata` (opcional): Pares clave-valor arbitrarios
- `allowed-tools` (opcional, experimental): Lista de herramientas pre-aprobadas

**Marcadores de posición en el cuerpo** (reemplazados por proveedor durante la compilación):
- `{{model}}` -- Nombre del modelo específico del proveedor (ej., "Claude", "Gemini", "GPT")
- `{{config_file}}` -- Archivo de configuración específico del proveedor (ej., "CLAUDE.md", ".cursorrules")
- `{{ask_instruction}}` -- Cómo pedir aclaraciones al usuario
- `{{command_prefix}}` -- Prefijo del comando de barra diagonal (`/` para la mayoría, `$` para Codex)
- `{{available_commands}}` -- Lista separada por comas de los comandos invocables por el usuario

## Compilación

### Requisitos previos
- Bun (entorno de ejecución de JavaScript y gestor de paquetes rápido)
- No se requieren dependencias externas

### Comandos

```bash
# Compilar todos los formatos de proveedores
bun run build

# Limpiar la carpeta dist
bun run clean

# Recompilar desde cero
bun run rebuild
```

### Qué se genera

```
source/                          -> dist/
  skills/{name}/SKILL.md           {provider}/{configDir}/skills/{name}/SKILL.md
```

Cada proveedor obtiene su propio directorio de salida. Se generan dos variantes por proveedor: sin prefijo y con prefijo (con el prefijo `i-` para los nombres de las habilidades).

## Detalles del sistema de compilación

El sistema de compilación utiliza un patrón de factoría en `scripts/`:

```
scripts/
  build.js                        # Organizador principal
  lib/
    utils.js                      # Análisis de frontmatter, reemplazo de marcadores de posición, generación de YAML
    zip.js                        # Generación de paquetes ZIP
    transformers/
      factory.js                  # createTransformer() -- genera funciones de transformación a partir de la configuración
      providers.js                # Mapa de configuración PROVIDERS -- una entrada por proveedor
      index.js                    # Reexporta las funciones de transformación generadas por la factoría
```

### Agregar un nuevo proveedor

1. Agrega una configuración de marcador de posición a `PROVIDER_PLACEHOLDERS` en `scripts/lib/utils.js`:
   ```javascript
   'mi-proveedor': {
     model: 'MiModelo',
     config_file: 'CONFIG.md',
     ask_instruction: 'pregunta directamente al usuario para aclarar.',
     command_prefix: '/'
   }
   ```

2. Agrega una configuración de proveedor a `PROVIDERS` en `scripts/lib/transformers/providers.js`:
   ```javascript
   'mi-proveedor': {
     provider: 'mi-proveedor',
     configDir: '.mi-proveedor',
     displayName: 'Mi Proveedor',
     frontmatterFields: ['user-invocable', 'argument-hint', 'license'],
   }
   ```

3. Ejecuta `bun run build` -- el bucle de compilación detectará automáticamente el proveedor.

4. Actualiza `HARNESSES.md` con las capacidades del proveedor.

### Opciones de configuración de proveedores

| Campo | Descripción |
|-------|-------------|
| `provider` | Clave para el directorio de salida y búsqueda de marcadores de posición |
| `configDir` | Nombre del directorio con punto (ej., `.claude`) |
| `displayName` | Nombre legible por humanos para los logs de compilación |
| `frontmatterFields` | Qué campos opcionales emitir (ver `factory.js` FIELD_SPECS) |
| `bodyTransform` | Función opcional `(body, skill) => body` para post-procesamiento |
| `placeholderProvider` | Sobrescribe qué clave de PROVIDER_PLACEHOLDERS usar (para variantes que comparten configuración) |

### Funciones clave

- `createTransformer(config)`: Factoría que devuelve una función transformadora a partir de la configuración de un proveedor
- `parseFrontmatter()`: Extrae el cuerpo y el frontmatter YAML de los archivos SKILL.md
- `readSourceFiles()`: Lee todos los directorios de habilidades desde `source/skills/`
- `replacePlaceholders()`: Sustituye `{{model}}`, `{{config_file}}`, etc. por proveedor
- `generateYamlFrontmatter()`: Serializa objetos a frontmatter YAML (entrecomilla automáticamente valores que comienzan con `[` o `{`)
- `prefixSkillReferences()`: Reemplaza `/skillname` con `/i-skillname` para variantes con prefijo

## Buenas prácticas

### Escritura de habilidades

1. **Alcance enfocado**: Un dominio claro por habilidad
2. **Descripciones claras**: Haz que el propósito sea obvio
3. **Instrucciones claras**: El LLM debe entender exactamente qué hacer
4. **Incluye ejemplos**: Donde ayuden a aclarar la intención
5. **Establece restricciones**: Qué NO hacer tan claramente como qué hacer
6. **Prueba en múltiples proveedores**: Verifica que funcione en múltiples contextos

## Documentación de referencia

- [Especificación de Agent Skills](https://agentskills.io/specification) - Estándar abierto
- [HARNESSES.md](HARNESSES.md) - Matriz de capacidades de proveedores
- [Cursor Skills](https://cursor.com/docs/context/skills)
- [Claude Code Skills](https://code.claude.com/docs/en/skills)
- [Gemini CLI Skills](https://geminicli.com/docs/cli/skills/)
- [Codex CLI Skills](https://developers.openai.com/codex/skills/)
- [VS Code Copilot Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills)
- [Kiro Skills](https://kiro.dev/docs/skills/)
- [OpenCode Skills](https://opencode.ai/docs/skills/)
- [Pi Skills](https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/skills.md)

## Estructura del repositorio

```
impeccable/
  source/                          # ¡Edita aquí! Fuente de la verdad
    skills/                        # Definiciones de habilidades
      frontend-design/
        SKILL.md
        reference/*.md             # Referencias específicas del dominio
      audit/SKILL.md
      polish/SKILL.md
      ...
  dist/                            # Salida generada (ignorado por git)
  scripts/
    build.js                       # Organizador principal
    lib/
      utils.js                     # Utilidades compartidas
      zip.js                       # Generación de paquetes ZIP
      transformers/
        factory.js                 # Factoría de transformación basada en configuración
        providers.js               # Mapa de configuración de proveedores
        index.js                   # Reexportaciones
  tests/                           # Suite de pruebas de Bun
  HARNESSES.md                     # Referencia de capacidades de proveedores
  DEVELOP.md                       # Este archivo
  README.md                        # Documentación del usuario
```

## Solución de problemas

### La compilación falla con errores de análisis sintáctico de YAML
- Comprueba la sangría del frontmatter (YAML es sensible a la sangría)
- Asegúrate de que los delimitadores `---` estén en sus propias líneas
- Los valores que comienzan con `[` o `{` se entrecomillan automáticamente; otros caracteres especiales de YAML pueden requerir entrecomillado manual

### La salida no coincide con las expectativas
- Comprueba la configuración del proveedor en `scripts/lib/transformers/providers.js`
- Verifica que el archivo fuente tenga la estructura de frontmatter correcta
- Ejecuta `bun run rebuild` para asegurar una compilación limpia

### El proveedor no reconoce los archivos
- Comprueba la ruta de instalación de tu proveedor
- Verifica que el nombre del archivo coincida con los requisitos del proveedor
- Consulta [HARNESSES.md](HARNESSES.md) para detalles específicos del proveedor

## ¿Preguntas?

¡Abre un issue o envía un PR!
