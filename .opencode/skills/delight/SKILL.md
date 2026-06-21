---
name: delight
description: Añade momentos de alegría, personalidad y toques inesperados que hacen que las interfaces sean memorables y agradables de usar. Eleva lo funcional a lo deleitable. Úsalo cuando el usuario solicite pulir la interfaz, añadir personalidad, animaciones, microinteracciones, deleite o hacer que una interfaz se sienta divertida o memorable.
version: 2.1.1
user-invocable: true
argument-hint: "[objetivo]"
---

Identifica oportunidades para añadir momentos de alegría, personalidad y detalles inesperados que transformen interfaces funcionales en experiencias deleitables.

## PREPARACIÓN OBLIGATORIA

Invoca /impeccable — contiene los principios de diseño, antipatrones y el **Protocolo de Recopilación de Contexto**. Sigue el protocolo antes de proceder — si aún no existe un contexto de diseño, DEBES ejecutar /impeccable teach primero. Adicionalmente, recopila: qué es apropiado para el sector (juguetón vs. profesional vs. extravagante vs. elegante).

---

## Evaluar Oportunidades de Deleite

Identifica dónde el deleite mejoraría (y no distraería de) la experiencia:

1. **Encontrar momentos naturales de deleite**:
   - **Estados de éxito**: Acciones completadas (guardar, enviar, publicar).
   - **Estados vacíos**: Primeras experiencias, procesos de inducción (onboarding).
   - **Estados de carga**: Periodos de espera que podrían ser entretenidos.
   - **Logros**: Hitos, rachas de uso, finalización de tareas.
   - **Interacciones**: Estados hover, clics, arrastres.
   - **Errores**: Suavizar momentos frustrantes.
   - **Easter eggs (secretos)**: Descubrimientos ocultos para usuarios curiosos.

2. **Comprender el contexto**:
   - ¿Cuál es la personalidad de la marca? (¿Juguetona? ¿Profesional? ¿Extravagante? ¿Elegante?)
   - ¿Quién es la audiencia? (¿Usuarios tecnológicos? ¿Creativos? ¿Corporativos?)
   - ¿Cuál es el contexto emocional? (¿Logro? ¿Exploración? ¿Frustración?)
   - ¿Qué es apropiado? (Una app bancaria ≠ una app de juegos).

3. **Definir la estrategia de deleite**:
   - **Sofisticación sutil**: Microinteracciones refinadas (marcas de lujo).
   - **Personalidad juguetona**: Ilustraciones y textos ingeniosos (apps de consumo).
   - **Sorpresas útiles**: Anticiparse a las necesidades antes de que el usuario lo pida (herramientas de productividad).
   - **Riqueza sensorial**: Sonidos satisfactorios, animaciones fluidas (herramientas creativas).

Si alguno de estos puntos no está claro en el código base, STOP and call the `question` tool to clarify.

**CRÍTICO**: El deleite debe mejorar la usabilidad, nunca oscurecerla. Si los usuarios prestan más atención al deleite que a lograr su objetivo, has ido demasiado lejos.

## Principios del Deleite

Sigue estas directrices:

### El Deleite Amplifica, Nunca Bloquea
- Los momentos de deleite deben ser rápidos (< 1 segundo).
- Nunca retrases la funcionalidad principal por el deleite.
- Haz que el deleite sea opcional o sutil.
- Respeta el tiempo y el enfoque del usuario en su tarea.

### Sorpresa y Descubrimiento
- Oculta detalles agradables para que los usuarios los descubran.
- Recompensa la exploración y la curiosidad.
- No anuncies cada momento de deleite.
- Deja que los usuarios compartan sus descubrimientos con otros.

### Adecuado al Contexto
- Adapta el deleite al momento emocional (celebra el éxito, empatiza con los errores).
- Respeta el estado del usuario (no seas gracioso durante errores críticos).
- Coincide con la personalidad de la marca y las expectativas de la audiencia.
- Sensibilidad cultural (lo que resulta agradable varía según la cultura).

### Acumulación en el Tiempo
- El deleite debe mantenerse fresco tras un uso repetido.
- Varía las respuestas (no muestres la misma animación cada vez).
- Revela capas más profundas con el uso continuo.
- Genera expectativa a través de patrones.

## Técnicas de Deleite

Añade personalidad y alegría a través de estos métodos:

### Microinteracciones y Animación

**Deleite en botones**:
```css
/* Pulsación de botón satisfactoria */
.button {
  transition: transform 0.1s, box-shadow 0.1s;
}
.button:active {
  transform: translateY(2px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

/* Efecto de onda al hacer clic */
/* Elevación suave en hover */
.button:hover {
  transform: translateY(-2px);
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1); /* ease-out-quart */
}
```

**Deleite en cargas**:
- Animaciones de carga ingeniosas (no solo spinners).
- Personalidad en los mensajes de carga (escribe mensajes específicos para el producto, no relleno genérico de IA).
- Indicación de progreso con mensajes de aliento.
- Pantallas de esqueleto con animaciones sutiles.

**Animaciones de éxito**:
- Animación de dibujo de marca de verificación.
- Explosión de confeti para logros importantes.
- Escala suave + desvanecimiento para confirmación.
- Efectos de sonido satisfactorios (sutiles).

**Sorpresas en hover**:
- Iconos que se animan al pasar el cursor.
- Cambios de color o efectos de brillo.
- Tooltips que se revelan con personalidad.
- Cambios de cursor (cursores personalizados para experiencias de marca).

### Personalidad en los Textos (Copy)

**Mensajes de error con personalidad**:
```
"Error 404"
"Esta página está jugando a las escondidas. (Y va ganando)"

"Error de conexión"
"Parece que el internet se tomó un descanso para el café. ¿Quieres volver a intentarlo?"
```

**Estados vacíos alentadores**:
```
"Sin proyectos"
"Tu lienzo te espera. Crea algo increíble."

"Sin mensajes"
"¡Bandeja de entrada en cero! Hoy la estás rompiendo."
```

**Etiquetas y tooltips ingeniosos**:
```
"Eliminar"
"Enviar al vacío" (para una marca atrevida/juguetona)

"Ayuda"
"¡Rescátame!" (tooltip)
```

**IMPORTANTE**: Ajusta la personalidad del texto a la marca. Los bancos no deben ser extravagantes, pero pueden ser cálidos.

### Ilustraciones y Personalidad Visual

**Ilustraciones personalizadas**:
- Ilustraciones de estados vacíos (no iconos de catálogo).
- Ilustraciones de estados de error (monstruos amigables, personajes curiosos).
- Ilustraciones de estados de carga (personajes animados).
- Ilustraciones de estados de éxito (celebraciones).

**Personalidad en iconos**:
- Conjunto de iconos personalizados que coincidan con la personalidad de la marca.
- Iconos animados (movimiento sutil en hover/clic).
- Iconos ilustrativos (más detallados que los genéricos).
- Estilo consistente en todos los iconos.

**Efectos de fondo**:
- Efectos sutiles de partículas.
- Fondos de malla de degradados.
- Patrones geométricos.
- Profundidad de paralaje.
- Temas basados en la hora del día (mañana vs. noche).

### Interacciones Satisfactorias

**Deleite al arrastrar y soltar**:
- Efecto de elevación al arrastrar (sombra, escala).
- Animación de ajuste (snap) al soltar.
- Sonido de colocación satisfactorio.
- Mensaje emergente de deshacer ("¿Lo soltaste en el lugar equivocado? [Deshacer]").

**Interruptores (Toggles)**:
- Deslizamiento suave con física de resorte.
- Transición de color.
- Retroalimentación háptica en móviles.
- Efecto de sonido opcional.

**Progreso y logros**:
- Contadores de rachas con hitos de celebración.
- Barras de progreso que "celebran" al llegar al 100%.
- Desbloqueo de insignias con animación.
- Estadísticas motivadoras ("¡Estás imparable! 5 días seguidos").

**Interacciones de formulario**:
- Campos de entrada que se animan al enfocarse.
- Casillas de verificación con un pulso de escala satisfactorio al marcarse.
- Estado de éxito que celebra la entrada de datos válida.
- Áreas de texto que se expanden automáticamente.

### Diseño de Sonido

**Señales de audio sutiles** (cuando sea apropiado):
- Sonidos de notificación (distintivos pero no molestos).
- Sonidos de éxito (un satisfactorio "ding").
- Sonidos de error (empáticos, no estridentes).
- Sonidos de escritura para chat/mensajería.
- Audio de fondo ambiental (muy sutil).

**IMPORTANTE**:
- Respeta la configuración de sonido del sistema.
- Proporciona una opción para silenciar.
- Mantén los volúmenes bajos (señales sutiles, no alarmas).
- No reproduzcas sonido en cada interacción (la fatiga de sonido es real).

### Easter Eggs y Detalles Ocultos

**Recompensas por descubrimiento**:
- El código Konami desbloquea un tema especial.
- Atajos de teclado ocultos (Cmd+K para funciones especiales).
- Elementos interactivos ocultos en logotipos o ilustraciones.
- Bromas en el texto alternativo de las imágenes (¡también para usuarios de lectores de pantalla!).
- Mensajes en consola para desarrolladores ("¿Te gusta lo que ves? ¡Estamos contratando!").

**Toques estacionales**:
- Temas navideños o festivos (sutiles y con buen gusto).
- Cambios de color estacionales.
- Variaciones basadas en el clima local.
- Cambios basados en la hora (oscuro por la noche, claro por el día).

**Personalidad contextual**:
- Diferentes mensajes según la hora del día.
- Respuestas a acciones específicas del usuario.
- Variaciones aleatorias (no mostrar siempre lo mismo).
- Revelaciones progresivas con el uso continuo.

### Estados de Carga y Espera

**Haz que la espera sea atractiva**:
- Mensajes de carga interesantes que rotan.
- Barras de progreso con personalidad.
- Mini-juegos durante cargas largas.
- Datos curiosos o consejos mientras se espera.
- Cuenta regresiva con mensajes de ánimo.

```
Mensajes de carga — escribe mensajes específicos para tu producto, no relleno genérico de IA:
- "Procesando tus últimos números..."
- "Sincronizando con los cambios de tu equipo..."
- "Preparando tu panel de control..."
- "Buscando novedades desde ayer..."
```

**ADVERTENCIA**: Evita mensajes de carga trillados como "Herreando píxeles", "Enseñando a bailar a los robots", "Consultando la bola 8 mágica", "Contando al revés desde el infinito". Estos son textos de tipo basura de IA, reconocibles al instante como generados por máquina. Escribe mensajes específicos de lo que hace realmente tu producto.

### Momentos de Celebración

**Celebraciones de éxito**:
- Confeti para hitos importantes.
- Marcas de verificación animadas al completar tareas.
- Celebraciones de barras de progreso al llegar al 100%.
- Notificaciones de estilo "logro desbloqueado".
- Mensajes personalizados ("¡Has publicado tu artículo número 10!").

**Reconocimiento de hitos**:
- Tratamiento especial para las primeras acciones.
- Seguimiento y celebración de rachas de uso.
- Progreso hacia metas.
- Celebración de aniversarios.

## Patrones de Implementación

**Librerías de animación**:
- Framer Motion (React).
- GSAP (universal).
- Lottie (animaciones de After Effects).
- Canvas confetti (efectos de fiesta).

**Librerías de sonido**:
- Howler.js (gestión de audio).
- Use-sound (React hook).

**Librerías de física**:
- React Spring (física de resorte).
- Popmotion (primitivas de animación).

**IMPORTANTE**: El tamaño de los archivos importa. Comprime imágenes, optimiza animaciones y carga de forma perezosa (lazy load) las funciones de deleite.

**NUNCA**:
- Retrases la funcionalidad principal por el deleite.
- Obligues a los usuarios a pasar por los momentos de deleite (hazlos omitibles).
- Uses el deleite para ocultar una mala experiencia de usuario (UX).
- Te pases (menos es más).
- Ignores la accesibilidad (anima con responsabilidad, proporciona alternativas).
- Hagas deleitable cada interacción (los momentos especiales deben seguir siendo especiales).
- Sacrifiques el rendimiento por el deleite.
- Seas inoportuno con el contexto (interpreta bien la situación).

## Verificar Calidad del Deleite

Prueba que el deleite realmente deleite:

- **Reacciones del usuario**: ¿Sonríen los usuarios? ¿Comparten capturas de pantalla?
- **No resulta molesto**: ¿Sigue siendo agradable después de verlo 100 veces?
- **No bloquea**: ¿Pueden los usuarios desactivarlo u omitirlo?
- **Rendimiento**: Sin tirones, sin ralentizaciones.
- **Apropiado**: Coincide con la marca y el contexto.
- **Accesible**: Funciona con reducción de movimiento y lectores de pantalla.

Recuerda: El deleite es la diferencia entre una herramienta y una experiencia. Añade personalidad, sorprende positivamente al usuario y crea momentos que valga la pena compartir. Pero respeta siempre la usabilidad: el deleite debe mejorar, nunca obstruir.