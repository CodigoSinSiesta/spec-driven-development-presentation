<script lang="ts">
  import SlideCode from '@codigosinsiesta/theme/slides/SlideCode.svelte';
</script>

<SlideCode
  eyebrow="De la spec al código"
  title="Caso real: alta de usuario"
  titleHighlight="alta de usuario"
  language="gherkin"
  code={`# Escenario feliz
Dado un email válido y no registrado,
cuando se solicita alta,
entonces se crea el usuario
y se publica \`user.created\` exactamente una vez.

# Conflicto controlado
Dado un email ya registrado,
cuando se solicita alta,
entonces responde 409
con código semántico \`EMAIL_ALREADY_REGISTERED\`.

# Invariante
Para todo intento de alta,
se audita el evento
incluso si la transacción falla.`}
  annotations={[
    { line: 1, text: 'Happy path' },
    { line: 7, text: 'Manejo de conflicto' },
    { line: 12, text: 'Invariante de auditoría' }
  ]}
  callout={{
    kind: 'ok',
    title: 'Derivaciones de la spec',
    body: '**Modelo** → Validación Zod con tipos compartidos · **Tests** → Contrato API + integración DB + bus de eventos · **Observabilidad** → Métrica `user.created.count` y traza por `request_id`'
  }}
/>
