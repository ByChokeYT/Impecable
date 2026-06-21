---
tagline: "Reescribe textos de UX confusos para que las interfaces se expliquen solas."
---

## Cuándo usarlo

`/clarify` es para textos de interfaz que hacen dudar al usuario. Etiquetas confusas, textos de botones ambiguos, mensajes de error que culpan al usuario, cuadros de información (`tooltips`) que repiten la misma etiqueta o estados vacíos que no aportan utilidad. Úsalo cuando el problema no sea la distribución ni el color, sino las palabras.

Buenas razones para usarlo: "los usuarios no entienden este campo", "el mensaje de error no ayuda", "no sé qué poner en este botón", "este tooltip es redundante".

## Cómo funciona

La habilidad reescribe textos en las superficies donde suelen aparecer los problemas de copy en UX:

1. **Etiquetas e indicaciones**: directas, específicas, indicando exactamente qué se espera.
2. **Textos en botones**: comenzando con un verbo de acción y describiendo el resultado, no la acción técnica. "Guardar cambios" en lugar de "Aceptar" u "OK".
3. **Mensajes de error**: explican qué salió mal, de quién es la responsabilidad (sistema/servidor) y qué hacer a continuación. Nunca culpan al usuario.
4. **Estados vacíos**: orientan al usuario, explican por qué la pantalla está vacía y ofrecen un siguiente paso de acción.
5. **Tooltips y textos de ayuda**: añaden información de valor que la etiqueta principal no puede contener; nunca repiten el título.
6. **Diálogos de confirmación**: nombran las consecuencias exactas del proceso, no solo la acción.

La habilidad utiliza la audiencia y el estado mental definidos en `.impeccable.md` para ajustar el tono. Una audiencia técnica obtiene un lenguaje preciso y especializado. Una audiencia general obtiene explicaciones simples. Usuarios con prisa obtienen textos cortos. Usuarios ansiosos (en pagos o eliminaciones) obtienen mensajes de seguridad y calma.

## Pruébalo

```
/clarify el formulario de facturación
```

Antes y después típicos:

- Etiqueta "Dirección de facturación" → "Dirección registrada en tu tarjeta"
- Marcador de posición "Introduce tu número de IVA" → "Número de IVA (opcional, para empresas)"
- Error "Entrada no válida" → "Este número de tarjeta debe tener 15 dígitos. Introdujiste 14."
- Botón "Enviar" → "Pagar $29 y suscribirse"
- Estado vacío "No hay transacciones aún" → "Los cobros de tus compras aparecerán aquí después de tu primer pedido."

## Problemas comunes

- **Escribir de forma ingeniosa en lugar de clara.** `clarify` no es para añadir adornos de marca. Si el texto ya es claro, no uses esta habilidad. Elige `/delight` si buscas dar más personalidad.
- **Omitir la definición de la audiencia.** `clarify` necesita saber quién está leyendo. Si tu `.impeccable.md` no especifica el nivel técnico de la audiencia, las reescrituras serán genéricas.
- **Ejecutar `clarify` en textos de marketing.** Esta habilidad es para textos UX funcionales: etiquetas, errores e instrucciones. Los textos publicitarios o comerciales requieren otra estructura y un redactor humano.
