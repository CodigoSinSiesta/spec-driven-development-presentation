<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';

  let slideElement: HTMLElement;

  onMount(() => {
    animateSlideEntrance(slideElement);
  });

  const antiPatterns = [
    {
      title: 'One-day discovery prototypes',
      desc: 'When the goal is visual feedback in hours, contract formalization is overhead.'
    },
    {
      title: 'Low-risk disposable scripts',
      desc: 'Short-lived internal automation usually does not justify a full spec cycle.'
    },
    {
      title: 'Unstable technical exploration',
      desc: 'If the team is still discovering feasibility, keep notes lightweight first.'
    },
    {
      title: 'Bureaucratic ritual',
      desc: 'If specs are written only for compliance, SDD loses its engineering value.'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 6 · Boundaries</p>
      <h2 class="title">Do not use SDD where fast learning beats contract stability.</h2>
      <p class="subtitle">SDD is leverage, not a universal ritual for every task.</p>
    </header>

    <section class="card-glass main-surface" aria-label="When not to use SDD criteria">
      <div class="anti-grid">
        {#each antiPatterns as antiPattern}
          <article class="anti-item">
            <h3>{antiPattern.title}</h3>
            <p>{antiPattern.desc}</p>
          </article>
        {/each}
      </div>

      <p class="evidence">
        <strong>Evidence:</strong>
        Teams with strict weekly prototype cycles typically prioritize speed of feedback over full contract definition.
      </p>
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
      radial-gradient(ellipse at 20% 20%, rgba(59, 130, 246, 0.14) 0%, transparent 56%),
      radial-gradient(ellipse at 80% 85%, rgba(30, 58, 138, 0.2) 0%, transparent 60%);
    z-index: 0;
  }

  .slide-content {
    position: relative;
    z-index: 1;
    width: min(1080px, 92vw);
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
    font-size: clamp(1.8rem, 4.8vw, 3rem);
  }

  .subtitle {
    margin: 0;
    max-width: 73ch;
    opacity: 0.84;
  }

  .main-surface {
    display: grid;
    gap: var(--spacing-lg);
  }

  .anti-grid {
    display: grid;
    gap: var(--spacing-md);
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .anti-item {
    background: rgba(10, 22, 40, 0.34);
    border: 1px solid rgba(96, 165, 250, 0.23);
    border-radius: var(--radius-md);
    padding: var(--spacing-md);
    display: grid;
    gap: var(--spacing-xs);
  }

  .anti-item h3 {
    margin: 0;
    font-size: 1.04rem;
  }

  .anti-item p {
    margin: 0;
    font-size: 0.95rem;
  }

  .evidence {
    margin: 0;
    border-left: 3px solid var(--color-accent-bright);
    padding-left: var(--spacing-md);
    font-size: 0.95rem;
    opacity: 0.9;
  }

  @media (max-width: 900px) {
    .anti-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
