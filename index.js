const burgerBtn = document.querySelector(".burger")
const nav = document.querySelector(".nav")

burgerBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    nav.classList.add("nav--open")
})

document.addEventListener("click", () => {
    nav.classList.remove("nav--open")
})