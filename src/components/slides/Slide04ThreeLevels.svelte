<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const levels = [
    {
      num: '01',
      name: 'Spec-first',
      tagline: 'La spec arranca el flujo',
      desc: 'La spec se redacta antes de codificar. Tras cerrar la tarea, la spec se descarta o queda muerta. Cada nueva evolución empieza con spec nueva.',
      who: 'Kiro · GSD · Spec Kit (en la práctica)',
      featured: false,
    },
    {
      num: '02',
      name: 'Spec-anchored',
      tagline: 'La spec sigue viva',
      desc: 'La spec se mantiene editable durante toda la vida de la feature. En cada cambio se reedita primero la spec; el código se ajusta detrás.',
      who: 'OpenSpec · Spec Kit (aspiracional)',
      featured: false,
    },
    {
      num: '03',
      name: 'Spec-as-source',
      tagline: 'Solo la spec se edita',
      desc: 'El humano edita solo la spec; el código se regenera con marcadores tipo <code>// GENERATED FROM SPEC</code>. Hereda riesgos históricos de MDD + no-determinismo LLM.',
      who: 'Tessl (private beta)',
      featured: true,
    },
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Niveles de adopción · Böckeler 2026</span>
      <h2 class="title">Tres niveles bajo el mismo nombre <span class="highlight">"SDD"</span></h2>
      <p class="subtitle">Cada nivel hereda del anterior. Casi todas las herramientas son spec-first; pocas aspiran a anchored; solo una persigue spec-as-source en serio.</p>
    </div>

    <div class="levels-grid">
      {#each levels as level}
        <article class="level-card card-glass" class:level-featured={level.featured}>
          <div class="level-head">
            <span class="level-num">{level.num}</span>
            <div class="level-id">
              <span class="level-name">{level.name}</span>
              <span class="level-tagline">{level.tagline}</span>
            </div>
          </div>
          <p class="level-desc">{@html level.desc}</p>
          <div class="level-who">
            <span class="who-label">Herramientas</span>
            <span class="who-text">{level.who}</span>
          </div>
        </article>
      {/each}
    </div>

    <div class="key-insight">
      <span class="insight-icon">🧠</span>
      <p>Otra distinción útil de Böckeler: <strong>spec ≠ memory bank</strong>. La spec describe una feature; el memory bank (Cline: <code>memory-bank</code>, Kiro: <code>steering/</code>, Spec Kit: <code>constitution.md</code>) describe el proyecto entero y vive aparte.</p>
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
    margin-bottom: var(--spacing-sm);
  }

  .highlight {
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: 0.92rem;
    color: var(--color-neutral-light);
    opacity: 0.72;
    max-width: 820px;
    margin: 0 auto;
    line-height: 1.55;
  }

  .levels-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--spacing-md);
  }

  .level-card {
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .level-featured {
    border-color: rgba(96, 165, 250, 0.55);
    background: rgba(59, 130, 246, 0.12);
    box-shadow:
      0 8px 32px 0 rgba(10, 22, 40, 0.8),
      0 0 24px rgba(59, 130, 246, 0.18),
      inset 0 1px 1px 0 rgba(96, 165, 250, 0.3);
  }

  .level-head {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
  }

  .level-num {
    font-family: var(--font-mono);
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--color-electric);
    opacity: 0.55;
    flex-shrink: 0;
  }

  .level-id {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .level-name {
    font-family: var(--font-display);
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--color-neutral-light);
  }

  .level-tagline {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-electric);
    opacity: 0.78;
  }

  .level-desc {
    margin: 0;
    font-size: 0.86rem;
    color: var(--color-neutral-light);
    opacity: 0.82;
    line-height: 1.6;
  }

  .level-desc :global(code) {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    background: rgba(59, 130, 246, 0.12);
    padding: 1px 6px;
    border-radius: var(--radius-sm);
    color: var(--color-electric);
  }

  .level-who {
    margin-top: auto;
    padding-top: var(--spacing-sm);
    border-top: 1px solid rgba(96, 165, 250, 0.15);
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .who-label {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-electric);
    opacity: 0.62;
  }

  .who-text {
    font-size: 0.78rem;
    color: var(--color-neutral-light);
    opacity: 0.88;
    line-height: 1.4;
  }

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

  .key-insight code {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    background: rgba(59, 130, 246, 0.12);
    padding: 1px 6px;
    border-radius: var(--radius-sm);
    color: var(--color-electric);
  }

  @media (max-width: 900px) {
    .levels-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 768px) {
    .slide-content { padding: var(--spacing-lg) var(--spacing-md); gap: var(--spacing-md); }
    .title { font-size: clamp(1.4rem, 4.5vw, 2rem); }
    .subtitle { font-size: 0.84rem; }
    .level-card { padding: var(--spacing-md); }
  }

  @media (max-width: 480px) {
    .slide-content { padding: var(--spacing-md) var(--spacing-sm); gap: var(--spacing-md); }
    .label { font-size: 0.7rem; }
    .title { font-size: clamp(1.2rem, 5.5vw, 1.7rem); }
    .subtitle { font-size: 0.78rem; }
    .level-card { padding: var(--spacing-sm) var(--spacing-md); }
    .level-name { font-size: 0.98rem; }
    .level-desc { font-size: 0.8rem; }
    .level-num { font-size: 1.2rem; }
    .who-text { font-size: 0.74rem; }
    .key-insight { padding: var(--spacing-sm) var(--spacing-md); }
    .key-insight p { font-size: 0.78rem; }
  }

  @media (max-width: 390px) {
    .slide-content { padding: var(--spacing-sm); gap: var(--spacing-sm); }
    .title { font-size: clamp(1.1rem, 6vw, 1.5rem); }
    .level-num { font-size: 1.1rem; }
    .level-name { font-size: 0.92rem; }
    .level-tagline { font-size: 0.62rem; }
    .level-desc { font-size: 0.76rem; line-height: 1.5; }
    .who-label { font-size: 0.55rem; }
    .who-text { font-size: 0.7rem; }
    .key-insight p { font-size: 0.72rem; }
  }

  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content { padding: var(--spacing-md) var(--spacing-content); gap: var(--spacing-sm); }
    .title { font-size: clamp(1.4rem, 3.2vw, 2.1rem); }
    .levels-grid { gap: var(--spacing-sm); }
    .level-card { padding: var(--spacing-md); gap: var(--spacing-sm); }
    .level-desc { font-size: 0.8rem; line-height: 1.5; }
  }
</style>
