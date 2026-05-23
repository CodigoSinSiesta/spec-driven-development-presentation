<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';

  let slideElement: HTMLElement;

  onMount(() => {
    animateSlideEntrance(slideElement);
  });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 8 · Example</p>
      <h2 class="title">A small user signup spec prevents large integration mistakes.</h2>
      <p class="subtitle">Contract first, implementation second, verification always against the contract.</p>
    </header>

    <section class="card-glass main-surface" aria-label="Practical signup example">
      <div class="example-grid">
        <article class="example-item">
          <h3>Spec Contract</h3>
          <ul>
            <li>Given a valid new email, the API creates the user.</li>
            <li>Given an existing email, the API returns <code>409</code> with semantic error code <code>USER_ALREADY_EXISTS</code>.</li>
            <li>The <code>user.created</code> event is emitted exactly once.</li>
          </ul>
        </article>

        <article class="example-item">
          <h3>Implementation + Tests</h3>
          <ul>
            <li>Zod validation guards malformed payloads before domain logic runs.</li>
            <li>Contract tests validate response body and status against the spec.</li>
            <li>Integration tests assert persistence plus single event publication.</li>
          </ul>
        </article>
      </div>

      <p class="evidence">
        <strong>Evidence:</strong>
        The explicit 409 contract removes UI/backend mismatch on duplicate-email handling.
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
      radial-gradient(ellipse at 16% 78%, rgba(59, 130, 246, 0.14) 0%, transparent 57%),
      radial-gradient(ellipse at 86% 24%, rgba(30, 58, 138, 0.19) 0%, transparent 58%);
    z-index: 0;
  }

  .slide-content {
    position: relative;
    z-index: 1;
    width: min(1140px, 92vw);
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
    max-width: 73ch;
    opacity: 0.84;
  }

  .main-surface {
    display: grid;
    gap: var(--spacing-lg);
  }

  .example-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--spacing-md);
  }

  .example-item {
    background: rgba(10, 22, 40, 0.35);
    border: 1px solid rgba(96, 165, 250, 0.23);
    border-radius: var(--radius-md);
    padding: var(--spacing-md);
  }

  .example-item h3 {
    margin: 0 0 var(--spacing-sm);
    font-size: 1.08rem;
  }

  .example-item ul {
    margin: 0;
    padding-left: 1.2rem;
    display: grid;
    gap: 0.55rem;
  }

  .example-item li {
    line-height: 1.45;
    font-size: 0.95rem;
  }

  .example-item code {
    font-family: var(--font-mono);
    font-size: 0.87em;
    color: var(--color-electric);
  }

  .evidence {
    margin: 0;
    border-left: 3px solid var(--color-accent-bright);
    padding-left: var(--spacing-md);
    font-size: 0.95rem;
    opacity: 0.9;
  }

  @media (max-width: 900px) {
    .example-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
