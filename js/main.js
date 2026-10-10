import { projects } from "./data/projects.js";
import { renderProjects } from "./projects.js";
import { initTerminal } from "./terminal.js";

const projectsContainer = document.querySelector("#projects-list");
if (projectsContainer) {
  renderProjects(projectsContainer, projects);
}

const terminal = document.querySelector(".terminal");
if (terminal) {
  initTerminal(terminal);
}