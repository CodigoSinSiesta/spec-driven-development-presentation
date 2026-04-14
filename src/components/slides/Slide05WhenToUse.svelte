<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const useCases = [
    'Dominios con reglas complejas (pagos, inventario, compliance).',
    'Equipos con múltiples squads o handoffs frecuentes.',
    'Features críticas donde un fallo tiene coste alto.',
    'Productos con roadmap largo que requieren trazabilidad de decisiones.'
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <h2>Cuándo usar SDD</h2>
    <ul class="list card-glass">
      {#each useCases as item}
        <li>{item}</li>
      {/each}
    </ul>
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
</style>
