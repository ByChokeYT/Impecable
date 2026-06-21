# Impeccable

El vocabulario que no sabías que necesitabas. 1 habilidad, 18 comandos y anti-patrones seleccionados para un diseño frontend impecable.

> **Inicio rápido:** Visita [impeccable.style](https://impeccable.style) para descargar los paquetes listos para usar.

## ¿Por qué Impeccable?

Anthropic creó [frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design), una habilidad que guía a Claude hacia un mejor diseño de interfaz de usuario (UI). Impeccable se basa en esa base con una experiencia más profunda y un mayor control.

Todos los LLMs aprendieron de las mismas plantillas genéricas. Sin orientación, obtienes los mismos errores predecibles: la fuente Inter, degradados de color púrpura, tarjetas anidadas dentro de tarjetas y texto gris sobre fondos de color.

Impeccable combate ese sesgo con:
- **Una habilidad ampliada** con 7 archivos de referencia de dominios específicos ([ver fuente](source/skills/impeccable/))
- **18 comandos de dirección** para auditar, revisar, pulir, destilar, animar y más
- **Anti-patrones seleccionados** que le dicen explícitamente a la IA qué NO hacer

## Qué está incluido

### La habilidad: impeccable

Una habilidad de diseño integral con 7 referencias de dominios específicos ([ver habilidad](source/skills/impeccable/SKILL.md)):

| Referencia | Cubre |
|------------|--------|
| [typography](source/skills/impeccable/reference/typography.md) | Sistemas tipográficos, emparejamiento de fuentes, escalas modulares, OpenType |
| [color-and-contrast](source/skills/impeccable/reference/color-and-contrast.md) | OKLCH, neutros tintados, modo oscuro, accesibilidad |
| [spatial-design](source/skills/impeccable/reference/spatial-design.md) | Sistemas de espaciado, cuadrículas, jerarquía visual |
| [motion-design](source/skills/impeccable/reference/motion-design.md) | Curvas de aceleración, escalonamiento, reducción de movimiento |
| [interaction-design](source/skills/impeccable/reference/interaction-design.md) | Formularios, estados de foco, patrones de carga |
| [responsive-design](source/skills/impeccable/reference/responsive-design.md) | Enfoque móvil-primero, diseño fluido, consultas de contenedor (container queries) |
| [ux-writing](source/skills/impeccable/reference/ux-writing.md) | Etiquetas de botón, mensajes de error, estados vacíos |

### 18 Comandos

| Comando | Qué hace |
|---------|----------|
| `/impeccable teach` | Configuración única: reúne el contexto de diseño, guárdalo en la configuración |
| `/impeccable craft` | Flujo completo de dar forma y luego construir con iteración visual |
| `/impeccable extract` | Extrae componentes y tokens reutilizables hacia el sistema de diseño |
| `/audit` | Ejecuta comprobaciones de calidad técnica (a11y, rendimiento, adaptabilidad) |
| `/critique` | Revisión de diseño de UX: jerarquía, claridad, resonancia emocional |
| `/polish` | Pase final, alineación del sistema de diseño y preparación para el lanzamiento |
| `/distill` | Reduce a lo esencial |
| `/clarify` | Mejora los textos de la interfaz (copy de UX) poco claros |
| `/optimize` | Mejoras de rendimiento |
| `/harden` | Manejo de errores, onboarding, i18n, casos extremos |
| `/animate` | Añade movimiento intencionado |
| `/colorize` | Introduce color estratégico |
| `/bolder` | Amplifica diseños aburridos |
| `/quieter` | Atenúa diseños demasiado llamativos |
| `/delight` | Añade momentos de alegría |
| `/adapt` | Adapta para diferentes dispositivos |
| `/typeset` | Corrige la elección de fuentes, jerarquía y tamaño |
| `/layout` | Corrige el diseño, espaciado y ritmo visual |
| `/overdrive` | Añade efectos técnicamente extraordinarios |

#### Ejemplos de uso

**`/audit`** - Ejecuta comprobaciones de calidad, obtiene un informe (sin ediciones)
```
/audit blog              # Audita el hub de blog + las páginas de publicaciones
/audit dashboard         # Comprueba los componentes del dashboard
/audit checkout flow     # Se enfoca en la UX del checkout
```
*Cuándo usarlo:* Antes de realizar cambios, para entender qué necesita corregirse.

**`/normalize`** - Alinea con el sistema de diseño
```
/normalize blog          # Aplica tokens de diseño, corrige el espaciado
/normalize buttons       # Estandariza los estilos de los botones
```
*Cuándo usarlo:* Después de una auditoría, para corregir inconsistencias.

**`/critique`** - Revisión de diseño de UX
```
/critique landing page   # Revisa la UX de la página de destino
/critique onboarding     # Comprueba el flujo de onboarding
```
*Cuándo usarlo:* Cuando desees feedback de diseño, no soluciones técnicas.

**`/polish`** - Pase final antes de lanzar
```
/polish feature modal    # Limpia el modal antes de lanzarlo
/polish settings page    # Revisión final de la interfaz de configuración
```
*Cuándo usarlo:* Último paso antes de desplegar a producción.

**Combinando comandos:**
```
/audit /normalize /polish blog    # Flujo completo: auditar → corregir → pulir
/critique /harden checkout        # Revisión de UX + añadir manejo de errores
```

### Anti-Patrones

La habilidad incluye pautas explícitas sobre qué evitar:

- No uses fuentes sobreutilizadas (Arial, Inter, las predeterminadas del sistema)
- No uses texto gris sobre fondos de color
- No uses negro/gris puro (siempre tíñelos)
- No envuelvas todo en tarjetas ni anides tarjetas dentro de tarjetas
- No uses aceleración elástica o de rebote (se siente anticuada)

## Míralo en acción

Visita [impeccable.style](https://impeccable.style#casestudies) para ver estudios de casos de antes/después de proyectos reales transformados con comandos de Impeccable.

## Instalación

### Opción 1: Descargar del sitio web (Recomendado)

Visita [impeccable.style](https://impeccable.style), descarga el archivo ZIP para tu herramienta y extráelo en tu proyecto.

### Opción 2: Copiar desde el repositorio

**Cursor:**
```bash
cp -r dist/cursor/.cursor tu-proyecto/
```

> **Nota:** Las habilidades en Cursor requieren configuración:
> 1. Cambia al canal Nightly en Cursor Settings → Beta
> 2. Habilita Agent Skills en Cursor Settings → Rules
>
> [Más información sobre las habilidades de Cursor](https://cursor.com/docs/context/skills)

**Claude Code:**
```bash
# Específico del proyecto
cp -r dist/claude-code/.claude tu-proyecto/

# O global (se aplica a todos los proyectos)
cp -r dist/claude-code/.claude/* ~/.claude/
```

**OpenCode:**
```bash
cp -r dist/opencode/.opencode tu-proyecto/
```

**Pi:**
```bash
cp -r dist/pi/.pi tu-proyecto/
```

**Gemini CLI:**
```bash
cp -r dist/gemini/.gemini tu-proyecto/
```

> **Nota:** Las habilidades del Gemini CLI requieren configuración:
> 1. Instala la versión de vista previa: `npm i -g @google/gemini-cli@preview`
> 2. Ejecuta `/settings` y habilita "Skills"
> 3. Ejecuta `/skills list` para verificar la instalación
>
> [Más información sobre las habilidades del Gemini CLI](https://geminicli.com/docs/cli/skills/)

**Codex CLI:**
```bash
cp -r dist/codex/.codex/* ~/.codex/
```

**Trae:**
```bash
# Trae China (versión doméstica)
cp -r dist/trae/.trae-cn/skills/* ~/.trae-cn/skills/

# Trae Internacional
cp -r dist/trae/.trae/skills/* ~/.trae/skills/
```

> **Nota:** Trae tiene dos versiones con diferentes directorios de configuración:
> - **Trae China**: `~/.trae-cn/skills/`
> - **Trae Internacional**: `~/.trae/skills/`
>
> Después de copiar, reinicia el IDE de Trae para activar las habilidades.

**Rovo Dev:**
```bash
# Específico del proyecto
cp -r dist/rovo-dev/.rovodev tu-proyecto/

# O global (se aplica a todos los proyectos)
cp -r dist/rovo-dev/.rovodev/skills/* ~/.rovodev/skills/
```

## Uso

Una vez instalado, usa los comandos en tu entorno de IA:

```
/audit           # Encuentra problemas
/normalize       # Corrige inconsistencias
/polish          # Limpieza final
/distill         # Elimina la complejidad
```

La mayoría de los comandos aceptan un argumento opcional para enfocarse en un área específica:

```
/audit header
/polish checkout-form
```

**Nota:** Codex CLI usa una sintaxis diferente: `/prompts:audit`, `/prompts:polish`, etc.

## CLI

Impeccable incluye una interfaz de línea de comandos (CLI) independiente para detectar anti-patrones sin necesidad de un entorno de IA:

```bash
npx impeccable detect src/                   # escanea un directorio
npx impeccable detect index.html             # escanea un archivo HTML
npx impeccable detect https://example.com    # escanea una URL (Puppeteer)
npx impeccable detect --fast --json .        # solo expresiones regulares, salida JSON
```

El detector detecta 24 problemas clasificados entre "basura de IA" (bordes de acento lateral, degradados púrpuras, rebotes, brillos oscuros) y calidad general del diseño (longitud de línea, rellenos reducidos, objetivos táctiles pequeños, niveles de encabezado omitidos y más).

## Herramientas compatibles

- [Cursor](https://cursor.com)
- [Claude Code](https://claude.ai/code)
- [OpenCode](https://opencode.ai)
- [Pi](https://pi.dev)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [Codex CLI](https://github.com/openai/codex)
- [VS Code Copilot](https://code.visualstudio.com)
- [Kiro](https://kiro.dev)
- [Trae](https://trae.ai)
- [Rovo Dev](https://www.atlassian.com/software/rovo)

## Contribuir

Consulta [DEVELOP.md](DEVELOP.md) para conocer las pautas de contribución e instrucciones de compilación.

## Licencia

Apache 2.0. Ver [LICENSE](LICENSE).

La habilidad impeccable se basa en la [habilidad original de diseño frontend de Anthropic](https://github.com/anthropics/skills/tree/main/skills/frontend-design). Ver [NOTICE.md](NOTICE.md) para atribuciones.

---

Creado por [Paul Bakaus](https://www.paulbakaus.com)
