<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';

  let slideElement: HTMLElement;

  onMount(() => {
    animateSlideEntrance(slideElement);
  });

  const symptoms = [
    {
      title: 'Interpretation gaps',
      desc: 'Product, backend, and frontend teams infer different behavior from the same ticket.'
    },
    {
      title: 'Late validation',
      desc: 'Critical edge cases appear during QA or release hardening, not during planning.'
    },
    {
      title: 'Shallow confidence',
      desc: 'Tests can pass while business behavior still breaks at integration points.'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <header class="slide-header">
      <p class="label">Slide 2 · Problem</p>
      <h2 class="title">Teams drift when behavior is implicit.</h2>
      <p class="subtitle">Missing contracts create rework loops that look like “execution issues”.</p>
    </header>

    <section class="card-glass main-surface" aria-label="Problem symptoms and evidence">
      <div class="problem-grid">
        {#each symptoms as symptom}
          <article class="problem-item">
            <h3>{symptom.title}</h3>
            <p>{symptom.desc}</p>
          </article>
        {/each}
      </div>

      <p class="evidence">
        <strong>Evidence:</strong>
        In a duplicate-email signup flow, two squads shipped conflicting 409 payloads because the response contract was never specified upfront.
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
      radial-gradient(ellipse at 18% 75%, rgba(59, 130, 246, 0.16) 0%, transparent 58%),
      radial-gradient(ellipse at 82% 20%, rgba(30, 58, 138, 0.2) 0%, transparent 55%);
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
    font-size: clamp(1.9rem, 4.8vw, 3.1rem);
  }

  .subtitle {
    margin: 0;
    max-width: 70ch;
    opacity: 0.84;
  }

  .main-surface {
    display: grid;
    gap: var(--spacing-lg);
  }

  .problem-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--spacing-md);
  }

  .problem-item {
    padding: var(--spacing-md);
    border: 1px solid rgba(96, 165, 250, 0.24);
    border-radius: var(--radius-md);
    background: rgba(10, 22, 40, 0.35);
  }

  .problem-item h3 {
    margin: 0 0 var(--spacing-xs);
    font-size: 1.08rem;
  }

  .problem-item p {
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
    .problem-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
