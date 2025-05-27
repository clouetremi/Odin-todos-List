// display.js

import { projects } from "../data.js";
import { format, parseISO, differenceInDays } from "date-fns";

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

    // formatage de la date avec data-fns
    let dueDateHTML = "Pas de date";
    if (item.dueDate) {
        console.log("Raw dueDate:", item.dueDate);
        try {
            const parsedDate = parseISO(item.dueDate);
            console.log("Parsed date object:", parsedDate);
            const formattedDate = format(parsedDate, "dd/MM/yyyy");
            const daysLeft = differenceInDays(parsedDate, new Date());

            dueDateHTML = `${formattedDate} (${daysLeft} jour${Math.abs(daysLeft) === 1 ? '' : 's'} ${daysLeft < 0 ? 'en retard' : 'restant(s)'})`;
        } catch (error) {
            dueDateHTML = "Date invalide";
        }
    }


    card.innerHTML = `
    <h3><strong>Titre :</strong> ${item.title}</h3>
    <p><strong>Description :</strong> ${item.description}</p>
    <p><strong>Date d'échéance :</strong> ${dueDateHTML}</p>
    <p><strong>Priorité :</strong> ${item.priority}</p>
    <button class="btn-delete-to-dos">Supprimer ce todos</button>
    <button class="btn-change-status">Changer la priorité</button>
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