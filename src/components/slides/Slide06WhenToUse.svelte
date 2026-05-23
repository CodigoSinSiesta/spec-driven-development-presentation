<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="Decisión de aplicación"
  title="Cuándo SDD paga"
  titleHighlight="paga"
  columns={2}
  items={[
    {
      title: 'Dominios con reglas complejas',
      body: 'Pagos, inventario, compliance. La spec captura **invariantes que un test aislado no protege**. El coste de la ambigüedad es siempre mayor.'
    },
    {
      title: 'Squads múltiples y handoffs frecuentes',
      body: 'La spec evita la **"interpretación de pasillo"** entre equipos que no comparten daily. Un contrato escrito no se distorsiona en el teléfono roto.'
    },
    {
      title: 'Features donde un fallo cuesta caro',
      body: 'Compliance, dinero o reputación. **El coste de la spec es siempre menor que el del fallo** en producción. La pregunta no es si usarla, sino cuándo.'
    },
    {
      title: 'Roadmaps con trazabilidad',
      body: 'Productos longevos donde **"por qué decidimos esto"** importa tanto como "qué decidimos". Las specs son la memoria del sistema.'
    }
  ]}
/>
