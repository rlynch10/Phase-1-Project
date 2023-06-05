document.addEventListener("DOMContentLoaded", () => {
  var form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildSnack(e.target.snack_box.value)
    //buildButton(e.target.snack-sub)
    //checkBoxPost(e.target.mov_post)
    form.reset()
  })
})
//lightDarkMode(e.target)


//create a light/dark mode
function lightDarkMode() {
  var element = document.body
  element.classList.toggle("dark")
}

// //create form
// var form = document.createElement("form")
// form.setAttribute("action", "#")
// form.setAttribute("method", "post")
// form.setAttribute("id", "snackForm")
// form.setAttribute("class", "snackClass")


// var formBox = document.createElement('input')
// formBox.setAttribute("id", "snack_box")
// formBox.setAttribute("type", "text")



function buildSnack(snack){
  var p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' x'
  p.textContent = `${snack}`
  p.append(btn)
  document.querySelector('#snack_container').appendChild(p)
}
function buildB(snack){
  var p = document.createElement('p')
  var b = document.createElement('button');
  b.addEventListener('click', handleDelete)
  //b.setAttribute('content', 'test content');
  b.setAttribute('class', 'btn');  
  b.textContent = ' x';
  p.textContent = `${snack}`
  p.append(btn)
  document.querySelector('#snack_container').appendChild(p)

//var wrapper = document.getElementById("divWrapper");
//wrapper.appendChild(b);
}


// function buildButton(btn){
//   var btn = document.createElement('button')
//   btn.addEventListener('click', handleDelete)
//   btn.textContent = ' x'
//   p.appendChild(btn)
//   document.querySelector('#snack_container').appendChild(p)
// }

//delete snacks from form
function handleDelete(e){
    e.target.parentNode.remove()  
}

//check box button
function checkBoxPost(check) {
  var checkBox = document.getElementById("mov_post")
  var text = document.getElementById("text")
  let par = document.createElement('p')
  par.textContent = `${check} `
  if (checkBox.checked == true){
    text.style.display = "block"
  } else {
    text.style.display = "none"
  }
}


//Radio buttons for movie choice



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


