<script lang="ts">
  import SlideToolsGrid from '@codigosinsiesta/theme/slides/SlideToolsGrid.svelte';
</script>

<SlideToolsGrid
  eyebrow="Metodologías + Ecosistema"
  title="SDD enmarca, las herramientas amplifican"
  titleHighlight="herramientas"
  intro="**SDD** define el contrato · **TDD** refina el diseño emergente · **BDD** traduce la spec a escenarios verificables. Son capas complementarias, no procesos en competencia."
  columns={3}
  tools={[
    { icon: '🗂️', title: 'GSD', subtitle: 'Orquestación profunda', tag: 'spec-first', body: 'Paralelismo por oleadas, subagentes aislados (~200k). Proyectos grandes en Claude Code.', meta: ['Subagentes', 'Oleadas', 'Verificación'] },
    { icon: '📋', title: 'Spec Kit', subtitle: 'Oficial GitHub · gates fuertes', tag: 'spec-first', body: 'Greenfield-first, ~800 líneas de spec. Multi-agente (Copilot, Claude, Cursor…).', meta: ['Greenfield', 'Multi-agente', 'Gates'] },
    { icon: '🔧', title: 'OpenSpec', subtitle: 'Brownfield-first · ligera', tag: 'spec-first', accent: '#3B82F6', body: '~250 líneas/spec, 25+ asistentes soportados. Ideal para mantener código legado.', meta: ['Brownfield', '25+ agentes', 'Ligera'] },
    { icon: '📝', title: 'Taskmaster AI', subtitle: 'PRD → tareas', tag: 'spec-first', body: 'Descompone PRDs en backlog. Integración MCP nativa para Cursor, Windsurf, Roo.', meta: ['PRD', 'MCP', 'Backlog'] },
    { icon: '🎯', title: 'PAUL', subtitle: 'AC formales · cierre disciplinado', tag: 'spec-first', body: 'UNIFY obligatorio, in-session sin subagentes. Calidad sobre velocidad.', meta: ['AC formales', 'Disciplina', 'In-session'] },
    { icon: '🚀', title: 'Kiro', subtitle: 'VS Code de Amazon', tag: 'spec-first', body: '3 documentos por feature: Req → Design → Tasks. Memory bank "steering".', meta: ['3 docs', 'Steering', 'AWS'] },
  ]}
/>
