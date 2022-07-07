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
const addForm2 = document.querySelector(".formulaireInput")

// OPEN DESCRIPTION FOR TASK 

openDesc.addEventListener('click', function(e) {
  e.preventDefault()
  clickDesc.classList.toggle('open')
})

// OPEN ADD TASK FORM 

btn.addEventListener("click", () => {
    if (addForm.style.display != "flex") {   
        addForm.style.display = "flex"
    }
    // newForm.setAttribute("class", "formulaireInput display-yes")
    // let ignoreClickOnMeElement = document.querySelector(".formulaireInput")
    // let isClickInsideElement = ignoreClickOnMeElement.contains(addForm.target);
    // if (!isClickInsideElement) {
    //     addForm.style.display = "none"
    // }
    

})

