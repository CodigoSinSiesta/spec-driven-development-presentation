<script lang="ts">
  import SlideDidactic from '@codigosinsiesta/theme/slides/SlideDidactic.svelte';
</script>

<SlideDidactic
  eyebrow="Definición"
  title="SDD turns specs into an execution order."
  titleHighlight="execution order"
  definition={{
    title: '¿Qué es SDD?',
    body: 'Capturar la **intención del sistema en una especificación compartida y testeable** antes de implementar. No reemplaza el trabajo de ingeniería — elimina la ambigüedad antes de que empiece.'
  }}
  analogy={{
    title: 'El flujo SDD',
    body: '1. **Captura** el intent en una spec testeable · 2. **Revisa** escenarios con todo el equipo · 3. **Implementa** contra el contrato aprobado · 4. **Verifica** comportamiento contra la misma fuente de verdad.'
  }}
  examples={{
    title: 'Evidencia real',
    items: [
      'Los equipos pueden rechazar trabajo ambiguo antes del primer PR',
      'En un signup duplicado, dos squads habían producido 409 payloads incompatibles',
      'Con spec: el contrato de respuesta se define antes de escribir código',
      'Sin spec: los conflictos se descubren en QA o en producción'
    ]
  }}
/>
