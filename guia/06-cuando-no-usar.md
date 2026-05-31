# Slide 6 — Cuándo SDD NO paga

## Tesis

SDD es una inversión, no un decreto. Aplicarla donde no paga la convierte en burocracia y mata la confianza del equipo en el método.

## 4 anti-patrones

1. **Prototipos de un día** — feedback visual con stakeholders. Spec llega cuando la idea sobrevive al primer contacto.
2. **Scripts internos efímeros** — sin SLA, vida corta. Overhead innecesario.
3. **Spike técnico sin requisitos** — si aún no sabemos qué construimos, especificarlo es ficción.
4. **Spec como burocracia** — documento muerto que nadie consulta. Sin ejecución ni validación, es papel.

## Cross-refs wiki

- `wiki/conceptos/spec-driven-development.md` — sección "Cuándo NO conviene".

## Patrón visual del slide

Esta slide usa la paleta naranja (warning) en lugar de azul. Es deliberado: comunica visualmente "cuidado con esto" en contraste con la paleta azul de los slides "qué hacer".

## Mensajes a reforzar

- La trampa más peligrosa es la 4: **spec como burocracia**. Aparece cuando se introduce SDD por mandato sin formación, y el equipo escribe specs para cumplir, no para usar.
- Una buena heurística: si tras 2 sprints la spec **no se ha modificado** y **nadie la ha consultado**, probablemente no era SDD lo que necesitabas.

## Preguntas tipo

- *"¿Y si el equipo es senior y prefiere ir a código?"* → Si funciona y el coste de defecto es bajo, no fuerces SDD. Si los defectos crecen, vuelve a tener la conversación.
- *"¿Dónde está la línea entre 'prototipo' y 'producto'?"* → Cuando un usuario externo paga o depende del sistema. Antes de eso, prototipo.

## Transición

"Bien: ¿qué relación tiene SDD con TDD y BDD? ¿Y con qué herramientas se ejecuta?"
