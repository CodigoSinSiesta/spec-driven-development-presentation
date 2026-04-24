# Slide 9 — Cierre

## Tesis

De la intuición al contrato. SDD no es ceremonia: es la disciplina de mover las decisiones difíciles al momento más barato.

## Takeaways (en pantalla)

1. La especificación ejecutable es el contrato: todos hablan el mismo idioma.
2. SDD reduce ambigüedad antes de escribir una sola línea de código.
3. TDD, BDD y API-First son instancias del mismo principio: spec primero.
4. El retrabajo cae cuando el equipo valida comportamiento, no código.
5. Empieza pequeño: una feature crítica, dos sprints, mide el impacto.

## Siguiente paso accionable

**Piloto de 2 sprints en una feature crítica**, con dos métricas concretas:

- Nº de PRs reabiertos por interpretación distinta a la spec.
- Tiempo desde "feature lista en dev" hasta "feature aprobada en QA".

Si ambas métricas mejoran, se extiende al siguiente trimestre. Si no, se rebobina y se analiza por qué.

## Sugerir herramienta concreta

Si la pregunta llega ("¿con qué herramienta arranco?"), recomendar **OpenSpec**:

- Brownfield-first (encaja en código existente).
- Ligera (~250 líneas por spec).
- 25+ asistentes IA soportados.
- `npm i -g @fission-ai/openspec` para instalar.

Ver `wiki/herramientas/openspec.md` y slide 7 para el contexto de elección.

## Cross-refs wiki

- `wiki/conceptos/spec-driven-development.md` — definición canónica.
- `wiki/conceptos/comparativa-sdd-tools.md` — análisis completo del ecosistema.
- `wiki/herramientas/openspec.md` — recomendación por defecto.
- `wiki/proyectos/spec-driven-development-presentation.md` — ficha del proyecto.

## Recursos en pantalla

- Presentación publicada: `codigosinsiesta.github.io/spec-driven-development-presentation/`
- Repositorio: `github.com/CodigoSinSiesta/spec-driven-development-presentation`
- Web personal: `tellmealex.dev`

## Cierre emocional

"Esta presentación se construyó con agentes de IA y disciplina SDD. Si los agentes pueden seguir una spec, también pueden seguirla los humanos. La diferencia es que los humanos tenemos que querer."
