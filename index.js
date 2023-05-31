document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildSnack(e.target.snack_box.value)
    form.reset()
  })
})



//create form
var form = document.createElement("form")
form.setAttribute("action", "#")
form.setAttribute("method", "post")
form.setAttribute("id", "snackForm")
form.setAttribute("class", "snackClass")


var formBox = document.createElement('input')
formBox.setAttribute("id", "snack_box")
formBox.setAttribute("type", "text")



function buildSnack(snack){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${snack} `
  p.appendChild(btn)
  document.querySelector('#snack_container').appendChild(p)
}

function handleDelete(e){
    e.target.parentNode.remove()  
}




//create UL
//const ul = document.createElement('ul')

//create LI
//const li = document.createElement('li')

//create form



//create input element for snack
var SN = document.createElement("input")
SN.setAttribute("type", "text")
SN.setAttribute("name", "snack")

//create submit button
var s = document.createElement("input")
s.setAttribute("type", "submit")
s.setAttribute("value", "Submit")


//function addSnack(e) {
 //   e.preventDefault()
  //  const snack ={
  //    content: document.querySelector('#content').value
   // }
   // fetch("http://localhost:3000/Snacks", {
  //   method: "POST", 
   //   headers: {
   //     'Content-Type': 'application/json',
   //     'Accept': 'application/json'
   //   },
   //   body: JSON.stringify(snack)
   // })
   // .then(res => res.json())
  //  .then(data => {
  //    console.log(data)
  //  })
//}


//function myFunction() {
  //alert("the form was submitted")
//}


//function fetchFilms() {
  //fetch("http://localhost:3000/Films")
  //.then(res => res.json())
 // .then(data => {
    //console.log(data)
    //const snacks = document.querySelector("snacks-container")
   // snacks.innerHTML = renderAllSnacks(data)
  //})
//}
//function renderAllSnacks(snacks) {
   // return snacks.map(sn => renderSingleSnack(sn)).join("")
//}

//function renderSingleSnack(snack) {
   // return `
  //  <div class="snack-list" id="${snack.id}">
   //   <div class="snack-frame">
  //      <h1 class="center-text"></h1>
  //    </div>
  //  </div>
  //  `
//}

//function getFilms() {
  //const ul = document.getElementsById('film-list')
  //fetchFilms()
  //.then(data => {
   // data.forEach(film => {
    //  ul.innerHTML += `
      //  <li><a href="#" >${film.name}</a></li>
      //`
   // })
  //})
//}


//async function fetchFilms() {
 // let res = await fetch(BASE_URL + '/films')
 // let data = await res.json()
 // return data
//}


