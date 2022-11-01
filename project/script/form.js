"use strict"

const formMain = document.querySelector(".form-main");
const buttons = document.querySelectorAll('.to-form');


function show() {
    for (let i = 0; i < buttons.length; i++ ) {
        buttons[i].addEventListener("click", () => {
            formMain.classList.add("active")
        });
    }
    window.addEventListener("click", (e) => {
        if (buttons[0].contains(e.target) || formMain.contains(e.target)) return;
        if (buttons[1].contains(e.target) || formMain.contains(e.target)) return;
        if (buttons[2].contains(e.target) || formMain.contains(e.target)) return;
        if (buttons[3].contains(e.target) || formMain.contains(e.target)) return;
        if (buttons[4].contains(e.target) || formMain.contains(e.target)) return;
        else if (!formMain.classList.contains("active")) return;
        else formMain.classList.remove("active");
        }
    
    );

    }
show();

