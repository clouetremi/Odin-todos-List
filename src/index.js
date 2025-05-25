// index.js 

import { addToDos } from "./dom/form.js"; 
import { displayToDos } from "./dom/display.js";
import { updateProjectDropdown } from "./dom/dropdown.js";
import { displayCurrentProjectName } from "./dom/display.js";
import { activeProject } from "./data.js"; 
import "./dom/events.js"; 
import './todos.css'; 


// Initialisation 
addToDos(); // affiche le formulaire
displayToDos(activeProject); 
updateProjectDropdown(); 
displayCurrentProjectName(); 