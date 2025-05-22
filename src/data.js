// data.js 

export const projects = {
    default: [],
};

export let activeProject = "default"; 

export function setActiveProject(name) {
    activeProject = name;
}

export class ToDos {
    constructor(title, description, dueDate, priority) {
        this.title = title; 
        this.description = description; 
        this.dueDate = dueDate; 
        this.priority = priority; 
    }
}

export function addToDosToProject(title, description, dueDate, priority, projectName = activeProject) {
    const newToDo = new ToDos(title, description, dueDate, priority); 
    if (!projects[projectName]) {
        projects[projectName] = []; 
    }
    projects[projectName].push(newToDo); 
} 