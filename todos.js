// On crée un Array pour stocker nos todos

const toDos = [];

class ToDos {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
};

// Fonction pour ajouter untoDos à mon tableau
function addToDosToArray(title, description, dueDate, priority) {
    const newToDo = new ToDos(title, description, dueDate, priority);
    toDos.push(newToDo);
}

function clearPriorityContainers() {
    const toDosContainer = document.querySelector(".to-dos-container");
    toDosContainer.innerHTML = "";
};

// Fontionc pour vider mes divs de priorité dans le DOM
function clearPriorityDiv() {
    const priorityHigh = document.querySelector(".priority-high");
    priorityHigh.innerHTML = `<h2>Urgent</h2>`;

    const priorityMedium = document.querySelector(".priority-medium");
    priorityMedium.innerHTML = `<h2>Priorité normale</h2>`;

    const priorityLow = document.querySelector(".priority-low");
    priorityLow.innerHTML = `<h2>Peut attendre</h2>`;
}

function createToDosCard(item, index) {
    const toDosCard = document.createElement("div");
    toDosCard.classList.add("to-dos-card");
    toDosCard.setAttribute("data-index", index); // identifiant unique

    toDosCard.innerHTML = `
    <h3><strong>Title :</strong> ${item.title}</h3>
    <p><strong>Description :</strong> ${item.description}</p>
    <p><strong>Due Date :</strong> ${item.dueDate}</p>
    <p><strong>Priority :</strong> ${item.priority}<p>
    <br>
    <button class="btn-delete-to-dos" type="button">Delete todos</button>
    <button class="btn-change-status" type="button">Change todos status</button>
    `;

    return toDosCard;
};

function appendCardToContainer(card, priority) {

    // Sélectionne le bon conteneur en fonction de la priorité
    let targetContainer;
    if (priority === "priority-high") {
        targetContainer = document.querySelector(".priority-high");
    } else if (priority === "priority-medium") {
        targetContainer = document.querySelector(".priority-medium");
    } else if (priority === "priority-low") {
        targetContainer = document.querySelector(".priority-low");
    }

    // Déplace la carte dans le bon conteneur
    if (targetContainer) {
        targetContainer.appendChild(card);
    }
};


// Fonction pour afficher les toDos dans le DOM
function displayToDos() {

    clearPriorityContainers();
    clearPriorityDiv();

    toDos.forEach((item, index) => {
        const card = createToDosCard(item, index);
        appendCardToContainer(card, item.priority);
    });
};

// Fonction pour afficher le formulaire d'ajout d'un toDo
function addToDos() {
    const toDosDisplay = document.querySelector(".to-dos-display");
    toDosDisplay.innerHTML = `
    <form id="to-dos-form">
    <label for="title">Titre :</label>
    <input type="text" id="title" name="title" required><br><br>

    <label for="description">Description :</label>
    <textarea id="description" name="description" rows="5" cols="33" required></textarea><br><br>
    
    <label for="due-date">Date limite :</label>
    <input type="text" id="due-date" name="due-date" required><br><br>

    <div>
    <input type="radio" id="priority-high" name="priority" value="priority-high" required>
    <label for="priority-high">Urgent</label>
    </div>
    <div>
    <input type="radio" id="priority-medium" name="priority" value="priority-medium" required>
    <label for="priority-medium">Priorité normale</label>
    </div>
    <div>
    <input type="radio" id="priority-low" name="priority" value="priority-low" required>
    <label for="priority-low">Pas prioritaire</label>
    </div>

    <button class="btn-save" type="submit">Add New To Do</button>
    </form>
    `;

    // Ajout d'un event listener au formulaire
    document.querySelector("#to-dos-form").addEventListener("submit", (event) => {
        event.preventDefault();
        saveToDos();
    });

};

function saveToDos() {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#due-date").value;
    const priorityInput = document.querySelector('input[name="priority"]:checked').value;

    if (!title || !description || !dueDate || !priorityInput) {
        alert("Veuillez remplir tous les champs.");
        return;
    };

    const priority = priorityInput;

    addToDosToArray(title, description, dueDate, priority);

    addToDos();

    displayToDos();
}


addToDos();
displayToDos();

// Ajout de l'event pour supprimer un todos
document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-delete-to-dos")) {
        const index = event.target.closest(".to-dos-card").getAttribute("data-index") //A partir du ubouton sur lequel on a cliqué, remonte jusqu'au parent le plus proche qui a la class .to-dos-card
        toDos.splice(index, 1);
        displayToDos();
    };
});

// Ajout de l'event pour changer le status d'un todos
document.body.addEventListener("click", function(event) {
if (event.target.classList.contains("btn-change-status")) {
    const index = event.target.closest(".to-dos-card").getAttribute("data-index");
    const todo = toDos[index]; 

    if (todo.priority === "priority-high") {
        todo.priority = "priority-medium";
    } else if (todo.priority === "priority-medium") {
        todo.priority = "priority-low";
    } else {
        todo.priority = "priority-high";
    }

    displayToDos();
};
});
