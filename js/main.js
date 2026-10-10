import { projects } from "./data/projects.js";
import { renderProjects } from "./projects.js";
import { initTerminal } from "./terminal.js";
import { initReveal } from "./reveal.js";
import { initActiveNav } from "./nav.js";

const projectsContainer = document.querySelector("#projects-list");
if (projectsContainer) {
  renderProjects(projectsContainer, projects);
}

const terminal = document.querySelector(".terminal");
if (terminal) {
  initTerminal(terminal);
}

// Os blocos principais de cada seção, menos o hero
initReveal(document.querySelectorAll(".section:not(.hero) > .container > *"));

const nav = document.querySelector(".nav__list");
if (nav) {
  initActiveNav(nav);
}