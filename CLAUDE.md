# Spec-Driven Development (SDD) - Presentación

Presentación interactiva para Código Sin Siesta sobre fundamentos y adopción de Spec-Driven Development.

## Objetivo

Explicar de forma práctica:
- Qué es SDD.
- Qué problemas resuelve.
- Cuándo usarlo y cuándo no.
- Cómo se complementa con TDD y BDD.

## Stack

- Astro + Svelte
- TypeScript strict
- Tailwind CSS disponible
- Playwright para validación E2E
- Node.js >= 20

## Estructura

- `src/pages/index.astro`: composición de las 9 slides.
- `src/components/Navigation.svelte`: navegación, hash routing y swipe.
- `src/components/slides/*`: contenido de cada slide.
- `tests/*`: suite E2E de render, navegación, responsive y errores de consola.
- `guia/*`: notas del ponente por slide.

## Comandos

```bash
pnpm install
pnpm dev
pnpm build
pnpm test
```

## Publicación

GitHub Pages en:
`https://codigosinsiesta.github.io/spec-driven-development-presentation`

Base en `astro.config.mjs`:
`/spec-driven-development-presentation`
