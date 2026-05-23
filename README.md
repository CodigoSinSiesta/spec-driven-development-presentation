# Spec-Driven Development (SDD) - Presentation

Interactive presentation about **Spec-Driven Development (SDD)** for the Codigo Sin Siesta community.

**Focus**: what SDD is, when it works, where it does not, and how it relates to TDD/BDD.  
**Estimated duration**: 30-40 minutes  
**Live**: https://codigosinsiesta.github.io/spec-driven-development-presentation/

## Content (9 slides)

1. Title + what SDD is
2. The problem: code without explicit specs
3. Operational definition of SDD
4. Core benefits
5. When to use SDD
6. When not to use SDD
7. Relationship with TDD and BDD
8. Practical example
9. Closing and next step

## Tech stack

- Astro
- Svelte
- Tailwind CSS (available in the project)
- TypeScript strict
- Playwright for E2E tests
- Node.js >= 20

## Local development

```bash
pnpm install
pnpm dev
```

Local server: `http://localhost:4324/spec-driven-development-presentation/`

## Validation

```bash
pnpm build
pnpm test
```

## Deployment

The GitHub Pages workflow publishes automatically from `main`.

## Speaker guide

Slide notes are available in `guia/`.

## Brand standard

- Narrative and visual validation standard: `guia/00-estandar-marca-validacion.md`.
- Applied audit for this presentation: `guia/10-auditoria-marca-sdd-2026-04-14.md`.
- Publishing gate: CMO + technical QA validation (or QA proxy while [COD-13](/COD/issues/COD-13) remains blocked).

## Main site integration

To include this talk in `codigosinsiesta.github.io`, add this URL in the presentations section of the main site.
