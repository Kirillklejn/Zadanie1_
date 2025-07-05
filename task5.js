const burgerMenuBtn = document.querySelector("#burger-menu-btn")
const burgerMenu = document.querySelector("#burger-menu")
const burgeMenuClose = document.querySelector("#burger-menu-close")

burgerMenuBtn.addEventListener("click", () => (
    burgerMenu.style.left = "0px"
))
burgeMenuClose.addEventListener("click", () => (
    burgerMenu.style.left = "-400px"
))