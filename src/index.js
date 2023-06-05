document.addEventListener("DOMContentLoaded", () => {
    //initialize Snacklist
    const snackList = new SnackList();
    //form input fields
    const newSnackForm = document.getElementById("create-snack-form");
    const newSnackDescription = document.getElementById("new-snack-description");
    //const newSnackPriority = document.getElementbyId("new-snack-priority");
    //Element where snacks reside
    const snackUI = document.getElementById("snacks");

    const renderApp = () => (snackUI.innerHTML = snackList.renderSnacks());

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

});

function lightDarkMode() {
    var element = document.body
    element.classList.toggle("dark")
  }