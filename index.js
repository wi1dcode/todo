// // Récuperation des données du formumaire
// let description = document.getElementById(description).value

let clickDesc = document.getElementById('description')
let openDesc = document.getElementById('open_desc')
const btn = document.getElementById("addButton");
const addForm = document.querySelector(".formulaireInput")
const closeDesc = document.getElementById("close");
const randomTask = ['eat', 'sleep', 'code']
const status = document.getElementById("close");

// RANDOM STATUS IMAGE FOR RANDOM TASK
const statusImg = [ "/img/todo.png", "/img/doing.png", "/img/done.png"];
let iImage = Math.floor(Math.random() * 3)


// FUNCTION RANDOM TASK

let min = 0;
let max = randomTask.length - 1

function randomInteger() {
  random = Math.floor(Math.random() * (max - min + 1)) + min;
}

randomInteger()

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


// DATE REAL TIME (LOCAL)
let month = new Date().toLocaleDateString().slice(3,-5);
console.log(month);
let day = new Date().toLocaleDateString().slice(0,-8);
console.log(day);

if (month == 01) {
  month = 'Jan'
}
if (month == 02) {
  month = 'Feb'
}
if (month == 03) {
  month = 'Mar'
}
if (month == 04) {
  month = 'Apr'
}
if (month == 05) {
  month = 'May'
}
if (month == 06) {
  month = 'June'
}
if (month == 07) {
  month = 'July'
}
if (month == 08) {
  month = 'Aug'
}
if (month == 09) {
  month = 'Sep'
}
if (month == 10) {
  month = 'Oct'
}
if (month == 11) {
  month = 'Nov'
}
if (month == 12) {
  month = 'Dec'
}


// // NEW TASK ADD
// // Selecteurs
const todoInput = document.getElementById("todo")
const descInput = document.getElementById("descr")
const todoButton = document.getElementById("formbutton")
const todoList = document.getElementById("list")
let dateControl = document.querySelector('input[type="date"]');
// dateControl.value = '2022-06-01';
// let dayNumber = dateControl.value[3]
// let monthNumber = dateControl.value[2]


// CHANGE PRIORITY COLOR

function redTask() {
  color = 'task_red'
}
function roseTask() {
  color = 'task_rose'
}
function orangeTask() {
  color = 'task_orange'
}
function yellowTask() {
  color = 'task_yellow'
}
function greenTask() {
  color = 'task_green'
}

// TO FIX AFTER
// if(typeof color !==  "undefined") {
//   alert('select color');
// }


// // Ecouteurs
todoButton.addEventListener("click", createToDo)

// Fonction
function createToDo() {
    addnewTask = document.getElementById("newTask")
    addnewTask.innerHTML = addnewTask.innerHTML +
    `<article class="event">
    <img src="./img/todo.png" alt="To Do" id="status">
    <div class="container ${color}" id="open_desc">
        <div class="date">
            <span class="date_number">${day}</span>
            <span class="date_months">${month}</span>
        </div>
        <div class="container_title">${todoInput.value}</div>
        <img id="burger_padd" src="./img/burger.svg" alt="">
    </div>
    <img src="./img/close.svg" id="close" alt="close">
    </article>
    `
    
}

// Random TASK
function createTask() {
  addRandom = document.querySelector(".task")
  addRandom.innerHTML = addRandom.innerHTML +
  `<article class="event">
  <img src="${statusImg[iImage]}" alt="To Do" id="status">
  <div class="container" id="open_desc">
      <div class="date">
          <span class="date_number">${day}</span>
          <span class="date_months">${month}</span>
      </div>
      <div class="container_title">${randomTask[random]}</div>
      <img id="burger_padd" src="./img/burger.svg" alt="">
  
  </div>
  <img src="./img/close.svg" id="close" alt="close">
  </article>
  `
}


const changeStatus = document.getElementById("status")

// changeStatus.addEventListener('click', () => {
//   if (changeStatus.src = "/img/todo.png") {
//     changeStatus.src = "/img/doing.png"
//   } else if (changeStatus.src = "/img/doing.png") {
//     changeStatus.src = "/img/done.png"
//   } else {
//     changeStatus.src = "/img/todo.png"
//   }
// })




let imageNumber = "0";

changeStatus.addEventListener('click', () => {
  imageNumber++;
  if(imageNumber == statusImg.length) {
    imageNumber="0";
  }
  changeStatus.src = statusImg[imageNumber];
})
