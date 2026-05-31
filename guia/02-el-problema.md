# Slide 2 — El problema: programar sin spec

## Tesis

El bug funcional nace en el momento en que decidimos no escribir la spec. Todo lo demás es manifestarlo más tarde y más caro.

## Mensajes clave

- **3 síntomas reconocibles**: requisitos ambiguos, retrabajo estructural, tests desconectados.
- Las dos métricas (~40% del sprint en aclarar, 3× coste en QA vs spec) son aproximaciones de literatura sobre coste de defectos. Si te las preguntan: son orden de magnitud, no datos de un estudio concreto. Mejor reformular como "según experiencia recogida en equipos donde he trabajado".
- Conectar con dolor real: pedir a la audiencia que recuerde un sprint donde "esto no era lo pedido" rompió la entrega.

## Cross-refs wiki

- `wiki/conceptos/spec-driven-development.md` — definición canónica.
- `wiki/conceptos/comparativa-sdd-tools.md` — diagnóstico común de las 5 herramientas SDD.
- `wiki/conceptos/vibe-coding.md` (si existe) — el extremo opuesto: prompts ad-hoc.
- `wiki/conceptos/alucinaciones.md` — paralelismo con codificación agéntica (la spec reduce alucinaciones).

## Anécdotas posibles

- Sprint en NTT Data donde el "alta de usuario" se reabrió tres veces por interpretación distinta de "email único".
- Pull request rechazado en el último momento porque "ese flag estaba pensado para staging, no para prod" — sin spec, esa diferencia vivía en la cabeza de una persona.

## Preguntas tipo de la audiencia

- *"¿Esto no es BDD con otro nombre?"* → No: BDD es una **forma de expresar** la spec. SDD es la disciplina de tener spec antes que código. Slide 7 lo aclara.
- *"¿Y si producto no quiere participar?"* → La spec se escribe igual, pero como hipótesis a validar. SDD funciona aunque la spec inicial sea del propio dev.
- *"¿No frena la velocidad?"* → A corto plazo sí; a partir del segundo sprint compensa. Slide 4 habla del retorno.

## Transición al siguiente slide

"Si el coste sin spec está claro, la pregunta es: ¿qué disciplina concreta proponemos? Eso es SDD."
