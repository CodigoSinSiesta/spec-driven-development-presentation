<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="Anti-patrones"
  title="Cuándo SDD no paga"
  titleHighlight="no paga"
  columns={2}
  items={[
    {
      title: 'Prototipos de feedback inmediato',
      body: 'Validar visualmente con stakeholders en **1 día**. La spec llega cuando la idea sobrevive al primer contacto. Antes es ficción prematura.'
    },
    {
      title: 'Scripts internos efímeros',
      body: 'Tareas de un solo uso, herramientas internas **sin SLA ni audiencia**. La spec es overhead innecesario que no aporta ROI.'
    },
    {
      title: 'Spike técnico sin requisitos',
      body: 'Si aún no sabemos qué construimos, especificarlo es ficción. **Primero spike, después spec.** La exploración necesita libertad, no contratos.'
    },
    {
      title: 'Spec como burocracia',
      body: 'Documento muerto que nadie consulta. **Si la spec no se ejecuta ni se valida, es papel.** SDD es inversión, no decreto. Aplicarla mal mata la confianza en el método.'
    }
  ]}
/>
