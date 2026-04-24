<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const symptoms = [
    {
      icon: '🌫️',
      title: 'Requisitos ambiguos',
      example: '"Que sea como el flujo de pago, pero más simple"',
      cost: 'Producto, backend y frontend interpretan tres cosas distintas. Reuniones para reabrir lo cerrado.',
    },
    {
      icon: '🔁',
      title: 'Retrabajo estructural',
      example: 'Sprint 3: "esto no era lo pedido"',
      cost: 'Implementamos rápido, validamos tarde y rehacemos diseño y código crítico.',
    },
    {
      icon: '🧪',
      title: 'Tests desconectados',
      example: 'Cobertura 90% · bugs en producción',
      cost: 'Las pruebas validan detalles técnicos, no comportamiento de negocio. Falsa sensación de seguridad.',
    },
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">El punto de partida</span>
      <h2 class="title">¿Qué pasa cuando programamos <span class="highlight">sin spec</span>?</h2>
    </div>

    <div class="main-layout">
      <!-- Left: diagnóstico -->
      <div class="left-col">
        <div class="diagnosis card-glass">
          <div class="diag-header">
            <span class="diag-icon">🩺</span>
            <h3>Diagnóstico</h3>
          </div>
          <p>Sin un contrato previo de comportamiento, cada iteración <strong>añade incertidumbre</strong> en lugar de reducirla. El equipo decide en caliente, en cada PR, sobre qué significa "estar terminado".</p>
        </div>

        <div class="stats-row">
          <div class="stat card-glass">
            <span class="stat-value">~40%</span>
            <span class="stat-label">del esfuerzo de un sprint se va en aclarar lo que ya estaba "hecho"</span>
          </div>
          <div class="stat card-glass">
            <span class="stat-value">3×</span>
            <span class="stat-label">coste de arreglar un bug funcional descubierto en QA vs en spec</span>
          </div>
        </div>
      </div>

      <!-- Right: síntomas -->
      <div class="right-col">
        <h3 class="symptoms-title">Síntomas que reconocemos</h3>
        {#each symptoms as s}
          <div class="symptom-card card-glass">
            <div class="sym-header">
              <span class="sym-icon">{s.icon}</span>
              <span class="sym-title">{s.title}</span>
            </div>
            <div class="sym-quote">
              <span class="sym-quote-label">Frase tipo</span>
              <code class="sym-quote-text">{s.example}</code>
            </div>
            <div class="sym-cost">
              <span class="sym-cost-icon">💥</span>
              <span>{s.cost}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="key-insight">
      <span class="insight-icon">💡</span>
      <p>El bug funcional <strong>nace en el momento en que decidimos no escribir la spec</strong>. Todo lo demás es manifestarlo más tarde y más caro.</p>
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
      radial-gradient(ellipse at 80% 20%, rgba(239, 68, 68, 0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 10% 80%, rgba(30, 58, 138, 0.12) 0%, transparent 55%);
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
    color: #f87171;
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
    background: linear-gradient(135deg, #ef4444, #f97316);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .main-layout {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: var(--spacing-xl);
    align-items: start;
  }

  .left-col, .right-col {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  /* Diagnóstico */
  .diagnosis { padding: var(--spacing-xl); }

  .diag-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
  }

  .diag-icon { font-size: 1.6rem; }

  .diag-header h3 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-electric);
    margin-bottom: 0;
  }

  .diagnosis p {
    margin: 0;
    font-size: 0.88rem;
    color: var(--color-neutral-light);
    opacity: 0.82;
    line-height: 1.65;
  }

  .diagnosis strong {
    color: #f87171;
    opacity: 1;
    font-weight: 700;
  }

  /* Stats */
  .stats-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);
  }

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xs);
    padding: var(--spacing-lg);
    text-align: center;
  }

  .stat-value {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 900;
    color: #f87171;
    line-height: 1;
  }

  .stat-label {
    font-size: 0.75rem;
    color: var(--color-neutral-light);
    opacity: 0.7;
    line-height: 1.4;
  }

  /* Síntomas */
  .symptoms-title {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--color-electric);
    opacity: 0.75;
    margin-bottom: 0;
  }

  .symptom-card {
    padding: var(--spacing-md) var(--spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .sym-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .sym-icon { font-size: 1.2rem; }

  .sym-title {
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--color-neutral-light);
  }

  .sym-quote {
    display: flex;
    flex-direction: column;
    gap: 4px;
    background: rgba(10, 22, 40, 0.5);
    border-radius: var(--radius-sm);
    padding: var(--spacing-sm) var(--spacing-md);
    border-left: 3px solid rgba(239, 68, 68, 0.4);
  }

  .sym-quote-label {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-electric);
    opacity: 0.55;
  }

  .sym-quote-text {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: #f87171;
  }

  .sym-cost {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-sm);
    font-size: 0.8rem;
    color: var(--color-neutral-light);
    opacity: 0.78;
    line-height: 1.45;
  }

  .sym-cost-icon { flex-shrink: 0; font-size: 0.9rem; }

  /* Insight */
  .key-insight {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-lg);
    background: rgba(239, 68, 68, 0.08);
    border: 1px solid rgba(248, 113, 113, 0.2);
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
    color: #f87171;
    font-weight: 700;
  }

  @media (max-width: 900px) {
    .main-layout { grid-template-columns: 1fr; }
  }

  @media (max-width: 768px) {
    .slide-content { padding: var(--spacing-lg) var(--spacing-md); gap: var(--spacing-md); }
    .title { font-size: clamp(1.4rem, 4.5vw, 2rem); }
    .diagnosis { padding: var(--spacing-lg); }
    .stats-row { grid-template-columns: 1fr; }
    .stat { flex-direction: row; gap: var(--spacing-md); padding: var(--spacing-md); text-align: left; }
    .stat-label { text-align: left; }
    .stat-value { font-size: 1.7rem; }
    .symptom-card { padding: var(--spacing-md); }
    .key-insight p { font-size: 0.82rem; }
  }

  @media (max-width: 480px) {
    .slide-content { padding: var(--spacing-md) var(--spacing-sm); gap: var(--spacing-md); }
    .label { font-size: 0.7rem; }
    .title { font-size: clamp(1.3rem, 5.5vw, 1.7rem); }
    .diagnosis { padding: var(--spacing-md); }
    .diagnosis p { font-size: 0.82rem; }
    .stat-value { font-size: 1.5rem; }
    .stat-label { font-size: 0.72rem; }
    .symptom-card { padding: var(--spacing-sm) var(--spacing-md); }
    .sym-icon { font-size: 1.1rem; }
    .sym-title { font-size: 0.88rem; }
    .sym-quote-text { font-size: 0.72rem; }
    .sym-cost { font-size: 0.75rem; }
    .key-insight { padding: var(--spacing-sm) var(--spacing-md); }
    .key-insight p { font-size: 0.78rem; }
  }

  @media (max-width: 390px) {
    .slide-content { padding: var(--spacing-sm); gap: var(--spacing-sm); }
    .title { font-size: clamp(1.1rem, 6vw, 1.5rem); }
    .diag-icon { font-size: 1.3rem; }
    .diagnosis p { font-size: 0.78rem; }
    .stat-value { font-size: 1.3rem; }
    .stat-label { font-size: 0.68rem; }
    .symptom-card { padding: var(--spacing-sm); gap: var(--spacing-xs); }
    .sym-title { font-size: 0.82rem; }
    .sym-quote-text { font-size: 0.7rem; }
    .sym-cost { font-size: 0.7rem; }
    .key-insight p { font-size: 0.72rem; }
  }

  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content { padding: var(--spacing-md) var(--spacing-content); gap: var(--spacing-sm); }
    .title { font-size: clamp(1.5rem, 3.4vw, 2.2rem); }
    .main-layout { gap: var(--spacing-md); }
    .left-col, .right-col { gap: var(--spacing-sm); }
    .diagnosis { padding: var(--spacing-md); }
    .stat { padding: var(--spacing-sm) var(--spacing-md); }
    .symptom-card { padding: var(--spacing-sm) var(--spacing-md); gap: var(--spacing-xs); }
  }
</style>
