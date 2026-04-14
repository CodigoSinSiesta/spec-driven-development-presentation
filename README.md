# Spec-Driven Development (SDD) - Presentación

Presentación interactiva sobre **Spec-Driven Development (SDD)** para la comunidad Código Sin Siesta.

**Enfoque**: qué es SDD, beneficios, cuándo aplicarlo y cómo se relaciona con TDD/BDD.  
**Duración estimada**: 30-40 minutos  
**Live**: https://codigosinsiesta.github.io/spec-driven-development-presentation/

## Contenido (9 slides)

1. Título + qué es SDD
2. El problema: código sin specs
3. Definición de SDD
4. Beneficios principales
5. Cuándo usar SDD
6. Cuándo no usar SDD
7. Relación con TDD y BDD
8. Ejemplo práctico simple
9. Conclusión y siguiente paso

## Stack técnico

- Astro
- Svelte
- Tailwind CSS (disponible en el proyecto)
- TypeScript strict
- Playwright para E2E
- Node.js >= 20

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Servidor local: `http://localhost:4324/spec-driven-development-presentation/`

## Validación

```bash
pnpm build
pnpm test
```

## Despliegue

El workflow de GitHub Pages publica automáticamente en `main`.

## Guía del ponente

Notas por slide en `guia/`.

## Integración en el site principal

Para incluir esta charla en `codigosinsiesta.github.io`, añadir el enlace de esta URL en la sección de presentaciones del sitio principal.
