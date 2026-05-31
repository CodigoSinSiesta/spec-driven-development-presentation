<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';

  let slideElement: HTMLElement;

  onMount(() => {
    animateSlideEntrance(slideElement);
  });

  const flow = [
    'Capture intent in a shared, testable specification.',
    'Review scenarios and acceptance criteria with the whole team.',
    'Implement against the approved contract.',
    'Verify behavior and tests against the same source of truth.'
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 3 · Definition</p>
      <h2 class="title">SDD turns specs into an execution order.</h2>
      <p class="subtitle">It does not replace engineering work. It removes ambiguity before coding starts.</p>
    </header>

    <section class="card-glass main-surface" aria-label="SDD operating flow and evidence">
      <ol class="flow">
        {#each flow as step}
          <li>{step}</li>
        {/each}
      </ol>

      <p class="evidence">
        <strong>Evidence:</strong>
        Teams can reject unclear work earlier because scenarios are reviewed before the first implementation PR.
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
      radial-gradient(ellipse at 12% 22%, rgba(59, 130, 246, 0.14) 0%, transparent 52%),
      radial-gradient(ellipse at 84% 74%, rgba(30, 58, 138, 0.18) 0%, transparent 58%);
    z-index: 0;
  }

  .slide-content {
    position: relative;
    z-index: 1;
    width: min(1040px, 92vw);
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
    font-size: clamp(1.9rem, 4.8vw, 3.1rem);
  }

  .subtitle {
    margin: 0;
    max-width: 74ch;
    opacity: 0.84;
  }

  .main-surface {
    display: grid;
    gap: var(--spacing-lg);
  }

  .flow {
    margin: 0;
    padding-left: 1.25rem;
    display: grid;
    gap: var(--spacing-md);
  }

  .flow li {
    font-size: 1rem;
    line-height: 1.5;
  }

  .evidence {
    margin: 0;
    border-left: 3px solid var(--color-accent-bright);
    padding-left: var(--spacing-md);
    font-size: 0.95rem;
    opacity: 0.9;
  }
</style>
