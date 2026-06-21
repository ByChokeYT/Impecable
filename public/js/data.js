// ============================================
// DATOS: Áreas de enfoque de habilidades, procesos de comandos y relaciones
// ============================================

// Habilidades que están completamente listas para uso público
// Todas las demás mostrarán "Próximamente"
export const readySkills = [
  'impeccable'  // Habilidad consolidada con todos los dominios de diseño
];

export const readyCommands = [
  'layout'  // Primer comando en estar completamente listo
];

// Comandos marcados como beta — mostrados con una insignia en la interfaz
export const betaCommands = [
  'overdrive'
];

// Habilidad consolidada impeccable con dominios de referencia
export const skillFocusAreas = {
  'impeccable': [
    { area: 'Tipografía', detail: 'Escala, ritmo, jerarquía, expresión' },
    { area: 'Color y Contraste', detail: 'Accesibilidad, sistemas, tematización' },
    { area: 'Diseño Espacial', detail: 'Diseño (layout), espaciado, composición' },
    { area: 'Adaptabilidad', detail: 'Diseños fluidos, objetivos táctiles' },
    { area: 'Interacción', detail: 'Estados, retroalimentación, prestaciones (affordances)' },
    { area: 'Movimiento', detail: 'Microinteracciones, transiciones' },
    { area: 'Redacción de UX', detail: 'Claridad, tono de voz, mensajes de error' }
  ]
};

// Recuentos de pautas por dimensión (verificados a partir de archivos de referencia)
export const dimensionGuidelineCounts = {
  'Typography': 33,
  'Color & Contrast': 29,
  'Spatial Design': 27,
  'Motion': 32,
  'Interaction': 36,
  'Responsive': 23,
  'UX Writing': 32
};

// Dominios de referencia dentro de la habilidad impeccable
export const skillReferenceDomains = [
  'typography',
  'color-and-contrast',
  'spatial-design',
  'responsive-design',
  'interaction-design',
  'motion-design',
  'ux-writing'
];

export const commandProcessSteps = {
  'shape': ['Entrevista', 'Sintetizar', 'Resumen', 'Confirmar'],
  'impeccable craft': ['Modelar', 'Referenciar', 'Construir', 'Iterar'],
  'impeccable': ['Dirigir', 'Diseñar', 'Construir', 'Refinar'],
  'overdrive': ['Evaluar', 'Elegir', 'Construir', 'Pulir'],
  'critique': ['Evaluar', 'Criticar', 'Priorizar', 'Sugerir'],
  'audit': ['Escanear', 'Documentar', 'Priorizar', 'Recomendar'],
  'typeset': ['Evaluar', 'Seleccionar', 'Escalar', 'Refinar'],
  'layout': ['Evaluar', 'Cuadrícula', 'Ritmo', 'Equilibrio'],
  'colorize': ['Analizar', 'Estrategia', 'Aplicar', 'Equilibrio'],
  'animate': ['Identificar', 'Diseñar', 'Implementar', 'Pulir'],
  'delight': ['Identificar', 'Diseñar', 'Implementar'],
  'bolder': ['Analizar', 'Amplificar', 'Impacto'],
  'quieter': ['Analizar', 'Reducir', 'Refinar'],
  'distill': ['Auditar', 'Eliminar', 'Clarificar'],
  'clarify': ['Leer', 'Simplificar', 'Mejorar', 'Probar'],
  'adapt': ['Analizar', 'Ajustar', 'Optimizar'],
  'polish': ['Descubrir', 'Revisar', 'Refinar', 'Verificar'],
  'optimize': ['Perfilador', 'Identificar', 'Mejorar', 'Medir'],
  'harden': ['Probar', 'Manejar', 'Onboarding', 'Validar'],
  'impeccable teach': ['Explorar', 'Entrevista', 'Sintetizar', 'Guardar'],
  'impeccable extract': ['Identificar', 'Abstraer', 'Migrar', 'Documentar']
};

export const commandCategories = {
  // CREATE - construir algo nuevo
  'shape': 'create',
  'impeccable craft': 'create',
  'impeccable': 'create',
  // EVALUATE - revisar y evaluar
  'critique': 'evaluate',
  'audit': 'evaluate',
  // REFINE - mejorar diseño existente
  'typeset': 'refine',
  'layout': 'refine',
  'colorize': 'refine',
  'animate': 'refine',
  'delight': 'refine',
  'bolder': 'refine',
  'quieter': 'refine',
  'overdrive': 'refine',
  // SIMPLIFY - reducir y clarificar
  'distill': 'simplify',
  'clarify': 'simplify',
  'adapt': 'simplify',
  // HARDEN - listos para producción
  'polish': 'harden',
  'optimize': 'harden',
  'harden': 'harden',
  // SYSTEM - configuración y herramientas
  'impeccable teach': 'system',
  'impeccable extract': 'system'
};

// Relaciones de habilidades - ahora consolidadas en la habilidad impeccable
// La habilidad impeccable contiene todos los dominios como archivos de referencia
export const skillRelationships = {
  'impeccable': {
    description: 'Inteligencia de diseño integral con carga progresiva de referencias',
    referenceDomains: ['typography', 'color-and-contrast', 'spatial-design', 'responsive-design', 'interaction-design', 'motion-design', 'ux-writing']
  }
};

export const commandRelationships = {
  'shape': { flow: 'Crear: Planifica la UX y la UI a través de un descubrimiento estructurado' },
  'impeccable craft': { flow: 'Crear: Flujo completo de modelar y luego construir con iteración visual' },
  'impeccable': { flow: 'Crear: Diseño libre con inteligencia de diseño integral' },
  'overdrive': { combinesWith: ['animate', 'delight'], flow: 'Refinar: Efectos técnicamente extraordinarios' },
  'critique': { leadsTo: ['polish', 'distill', 'bolder', 'quieter', 'typeset', 'layout'], flow: 'Evaluar: Revisión de UX y diseño con puntuación' },
  'audit': { leadsTo: ['harden', 'optimize', 'adapt', 'clarify'], flow: 'Evaluar: Auditoría de calidad técnica' },
  'typeset': { combinesWith: ['bolder', 'polish'], flow: 'Refinar: Corrige la tipografía y la jerarquía de fuentes' },
  'layout': { combinesWith: ['distill', 'adapt'], flow: 'Refinar: Corrige el diseño y el espaciado' },
  'colorize': { combinesWith: ['bolder', 'delight'], flow: 'Refinar: Añade color estratégico' },
  'animate': { combinesWith: ['delight'], flow: 'Refinar: Añade movimiento con propósito' },
  'delight': { combinesWith: ['bolder', 'animate'], flow: 'Refinar: Añade personalidad y alegría' },
  'bolder': { pairs: 'quieter', flow: 'Refinar: Amplifica diseños tímidos' },
  'quieter': { pairs: 'bolder', flow: 'Refinar: Atenúa diseños agresivos' },
  'distill': { combinesWith: ['quieter', 'polish'], flow: 'Simplificar: Reduce a la esencia' },
  'clarify': { combinesWith: ['polish', 'adapt'], flow: 'Simplificar: Mejora el copy de UX' },
  'adapt': { combinesWith: ['polish', 'clarify'], flow: 'Simplificar: Adapta para diferentes contextos' },
  'polish': { flow: 'Consolidar: Pase final y alineación con el sistema de diseño' },
  'optimize': { flow: 'Consolidar: Mejoras de rendimiento' },
  'harden': { combinesWith: ['optimize'], flow: 'Consolidar: Casos extremos, onboarding y manejo de errores' },
  'impeccable teach': { flow: 'Sistema: Configuración única del contexto de diseño del proyecto' },
  'impeccable extract': { flow: 'Sistema: Extrae componentes y tokens del sistema de diseño' }
};
