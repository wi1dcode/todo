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
// const addForm2 = document.querySelector(".formulaireInput")

// OPEN DESCRIPTION FOR TASK 

// openDesc.addEventListener('click', function(e) {
//   e.preventDefault()
//   clickDesc.classList.toggle('open')
// })

// OPEN ADD TASK FORM 

btn.addEventListener("click", () => {
    if (addForm.style.display != "flex") {   
        addForm.style.display = "flex"
    }
    // newForm.setAttribute("class", "formulaireInput display-yes")

})
// $(document).click((event) => {
//     if (!$(event.target).closest('#element').length) {
//       // the click occured outside '#element'
//     }        
// });
    // let ignoreClickOnMeElement = document.querySelector(".formulaireInput")
    // let isClickInsideElement = ignoreClickOnMeElement.contains(addForm.target);
    // if (!isClickInsideElement) {
    //     newForm.setAttribute("class", "formulaireInput display-non")
    // }



// Selecteurs
const todoInput = document.getElementById("toDo")
const todoButton = document.getElementById("form-button")
const todoList = document.getElementById("newTask")

// Ecouteurs
todoButton.addEventListener("click", addToDo)
todoList.addEventListener("click", deleteCheck);

// Fonction
function addToDo(event) {
    event.preventDefault();
// ToDo DIV
const todoDiv = document.createElement("div");
todoDiv.classList.add("newTask");
// Creer le li
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo)
// Bouton check
const completedButton = document.createElement("button");
completedButton.innerHTML = `<i class"fas fa-check"></i>`;
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton)
// Bouton Supprimer
const deleteButton = document.createElement("button");
deleteButton.innerHTML =`<i class"fas fa-trash"></i>`;
deleteButton.classList.add("delete-btn");
todoDiv.appendChild(deleteButton);
// Ajouter notre todo à tododiv
todoList.appendChild(todoDiv)
todoInput.value = "";
}

// function deleteCheck(eve) {
// const item = eve.target;
//     if (item.classList[eve] === "delete-btn") {
//         const todo = item.parentElement;
//         todo.remove()
//         // item.parentElement.remove();
//     }
//     if (item.classList[eve] === "complete-btn") {
//         const todo = item.parentElement;
//         todo.classList.toggle("completed")
//     }
// }