
let warning = document.querySelectorAll(".hidden-warn");
let sendButton = document.querySelector(".button-send");
let inputsIndex = document.querySelectorAll(".form-main label > :first-child");
let formIndex = document.querySelector(".form-main");

formIndex.addEventListener("submit", () => {
    for (let i = 0; i < inputsIndex.length; i++ ) {
        let inputValue = inputsIndex[i].value;
        if(inputValue.trim() == "") {
            warning[i].classList.add("show")
            document.body.classList.add("fix")
        }
    }
});