---
tagline: "Sustracción implacable. Reduce los diseños a su esencia pura."
---

## Cuándo usarlo

`/distill` elimina lo que no debería estar ahí. Botones que compiten entre sí, información redundante, bordes decorativos innecesarios, tres fuentes distintas donde una sola funciona, o seis elementos de navegación donde bastan tres. Úsalo cuando una interfaz se sienta saturada, ruidosa o parezca que está intentando hacer demasiadas cosas a la vez.

Recurre a este comando después de que `/critique` señale problemas de "carga cognitiva" o "ruido visual", o en cualquier momento en que una página haya crecido por acumulación desordenada sin que nadie haya hecho un trabajo de edición y limpieza.

## Cómo funciona

La habilidad parte de una única pregunta clave: ¿cuál es la tarea principal que esta interfaz intenta resolver? Todo lo que no ayude de forma directa a esa tarea se pone bajo revisión para eliminarse o simplificarse.

Funciona en dos fases:

1. **Evaluar las fuentes de complejidad**: Demasiados elementos, variación excesiva de estilos, sobrecarga de información, ruido visual, jerarquía confusa o acumulación excesiva de funciones. Identifica cada una.
2. **Editar de forma implacable**: Eliminar lo que no es esencial. Combinar lo que se pueda unificar. Ocultar lo que pueda esperar. Consolidar las variaciones en un solo tratamiento visual. Comprometerse con un único lenguaje visual claro.

El principio básico: la simplicidad no consiste en tener menos funciones, sino en poner menos obstáculos entre los usuarios y sus objetivos. Cada elemento en la página debe justificar su existencia.

## Pruébalo

```
/distill este panel de control (dashboard)
```

Antes: cuatro estilos de tarjeta diferentes, tres variantes de botón, dos estilos de encabezado y una barra lateral con 14 elementos agrupados en 5 secciones.

Después de un pase de `/distill`, cambios típicos:

- Consolidar los cuatro estilos de tarjeta en uno solo.
- Elegir una única variante de botón principal y degradar las otras a enlaces de texto.
- Unificar el tratamiento de los encabezados.
- Agrupar la barra lateral en 3 secciones en lugar de 5.
- Ocultar las opciones avanzadas detrás de una sección expandible (divulgación progresiva).

Menos elementos. Cada uno de ellos mucho más claro.

## Problemas comunes

- **Confundir simplificar (`distill`) con eliminar sin criterio.** Simplificar elimina los obstáculos, no las funciones necesarias para los usuarios. Si un usuario depende de algo a diario, busca la manera de mantenerlo de forma discreta, no lo elimines.
- **Ejecutarlo demasiado pronto.** Si la funcionalidad aún está en desarrollo, simplificarla ahora significa tener que hacerlo de nuevo la semana que viene. Espera a que la estructura esté madura y estable.
- **Esperar que reemplace el trabajo de jerarquía.** A veces, la solución correcta no es eliminar elementos, sino ordenarlos mejor. Recurre a `/layout` cuando el problema sea la disposición espacial, no la cantidad de elementos.
