<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const cases = [
    {
      icon: '🛡️',
      tag: 'Crítico',
      title: 'Dominios con reglas complejas',
      desc: 'Pagos, inventario, compliance. La spec captura invariantes que un test aislado no protege.',
    },
    {
      icon: '🧑‍🤝‍🧑',
      tag: 'Equipos',
      title: 'Squads múltiples y handoffs frecuentes',
      desc: 'La spec evita la "interpretación de pasillo" entre equipos que no comparten daily.',
    },
    {
      icon: '⚠️',
      tag: 'Alto coste',
      title: 'Features donde un fallo cuesta caro',
      desc: 'Compliance, dinero o reputación. El coste de la spec es siempre menor que el del fallo.',
    },
    {
      icon: '🗺️',
      tag: 'Largo plazo',
      title: 'Roadmaps con trazabilidad',
      desc: 'Productos longevos donde "por qué decidimos esto" importa tanto como "qué decidimos".',
    },
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Decisión de aplicación</span>
      <h2 class="title">Cuándo SDD <span class="highlight">paga</span></h2>
    </div>

    <div class="cases-grid">
      {#each cases as c}
        <article class="case-card card-glass">
          <div class="case-head">
            <span class="case-icon">{c.icon}</span>
            <span class="case-tag">{c.tag}</span>
          </div>
          <h3 class="case-title">{c.title}</h3>
          <p class="case-desc">{c.desc}</p>
        </article>
      {/each}
    </div>

    <div class="key-insight">
      <span class="insight-icon">💡</span>
      <p>La pregunta no es "¿podemos usar SDD?" sino <strong>"¿el coste de no tenerla supera el coste de mantenerla?"</strong>. Si la respuesta es sí, paga.</p>
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
    font-size: clamp(1.7rem, 4vw, 2.8rem);
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
    color: var(--color-electric);
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(96, 165, 250, 0.25);
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
