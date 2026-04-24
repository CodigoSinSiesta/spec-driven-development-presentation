<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const specBlocks = [
    {
      label: 'Escenario feliz',
      code: 'Dado un email válido y no registrado,\ncuando se solicita alta,\nentonces se crea el usuario\ny se publica `user.created` exactamente una vez.',
    },
    {
      label: 'Conflicto controlado',
      code: 'Dado un email ya registrado,\ncuando se solicita alta,\nentonces responde 409\ncon código semántico `EMAIL_ALREADY_REGISTERED`.',
    },
    {
      label: 'Invariante',
      code: 'Para todo intento de alta,\nse audita el evento\nincluso si la transacción falla.',
    },
  ];

  const derivations = [
    { icon: '🧱', area: 'Modelo', desc: 'Validación con Zod a partir de la spec; tipos compartidos cliente/servidor.' },
    { icon: '🧪', area: 'Tests', desc: 'Test de contrato API + integración con DB y bus de eventos.' },
    { icon: '📡', area: 'Observabilidad', desc: 'Métrica `user.created.count` y traza por `request_id`.' },
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">De la spec al código</span>
      <h2 class="title">Caso real: <span class="highlight">alta de usuario</span></h2>
    </div>

    <div class="main-layout">
      <!-- Left: spec ejecutable -->
      <div class="left-col">
        <div class="col-header">
          <span class="col-icon">📜</span>
          <h3 class="col-title">Spec</h3>
          <span class="col-tag">fuente de verdad</span>
        </div>
        {#each specBlocks as block}
          <div class="spec-block card-glass">
            <span class="spec-label">{block.label}</span>
            <pre class="spec-code">{block.code}</pre>
          </div>
        {/each}
      </div>

      <!-- Right: derivaciones -->
      <div class="right-col">
        <div class="col-header">
          <span class="col-icon">⚙️</span>
          <h3 class="col-title">Derivaciones</h3>
          <span class="col-tag">se generan, no se inventan</span>
        </div>
        {#each derivations as d}
          <div class="deriv-card card-glass">
            <span class="deriv-icon">{d.icon}</span>
            <div class="deriv-body">
              <span class="deriv-area">{d.area}</span>
              <p class="deriv-desc">{d.desc}</p>
            </div>
          </div>
        {/each}

        <div class="contrast-card">
          <span class="contrast-label">Sin SDD</span>
          <p>Empezamos por el endpoint, descubrimos los conflictos en QA, parcheamos el evento publicado dos veces en producción.</p>
        </div>
      </div>
    </div>

    <div class="key-insight">
      <span class="insight-icon">💡</span>
      <p>La spec no añade trabajo: <strong>reordena el orden en el que ya hacíamos ese trabajo</strong>, moviendo las decisiones difíciles al momento más barato para tomarlas.</p>
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
    gap: var(--spacing-md);
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
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
    align-items: start;
  }

  .left-col, .right-col {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  /* Encabezado de columna */
  .col-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding-bottom: var(--spacing-xs);
  }

  .col-icon { font-size: 1.2rem; }

  .col-title {
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 800;
    color: var(--color-neutral-light);
    margin: 0;
  }

  .col-tag {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-electric);
    opacity: 0.65;
    margin-left: auto;
  }

  /* Spec blocks */
  .spec-block {
    padding: var(--spacing-sm) var(--spacing-md);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    border-left: 3px solid rgba(96, 165, 250, 0.5);
  }

  .spec-label {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-electric);
    opacity: 0.7;
  }

  .spec-code {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    line-height: 1.55;
    color: var(--color-neutral-light);
    opacity: 0.92;
    white-space: pre-wrap;
  }

  /* Derivations */
  .deriv-card {
    padding: var(--spacing-sm) var(--spacing-md);
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
  }

  .deriv-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 2px; }

  .deriv-body {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .deriv-area {
    font-family: var(--font-display);
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--color-neutral-light);
  }

  .deriv-desc {
    margin: 0;
    font-size: 0.78rem;
    color: var(--color-neutral-light);
    opacity: 0.78;
    line-height: 1.5;
  }

  /* Contraste sin SDD */
  .contrast-card {
    margin-top: var(--spacing-xs);
    padding: var(--spacing-sm) var(--spacing-md);
    background: rgba(239, 68, 68, 0.08);
    border: 1px solid rgba(248, 113, 113, 0.22);
    border-radius: var(--radius-sm);
  }

  .contrast-label {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #f87171;
    margin-bottom: var(--spacing-xs);
  }

  .contrast-card p {
    margin: 0;
    font-size: 0.78rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.5;
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
    .key-insight p { font-size: 0.82rem; }
  }

  @media (max-width: 480px) {
    .slide-content { padding: var(--spacing-md) var(--spacing-sm); gap: var(--spacing-md); }
    .label { font-size: 0.7rem; }
    .title { font-size: clamp(1.3rem, 5.5vw, 1.7rem); }
    .col-tag { font-size: 0.6rem; }
    .spec-block { padding: var(--spacing-sm); }
    .spec-code { font-size: 0.72rem; }
    .deriv-card { padding: var(--spacing-sm); }
    .deriv-area { font-size: 0.82rem; }
    .deriv-desc { font-size: 0.74rem; }
    .contrast-card p { font-size: 0.74rem; }
    .key-insight { padding: var(--spacing-sm) var(--spacing-md); }
    .key-insight p { font-size: 0.78rem; }
  }

  @media (max-width: 390px) {
    .slide-content { padding: var(--spacing-sm); gap: var(--spacing-sm); }
    .title { font-size: clamp(1.1rem, 6vw, 1.5rem); }
    .col-icon { font-size: 1rem; }
    .col-title { font-size: 0.9rem; }
    .spec-code { font-size: 0.68rem; }
    .deriv-area { font-size: 0.78rem; }
    .deriv-desc { font-size: 0.7rem; }
    .key-insight p { font-size: 0.72rem; }
  }

  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content { padding: var(--spacing-md) var(--spacing-content); gap: var(--spacing-sm); }
    .title { font-size: clamp(1.5rem, 3.4vw, 2.2rem); }
    .main-layout { gap: var(--spacing-md); }
    .left-col, .right-col { gap: var(--spacing-xs); }
    .spec-block { padding: var(--spacing-sm) var(--spacing-md); }
    .spec-code { font-size: 0.74rem; line-height: 1.5; }
    .deriv-card { padding: var(--spacing-sm) var(--spacing-md); }
    .key-insight { padding: var(--spacing-sm) var(--spacing-md); }
  }
</style>
