// display.js

import { projects } from "../data.js"; 

export function displayCurrentProjectName(activeProject) {
    const currentProject = document.querySelector(".project-title"); 
    currentProject.innerHTML = `Projet actuel : <strong>${activeProject}</strong>`;
}

function clearPriorityDiv() {
    document.querySelector(".priority-high").innerHTML = "<h2>Urgent</h2>";
    document.querySelector(".priority-medium").innerHTML = "<h2>Priorité normale</h2>";
    document.querySelector(".priority-low").innerHTML = "<h2>Peut attendre</h2>";
}

function createToDosCard(item, index) {
    const card = document.createElement("div");
    card.classList.add("to-dos-card");
    card.setAttribute("data-index", index);
    card.innerHTML = `
    <h3><strong>Title :</strong> ${item.title}</h3>
    <p><strong>Description :</strong> ${item.description}</p>
    <p><strong>Due Date :</strong> ${item.dueDate}</p>
    <p><strong>Priority :</strong> ${item.priority}</p>
    <button class="btn-delete-to-dos">Delete todos</button>
    <button class="btn-change-status">Change todos status</button>
    `;
    return card; 
}

function appendCardToContainer(card, priority) {
    const container = document.querySelector(`.${priority}`);
    if (container) container.appendChild(card); 
}

export function displayToDos(projectName = "default") {
    document.querySelector(".to-dos-container").innerHTML = ""; 
    clearPriorityDiv(); 

const toDos = projects[projectName]; 
toDos.forEach((todo, index) => {
    const card = createToDosCard(todo, index); 
    appendCardToContainer(card, todo.priority);
});
}

