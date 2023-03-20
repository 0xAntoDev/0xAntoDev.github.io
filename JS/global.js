let mobileBurgerMenu = document.getElementById("mobileBurgerMenu")
let iconBurger = document.getElementById("iconBurger")
let iconCross = document.getElementById("iconCross")

// burgerMenu.addEventListener("click", function () {
   
//     iconBurger.classList.toggle("display_none")
//     iconCross.classList.toggle("display_none")
// })


document.querySelectorAll('.menu').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('active');
        mobileBurgerMenu.classList.toggle("display_none")
        document.body.classList.toggle("no_overflow")
    });
});