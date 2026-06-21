# Referencia de capacidades de habilidades en entornos de IA

Fuente de verdad sobre lo que admite cada entorno de programación de IA en términos de habilidades de agentes.
Se utiliza para informar la configuración de los proveedores en `scripts/lib/transformers/providers.js`.

Última verificación: 24-03-2026

## Documentación oficial

| Entorno | URL de la documentación |
|---------|----------|
| Claude Code | https://code.claude.com/docs/en/skills |
| Cursor | https://cursor.com/docs/context/skills |
| Gemini CLI | https://geminicli.com/docs/cli/skills/ |
| Codex CLI | https://developers.openai.com/codex/skills |
| GitHub Copilot (Agentes) | https://code.visualstudio.com/docs/copilot/customization/agent-skills |
| Kiro | https://kiro.dev/docs/skills/ |
| OpenCode | https://opencode.ai/docs/skills/ |
| Pi | https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/skills.md |
| Trae | TBD (aún no se encuentra documentación oficial sobre habilidades) |
| Rovo Dev | https://support.atlassian.com/rovo/docs/extend-rovo-dev-cli-with-agent-skills |

## Cumplimiento de la especificación

Todos los entornos siguen la [especificación de Agent Skills](https://agentskills.io/specification) en diversos grados. La especificación define estos campos de frontmatter: `name`, `description`, `license`, `compatibility`, `metadata`, `allowed-tools`.

Extensiones específicas de proveedores más allá de la especificación: `user-invocable`, `argument-hint`, `disable-model-invocation`, `allowed-tools` (sintaxis extendida), `model`, `effort`, `context`, `agent`, `hooks`, `subtask`, `mcp`.

## Soporte de Frontmatter

Los campos marcados con * son estándar de la especificación. Los demás son extensiones de los proveedores.

| Campo | Claude Code | Cursor | Gemini | Codex | Copilot | Kiro | OpenCode | Pi | Rovo Dev |
|-------|:-----------:|:------:|:------:|:-----:|:-------:|:----:|:--------:|:--:|:--------:|
| `name`* | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí |
| `description`* | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí |
| `license`* | Sí | Sí | Ignorado | No | Sí | Sí | Sí | Sí | Sí |
| `compatibility`* | Sí | Sí | Ignorado | No | Sí | Sí | Sí | Sí | Sí |
| `metadata`* | Sí | Sí | Ignorado | No | Sí | Sí | Sí | Sí | Sí |
| `allowed-tools`* | Sí | No | Ignorado | No | No | No | Sí | Sí | Sí |
| `user-invocable` | Sí | No | No | No | Sí | No | Sí | No | Sí |
| `argument-hint` | Sí | No | No | No | Sí | No | Sí | No | Sí |
| `disable-model-invocation` | Sí | Sí | No | No | Sí | No | Sí | Sí | TBD |
| `model` | Sí | No | No | No | No | No | Sí | No | No |
| `effort` | Sí | No | No | No | No | No | No | No | No |
| `context` | Sí | No | No | No | No | No | No | No | No |
| `agent` | Sí | No | No | No | No | No | Sí | No | No |
| `hooks` | Sí | No | No | No | No | No | No | No | No |

Notas:
- Gemini CLI valida únicamente `name` y `description`; otros campos de la especificación se analizan pero se ignoran.
- Codex CLI utiliza un archivo complementario separado `agents/openai.yaml` para metadatos extendidos (iconos, marca, herramientas MCP, control de invocación).
- Kiro reconoce `user-invocable` y `disable-model-invocation` según informes de la comunidad, pero no los documenta formalmente.
- Los campos desconocidos se ignoran silenciosamente en todos los entornos.

## Estructura del directorio de habilidades

| Entorno | Directorio nativo | También lee |
|---------|-----------------|------------|
| Claude Code | `.claude/skills/` | - |
| Cursor | `.cursor/skills/` | `.agents/skills/`, `.claude/skills/`, `.codex/skills/` |
| Gemini CLI | `.gemini/skills/` | `.agents/skills/` |
| Codex CLI | `.agents/skills/` (primario) | - |
| GitHub Copilot | `.github/skills/` | `.agents/skills/`, `.claude/skills/` |
| Kiro | `.kiro/skills/` | - |
| OpenCode | `.opencode/skills/` | `.agents/skills/`, `.claude/skills/` |
| Pi | `.pi/skills/` | `.agents/skills/` |
| Trae China | `.trae-cn/skills/` | TBD |
| Trae Internacional | `.trae/skills/` | TBD |
| Rovo Dev | `.rovodev/skills/` | `~/.rovodev/skills/` (a nivel de usuario) |

Todos los entornos admiten la estructura de directorio `{nombre-habilidad}/SKILL.md` con los subdirectorios opcionales `reference/`, `scripts/` y `assets/`.

## Marcadores de posición / Sustitución de variables

Claude Code admite la sustitución de variables en tiempo de ejecución directamente en el cuerpo de los archivos SKILL.md: `$ARGUMENTS`, `$0`-`$N`, `${CLAUDE_SKILL_DIR}`, `${CLAUDE_SESSION_ID}`. Ningún otro entorno admite la sustitución en las habilidades.

Algunos entornos tienen sistemas de "comandos personalizados" separados (distintos de las habilidades) con su propia sustitución:

| Entorno | Sistema de comandos | Sintaxis de sustitución |
|---------|---------------|-------------------|
| Gemini CLI | `.gemini/commands/` (TOML) | `{{args}}`, `!{shell}`, `@{file}` |
| Codex CLI | `.codex/prompts/` | `$ARGNAME` |
| OpenCode | `.opencode/commands/` | `$ARGUMENTS`, `$1`-`$N`, `` !`shell` `` |

Nuestro sistema de compilación maneja marcadores de posición entre proveedores en tiempo de compilación mediante `replacePlaceholders()` para `{{model}}`, `{{config_file}}`, `{{ask_instruction}}` y `{{available_commands}}`.
