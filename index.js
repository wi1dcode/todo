// // Récuperation des données du formumaire
// let dateControl = document.querySelector('input[type="date"]');
// dateControl.value = '2022-06-01';
// console.log(dateControl.value)

// let dayNumber = dateControl.value[3]
// let month = dateControl.value[2]
// let description = document.getElementById(description).value
// let title = document.getElementById(toDo).value

let clickDesc = document.getElementById('description')
let openDesc = document.getElementById('open_desc')
const btn = document.getElementById("addButton");
const addForm = document.querySelector(".formulaireInput")
const closeDesc = document.getElementById("close");



// OPEN DESCRIPTION FOR TASK 

openDesc.addEventListener('click', function(e) {
  e.preventDefault()
  clickDesc.classList.toggle('open')
})

// OPEN ADD TASK FORM AND CLOSE 2 CLICK IN BUTTON

btn.addEventListener("click", function(event) {
   if (addForm.getAttribute("id") != "open_form") {
      addForm.setAttribute("id", "open_form");
    } else {
      addForm.removeAttribute("id", "open_form");
    } 
})

// CLOSE ADD TASK FORM BUTTON

function closeButton() {
  addForm.removeAttribute("id", "open_form");
}

// NEW TASK ADD
// Selecteurs
const todoInput = document.getElementById("todo")
const todoButton = document.getElementById("form-button")
const todoList = document.getElementById("list")

// Ecouteurs
todoButton.addEventListener("click", addToDo)

// Fonction
function addToDo(events) {
    events.preventDefault();
// ToDo DIV
const todoDiv = document.createElement("div");
todoDiv.classList.add("newTask");
// Creer le li
const newTodo = document.createElement("div");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-title");
todoDiv.appendChild(newTodo)
// Bouton check
const completedInput = document.createElement("input");
completedInput.innerHTML = `<input id="checkStatus" class="check" type="checkbox" name="checkbox" />`;
completedInput.classList.add("complete-input");
todoDiv.appendChild(completedInput)
// Bouton Supprimer
const deleteButton = document.createElement("delete");
deleteButton.innerHTML =`<img src="./img/close.svg" id="delete" onclick="deleteButton()" alt="delete">`;
deleteButton.classList.add("delete-btn");
todoDiv.appendChild(deleteButton);
// Ajouter notre todo à tododiv
todoList.appendChild(todoDiv)
todoInput.value = "";
}
