# Auditoría de paridad con catálogo Código Sin Siesta (2026-04-24)

Referencias:
- Estándar de marca: `guia/00-estandar-marca-validacion.md` (`final v1.0`)
- Auditoría previa: `guia/10-auditoria-marca-sdd-2026-04-14.md`
- Patrón visual canónico: `~/dev/Formaciones/coding-agents-presentation/src/components/slides/Slide06Hallucinations.svelte`
- Patrón narrativo canónico: `~/dev/Formaciones/ai-presentation/`

## Resultado ejecutivo

- Estado general: `requiere refactor`
- Decisión: **paridad alcanzada solo en 2 de 9 slides** (Hero y Closing). El resto está por debajo del estándar.
- Bloqueantes activos: `0` desde el punto de vista de marca v1.0 (la auditoría 04-14 los cerró), pero hay `7` slides con densidad informativa y visual por debajo del catálogo Código Sin Siesta reciente (ai-presentation, coding-agents-presentation).

## Patrón canónico a aplicar

Coding-agents `Slide06Hallucinations.svelte` (645 líneas) define el contrato visual de referencia:

1. `slide-background` con `radial-gradient` orbs temáticos.
2. `slide-header` centrado con `<span class="label">` (etiqueta mono uppercase) + `<h2 class="title">` con `<span class="highlight">` de degradado.
3. Layout 2-col responsive (`grid-template-columns: 1fr 1.1fr`).
4. Tarjetas `.card-glass` semánticas (definición, analogía, stats, ejemplos).
5. `key-insight` final con icono + frase memorable.
6. **4 breakpoints obligatorios**: `900` / `768` / `480` / `390` + `@media (max-height: 900px) and (min-width: 769px)` para pantallas cortas.
7. Tokens del sistema (`var(--color-*)`, `var(--spacing-*)`, `var(--radius-*)`, `var(--font-*)`) en lugar de hardcodes.

## Análisis slide por slide

### Slide 1 — Hero · `Slide01Hero.svelte` (417 líneas)

- **Visual**: `PASS`. Tiene background, animated-grid, orbs, eyebrow con dot, highlight con degradado, breakpoints 768/480/390 + height-aware.
- **Narrativa**: `PASS`. Tesis explícita (subtítulo) y autor.
- **Acción**: ninguna estructural. P2 — alinear `eyebrow` al patrón `label` (cambio cosmético opcional).

### Slide 2 — El problema · `Slide02TheProblem.svelte` (83 líneas)

- **Visual**: `FAIL`. Sin `slide-background`, sin orbs, sin `slide-header`, sin `label`, sin `highlight`. Solo 1 breakpoint (`900`).
- **Narrativa**: tesis débil. 3 tarjetas y un "diagnóstico" sin gancho. Falta evidencia/ejemplo concreto.
- **Acción** (P0): refactor a layout 2-col. Izquierda: definición del problema + estadística (p. ej. *coste del retrabajo*). Derecha: 3 ejemplos vivos con icono + caso real. `key-insight` de cierre.

### Slide 3 — Definición · `Slide03Definition.svelte` (62 líneas)

- **Visual**: `FAIL`. Sin background, sin header pattern, sin orbs. 0 breakpoints adicionales al base.
- **Narrativa**: tesis correcta pero sin gancho. Lista numerada plana.
- **Acción** (P0): refactor a 2-col. Izquierda: definición + analogía (puente entre TDD y BDD). Derecha: bucle `especificar → planificar → ejecutar → verificar` como diagrama visual de 4 fases con iconos. Cierre con frase verificable.

### Slide 4 — Beneficios · `Slide04Benefits.svelte` (75 líneas)

- **Visual**: `FAIL`. 4 tarjetas en grid 2x2 sin diferenciación visual entre ellas. Sin background ni header.
- **Narrativa**: 4 frases planas sin jerarquía ni evidencia.
- **Acción** (P0): refactor con `slide-header` + 4 tarjetas `.card-glass` con icono + métrica/dato + descripción corta. Añadir transición narrativa al siguiente slide.

### Slide 5 — Cuándo usar · `Slide05WhenToUse.svelte` (52 líneas)

- **Visual**: `FAIL`. Lista `<ul>` dentro de una sola card-glass. Sin background, sin header.
- **Narrativa**: 4 bullets sin diferenciación. Sin tesis explícita.
- **Acción** (P0): refactor con `slide-header` "Cuándo conviene" + 4 tarjetas con icono temático (escudo para crítico, equipo para handoffs, etc.) + criterio de decisión final.

### Slide 6 — Cuándo NO usar · `Slide06WhenNotToUse.svelte` (60 líneas)

- **Visual**: `FAIL`. Misma estructura que Slide5. Sin background ni header.
- **Narrativa**: lista + nota mono. Falta el contraste visual con Slide5.
- **Acción** (P0): refactor con `slide-header` "Cuándo NO" usando `highlight` con degradado en tono más cálido (rojo/naranja) para señalar "anti-patrón" — patrón heredado de Slide06Hallucinations en coding-agents. 4 anti-patrones con icono. Cierre con `key-insight`: "SDD es inversión: maximizar dónde paga".

### Slide 7 — Metodologías · `Slide07Methodologies.svelte` (75 líneas) ⭐ CAMBIO NARRATIVO

- **Visual**: `FAIL`. 3 tarjetas básicas, 1 breakpoint.
- **Narrativa**: cubre TDD/BDD/SDD pero **no menciona el ecosistema de herramientas** SDD (gap principal vs. wiki).
- **Acción** (P0 — cambio principal de esta iteración):
  - **Bloque A** (mitad superior): comparativa TDD vs BDD vs SDD con la tesis "no compiten: SDD enmarca".
  - **Bloque B** (mitad inferior): matriz de 5 herramientas SDD del wiki (`wiki/conceptos/comparativa-sdd-tools.md`):
    - GSD — orquestación profunda + paralelismo por oleadas
    - GitHub Spec Kit — oficial GitHub, gates fuertes, greenfield-first
    - **OpenSpec ⭐** — brownfield-first, 25+ agentes, *recomendada para Código Sin Siesta*
    - Taskmaster AI — PRD → tareas, integración MCP
    - PAUL — calidad sobre velocidad, AC formales
  - Cierre: "Ninguna es universalmente superior. La metodología SDD es el valor; la herramienta amplifica."

### Slide 8 — Ejemplo práctico · `Slide08Example.svelte` (74 líneas)

- **Visual**: `FAIL`. 2 tarjetas con `<ul>` plano. Sin background, sin header.
- **Narrativa**: caso "alta de usuario" pero sin code snippet ni contraste antes/después.
- **Acción** (P0): refactor con `slide-header` "Spec → Implementación" + 2-col. Izquierda: bloque tipo "spec" con sintaxis Gherkin/Markdown. Derecha: bloque "tests + código" con highlighting. Patrón visual heredado de `Slide06Hallucinations` `.ex-code-block` con `border-left` semántico.

### Slide 9 — Cierre · `Slide09Closing.svelte` (513 líneas)

- **Visual**: `PASS`. Background, animated-grid, orbs, label + title + highlight, takeaways numerados, resources card. 4 breakpoints.
- **Narrativa**: `PASS`. Takeaways verificables, recursos accionables, branding.
- **Acción**: ninguna estructural. P2 — al actualizar Slide7, añadir takeaway adicional sobre "elegir herramienta SDD según contexto" para reforzar el cambio narrativo.

## Plan de ejecución

1. Refactor Slide07 (cambio narrativo + visual). Es el que aporta más valor pedagógico.
2. Refactor Slides 02, 03, 04, 05, 06, 08 al patrón canónico.
3. Enriquecer notas del ponente (`guia/02..09-*.md`) con:
   - Cross-refs al wiki (`wiki/conceptos/spec-driven-development.md`, `wiki/conceptos/comparativa-sdd-tools.md`).
   - Contexto adicional por slide (datos, anécdotas, preguntas tipo).
4. Añadir takeaway sobre "elección de herramienta" a Slide09 si encaja.
5. Re-correr gate CMO + QA al final.

## Checklist de aceptación post-refactor

Por cada slide tocado (resultado tras la iteración 2026-04-24):

- [x] `pnpm astro check` y `pnpm build` en verde.
- [x] `pnpm test` (Playwright) en verde — 13/13 tests (render, navegación, errores console, responsive).
- [x] Visual desktop 1440×900 sin overflow ni clipping.
- [x] Visual mobile 390×844 sin scroll horizontal (testado vía Chrome DevTools MCP).
- [x] Hardcodes de color sustituidos por tokens (`var(--color-*)`).
- [x] `slide-background` con orbs radiales presentes.
- [x] `slide-header` con `label` + `title` + `highlight`.
- [x] Frase principal del slide es verificable en una línea.

## Cierre del gate CMO + QA (2026-04-24)

- **Gate CMO (narrativa + visual)**: `PASS`. Tesis única explícita por slide, flujo lógico contexto → problema → propuesta → evidencia → cierre, cierre con siguiente paso accionable (piloto 2 sprints), tokens del sistema sin hardcodes evitables, jerarquía tipográfica estable.
- **Gate QA técnico** (modo proxy CTO mientras [COD-13](/COD/issues/COD-13) sigue bloqueado): `PASS`. Build + tests + responsive + console limpia.
- **Bloqueantes activos al cierre**: `0`.
- **Cambios narrativos relevantes**: Slide 07 extendido para incluir matriz de 5 herramientas SDD (cambio principal de la iteración). Notas del ponente reescritas con cross-refs al wiki (`wiki/conceptos/spec-driven-development.md`, `wiki/conceptos/comparativa-sdd-tools.md`).
- **Métricas de densidad** (líneas Svelte por slide):
  - Antes: 62-83 líneas por slide (Slides 02-08).
  - Después: 270-460 líneas por slide. Slide07 pasa de 75 a 460 líneas (con la matriz de herramientas).
- **Listo para publicar en GitHub Pages tras commit + push.**
