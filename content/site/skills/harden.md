---
tagline: "Prepara tus interfaces para producción. Casos límite, onboarding, internacionalización, errores y desbordamientos."
---

## Cuándo usarlo

`/harden` es para el día en que tu interfaz se enfrente a la realidad. Los datos de los usuarios reales son caóticos: nombres de 60 caracteres, títulos de productos en alemán, precios en miles de millones, listas vacías, errores 500, modos sin conexión y textos de derecha a izquierda (RTL). Los diseños que solo funcionan con datos perfectos no están listos para producción.

Recurre a él antes de un lanzamiento, antes de abrirte a un nuevo mercado o cada vez que un informe de error comience con: "el usuario tenía un nombre muy largo y...".

## Cómo funciona

La habilidad trabaja sobre cinco dimensiones de resistencia en el mundo real:

1. **Extremos de texto y datos**: Textos extremadamente largos o cortos, caracteres especiales, emojis, lenguajes RTL, números de muchos dígitos, listas con miles de elementos y estados vacíos sin información.
2. **Escenarios de error**: Fallos de red, códigos de API 4xx/5xx, errores de validación, problemas de permisos, límites de frecuencia (rate limits) y operaciones concurrentes.
3. **Internacionalización (i18n)**: Traducciones largas (el alemán suele ser un 30% más largo que el inglés), idiomas RTL, formatos de fecha y número localizados, símbolos de moneda y conjuntos de caracteres especiales.
4. **Onboarding y estados vacíos**: Primeras experiencias de uso, diseño de pantallas vacías que orientan al usuario, divulgación progresiva y descubrimiento de funcionalidades para alguien que nunca las ha visto antes.
5. **Dispositivo y contexto de red**: Objetivos táctiles cómodos, comportamiento sin conexión, conexiones lentas y modos de bajo consumo.

Para cada dimensión, identifica los modos de fallo y luego aplica soluciones de diseño concretas: manejo de desbordamientos (`overflow`), pantallas vacías útiles, interfaces claras de error, layouts seguros para traducción, pluralizaciones correctas y estados de caída seguros (`fallbacks`).

## Pruébalo

Comienza con una página y una dimensión específica:

```
/harden la página de perfil de usuario para nombres largos
```

Resultado esperado:

- El campo `.user-name` ahora incluye `text-overflow: ellipsis` con un tooltip que muestra el valor completo al pasar el cursor.
- El elemento `.bio` pasa de una altura fija a una `max-height` con un control desplegable de "mostrar más".
- Se añade un estado vacío bien diseñado para usuarios que aún no tienen biografía.
- Se añade un cargador de esqueleto (`skeleton loader`) para la carga asíncrona del avatar.
- Se prueba la consistencia visual del nombre en longitudes de 1, 20, 60 y 200 caracteres.

Es recomendable ejecutarlo página por página en lugar de todo a la vez. El primer pase es el más intensivo; los siguientes encuentran menos problemas a medida que los patrones de robustez del código se consolidan.

## Problemas comunes

- **Esperar a recibir el informe de error.** `/harden` es preventivo. Si te encuentras corrigiendo el mismo tipo de error dos veces, ejecuta `/harden` en toda la funcionalidad.
- **Tratar los estados de error y vacíos como detalles secundarios.** Gran parte de la robustez del software depende de la UI de errores y estados vacíos. Dedícales tiempo de diseño, no te limites a un bloque `catch` silencioso en el código.
- **Ignorar i18n porque "de momento solo estamos en español".** Los layouts adaptados a internacionalización son mejores en cualquier idioma. Contenedores flexibles, saltos de línea correctos y altura de línea generosa. Nada de eso perjudica al idioma base y ayuda al mantenimiento.
