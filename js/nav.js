export function initActiveNav(nav) {
    const items = [...nav.querySelectorAll('a[href^="#"]')]
      .map((link) => ({
        link,
        section: document.querySelector(link.getAttribute("href")),
      }))
      .filter((item) => item.section);
  
    let scheduled = false;
  
    function update() {
      scheduled = false;
  
      // "Linha de leitura" a 40% da altura da tela
      const readingLine = window.innerHeight * 0.4;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  
      // A seção atual é a última cujo topo já passou da linha de leitura
      let current = null;
      items.forEach((item) => {
        if (item.section.getBoundingClientRect().top <= readingLine) current = item;
      });
  
      // No fim da página, a última seção pode ser curta demais para cruzar a linha
      if (atBottom) current = items[items.length - 1];
  
      items.forEach((item) => {
        if (item === current) {
          item.link.setAttribute("aria-current", "location");
        } else {
          item.link.removeAttribute("aria-current");
        }
      });
    }
  
    // Limita a atualização a uma vez por quadro, mesmo que o scroll dispare dezenas de vezes
    window.addEventListener(
      "scroll",
      () => {
        if (!scheduled) {
          scheduled = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
  
    update();
  }