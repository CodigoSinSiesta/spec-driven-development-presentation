<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';

  let slideElement: HTMLElement;

  onMount(() => {
    animateSlideEntrance(slideElement);
  });

  const comparison = [
    {
      title: 'SDD',
      desc: 'Defines product and technical contract before implementation.'
    },
    {
      title: 'TDD',
      desc: 'Shapes code design by writing low-level tests first.'
    },
    {
      title: 'BDD',
      desc: 'Expresses behavior in a shared ubiquitous language with scenarios.'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 7 · Method Stack</p>
      <h2 class="title">SDD frames the system; TDD and BDD refine execution.</h2>
      <p class="subtitle">They are complementary layers, not competing processes.</p>
    </header>

    <section class="card-glass main-surface" aria-label="Method comparison and evidence">
      <div class="comparison-grid">
        {#each comparison as item}
          <article class="comparison-item">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        {/each}
      </div>

      <p class="evidence">
        <strong>Evidence:</strong>
        In user registration, SDD defines accepted outcomes, BDD captures business scenarios, and TDD guards service-level edge cases.
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
      radial-gradient(ellipse at 12% 72%, rgba(59, 130, 246, 0.15) 0%, transparent 56%),
      radial-gradient(ellipse at 88% 26%, rgba(30, 58, 138, 0.18) 0%, transparent 58%);
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
    font-size: clamp(1.82rem, 4.8vw, 3.02rem);
  }

  .subtitle {
    margin: 0;
    max-width: 72ch;
    opacity: 0.84;
  }

  .main-surface {
    display: grid;
    gap: var(--spacing-lg);
  }

  .comparison-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--spacing-md);
  }

  .comparison-item {
    background: rgba(10, 22, 40, 0.34);
    border: 1px solid rgba(96, 165, 250, 0.23);
    border-radius: var(--radius-md);
    padding: var(--spacing-md);
    display: grid;
    gap: var(--spacing-xs);
  }

  .comparison-item h3 {
    margin: 0;
    font-size: 1.08rem;
  }

  .comparison-item p {
    margin: 0;
    font-size: 0.96rem;
  }

  .evidence {
    margin: 0;
    border-left: 3px solid var(--color-accent-bright);
    padding-left: var(--spacing-md);
    font-size: 0.95rem;
    opacity: 0.9;
  }

  @media (max-width: 900px) {
    .comparison-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
