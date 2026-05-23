<script lang="ts">
  import SlideResources from '@codigosinsiesta/theme/slides/SlideResources.svelte';
</script>

<SlideResources
  eyebrow="Takeaways"
  title="From intuition to explicit contracts"
  titleHighlight="explicit contracts"
  closing="Código Sin Siesta · 2026"
  takeaways={[
    { text: 'Una **especificación ejecutable** es el contrato para la alineación cross-team.' },
    { text: 'SDD **elimina la ambigüedad antes** de que empiece la implementación.' },
    { text: '**TDD, BDD y API-first** refuerzan el mismo principio: define el comportamiento primero.' },
    { text: 'El rework cae cuando los equipos validan **outcomes, no detalles internos**.' },
    { text: 'Empieza pequeño: **una feature crítica, dos sprints, impacto medible**.' }
  ]}
  links={[
    { icon: '🎤', title: 'Presentación en vivo', url: 'https://codigosinsiesta.github.io/spec-driven-development-presentation/', tag: 'web' },
    { icon: '💻', title: 'Repositorio GitHub', url: 'https://github.com/CodigoSinSiesta/spec-driven-development-presentation', tag: 'github' },
    { icon: '🌐', title: 'tellmealex.dev', url: 'https://tellmealex.dev', tag: 'web' }
  ]}
  qr={{ title: 'SDD Presentation', url: 'https://codigosinsiesta.github.io/spec-driven-development-presentation/' }}
/>
