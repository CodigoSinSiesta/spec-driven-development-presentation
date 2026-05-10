<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const antiPatterns = [
    {
      icon: '⚡',
      tag: '1 día',
      title: 'Prototipos de feedback inmediato',
      desc: 'Validar visualmente con stakeholders. La spec llega cuando la idea sobrevive al primer contacto.',
    },
    {
      icon: '🛠️',
      tag: 'Bajo riesgo',
      title: 'Scripts internos efímeros',
      desc: 'Tareas de un solo uso, herramientas internas sin SLA. La spec es overhead innecesario.',
    },
    {
      icon: '🔬',
      tag: 'Exploración',
      title: 'Spike técnico sin requisitos',
      desc: 'Si aún no sabemos qué construimos, especificarlo es ficción. Primero spike, después spec.',
    },
    {
      icon: '📚',
      tag: 'Anti-patrón',
      title: 'Spec como burocracia',
      desc: 'Documento muerto que nadie consulta. Si la spec no se ejecuta ni se valida, es papel.',
    },
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Anti-patrones</span>
      <h2 class="title">Cuándo SDD <span class="highlight">no paga</span></h2>
    </div>

    <div class="cases-grid">
      {#each antiPatterns as a}
        <article class="case-card card-glass">
          <div class="case-head">
            <span class="case-icon">{a.icon}</span>
            <span class="case-tag">{a.tag}</span>
          </div>
          <h3 class="case-title">{a.title}</h3>
          <p class="case-desc">{a.desc}</p>
        </article>
      {/each}
    </div>

    <div class="key-insight">
      <span class="insight-icon">💡</span>
      <p>SDD es una <strong>inversión, no un decreto</strong>. Aplicarla donde no paga la convierte en burocracia y mata la confianza del equipo en el método.</p>
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
      radial-gradient(ellipse at 80% 20%, rgba(249, 115, 22, 0.08) 0%, transparent 55%),
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
    color: #fb923c;
    margin-bottom: var(--spacing-sm);
  }

  .title {
    font-size: clamp(1.7rem, 4vw, 2.8rem);
    font-weight: 800;
    color: var(--color-neutral-light);
    line-height: 1.2;
    margin-bottom: 0;
  }

  .highlight {
    background: linear-gradient(135deg, #fb923c, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .cases-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--spacing-md);
  }

  .case-card {
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .case-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-sm);
  }

  .case-icon { font-size: 1.6rem; }

  .case-tag {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #fb923c;
    background: rgba(249, 115, 22, 0.1);
    border: 1px solid rgba(251, 146, 60, 0.3);
    padding: 3px 10px;
    border-radius: 999px;
  }

  .case-title {
    font-family: var(--font-display);
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--color-neutral-light);
    margin: 0;
    line-height: 1.3;
  }

  .case-desc {
    margin: 0;
    font-size: 0.85rem;
    color: var(--color-neutral-light);
    opacity: 0.78;
    line-height: 1.55;
  }

  .key-insight {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-lg);
    background: rgba(249, 115, 22, 0.08);
    border: 1px solid rgba(251, 146, 60, 0.22);
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
    color: #fb923c;
    font-weight: 700;
  }

  @media (max-width: 900px) {
    .cases-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 768px) {
    .slide-content { padding: var(--spacing-lg) var(--spacing-md); gap: var(--spacing-md); }
    .title { font-size: clamp(1.4rem, 4.5vw, 2rem); }
    .case-card { padding: var(--spacing-md); }
    .key-insight p { font-size: 0.82rem; }
  }

  @media (max-width: 480px) {
    .slide-content { padding: var(--spacing-md) var(--spacing-sm); gap: var(--spacing-md); }
    .label { font-size: 0.7rem; }
    .title { font-size: clamp(1.3rem, 5.5vw, 1.7rem); }
    .case-card { padding: var(--spacing-sm) var(--spacing-md); }
    .case-icon { font-size: 1.4rem; }
    .case-title { font-size: 0.95rem; }
    .case-desc { font-size: 0.8rem; }
    .key-insight { padding: var(--spacing-sm) var(--spacing-md); }
    .key-insight p { font-size: 0.78rem; }
  }

  @media (max-width: 390px) {
    .slide-content { padding: var(--spacing-sm); gap: var(--spacing-sm); }
    .title { font-size: clamp(1.1rem, 6vw, 1.5rem); }
    .case-icon { font-size: 1.2rem; }
    .case-title { font-size: 0.88rem; }
    .case-desc { font-size: 0.74rem; }
    .key-insight p { font-size: 0.72rem; }
  }

  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content { padding: var(--spacing-md) var(--spacing-content); gap: var(--spacing-sm); }
    .title { font-size: clamp(1.5rem, 3.4vw, 2.2rem); }
    .case-card { padding: var(--spacing-md); gap: var(--spacing-xs); }
    .case-icon { font-size: 1.4rem; }
    .case-title { font-size: 0.95rem; }
    .case-desc { font-size: 0.78rem; }
  }
</style>
