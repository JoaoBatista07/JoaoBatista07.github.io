const TYPE_DELAY = 55;    // ms entre cada caractere digitado
const LINE_DELAY = 350;   // pausa depois de cada comando (o "Enter")
const OUTPUT_DELAY = 120; // pausa antes de cada linha de resposta

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function play(lines, cursor, commands) {
  for (const line of lines) {
    const isPromptLine = line.querySelector(".terminal__prompt") !== null;

    // Linhas de resposta: o cursor sai de cena e a linha aparece de uma vez
    if (!isPromptLine) {
      cursor.remove();
      await wait(OUTPUT_DELAY);
    }

    line.classList.remove("is-pending");

    // Linhas de comando: o cursor vai para o fim da linha e o texto é digitado
    if (isPromptLine) {
      line.append(cursor);

      const cmd = line.querySelector(".terminal__cmd");
      if (cmd) {
        for (const char of commands.get(line)) {
          cmd.textContent += char;
          await wait(TYPE_DELAY);
        }
        await wait(LINE_DELAY);
      }
    }
  }
}

export function initTerminal(terminal) {
  // Quem pediu menos movimento vê o terminal completo, sem animação
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const lines = [...terminal.querySelectorAll(".terminal__body > p")];
  const cursor = terminal.querySelector(".terminal__cursor");
  if (!cursor || lines.length === 0) return;

  // Guarda o texto de cada comando, esvazia e esconde as linhas (mantendo o espaço)
  const commands = new Map();
  lines.forEach((line) => {
    const cmd = line.querySelector(".terminal__cmd");
    if (cmd) {
      commands.set(line, cmd.textContent);
      cmd.textContent = "";
    }
    line.classList.add("is-pending");
  });

  // Só começa a digitar quando o terminal aparece na tela
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect();
        play(lines, cursor, commands);
      }
    },
    { threshold: 0.4 }
  );
  observer.observe(terminal);
}