// data.js 


export class ToDos {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function loadProjectsFromLocalStorage() {
    const data = localStorage.getItem("projects");
    if (!data) return { default: [] };

    try {
        const parsed = JSON.parse(data);

        for (const project in parsed) {
            parsed[project] = parsed[project].map(
                todo => new ToDos(todo.title, todo.description, todo.dueDate, todo.priority)
            );
        }

        return parsed;
    } catch (err) {
        console.error("Erreur de parsing JSON :", err);
        return {default: [] };
    }
}

function saveProjectsToLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(projects));
}

export const projects = loadProjectsFromLocalStorage(); 

export let activeProject = "default"; 

export function setActiveProject(name) {
    activeProject = name; 
}

export function addToDosToProject(title, description, dueDate, priority, projectName = activeProject) {
    const newToDo = new ToDos(title, description, dueDate, priority);
    if (!projects[projectName]) {
        projects[projectName] = [];
    }
    projects[projectName].push(newToDo);
    saveProjectsToLocalStorage();
} 

// Ajouter un projet vide
export function addProject(name) {
    if (!projects[name]) {
        projects[name] = [];
        saveProjectsToLocalStorage();
    }
}