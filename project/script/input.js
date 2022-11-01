
let warn = document.querySelectorAll(".hidden-warn");
let send = document.querySelector(".button-send");
let inputs = document.querySelectorAll(".form-order label > :first-child");
let formOrder = document.querySelector(".form-order");

formOrder.addEventListener("submit", () => {
    for (let i = 0; i < inputs.length; i++ ) {
        let inputValue = inputs[i].value;
        if(inputValue.trim() == "") {
            warn[i].classList.add("show")
        }
    }
});