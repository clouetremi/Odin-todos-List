// dropdown.js 

import { projects, setActiveProject } from "../data.js";
import { displayCurrentProjectName } from "./display.js";
import { displayToDos } from "./display.js";

export function updateProjectDropdown() {
    const select = document.querySelector("#project-select"); 
    select.innerHTML = ""; 

    for (const name in projects) {
        const option = document.createElement("option");
        option.value = name; 
        option.textContent = name; 
        select.appendChild(option); 
    }

    select.addEventListener("change", (e) => {
        setActiveProject(e.target.value); 
        displayCurrentProjectName(e.target.value); 
        displayToDos(e.target.value);
    });
}

