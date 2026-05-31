# Slide 3 — Definición operativa de SDD

## Tesis

SDD no reemplaza el desarrollo: lo ordena. La especificación se escribe primero como contrato observable; diseño, código y tests se derivan de ella.

## Mensajes clave

- **Bucle canónico de 4 fases**: especificar → planificar → ejecutar → verificar. El mismo bucle aparece en las 5 herramientas SDD del slide 7.
- La analogía del arquitecto firmando planos antes de levantar muros: cualquier desviación se discute con el plano en la mano.
- "Spec" no es "documento Word": es un artefacto vivo, ejecutable o al menos verificable, que vive en el repo.

## Cross-refs wiki

- `wiki/conceptos/spec-driven-development.md` — bucle canónico (ver sección "Bucle canónico").
- `wiki/conceptos/comparativa-sdd-tools.md` — cada herramienta nombra el bucle distinto: GSD `discuss → plan → execute → verify`, Spec Kit `constitution → specify → plan → tasks → implement`, OpenSpec `propose → apply → archive`, Taskmaster `parse-prd → expand → implement`, PAUL `plan → apply → unify`.

## Aclaraciones frecuentes

- *Spec ≠ requisito de producto*. La spec captura comportamiento observable, criterios de aceptación e invariantes. Un requisito puede traducirse en cero o varias specs.
- *Spec ≠ test*. Un test es una instancia ejecutable derivada de la spec. La spec puede tener invariantes que ningún test concreto cubre completamente (p. ej. "para todo input válido…").

## Preguntas tipo de la audiencia

- *"¿Y los diagramas de secuencia / C4? ¿Eso es spec?"* → Sí, son una expresión visual de parte de la spec. Lo importante es que vivan junto al código y se actualicen con él.
- *"¿OpenAPI cuenta como spec?"* → Cuenta como **spec de contrato API**, una capa de la spec total. No sustituye spec de comportamiento ni de invariantes.

## Transición al siguiente slide

"Si esto es SDD, ¿qué retornos verificables esperamos? Cuatro."
