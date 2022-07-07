let description = document.getElementById('description')
let openDesc = document.getElementById('open_desc')


openDesc.addEventListener('click', function(e) {
  e.preventDefault()
  description.classList.toggle('open')
})


