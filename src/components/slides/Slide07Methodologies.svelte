<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <h2>Relación con TDD y BDD</h2>

    <div class="comparison-grid">
      <article class="card-glass">
        <h3>SDD</h3>
        <p>Contrato de producto + diseño técnico como punto de partida.</p>
      </article>

      <article class="card-glass">
        <h3>TDD</h3>
        <p>Define diseño de código a partir de tests unitarios primero.</p>
      </article>

      <article class="card-glass">
        <h3>BDD</h3>
        <p>Expresa comportamiento en lenguaje ubicuo con escenarios.</p>
      </article>
    </div>

    <p class="conclusion">
      No compiten: <strong>SDD enmarca</strong> y TDD/BDD pueden operar dentro de ese marco.
    </p>
  </div>
</div>

<style>
  .swiper-slide { min-height: 100vh; display: grid; place-items: center; }

  .slide-content {
    width: min(1100px, 92vw);
    display: grid;
    gap: 1rem;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.8rem, 4.4vw, 3rem);
  }

  .comparison-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .comparison-grid h3 {
    margin-bottom: 0.4rem;
  }

  .comparison-grid p {
    margin: 0;
    line-height: 1.5;
  }

  .conclusion {
    margin: 0;
    border: 1px solid var(--color-accent-strong);
    background: var(--color-accent-soft);
    border-radius: var(--radius-md);
    padding: 0.9rem 1rem;
  }

  @media (max-width: 900px) {
    .comparison-grid { grid-template-columns: 1fr; }
  }
</style>
