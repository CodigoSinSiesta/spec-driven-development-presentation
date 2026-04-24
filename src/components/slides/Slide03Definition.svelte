<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const phases = [
    {
      num: '01',
      icon: '📝',
      name: 'Especificar',
      desc: 'Capturar intención y comportamiento observable. La spec es contrato, no documento.',
    },
    {
      num: '02',
      icon: '🗺️',
      name: 'Planificar',
      desc: 'Validar escenarios y criterios con producto, backend y frontend antes de tocar código.',
    },
    {
      num: '03',
      icon: '⚙️',
      name: 'Ejecutar',
      desc: 'Implementar contra la spec. Tests y diseño se derivan de ella, no al revés.',
    },
    {
      num: '04',
      icon: '✅',
      name: 'Verificar',
      desc: 'Comprobar que comportamiento y tests cumplen la spec. Cierre explícito por feature.',
    },
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Definición operativa</span>
      <h2 class="title">SDD ordena el flujo, la <span class="highlight">spec es la fuente de verdad</span></h2>
    </div>

    <div class="main-layout">
      <!-- Left: definición + analogía -->
      <div class="left-col">
        <div class="def-card card-glass">
          <div class="def-header">
            <span class="def-icon">📐</span>
            <h3>Definición</h3>
          </div>
          <p>SDD <strong>no reemplaza</strong> el desarrollo: lo ordena. La especificación se escribe primero como contrato observable; el diseño técnico, la implementación y los tests se derivan de ella.</p>
        </div>

        <div class="analogy-card card-glass">
          <div class="ana-header">
            <span class="ana-icon">🏛️</span>
            <span class="ana-label">Analogía</span>
          </div>
          <p>Como un arquitecto que firma planos <strong>antes de levantar muros</strong>: cualquier desviación se discute con el plano en la mano, no improvisando con el ladrillo ya puesto.</p>
        </div>
      </div>

      <!-- Right: bucle canónico -->
      <div class="right-col">
        <h3 class="loop-title">Bucle canónico</h3>
        <div class="phases-flow">
          {#each phases as p, i}
            <div class="phase-card card-glass">
              <span class="phase-num">{p.num}</span>
              <div class="phase-body">
                <div class="phase-head">
                  <span class="phase-icon">{p.icon}</span>
                  <span class="phase-name">{p.name}</span>
                </div>
                <p class="phase-desc">{p.desc}</p>
              </div>
              {#if i < phases.length - 1}
                <span class="phase-arrow" aria-hidden="true">↓</span>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </div>

    <div class="key-insight">
      <span class="insight-icon">💡</span>
      <p>El bucle es el mismo en todas las herramientas SDD del ecosistema. <strong>Lo que cambia es cuánto orquestan</strong> y dónde ponen los gates.</p>
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

  .main-layout {
    display: grid;
    grid-template-columns: 1fr 1.05fr;
    gap: var(--spacing-xl);
    align-items: start;
  }

  .left-col, .right-col {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  /* Definición + analogía */
  .def-card, .analogy-card { padding: var(--spacing-lg) var(--spacing-xl); }

  .def-header, .ana-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-sm);
  }

  .def-icon, .ana-icon { font-size: 1.6rem; }

  .def-header h3 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-electric);
    margin-bottom: 0;
  }

  .ana-label {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-electric);
    opacity: 0.7;
  }

  .def-card p, .analogy-card p {
    margin: 0;
    font-size: 0.88rem;
    color: var(--color-neutral-light);
    opacity: 0.82;
    line-height: 1.65;
  }

  .def-card strong, .analogy-card strong {
    color: var(--color-electric);
    opacity: 1;
    font-weight: 700;
  }

  /* Bucle */
  .loop-title {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--color-electric);
    opacity: 0.75;
    margin-bottom: 0;
  }

  .phases-flow {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .phase-card {
    position: relative;
    padding: var(--spacing-sm) var(--spacing-md);
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
  }

  .phase-num {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 800;
    color: var(--color-electric);
    opacity: 0.45;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .phase-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .phase-head {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .phase-icon { font-size: 1.05rem; }

  .phase-name {
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--color-neutral-light);
  }

  .phase-desc {
    margin: 0;
    font-size: 0.78rem;
    color: var(--color-neutral-light);
    opacity: 0.75;
    line-height: 1.5;
  }

  .phase-arrow {
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.85rem;
    color: var(--color-electric);
    opacity: 0.4;
    z-index: 1;
  }

  /* Insight */
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
    .main-layout { grid-template-columns: 1fr; }
  }

  @media (max-width: 768px) {
    .slide-content { padding: var(--spacing-lg) var(--spacing-md); gap: var(--spacing-md); }
    .title { font-size: clamp(1.4rem, 4.5vw, 2rem); }
    .def-card, .analogy-card { padding: var(--spacing-md) var(--spacing-lg); }
    .key-insight p { font-size: 0.82rem; }
  }

  @media (max-width: 480px) {
    .slide-content { padding: var(--spacing-md) var(--spacing-sm); gap: var(--spacing-md); }
    .label { font-size: 0.7rem; }
    .title { font-size: clamp(1.3rem, 5.5vw, 1.7rem); }
    .def-card, .analogy-card { padding: var(--spacing-md); }
    .def-card p, .analogy-card p { font-size: 0.82rem; }
    .phase-card { padding: var(--spacing-sm); }
    .phase-name { font-size: 0.88rem; }
    .phase-desc { font-size: 0.74rem; }
    .key-insight { padding: var(--spacing-sm) var(--spacing-md); }
    .key-insight p { font-size: 0.78rem; }
  }

  @media (max-width: 390px) {
    .slide-content { padding: var(--spacing-sm); gap: var(--spacing-sm); }
    .title { font-size: clamp(1.1rem, 6vw, 1.5rem); }
    .def-icon, .ana-icon { font-size: 1.3rem; }
    .def-card p, .analogy-card p { font-size: 0.78rem; }
    .phase-name { font-size: 0.82rem; }
    .phase-desc { font-size: 0.7rem; }
    .key-insight p { font-size: 0.72rem; }
  }

  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content { padding: var(--spacing-md) var(--spacing-content); gap: var(--spacing-sm); }
    .title { font-size: clamp(1.5rem, 3.4vw, 2.2rem); }
    .main-layout { gap: var(--spacing-md); }
    .left-col, .right-col { gap: var(--spacing-sm); }
    .def-card, .analogy-card { padding: var(--spacing-md); }
    .phase-card { padding: var(--spacing-sm); }
    .phase-desc { font-size: 0.75rem; }
  }
</style>
