<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <h2>Cierre: de la intuición al contrato</h2>

    <div class="card-glass">
      <p class="lead">
        SDD reduce ambigüedad, mejora decisiones técnicas y permite escalar calidad sin frenar al equipo.
      </p>
      <p>
        Siguiente paso recomendado: pilotar SDD en una feature crítica de tamaño medio durante 2 sprints,
        medir retrabajo y defectos, y ajustar el flujo.
      </p>
    </div>

    <div class="links">
      <a class="btn btn-secondary" href="https://codigosinsiesta.github.io/spec-driven-development-presentation/" target="_blank" rel="noopener noreferrer">Ver presentación publicada</a>
      <a class="btn btn-primary" href="https://github.com/CodigoSinSiesta/spec-driven-development-presentation" target="_blank" rel="noopener noreferrer">Repositorio</a>
    </div>
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

  .lead {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
</style>
