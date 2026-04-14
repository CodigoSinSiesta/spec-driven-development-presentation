<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const antiPatterns = [
    'Prototipos de un día donde buscamos feedback visual inmediato.',
    'Scripts internos de bajo riesgo y vida útil corta.',
    'Exploraciones técnicas sin requisitos estabilizados.',
    'Cuando la spec se usa como burocracia y no como herramienta viva.'
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <h2>Cuándo NO usar SDD</h2>
    <ul class="list card-glass">
      {#each antiPatterns as item}
        <li>{item}</li>
      {/each}
    </ul>
    <p class="note">SDD es una inversión: no aporta igual en todos los contextos.</p>
  </div>
</div>

<style>
  .swiper-slide { min-height: 100vh; display: grid; place-items: center; }

  .slide-content {
    width: min(980px, 92vw);
    display: grid;
    gap: 1rem;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.8rem, 4.4vw, 3rem);
  }

  .list {
    margin: 0;
    padding-left: 1.2rem;
    display: grid;
    gap: 0.7rem;
  }

  .list li {
    font-size: 1.05rem;
    line-height: 1.5;
  }

  .note {
    margin: 0;
    font-size: 0.98rem;
    opacity: 0.82;
    font-family: var(--font-mono);
  }
</style>
