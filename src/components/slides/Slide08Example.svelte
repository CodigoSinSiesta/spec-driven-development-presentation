<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <h2>Ejemplo práctico: alta de usuario</h2>

    <div class="example-grid">
      <article class="card-glass">
        <h3>Spec</h3>
        <ul>
          <li>Dado un email válido y no registrado, se crea usuario.</li>
          <li>Si el email existe, devuelve conflicto 409 con código semántico.</li>
          <li>El evento `user.created` se publica exactamente una vez.</li>
        </ul>
      </article>

      <article class="card-glass">
        <h3>Implementación + tests</h3>
        <ul>
          <li>Servicio valida reglas con Zod.</li>
          <li>Test de contrato API para responses.</li>
          <li>Test de integración para persistencia + evento.</li>
        </ul>
      </article>
    </div>
  </div>
</div>

<style>
  .swiper-slide { min-height: 100vh; display: grid; place-items: center; }

  .slide-content {
    width: min(1150px, 92vw);
    display: grid;
    gap: 1rem;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.8rem, 4.4vw, 3rem);
  }

  .example-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .example-grid h3 {
    margin-bottom: 0.5rem;
  }

  .example-grid ul {
    margin: 0;
    padding-left: 1.2rem;
    display: grid;
    gap: 0.55rem;
  }

  .example-grid li {
    line-height: 1.45;
    font-size: 0.98rem;
  }

  @media (max-width: 900px) {
    .example-grid { grid-template-columns: 1fr; }
  }
</style>
