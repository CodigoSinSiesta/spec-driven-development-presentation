<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const benefits = [
    {
      icon: '🎯',
      metric: '+alineación',
      title: 'Alineación técnica y funcional',
      desc: 'Producto y desarrollo discuten sobre escenarios concretos, no sobre interpretaciones.',
      timing: 'Sprint 1',
    },
    {
      icon: '🧱',
      metric: '−deuda',
      title: 'Menos deuda accidental',
      desc: 'El diseño técnico nace con restricciones explícitas y evita reescrituras tempranas.',
      timing: 'Sprint 2–3',
    },
    {
      icon: '🧪',
      metric: '+propósito',
      title: 'Tests con propósito',
      desc: 'Las pruebas cubren criterios de aceptación reales, no solo detalles internos.',
      timing: 'Sprint 3+',
    },
    {
      icon: '🚀',
      metric: '−rampa',
      title: 'Onboarding más rápido',
      desc: 'Nuevos miembros entienden el sistema leyendo specs vivas y ejecutables.',
      timing: 'Meses 3+',
    },
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Por qué pagamos el coste</span>
      <h2 class="title">Cuatro retornos <span class="highlight">verificables</span></h2>
    </div>

    <div class="benefits-grid">
      {#each benefits as b}
        <article class="benefit-card card-glass">
          <div class="benefit-head">
            <span class="benefit-icon">{b.icon}</span>
            <span class="benefit-metric">{b.metric}</span>
          </div>
          <h3 class="benefit-title">{b.title}</h3>
          <p class="benefit-desc">{b.desc}</p>
          <div class="benefit-timing">
            <span class="timing-label">Aparece en</span>
            <span class="timing-value">{b.timing}</span>
          </div>
        </article>
      {/each}
    </div>

    <section class="timeline">
      <div class="timeline-header">
        <span class="timeline-label">Los 4 retornos no son simultáneos</span>
      </div>
      <div class="timeline-track">
        <div class="tl-marker tl-1"><span class="tl-dot"></span><span class="tl-text">Alineación</span></div>
        <div class="tl-marker tl-2"><span class="tl-dot"></span><span class="tl-text">Menos deuda</span></div>
        <div class="tl-marker tl-3"><span class="tl-dot"></span><span class="tl-text">Tests con propósito</span></div>
        <div class="tl-marker tl-4"><span class="tl-dot"></span><span class="tl-text">Onboarding</span></div>
        <div class="tl-axis">
          <span class="tl-axis-start">Sprint 1</span>
          <span class="tl-axis-end">Mes 3+</span>
        </div>
      </div>
    </section>

    <div class="key-insight">
      <span class="insight-icon">💡</span>
      <p>El retorno aparece <strong>cuando la spec se mantiene viva</strong>, no cuando se escribe una vez y se archiva. SDD es una disciplina, no un entregable.</p>
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

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--spacing-md);
  }

  .benefit-card {
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .benefit-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-sm);
  }

  .benefit-icon { font-size: 1.6rem; }

  .benefit-metric {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--color-electric);
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(96, 165, 250, 0.25);
    padding: 3px 10px;
    border-radius: 999px;
  }

  .benefit-title {
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-neutral-light);
    margin: 0;
    line-height: 1.3;
  }

  .benefit-desc {
    margin: 0;
    font-size: 0.82rem;
    color: var(--color-neutral-light);
    opacity: 0.78;
    line-height: 1.55;
  }

  .benefit-timing {
    margin-top: auto;
    padding-top: var(--spacing-sm);
    border-top: 1px solid rgba(96, 165, 250, 0.15);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .timing-label {
    font-family: var(--font-mono);
    font-size: 0.58rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-electric);
    opacity: 0.6;
  }

  .timing-value {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--color-neutral-light);
    opacity: 0.9;
  }

  /* Timeline */
  .timeline {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .timeline-header { text-align: center; }

  .timeline-label {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--color-electric);
    opacity: 0.75;
  }

  .timeline-track {
    position: relative;
    padding: var(--spacing-md) var(--spacing-md);
    background: rgba(30, 58, 138, 0.12);
    border: 1px solid rgba(96, 165, 250, 0.18);
    border-radius: var(--radius-sm);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-sm);
    align-items: center;
  }

  .timeline-track::before {
    content: '';
    position: absolute;
    left: calc(var(--spacing-md) + 24px);
    right: calc(var(--spacing-md) + 24px);
    top: 50%;
    height: 2px;
    background: linear-gradient(90deg,
      var(--color-accent-bright) 0%,
      var(--color-electric) 100%);
    opacity: 0.35;
    transform: translateY(-50%);
    z-index: 0;
  }

  .tl-marker {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    position: relative;
    z-index: 1;
  }

  .tl-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--color-accent-bright);
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
  }

  .tl-text {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    text-align: center;
  }

  .tl-axis {
    display: none;
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

  @media (max-width: 1100px) {
    .benefits-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (max-width: 768px) {
    .slide-content { padding: var(--spacing-lg) var(--spacing-md); gap: var(--spacing-md); }
    .title { font-size: clamp(1.4rem, 4.5vw, 2rem); }
    .benefit-card { padding: var(--spacing-md); }
    .key-insight p { font-size: 0.82rem; }
  }

  @media (max-width: 480px) {
    .slide-content { padding: var(--spacing-md) var(--spacing-sm); gap: var(--spacing-md); }
    .label { font-size: 0.7rem; }
    .title { font-size: clamp(1.3rem, 5.5vw, 1.7rem); }
    .benefits-grid { grid-template-columns: 1fr; gap: var(--spacing-sm); }
    .benefit-card { padding: var(--spacing-sm) var(--spacing-md); }
    .benefit-icon { font-size: 1.4rem; }
    .benefit-title { font-size: 0.95rem; }
    .benefit-desc { font-size: 0.78rem; }
    .key-insight { padding: var(--spacing-sm) var(--spacing-md); }
    .key-insight p { font-size: 0.78rem; }
  }

  @media (max-width: 390px) {
    .slide-content { padding: var(--spacing-sm); gap: var(--spacing-sm); }
    .title { font-size: clamp(1.1rem, 6vw, 1.5rem); }
    .benefit-icon { font-size: 1.2rem; }
    .benefit-metric { font-size: 0.65rem; }
    .benefit-title { font-size: 0.88rem; }
    .benefit-desc { font-size: 0.74rem; }
    .key-insight p { font-size: 0.72rem; }
  }

  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content { padding: var(--spacing-md) var(--spacing-content); gap: var(--spacing-sm); }
    .title { font-size: clamp(1.5rem, 3.4vw, 2.2rem); }
    .benefit-card { padding: var(--spacing-md); gap: var(--spacing-xs); }
    .benefit-icon { font-size: 1.4rem; }
    .benefit-title { font-size: 0.95rem; }
    .benefit-desc { font-size: 0.78rem; line-height: 1.5; }
  }
</style>
