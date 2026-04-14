<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const flow = [
    '1. Capturar intención en una spec clara',
    '2. Validar escenarios y criterios con el equipo',
    '3. Implementar siguiendo la spec como contrato',
    '4. Verificar que tests y comportamiento cumplen la spec'
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <h2>Spec-Driven Development: definición operativa</h2>
    <p class="summary">
      SDD no reemplaza el desarrollo: ordena el flujo para que la especificación sea la fuente de verdad.
    </p>

    <ol class="flow card-glass">
      {#each flow as step}
        <li>{step}</li>
      {/each}
    </ol>
  </div>
</div>

<style>
  .swiper-slide { min-height: 100vh; display: grid; place-items: center; }

  .slide-content {
    width: min(1000px, 92vw);
    display: grid;
    gap: 1rem;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.8rem, 4.6vw, 3.2rem);
  }

  .summary {
    margin: 0;
    font-size: 1.1rem;
    opacity: 0.9;
  }

  .flow {
    margin: 0;
    padding-left: 1.2rem;
    display: grid;
    gap: 0.7rem;
  }

  .flow li {
    line-height: 1.5;
    font-size: 1.02rem;
  }
</style>
