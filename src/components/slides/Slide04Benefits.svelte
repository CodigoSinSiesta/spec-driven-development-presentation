<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';

  let slideElement: HTMLElement;

  onMount(() => {
    animateSlideEntrance(slideElement);
  });

  const benefits = [
    {
      title: 'Cross-team alignment',
      desc: 'Discussions move from opinions to explicit scenarios and acceptance rules.',
      evidence: 'Example: product and backend sign off on the same 409 error contract before sprint start.'
    },
    {
      title: 'Lower accidental debt',
      desc: 'Architectural constraints are explicit before implementation details harden.',
      evidence: 'Example: event idempotency is documented, so retries do not duplicate side effects.'
    },
    {
      title: 'Tests with business intent',
      desc: 'Coverage targets behavior commitments, not only internal functions.',
      evidence: 'Example: contract tests verify API responses that consumers actually depend on.'
    },
    {
      title: 'Faster onboarding',
      desc: 'New contributors can read specs to understand why the system behaves this way.',
      evidence: 'Example: first bugfix starts from scenario files, not reverse-engineering controllers.'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 4 · Benefits</p>
      <h2 class="title">SDD improves delivery quality before code quality gates run.</h2>
      <p class="subtitle">The gain comes from better decisions earlier, not heavier process later.</p>
    </header>

    <section class="card-glass main-surface" aria-label="Key benefits with evidence">
      <div class="benefit-grid">
        {#each benefits as benefit}
          <article class="benefit-item">
            <h3>{benefit.title}</h3>
            <p>{benefit.desc}</p>
            <p class="evidence">{benefit.evidence}</p>
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
      radial-gradient(ellipse at 18% 26%, rgba(59, 130, 246, 0.16) 0%, transparent 56%),
      radial-gradient(ellipse at 83% 82%, rgba(30, 58, 138, 0.2) 0%, transparent 58%);
    z-index: 0;
  }

  .slide-content {
    position: relative;
    z-index: 1;
    width: min(1150px, 92vw);
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
    font-size: clamp(1.85rem, 4.8vw, 3.05rem);
  }

  .subtitle {
    margin: 0;
    max-width: 74ch;
    opacity: 0.84;
  }

  .main-surface {
    padding-top: var(--spacing-xl);
    padding-bottom: var(--spacing-xl);
  }

  .benefit-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--spacing-md);
  }

  .benefit-item {
    border: 1px solid rgba(96, 165, 250, 0.24);
    border-radius: var(--radius-md);
    background: rgba(10, 22, 40, 0.35);
    padding: var(--spacing-md);
    display: grid;
    gap: var(--spacing-xs);
  }

  .benefit-item h3 {
    margin: 0;
    font-size: 1.06rem;
  }

  .benefit-item p {
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
    .benefit-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
