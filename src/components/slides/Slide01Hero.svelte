<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>
  <div class="slide-content">
    <span class="eyebrow">Código Sin Siesta · 2026</span>
    <h1>Spec-Driven Development <span class="highlight">(SDD)</span></h1>
    <p class="subtitle">
      Escribir primero el contrato de comportamiento y después implementar.
      Menos ambigüedad, menos retrabajo, más calidad de equipo.
    </p>

    <div class="definition card-glass">
      <h3>Definición rápida</h3>
      <p>
        SDD es una disciplina donde la especificación ejecutable o verificable guía diseño,
        implementación y validación desde el inicio.
      </p>
    </div>
  </div>
</div>

<style>
  .swiper-slide {
    position: relative;
    min-height: 100vh;
    display: grid;
    place-items: center;
  }

  .slide-background {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.2), transparent 45%),
      radial-gradient(circle at 85% 75%, rgba(20, 184, 166, 0.2), transparent 45%),
      linear-gradient(160deg, rgba(15, 23, 42, 0.96), rgba(3, 7, 18, 0.98));
  }

  .slide-content {
    position: relative;
    z-index: 1;
    width: min(1100px, 92vw);
    display: grid;
    gap: 1.2rem;
  }

  .eyebrow {
    font-family: var(--font-mono);
    letter-spacing: 0.08em;
    color: #67e8f9;
    font-size: 0.82rem;
    text-transform: uppercase;
  }

  h1 {
    font-size: clamp(2.2rem, 7vw, 5.4rem);
    line-height: 1.05;
    margin: 0;
  }

  .highlight {
    background: linear-gradient(90deg, #2dd4bf, #67e8f9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: clamp(1rem, 2vw, 1.35rem);
    max-width: 780px;
    opacity: 0.9;
    margin: 0;
  }

  .definition h3 {
    margin-bottom: 0.4rem;
    font-size: clamp(1.1rem, 2vw, 1.45rem);
  }

  .definition p {
    margin: 0;
  }
</style>
