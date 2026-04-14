<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const problems = [
    {
      title: 'Requisitos ambiguos',
      desc: 'Historias vagas generan interpretaciones distintas entre producto, backend y frontend.'
    },
    {
      title: 'Retrabajo estructural',
      desc: 'Implementamos rápido, validamos tarde y acabamos rehaciendo diseño y código crítico.'
    },
    {
      title: 'Tests desconectados',
      desc: 'Las pruebas validan detalles técnicos pero no garantizan el comportamiento de negocio.'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <h2>El problema: código sin especificación explícita</h2>
    <div class="problem-grid">
      {#each problems as problem}
        <article class="card-glass problem-card">
          <h3>{problem.title}</h3>
          <p>{problem.desc}</p>
        </article>
      {/each}
    </div>

    <div class="insight">
      <strong>Diagnóstico:</strong> sin contrato previo, cada iteración añade incertidumbre.
    </div>
  </div>
</div>

<style>
  .swiper-slide { min-height: 100vh; display: grid; place-items: center; }

  .slide-content {
    width: min(1150px, 92vw);
    display: grid;
    gap: 1.4rem;
  }

  h2 {
    font-size: clamp(1.7rem, 4.5vw, 3.2rem);
    margin: 0;
  }

  .problem-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .problem-card h3 {
    margin-bottom: 0.35rem;
    font-size: 1.15rem;
  }

  .problem-card p {
    margin: 0;
    font-size: 0.98rem;
  }

  .insight {
    border: 1px solid rgba(45, 212, 191, 0.45);
    background: rgba(45, 212, 191, 0.08);
    border-radius: var(--radius-md);
    padding: 0.9rem 1rem;
    font-size: 1rem;
  }

  @media (max-width: 900px) {
    .problem-grid { grid-template-columns: 1fr; }
  }
</style>
