let burgerMenu = document.getElementById("burgerMenu")
let mobileBurgerMenu = document.getElementById("mobileBurgerMenu")
let iconBurger = document.getElementById("iconBurger")
let iconCross = document.getElementById("iconCross")

burgerMenu.addEventListener("click", function () {
    mobileBurgerMenu.classList.toggle("display_none")
    document.body.classList.toggle("no_overflow")
    iconBurger.classList.toggle("display_none")
    iconCross.classList.toggle("display_none")
}) 