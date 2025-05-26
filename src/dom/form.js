//form.js

import { activeProject, addToDosToProject } from "../data.js";
import { displayToDos } from "./display.js";

export function addToDos() {
    const toDosDisplay = document.querySelector(".to-dos-display");
    toDosDisplay.innerHTML = `
    <form id="to-dos-form">
    <input type="text" id="title" placeholder="Titre" required>
    <textarea id="description" placeholder="Description" required></textarea>
    <input type="date" id="due-date" placeholder="Date" required>
    <div>
    <label><input type="radio" name="priority" value="priority-high">Urgent</label>
    <label><input type="radio" name="priority" value="priority-medium">Normal</label>
    <label><input type="radio" name="priority" value="priority-low">Peut attendre</label>
    </div>
    <button type="submit">Ajouter</button>
    </form>
    `;

    document.querySelector("#to-dos-form").addEventListener("submit", (e) => {
        e.preventDefault(); 
        const title = document.querySelector("#title").value; 
        const desc = document.querySelector("#description").value;
        const date = document.querySelector("#due-date").value; 
        const priority = document.querySelector('input[name="priority"]:checked').value;

        addToDosToProject(title, desc, date, priority, activeProject); 
        addToDos(); 
        displayToDos(activeProject); 
    });
}

