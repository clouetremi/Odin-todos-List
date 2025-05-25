import { addToDos } from "./dom/form.js";
import { displayToDos } from "./dom/display.js";
import { updateProjectDropdown } from "./dom/dropdown.js";
import { displayCurrentProjectName } from "./dom/display.js";
import { activeProject } from "./data.js";
import "./dom/events.js";  // Ici on importe events.js qui contient maintenant le gestionnaire du form
import './todos.css';

addToDos(); // Affiche formulaire d'ajout de tâche
displayToDos(activeProject); 
updateProjectDropdown();
displayCurrentProjectName(activeProject);
