<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="Niveles de adopción · Böckeler 2026"
  title='Tres niveles bajo el mismo nombre "SDD"'
  titleHighlight="SDD"
  columns={3}
  items={[
    {
      title: '01 · Spec-first',
      body: 'La spec **arranca el flujo**. Tras cerrar la tarea, la spec se descarta o queda muerta. Cada nueva evolución empieza con spec nueva.\n\n`Kiro · GSD · Spec Kit`'
    },
    {
      title: '02 · Spec-anchored',
      body: 'La spec **sigue viva** durante toda la vida de la feature. En cada cambio se reedita primero la spec; el código se ajusta detrás.\n\n`OpenSpec · Spec Kit (aspiracional)`'
    },
    {
      title: '03 · Spec-as-source',
      body: 'Solo la spec se edita; el código **se regenera automáticamente**. Hereda riesgos históricos de MDD + no-determinismo LLM.\n\n`Tessl (private beta)`'
    }
  ]}
/>
