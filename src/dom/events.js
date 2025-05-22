// events.js 

import { projects, activeProject } from "../data.js";
import { displayToDos} from "./display.js"; 

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


