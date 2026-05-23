import gsap from 'gsap';

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Animate slide entrance
 * Called when a slide becomes active
 */
export function animateSlideEntrance(slideElement: HTMLElement) {
  const timeline = gsap.timeline();
  const reduceMotion = prefersReducedMotion();

  // Fade in the slide
  timeline.to(slideElement, {
    opacity: 1,
    duration: reduceMotion ? 0 : 0.6,
    ease: 'power2.out',
  }, 0);

  // Animate children elements with stagger
  const children = slideElement.querySelectorAll('h1, h2, h3, p, button, .card-glass, .risk-item, .takeaway-item');

  if (children.length > 0) {
    timeline.to(
      children,
      {
        opacity: 1,
        y: 0,
        duration: reduceMotion ? 0 : 0.6,
        stagger: reduceMotion ? 0 : 0.1,
        ease: 'power2.out',
      },
      0.2
    );
  }

  return timeline;
}

/**
 * Animate slide exit
 * Called when a slide is about to leave
 */
export function animateSlideExit(slideElement: HTMLElement) {
  const reduceMotion = prefersReducedMotion();
  return gsap.to(slideElement, {
    opacity: 0.5,
    duration: reduceMotion ? 0 : 0.4,
    ease: 'power2.in',
  });
}

/**
 * Add hover animation to buttons
 */
export function addButtonHoverAnimation(buttonElement: HTMLElement) {
  if (prefersReducedMotion()) {
    return () => undefined;
  }

  const onMouseEnter = () => {
    gsap.to(buttonElement, {
      scale: 1.05,
      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.6)',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const onMouseLeave = () => {
    gsap.to(buttonElement, {
      scale: 1,
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  buttonElement.addEventListener('mouseenter', onMouseEnter);
  buttonElement.addEventListener('mouseleave', onMouseLeave);

  return () => {
    buttonElement.removeEventListener('mouseenter', onMouseEnter);
    buttonElement.removeEventListener('mouseleave', onMouseLeave);
  };
}

/**
 * Animate counter/statistics
 */
export function animateCounter(element: HTMLElement, targetValue: number, duration: number = 2) {
  if (prefersReducedMotion()) {
    element.textContent = Math.floor(targetValue).toLocaleString();
    return;
  }

  const obj = { value: 0 };
  gsap.to(obj, {
    value: targetValue,
    duration,
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toLocaleString();
    },
    ease: 'power2.out',
  });
}

/**
 * Add parallax effect to background
 */
export function addParallaxEffect(element: HTMLElement, intensity: number = 0.5) {
  if (prefersReducedMotion()) {
    return () => undefined;
  }

  const onMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) * intensity;
    const y = (clientY - window.innerHeight / 2) * intensity;

    gsap.to(element, {
      x,
      y,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  window.addEventListener('mousemove', onMouseMove);

  return () => {
    window.removeEventListener('mousemove', onMouseMove);
  };
}

/**
 * Animate elements on scroll into view
 */
export function observeElementsForAnimation(selector: string) {
  const elements = document.querySelectorAll(selector);
  const reduceMotion = prefersReducedMotion();

  if (reduceMotion) {
    elements.forEach((element) => {
      gsap.set(element, { opacity: 1, y: 0 });
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;

        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: reduceMotion ? 0 : 0.6,
          ease: 'power2.out',
        });

        observer.unobserve(element);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px',
  });

  elements.forEach((element) => {
    gsap.set(element, reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 });
    observer.observe(element);
  });

  return observer;
}

/**
 * Create a simple tween for fade transitions
 */
export function fadeTransition(element: HTMLElement, duration: number = 0.6) {
  const reduceMotion = prefersReducedMotion();
  gsap.from(element, {
    opacity: 0,
    duration: reduceMotion ? 0 : duration,
    ease: 'power2.out',
  });
}

/**
 * Animate a line drawing (SVG)
 */
export function animateLineDraw(svgElement: SVGElement, duration: number = 2) {
  const reduceMotion = prefersReducedMotion();
  const paths = svgElement.querySelectorAll('path, line, circle');

  paths.forEach((path) => {
    const length = (path as any).getTotalLength?.() || 0;
    gsap.from(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      duration: reduceMotion ? 0 : duration,
      ease: 'power2.inOut',
    });
  });
}

/**
 * Create a staggered animation for a list of elements
 */
export function staggerAnimation(
  elements: HTMLElement[],
  duration: number = 0.6,
  staggerDelay: number = 0.1
) {
  const reduceMotion = prefersReducedMotion();
  const timeline = gsap.timeline();

  elements.forEach((element, index) => {
    timeline.to(
      element,
      {
        opacity: 1,
        y: 0,
        duration: reduceMotion ? 0 : duration,
        ease: 'power2.out',
      },
      reduceMotion ? 0 : index * staggerDelay
    );
  });

  return timeline;
}

/**
 * Pulse animation for attention
 */
export function createPulse(element: HTMLElement, scale: number = 1.1) {
  if (prefersReducedMotion()) {
    gsap.set(element, { scale: 1, opacity: 1 });
    return;
  }

  gsap.to(element, {
    scale,
    opacity: 0.8,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
}
