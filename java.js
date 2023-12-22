// I don't know where to start here. Make sure that there is simple use and plenty of psuedoscript to ensure there is no miscomms about what is happening

// As progression continues, be sure to update here as needed 

console.log("Hello World!");

const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
})