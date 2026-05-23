# Informe de marca para Developer - SDD Presentation (2026-04-17)

Issue origen: [COD-31](/COD/issues/COD-31)  
Rol emisor: Brand Designer  
Alcance: auditoría de consistencia visual + calidad de contenido (sin cambios de implementación en esta entrega)

## 1. Criterios de éxito (medibles)

Para cerrar el ajuste de marca, la siguiente versión debe cumplir:

1. `100%` de slides en inglés (UI copy, navegación, metadatos y guía de ponente para versión internacional).
2. `100%` de slides con estructura visual base consistente: `slide-background` + header semántico (`label` + título + subtitle) + superficie principal (`card-glass` o equivalente).
3. `100%` de controles icon-only con `aria-label` y `100%` de elementos interactivos con `focus-visible` visible.
4. Motion accesible: variante con `prefers-reduced-motion` aplicada a animaciones CSS y GSAP.
5. Cada slide comunica `1` idea principal y al menos `1` evidencia/ejemplo concreto.

## 2. Resultado ejecutivo

- Estado actual: `NO APROBABLE` para estándar internacional de marca.
- Bloqueantes (`P0`): `3`
- Riesgos altos (`P1`): `3`
- Mejoras (`P2`): `2`

## 3. Hallazgos priorizados (con evidencia)

## P0 - Bloqueantes

1. Idioma de presentación no alineado con estándar de marca (presentaciones en inglés).
   - Evidencia:
     - `src/layouts/PresentationLayout.astro:12` (`<html lang="es">`)
     - `src/components/slides/Slide02TheProblem.svelte:25` (`El problema...`)
     - `src/components/Navigation.svelte:225` (`Navegación`)
   - Riesgo (4R):
     - Risk: reduce alcance internacional.
     - Readability: audiencia global pierde comprensión.
     - Reliability: inconsistencia entre materiales multirepo.
     - Resilience: dificulta reutilización para eventos internacionales.

2. Controles icon-only sin `aria-label` (accesibilidad WCAG 2.1 AA).
   - Evidencia:
     - `src/components/slides/Slide01Hero.svelte:42`
     - `src/components/slides/Slide01Hero.svelte:43`
     - `src/components/slides/Slide01Hero.svelte:44`
     - `src/components/Navigation.svelte:198`
     - `src/components/Navigation.svelte:202`
     - `src/components/Navigation.svelte:226`
   - Riesgo: navegación no anunciada correctamente para lectores de pantalla.

3. Motion sin soporte `prefers-reduced-motion`.
   - Evidencia:
     - `src/utils/animations.ts:7-34` (timeline GSAP siempre activa)
     - `src/utils/animations.ts:52-77` (hover motion siempre activa)
     - `src/components/slides/Slide01Hero.svelte:84`
     - `src/components/slides/Slide09Closing.svelte:97`
   - Riesgo: incumplimiento accesible para usuarios con sensibilidad al movimiento.

## P1 - Alto impacto

1. Inconsistencia de lenguaje visual entre slides del deck.
   - Dato medible:
     - Slides con `slide-background` en SDD: `2/9`
     - Slides con `slide-background` en deck de referencia (`subagents-skills-presentation`): `16/16`
   - Evidencia SDD:
     - Con fondo: `Slide01Hero.svelte`, `Slide09Closing.svelte`
     - Sin fondo base: `Slide02TheProblem.svelte`, `Slide03Definition.svelte`, `Slide04Benefits.svelte`, `Slide05WhenToUse.svelte`, `Slide06WhenNotToUse.svelte`, `Slide07Methodologies.svelte`, `Slide08Example.svelte`
   - Riesgo: sensación de “dos decks distintos” dentro de la misma charla.

2. Falta de estados de foco visibles en componentes interactivos.
   - Evidencia:
     - No hay reglas `:focus`/`:focus-visible` en `src/` (búsqueda de código sin resultados).
   - Riesgo: navegación por teclado degradada.

3. Uso de `transition: all` en múltiples puntos.
   - Evidencia:
     - `src/styles/global.css:153`
     - `src/styles/global.css:180`
     - `src/styles/animations.css:106`
     - `src/components/Navigation.svelte:308`
     - `src/components/Navigation.svelte:361`
     - `src/components/slides/Slide09Closing.svelte:168`
   - Riesgo: animaciones menos predecibles y potencial impacto en performance.

## P2 - Mejoras recomendadas

1. Claims con evidencia débil en slides de beneficios/uso.
   - Ejemplos:
     - `Slide04Benefits.svelte:9-23`
     - `Slide05WhenToUse.svelte:7-12`
   - Acción: añadir micro-evidencia (mini-caso, métrica o criterio de validación).

2. Metadatos de documento no internacionalizados.
   - Evidencia:
     - `src/layouts/PresentationLayout.astro:8`
     - `src/layouts/PresentationLayout.astro:17`
     - `README.md:1-19`

## 4. Guía de ejecución para Developer

## 4.1 Reglas de diseño (obligatorias)

1. Aplicar plantilla base por slide:
   - `slide-background` + `label` + `title` + `subtitle` + bloque principal con `card-glass`.
2. Mantener dark-first y tokens del `DESIGN.md` (sin paletas ad-hoc fuera de excepción explícita).
3. Añadir `:focus-visible` visible en links y botones (no ocultar outline sin reemplazo).
4. Reemplazar `transition: all` por propiedades concretas (`opacity`, `transform`, `box-shadow`, etc.).
5. Introducir rama `prefers-reduced-motion`:
   - CSS: desactivar/reducir `moveGrid`, `floatOrb`, `pulse`.
   - GSAP: durations mínimas o skip.

## 4.2 Reglas de información (obligatorias)

1. Idioma: inglés en todo el deck.
2. Una idea principal por slide (frase testeable).
3. Cada claim relevante debe incluir ejemplo/evidencia mínima.
4. Cierre con CTA accionable y criterio de decisión (qué hacer el lunes y cómo medir si funciona).

## 4.3 Plantilla editorial por slide

Usar esta estructura:

1. `Slide Intent` (1 línea).
2. `Core Message` (máximo 14 palabras).
3. `Evidence` (1 ejemplo real o métrica).
4. `Action` (qué cambia para el equipo).

## 5. Alternativas con tradeoffs

## Opción A - Alineación quirúrgica (recomendada)

- Qué incluye:
  - Internacionalización EN.
  - Base visual consistente para slides 2-8.
  - Accesibilidad (aria-label, focus-visible, reduced-motion).
  - Ajustes de contenido mínimos para evidencia.
- Tradeoff:
  - Menor impacto creativo, máxima velocidad de entrega controlada.

## Opción B - Rediseño narrativo completo

- Qué incluye:
  - Reescritura narrativa end-to-end y rediseño de layout en todas las slides.
  - Refuerzo visual avanzado con nuevos patrones por bloque.
- Tradeoff:
  - Mayor calidad final potencial, pero más riesgo de scope y tiempo.

## 6. Definition of Done para cierre de COD-31

La task puede cerrarse cuando se verifique:

1. Copy 100% en inglés.
2. Checklist A11y cumplido (aria-label icon-only, focus-visible, reduced-motion).
3. Consistencia visual confirmada slide por slide con plantilla base.
4. Claims críticos con evidencia concreta.
5. Revisión final de marca sin bloqueantes `P0/P1`.
