<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';

  let slideElement: HTMLElement;

  onMount(() => {
    animateSlideEntrance(slideElement);
  });

  const useCases = [
    {
      title: 'Complex domain rules',
      desc: 'Payments, inventory, and compliance logic require shared interpretation before coding.',
      evidence: 'Evidence: edge-case paths are validated once, then reused by API and UI teams.'
    },
    {
      title: 'Frequent handoffs',
      desc: 'Multiple squads and parallel streams need a stable contract to avoid duplicate assumptions.',
      evidence: 'Evidence: integration blockers are found during spec review, not in merge week.'
    },
    {
      title: 'High-cost failures',
      desc: 'If one wrong behavior can impact revenue or legal posture, ambiguity is expensive.',
      evidence: 'Evidence: incident postmortems often trace back to undefined acceptance criteria.'
    },
    {
      title: 'Long roadmap ownership',
      desc: 'Teams need decision traceability as context rotates and requirements evolve.',
      evidence: 'Evidence: specs preserve intent when original implementers leave the project.'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 5 · Use Cases</p>
      <h2 class="title">Use SDD when decision ambiguity costs more than writing the contract.</h2>
      <p class="subtitle">The method pays off when coordination and correctness are both critical.</p>
    </header>

    <section class="card-glass main-surface" aria-label="When to use SDD criteria">
      <div class="use-grid">
        {#each useCases as useCase}
          <article class="use-item">
            <h3>{useCase.title}</h3>
            <p>{useCase.desc}</p>
            <p class="evidence">{useCase.evidence}</p>
          </article>
        {/each}
      </div>
    </section>
  </div>
</div>

<style>
  .swiper-slide {
    position: relative;
    min-height: 100vh;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .slide-background {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 14% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 54%),
      radial-gradient(ellipse at 88% 22%, rgba(30, 58, 138, 0.2) 0%, transparent 60%);
    z-index: 0;
  }

  .slide-content {
    position: relative;
    z-index: 1;
    width: min(1120px, 92vw);
    display: grid;
    gap: var(--spacing-lg);
  }

  .slide-header {
    display: grid;
    gap: var(--spacing-sm);
  }

  .label {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-electric);
  }

  .title {
    margin: 0;
    font-size: clamp(1.82rem, 4.8vw, 3rem);
  }

  .subtitle {
    margin: 0;
    max-width: 75ch;
    opacity: 0.84;
  }

  .use-grid {
    display: grid;
    gap: var(--spacing-md);
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .use-item {
    background: rgba(10, 22, 40, 0.34);
    border: 1px solid rgba(96, 165, 250, 0.23);
    border-radius: var(--radius-md);
    padding: var(--spacing-md);
    display: grid;
    gap: var(--spacing-xs);
  }

  .use-item h3 {
    margin: 0;
    font-size: 1.05rem;
  }

  .use-item p {
    margin: 0;
    font-size: 0.95rem;
  }

  .evidence {
    font-family: var(--font-mono);
    font-size: 0.79rem;
    color: var(--color-electric);
    opacity: 0.92;
  }

  @media (max-width: 900px) {
    .use-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
