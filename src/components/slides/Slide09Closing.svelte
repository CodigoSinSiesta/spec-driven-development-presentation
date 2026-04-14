<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const takeaways = [
    'La especificación ejecutable es el contrato: todos hablan el mismo idioma.',
    'SDD reduce ambigüedad antes de escribir una sola línea de código.',
    'TDD, BDD y API-First son instancias del mismo principio: spec primero.',
    'El retrabajo cae cuando el equipo valida comportamiento, no código.',
    'Empieza pequeño: una feature crítica, dos sprints, mide el impacto.',
  ];

  const resources = [
    { label: 'Presentación publicada', url: 'codigosinsiesta.github.io/spec-driven-development-presentation/' },
    { label: 'Repositorio GitHub', url: 'github.com/CodigoSinSiesta/spec-driven-development-presentation' },
    { label: 'tellmealex.dev', url: 'tellmealex.dev' },
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>
  <div class="animated-grid"></div>

  <div class="slide-content">
    <div class="closing-header">
      <span class="label">Takeaways</span>
      <h2 class="title">De la intuición al <span class="highlight">contrato</span></h2>
    </div>

    <div class="main-layout">
      <div class="takeaways-col">
        <div class="takeaways-list">
          {#each takeaways as point, i}
            <div class="takeaway">
              <span class="ta-num">0{i + 1}</span>
              <span class="ta-text">{point}</span>
            </div>
          {/each}
        </div>
      </div>

      <div class="right-col">
        <div class="resources-card">
          <h3 class="resources-title">Recursos</h3>
          <div class="resources-list">
            {#each resources as resource}
              <a href="https://{resource.url}" target="_blank" rel="noopener noreferrer" class="resource-link">
                <span class="resource-icon">🔗</span>
                <span class="resource-text">{resource.label}</span>
              </a>
            {/each}
          </div>
        </div>

        <div class="footer-note">
          <p class="ai-note">Esta presentación fue construida con agentes de IA.</p>
          <p class="branding">Código Sin Siesta · 2026</p>
        </div>
      </div>
    </div>
  </div>

  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
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
      radial-gradient(ellipse at 10% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 55%),
      radial-gradient(ellipse at 90% 40%, rgba(30, 58, 138, 0.15) 0%, transparent 55%);
    z-index: 1;
  }

  .animated-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(96, 165, 250, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(96, 165, 250, 0.06) 1px, transparent 1px);
    background-size: 60px 60px;
    z-index: 0;
    animation: moveGrid 30s linear infinite;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    width: 100%;
    padding: var(--spacing-xl) var(--spacing-content);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
  }

  /* Header */
  .closing-header { text-align: center; }

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
    font-size: clamp(2rem, 4.5vw, 3.2rem);
    font-weight: 900;
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

  /* Layout */
  .main-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
    align-items: start;
  }

  /* Takeaways */
  .takeaways-col {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .takeaways-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .takeaway {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-lg);
    padding: var(--spacing-md) var(--spacing-lg);
    background: rgba(30, 58, 138, 0.15);
    border: 1px solid rgba(96, 165, 250, 0.12);
    border-radius: var(--radius-sm);
    transition: all var(--transition-fast);
  }

  .takeaway:hover {
    background: rgba(30, 58, 138, 0.25);
    border-color: rgba(96, 165, 250, 0.25);
  }

  .ta-num {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 800;
    color: var(--color-electric);
    opacity: 0.4;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .ta-text {
    font-size: 0.88rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.5;
  }

  /* Right col */
  .right-col {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  /* Resources card */
  .resources-card {
    padding: var(--spacing-lg);
    background: rgba(30, 58, 138, 0.12);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: var(--radius-md);
  }

  .resources-title {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--color-electric);
    opacity: 0.7;
    margin-bottom: var(--spacing-md);
  }

  .resources-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .resource-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-md);
    background: rgba(59, 130, 246, 0.06);
    border-radius: var(--radius-sm);
    text-decoration: none;
    transition: all var(--transition-fast);
  }

  .resource-link:hover {
    background: rgba(59, 130, 246, 0.12);
  }

  .resource-icon {
    font-size: 1rem;
  }

  .resource-text {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--color-electric);
  }

  /* Footer */
  .footer-note {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    text-align: center;
  }

  .ai-note {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--color-neutral-light);
    opacity: 0.6;
    margin-bottom: 0;
  }

  .branding {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-electric);
    opacity: 0.6;
    margin-bottom: 0;
  }

  /* Orbs */
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    pointer-events: none;
    z-index: 0;
  }

  .orb-1 {
    width: 400px;
    height: 400px;
    background: rgba(59, 130, 246, 0.07);
    top: -80px;
    right: -80px;
    animation: floatOrb 14s ease-in-out infinite;
  }

  .orb-2 {
    width: 300px;
    height: 300px;
    background: rgba(96, 165, 250, 0.05);
    bottom: -60px;
    left: 50px;
    animation: floatOrb 10s ease-in-out infinite reverse;
  }

  @keyframes moveGrid {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(60px, 60px); }
  }

  @keyframes floatOrb {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-25px); }
  }

  @media (max-width: 900px) {
    .main-layout { grid-template-columns: 1fr; }
  }

  /* Mobile: Tablet / large phone */
  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-lg) var(--spacing-md);
      gap: var(--spacing-lg);
    }

    .title {
      font-size: clamp(1.6rem, 5vw, 2.4rem);
    }

    .main-layout {
      gap: var(--spacing-lg);
    }

    .takeaway {
      padding: var(--spacing-md);
      gap: var(--spacing-md);
      min-height: 44px;
      align-items: center;
    }

    .ta-num {
      min-width: 44px;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0;
    }

    .ta-text {
      font-size: 0.82rem;
    }

    .resources-card {
      padding: var(--spacing-md);
    }

    .resources-title {
      font-size: 0.7rem;
    }

    .resource-text {
      font-size: 0.8rem;
    }

    .ai-note {
      font-size: 0.75rem;
    }

    .branding {
      font-size: 0.7rem;
    }
  }

  /* Mobile: Phone */
  @media (max-width: 480px) {
    .slide-content {
      padding: var(--spacing-md) var(--spacing-sm);
      gap: var(--spacing-md);
    }

    .label {
      font-size: 0.7rem;
      margin-bottom: var(--spacing-xs);
    }

    .title {
      font-size: clamp(1.4rem, 6vw, 1.8rem);
    }

    .takeaways-list {
      gap: var(--spacing-sm);
    }

    .takeaway {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
      min-height: 44px;
    }

    .ta-num {
      min-width: 44px;
      font-size: 0.65rem;
    }

    .ta-text {
      font-size: 0.78rem;
    }

    .resources-card {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .resource-link {
      padding: var(--spacing-sm);
    }

    .resource-icon {
      font-size: 0.9rem;
    }

    .resource-text {
      font-size: 0.78rem;
    }

    .ai-note {
      font-size: 0.7rem;
    }

    .branding {
      font-size: 0.65rem;
    }
  }

  /* Mobile: Small phone */
  @media (max-width: 390px) {
    .slide-content {
      padding: var(--spacing-sm);
      gap: var(--spacing-sm);
    }

    .title {
      font-size: clamp(1.2rem, 6vw, 1.6rem);
    }

    .takeaways-list {
      gap: var(--spacing-xs);
    }

    .takeaway {
      padding: var(--spacing-sm);
      min-height: 44px;
    }

    .ta-num {
      min-width: 44px;
      font-size: 0.6rem;
    }

    .ta-text {
      font-size: 0.72rem;
    }

    .resources-card {
      padding: var(--spacing-sm);
    }

    .resources-title {
      font-size: 0.65rem;
    }

    .resource-text {
      font-size: 0.72rem;
    }

    .ai-note {
      font-size: 0.65rem;
    }

    .branding {
      font-size: 0.6rem;
    }
  }

  /* Short desktop screens */
  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content {
      padding: 12px var(--spacing-content);
      gap: var(--spacing-sm);
    }

    .title {
      font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    }

    .main-layout {
      gap: var(--spacing-sm);
    }

    .takeaways-list {
      gap: var(--spacing-sm);
    }

    .takeaway {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-md);
    }

    .right-col {
      gap: var(--spacing-sm);
    }

    .resources-card {
      padding: var(--spacing-md);
    }
  }
</style>
