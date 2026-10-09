import { projects } from "./data/projects.js";
import { renderProjects } from "./projects.js";

const projectsContainer = document.querySelector("#projects-list");

if (projectsContainer) {
  renderProjects(projectsContainer, projects);
}