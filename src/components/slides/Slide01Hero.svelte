<script lang="ts">
  import SlideHero from '@codigosinsiesta/theme/slides/SlideHero.svelte';
</script>

<SlideHero
  eyebrow="SDD · Código Sin Siesta · 2026"
  title="Spec-Driven Development"
  titleHighlight="Spec-Driven"
  subtitle="Write the behavior contract first.\nLess ambiguity, less rework, higher team quality."
  tools={[
    { label: 'TDD' },
    { label: 'BDD' },
    { label: 'API-First' },
    { label: 'OpenAPI' },
    { label: 'Specifications', highlight: true },
  ]}
  author={{
    name: 'Alejandro de la Fuente',
    role: 'Tech Lead · NTT Data · GDNE',
    avatarUrl: 'https://www.gravatar.com/avatar/8461e0b8674185c1df153079e820504b?s=120',
    links: [{ url: 'https://codigosinsiesta.github.io', label: 'codigosinsiesta.github.io' }]
  }}
/>
