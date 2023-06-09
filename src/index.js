document.addEventListener("DOMContentLoaded", () => {
    //initialize Snacklist
    const snackList = new SnackList();
    
    //form input fields
    const newSnackForm = document.getElementById("create-snack-form");
    const newSnackDescription = document.getElementById("new-snack-description");
    const newMovForm = document.getElementById("myMovieID")

    //Element where snacks reside
    const snackUI = document.getElementById("snacks");

    const renderApp = () => (snackUI.innerHTML = snackList.renderSnacks());

    //Element where movie choice resides
    
    var movChoice = document.getElementById("mov_choice")
    var movForm = document.getElementById("myMovieID")

    //Attached Event Listeners

    newSnackForm.addEventListener("submit", (e) => {
        e.preventDefault();
        snackList.createNewSnack(newSnackDescription.value);
        e.target.reset();
        renderApp();
    });

    snackUI.addEventListener("click", (e) => {
        if (e.target.nodeName === "BUTTON") {
            snackList.deleteSnacks(e.target.dataset.description);
            renderApp();
        }
    });
    
    newMovForm.addEventListener("submit", (e) => {
        
            e.preventDefault()
            var allOptions = movForm.elements["movie"]
            var selectedOptions = []
            allOptions.forEach((element) => {
                if (element.checked) {
                    selectedOptions.push(element.value)
                }
            })
            var movString = selectedOptions.join("")
            movChoice.innerText = `You have selected: ${movString} `   
    })
    
});


function lightDarkMode() {
    var element = document.body
    element.classList.toggle("dark")
  }

  function fetchFilms() {
    fetch("http://localhost:3000/Films")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      
    })
  }
function renderOneFilm(film){
    // build film
    let card = document.createElement('li')
    card.className = 'card'

}

  function initialize() {
    filmData.forEach(film => renderOneFilm(film))
  }
