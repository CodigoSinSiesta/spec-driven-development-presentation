<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="El problema"
  title="Teams drift when behavior is implicit."
  titleHighlight="behavior is implicit"
  columns={3}
  items={[
    {
      title: 'Interpretation gaps',
      body: 'Product, backend y frontend **infieren comportamiento diferente** del mismo ticket. Nadie está equivocado — el contrato nunca existió.'
    },
    {
      title: 'Late validation',
      body: 'Los edge cases críticos aparecen en **QA o release hardening**, no durante planning. El error más caro es el que se descubre tarde.'
    },
    {
      title: 'Shallow confidence',
      body: 'Los tests pasan pero **el comportamiento de negocio sigue roto** en los puntos de integración. Cobertura sin contrato no da confianza real.'
    }
  ]}
  callout={null}
/>
