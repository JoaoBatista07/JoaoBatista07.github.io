export function initReveal(elements) {
    // Quem pediu menos movimento não vê animação: tudo fica visível como está
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // anima uma vez só
          }
        });
      },
      // Dispara um pouco antes do elemento chegar à base da tela
      { rootMargin: "0px 0px -10% 0px" }
    );
  
    elements.forEach((element) => {
      // O que já está na tela ao carregar não precisa de animação
      if (element.getBoundingClientRect().top < window.innerHeight) return;
  
      element.classList.add("reveal");
      observer.observe(element);
    });
  }