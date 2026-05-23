<script lang="ts">
  import SlideStats from '@codigosinsiesta/theme/slides/SlideStats.svelte';
</script>

<SlideStats
  eyebrow="Por qué pagamos el coste"
  title="Cuatro retornos verificables"
  titleHighlight="retornos"
  intro="El gain viene de mejores decisiones más temprano, no de más proceso más tarde."
  stats={[
    {
      value: '+alineación',
      label: 'Sprint 1',
      color: 'ok',
      note: 'Producto y desarrollo discuten sobre escenarios concretos, no interpretaciones.'
    },
    {
      value: '−deuda',
      label: 'Sprint 2–3',
      color: 'electrico',
      note: 'El diseño técnico nace con restricciones explícitas y evita reescrituras tempranas.'
    },
    {
      value: '+propósito',
      label: 'Sprint 3+',
      color: 'electrico',
      note: 'Las pruebas cubren criterios de aceptación reales, no solo detalles internos.'
    },
    {
      value: '−rampa',
      label: 'Meses 3+',
      color: 'ok',
      note: 'Nuevos miembros entienden el sistema leyendo specs vivas y ejecutables.'
    }
  ]}
/>
