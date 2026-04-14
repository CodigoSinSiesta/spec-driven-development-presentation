<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const benefits = [
    {
      title: 'Alineación técnica y funcional',
      desc: 'Producto y desarrollo discuten sobre escenarios concretos, no sobre interpretaciones.'
    },
    {
      title: 'Menos deuda accidental',
      desc: 'El diseño técnico nace con restricciones explícitas y evita reescrituras tempranas.'
    },
    {
      title: 'Tests con propósito',
      desc: 'Las pruebas cubren criterios de aceptación reales, no solo detalles internos.'
    },
    {
      title: 'Onboarding más rápido',
      desc: 'Nuevos miembros entienden el sistema leyendo specs vivas y ejecutables.'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <h2>Beneficios principales</h2>
    <div class="benefit-grid">
      {#each benefits as benefit}
        <article class="card-glass benefit-card">
          <h3>{benefit.title}</h3>
          <p>{benefit.desc}</p>
        </article>
      {/each}
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

  .benefit-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .benefit-card h3 {
    font-size: 1.15rem;
    margin-bottom: 0.35rem;
  }

  .benefit-card p {
    margin: 0;
    font-size: 0.98rem;
  }

  @media (max-width: 900px) {
    .benefit-grid { grid-template-columns: 1fr; }
  }
</style>
