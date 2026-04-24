# Slide 8 — Ejemplo práctico: alta de usuario

## Tesis

La spec no añade trabajo: reordena el orden en el que ya hacíamos ese trabajo, moviendo las decisiones difíciles al momento más barato para tomarlas.

## Estructura

- **Izquierda (Spec)**: tres bloques de spec en formato Gherkin-like:
  - Escenario feliz (alta normal + evento publicado).
  - Conflicto controlado (email duplicado → 409 con código semántico).
  - Invariante (auditoría incluso si la transacción falla).
- **Derecha (Derivaciones)**: tres áreas que se generan a partir de la spec (no se inventan): modelo, tests, observabilidad.
- **Contraste "Sin SDD"**: bloque rojo con la versión donde el bug del evento duplicado aparece en producción.

## Mensajes a reforzar

- **La spec no es solo el escenario feliz**. El verdadero valor está en los conflictos controlados y los invariantes — son los que típicamente se descubren tarde.
- "Exactamente una vez" en el evento es deliberado: comunica una decisión de idempotencia que sin spec se decide en el debug post-incidente.
- El contraste rojo es el gancho emocional: probablemente todo el mundo en la sala ha visto el bug del evento duplicado.

## Cross-refs wiki

- `wiki/conceptos/spec-driven-development.md` — bucle canónico aplicado.
- `wiki/herramientas/openspec.md` — esta spec puede vivir como `openspec/changes/add-user-signup/proposal.md`.

## Anécdota posible

Caso real (anonimizar): integración con sistema externo donde "publicar evento al crear usuario" se implementó sin spec. Tres meses después, descubierto que en condiciones de retry el evento se publicaba dos veces. Coste: una semana de incidente + impacto en sistema downstream. La invariante "exactamente una vez" en spec habría forzado la conversación sobre idempotencia el primer día.

## Preguntas tipo

- *"¿Esta spec hay que mantenerla cuando cambie el código?"* → Sí, ese es el punto. Si la spec deja de coincidir con el código, perdemos la fuente de verdad. La disciplina es: cambio de comportamiento → cambio de spec → cambio de código.
- *"¿Quién la escribe?"* → Idealmente, dev + producto en pareja. En la práctica, dev la propone, producto valida.
- *"¿Y si el lenguaje Gherkin no encaja en mi equipo?"* → El formato es lo de menos. Markdown estructurado, OpenAPI, ADRs… lo importante es que sea verificable y vivo.

## Transición

"Cierre: lo que te llevas y siguiente paso."
