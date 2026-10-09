// Cria um elemento, define a classe e o texto (sempre como texto, nunca como HTML)
function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  }
  
  function createList(className, itemClassName, items) {
    const list = createElement("ul", className);
    items.forEach((item) => list.append(createElement("li", itemClassName, item)));
    return list;
  }
  
  function createLink({ label, href }, index) {
    const link = createElement(
      "a",
      index === 0 ? "btn btn--primary" : "btn btn--ghost",
      label
    );
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
  }
  
  function createProjectCard(project) {
    const card = createElement("article", "project");
  
    const header = createElement("header", "project__header");
    header.append(
      createElement("h3", "project__name", project.name),
      createElement("span", "badge", project.status)
    );
  
    const links = createElement("div", "project__links");
    links.append(...project.links.map(createLink));
  
    card.append(
      header,
      createElement("p", "project__summary", project.summary),
      createList("project__list", "", project.highlights),
      createList("tags", "tag", project.stack),
      links
    );
  
    return card;
  }
  
  export function renderProjects(container, projects) {
    container.replaceChildren(...projects.map(createProjectCard));
  }