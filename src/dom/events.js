// events.js

import { projects, activeProject, setActiveProject } from "../data.js";
import { updateProjectDropdown } from "./dropdown.js";
import { displayCurrentProjectName, displayToDos } from "./display.js";
import { addToDosToProject } from "../data.js";
import { addToDos } from "./form.js";

// Gestion de la création d'un nouveau projet via formulaire
const projectForm = document.getElementById("new-project-form");
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.getElementById("new-project-name");
  const newProjectName = input.value.trim();

  if (newProjectName === "") {
    alert("Le nom du projet ne peut pas être vide.");
    return;
  }

  if (projects[newProjectName]) {
    alert("Ce projet existe déjà.");
    return;
  }

  // Création du nouveau projet vide
  projects[newProjectName] = [];

  // Mise à jour du projet actif
  setActiveProject(newProjectName);

  // Mise à jour de la dropdown et affichage du projet courant
  updateProjectDropdown();
  displayCurrentProjectName(newProjectName);
  displayToDos(newProjectName);

  // Réinitialiser le champ du formulaire
  input.value = "";
});

// Gestion des événements globaux sur les boutons des ToDos (suppression, changement priorité)
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-delete-to-dos")) {
    const index = e.target.closest(".to-dos-card").dataset.index;
    projects[activeProject].splice(index, 1);
    displayToDos(activeProject);
  }

  if (e.target.classList.contains("btn-change-status")) {
    const index = e.target.closest(".to-dos-card").dataset.index;
    const todo = projects[activeProject][index];
    todo.priority = todo.priority === "priority-high"
      ? "priority-medium"
      : todo.priority === "priority-medium"
      ? "priority-low"
      : "priority-high";
    displayToDos(activeProject);
  }
});
