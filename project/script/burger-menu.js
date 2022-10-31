const menu = document.querySelector(".menu");
const button = document.querySelector(".button-burger");
const lines = document.querySelector(".burger-line");

button.addEventListener("click", () => {
    menu.classList.toggle("active");
    lines.classList.toggle("active");
    document.body.classList.toggle("fix")
});

window.addEventListener("click", (e) => {
    if (menu.contains(e.target) || button.contains(e.target))
    return;
    else if (!menu.classList.contains("active")) return;
    menu.classList.remove("active") & lines.classList.remove("active");
})