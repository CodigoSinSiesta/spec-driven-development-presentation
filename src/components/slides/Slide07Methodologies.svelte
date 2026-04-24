<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const methodologies = [
    {
      icon: '📜',
      name: 'SDD',
      tagline: 'Spec primero',
      desc: 'Contrato de producto y diseño técnico como fuente de verdad. Tests y comportamiento se derivan.',
      accent: 'primary',
    },
    {
      icon: '🧪',
      name: 'TDD',
      tagline: 'Test primero',
      desc: 'Diseño emergente desde tests unitarios. Útil dentro del marco que define la spec.',
      accent: 'neutral',
    },
    {
      icon: '🎭',
      name: 'BDD',
      tagline: 'Comportamiento primero',
      desc: 'Escenarios en lenguaje ubicuo. Traduce la spec a casos verificables con producto.',
      accent: 'neutral',
    },
  ];

  const tools = [
    {
      name: 'GSD',
      tagline: 'Orquestación profunda',
      strengths: ['Paralelismo por oleadas', 'Subagentes aislados (~200k)', 'Verificación + UAT'],
      best: 'Proyectos grandes en Claude Code',
      featured: false,
    },
    {
      name: 'Spec Kit',
      tagline: 'Oficial GitHub · gates fuertes',
      strengths: ['Greenfield-first', '~800 líneas de spec', 'Multi-agente (Copilot, Claude, Cursor…)'],
      best: 'Greenfield medio-grande con gobierno',
      featured: false,
    },
    {
      name: 'OpenSpec',
      tagline: 'Brownfield-first · ligera',
      strengths: ['~250 líneas/spec', '25+ asistentes soportados', 'Multi-cambio en paralelo'],
      best: 'Mantener código legado iterativo',
      featured: true,
    },
    {
      name: 'Taskmaster AI',
      tagline: 'PRD → tareas',
      strengths: ['Descompone PRDs en backlog', 'Integración MCP nativa', 'Cursor / Windsurf / Roo'],
      best: 'Tu entrada natural es un PRD',
      featured: false,
    },
    {
      name: 'PAUL',
      tagline: 'AC formales · cierre disciplinado',
      strengths: ['UNIFY obligatorio', 'In-session sin subagentes', 'Calidad sobre velocidad'],
      best: 'Disciplina de cierre y AC',
      featured: false,
    },
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Metodologías + Ecosistema</span>
      <h2 class="title">SDD <span class="highlight">enmarca</span>, las herramientas amplifican</h2>
    </div>

    <!-- Bloque A: TDD vs BDD vs SDD -->
    <section class="methodologies">
      {#each methodologies as m}
        <article class="method-card card-glass" class:method-primary={m.accent === 'primary'}>
          <div class="method-head">
            <span class="method-icon">{m.icon}</span>
            <div class="method-id">
              <span class="method-name">{m.name}</span>
              <span class="method-tagline">{m.tagline}</span>
            </div>
          </div>
          <p class="method-desc">{m.desc}</p>
        </article>
      {/each}
    </section>

    <!-- Bloque B: ecosistema de herramientas SDD -->
    <section class="tools-section">
      <div class="tools-header">
        <span class="tools-label">Ecosistema SDD</span>
        <span class="tools-sub">5 herramientas, mismo bucle: <code>especificar → planificar → ejecutar → verificar</code></span>
      </div>

      <div class="tools-grid">
        {#each tools as tool}
          <article class="tool-card card-glass" class:tool-featured={tool.featured}>
            {#if tool.featured}
              <span class="featured-badge">★ Recomendada</span>
            {/if}
            <div class="tool-head">
              <span class="tool-name">{tool.name}</span>
              <span class="tool-tagline">{tool.tagline}</span>
            </div>
            <ul class="tool-strengths">
              {#each tool.strengths as s}
                <li>{s}</li>
              {/each}
            </ul>
            <div class="tool-best">
              <span class="best-label">Mejor para</span>
              <span class="best-text">{tool.best}</span>
            </div>
          </article>
        {/each}
      </div>
    </section>

    <div class="key-insight">
      <span class="insight-icon">💡</span>
      <p>Ninguna es universalmente superior. <strong>La metodología SDD es el valor real</strong>; la herramienta sólo amplifica. Dos pueden combinarse (p. ej. OpenSpec + GSD).</p>
    </div>
  </div>
</div>

<style>
  .swiper-slide {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .slide-background {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 80% 20%, rgba(96, 165, 250, 0.10) 0%, transparent 55%),
      radial-gradient(ellipse at 10% 80%, rgba(30, 58, 138, 0.16) 0%, transparent 55%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    max-width: 1280px;
    width: 100%;
    padding: var(--spacing-lg) var(--spacing-content);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  /* Header */
  .slide-header { text-align: center; }

  .label {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--color-electric);
    margin-bottom: var(--spacing-sm);
  }

  .title {
    font-size: clamp(1.6rem, 3.8vw, 2.6rem);
    font-weight: 800;
    color: var(--color-neutral-light);
    line-height: 1.2;
    margin-bottom: 0;
  }

  .highlight {
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Bloque A: metodologías */
  .methodologies {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--spacing-md);
  }

  .method-card {
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .method-primary {
    border-color: rgba(96, 165, 250, 0.45);
    box-shadow:
      0 8px 32px 0 rgba(10, 22, 40, 0.8),
      0 0 0 1px rgba(96, 165, 250, 0.2),
      inset 0 1px 1px 0 rgba(96, 165, 250, 0.25);
  }

  .method-head {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
  }

  .method-icon { font-size: 1.6rem; }

  .method-id {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .method-name {
    font-family: var(--font-display);
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--color-neutral-light);
  }

  .method-tagline {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-electric);
    opacity: 0.75;
  }

  .method-desc {
    margin: 0;
    font-size: 0.85rem;
    color: var(--color-neutral-light);
    opacity: 0.78;
    line-height: 1.55;
  }

  /* Bloque B: ecosistema */
  .tools-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .tools-header {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    text-align: center;
  }

  .tools-label {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--color-electric);
    opacity: 0.85;
  }

  .tools-sub {
    font-size: 0.85rem;
    color: var(--color-neutral-light);
    opacity: 0.7;
  }

  .tools-sub code {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    background: rgba(59, 130, 246, 0.1);
    padding: 2px 8px;
    border-radius: var(--radius-sm);
    color: var(--color-electric);
  }

  .tools-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: var(--spacing-sm);
  }

  .tool-card {
    position: relative;
    padding: var(--spacing-md);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .tool-featured {
    border-color: rgba(96, 165, 250, 0.55);
    background: rgba(59, 130, 246, 0.12);
    box-shadow:
      0 8px 32px 0 rgba(10, 22, 40, 0.8),
      0 0 24px rgba(59, 130, 246, 0.18),
      inset 0 1px 1px 0 rgba(96, 165, 250, 0.3);
  }

  .featured-badge {
    position: absolute;
    top: -10px;
    right: var(--spacing-sm);
    font-family: var(--font-mono);
    font-size: 0.62rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-base-dark);
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    padding: 3px 10px;
    border-radius: 999px;
    box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
  }

  .tool-head {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .tool-name {
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--color-neutral-light);
  }

  .tool-tagline {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--color-electric);
    opacity: 0.75;
    line-height: 1.3;
  }

  .tool-strengths {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .tool-strengths li {
    font-size: 0.72rem;
    color: var(--color-neutral-light);
    opacity: 0.78;
    line-height: 1.4;
    position: relative;
    padding-left: 12px;
  }

  .tool-strengths li::before {
    content: '·';
    position: absolute;
    left: 0;
    color: var(--color-electric);
    font-weight: 800;
  }

  .tool-best {
    margin-top: auto;
    padding-top: var(--spacing-sm);
    border-top: 1px solid rgba(96, 165, 250, 0.12);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .best-label {
    font-family: var(--font-mono);
    font-size: 0.58rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-electric);
    opacity: 0.6;
  }

  .best-text {
    font-size: 0.72rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.35;
  }

  /* Insight final */
  .key-insight {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-lg);
    background: rgba(59, 130, 246, 0.08);
    border: 1px solid rgba(96, 165, 250, 0.22);
    border-radius: var(--radius-sm);
  }

  .insight-icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }

  .key-insight p {
    font-size: 0.88rem;
    color: var(--color-neutral-light);
    opacity: 0.88;
    line-height: 1.55;
    margin-bottom: 0;
  }

  .key-insight strong {
    color: var(--color-electric);
    font-weight: 700;
  }

  /* Responsive: tablet ancha */
  @media (max-width: 1100px) {
    .tools-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  /* Responsive: tablet */
  @media (max-width: 900px) {
    .methodologies { grid-template-columns: 1fr; }
    .tools-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  /* Responsive: phone grande */
  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-lg) var(--spacing-md);
      gap: var(--spacing-md);
    }
    .title { font-size: clamp(1.4rem, 4.5vw, 2rem); }
    .method-card { padding: var(--spacing-md); }
    .method-icon { font-size: 1.4rem; }
    .method-name { font-size: 1rem; }
    .tools-grid { grid-template-columns: 1fr; }
    .tools-sub { font-size: 0.78rem; }
    .key-insight { padding: var(--spacing-md); }
    .key-insight p { font-size: 0.82rem; }
  }

  /* Responsive: phone */
  @media (max-width: 480px) {
    .slide-content {
      padding: var(--spacing-md) var(--spacing-sm);
      gap: var(--spacing-md);
    }
    .label { font-size: 0.7rem; margin-bottom: var(--spacing-xs); }
    .title { font-size: clamp(1.2rem, 5.5vw, 1.7rem); }
    .method-card { padding: var(--spacing-sm) var(--spacing-md); gap: var(--spacing-xs); }
    .method-desc { font-size: 0.8rem; }
    .tool-card { padding: var(--spacing-sm) var(--spacing-md); }
    .tools-sub { font-size: 0.72rem; }
    .tools-sub code { font-size: 0.7rem; }
    .key-insight { padding: var(--spacing-sm) var(--spacing-md); gap: var(--spacing-sm); }
    .key-insight p { font-size: 0.78rem; line-height: 1.5; }
  }

  /* Responsive: phone pequeño */
  @media (max-width: 390px) {
    .slide-content { padding: var(--spacing-sm); gap: var(--spacing-sm); }
    .title { font-size: clamp(1.1rem, 6vw, 1.5rem); }
    .method-icon { font-size: 1.2rem; }
    .method-name { font-size: 0.9rem; }
    .method-tagline { font-size: 0.62rem; }
    .method-desc { font-size: 0.75rem; line-height: 1.5; }
    .tool-name { font-size: 0.88rem; }
    .tool-tagline { font-size: 0.6rem; }
    .tool-strengths li { font-size: 0.68rem; }
    .best-label { font-size: 0.55rem; }
    .best-text { font-size: 0.68rem; }
    .key-insight p { font-size: 0.72rem; }
    .insight-icon { font-size: 1rem; }
  }

  /* Pantalla corta desktop */
  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content {
      padding: var(--spacing-md) var(--spacing-content);
      gap: var(--spacing-sm);
    }
    .title { font-size: clamp(1.4rem, 3.2vw, 2.1rem); }
    .method-card { padding: var(--spacing-md); gap: var(--spacing-xs); }
    .method-desc { font-size: 0.8rem; line-height: 1.45; }
    .tool-card { padding: var(--spacing-sm) var(--spacing-md); gap: var(--spacing-xs); }
    .tool-strengths li { font-size: 0.7rem; }
    .key-insight { padding: var(--spacing-sm) var(--spacing-md); }
  }
</style>
