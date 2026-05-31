# Slide 4 — Beneficios verificables

## Tesis

El retorno aparece cuando la spec se mantiene viva, no cuando se escribe una vez y se archiva. SDD es una disciplina, no un entregable.

## Cuatro retornos

1. **Alineación técnica y funcional** — un solo lenguaje entre producto, backend y frontend.
2. **Menos deuda accidental** — el diseño nace con restricciones explícitas.
3. **Tests con propósito** — cubren criterios de aceptación reales, no internals.
4. **Onboarding más rápido** — specs vivas como mapa del sistema.

## Cross-refs wiki

- `wiki/conceptos/spec-driven-development.md` — sección "Cuándo conviene".
- `wiki/conceptos/coste-total-tokens.md` — cuando se trabaja con agentes IA, la spec reduce coste de tokens al evitar re-explicaciones.
- `wiki/conceptos/alucinaciones.md` — la spec es el principal antídoto contra alucinaciones del agente.

## Mensajes a reforzar

- Los 4 retornos **no son simultáneos**. El primero (alineación) aparece en el primer sprint. El cuarto (onboarding) tarda meses.
- "Métricas verificables" es deliberado: no decimos "más calidad" (intangible) sino "menos retrabajo medible en horas".

## Preguntas tipo de la audiencia

- *"¿Cómo medimos esto en mi equipo?"* → Métricas concretas: % de tickets reabiertos por interpretación, ratio de tests que validan AC vs internals, tiempo medio hasta primer PR de un nuevo dev.
- *"¿No es el mismo retorno que TDD?"* → Hay solapamiento, pero TDD optimiza diseño técnico; SDD optimiza alineación cross-funcional. Slide 7 lo desarrolla.

## Transición

"Si los retornos son tan claros, ¿por qué no aplicarla siempre? Porque no siempre paga."
