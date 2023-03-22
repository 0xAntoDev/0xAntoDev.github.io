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

let calcScrollValue = () => {
	let scrollProgress = document.getElementById("progress");
	let progressValue = document.getElementById("progress-value");
	let pos = document.documentElement.scrollTop;
	let calcHeight =
	  document.documentElement.scrollHeight -
	  document.documentElement.clientHeight;
	let scrollValue = Math.round((pos * 100) / calcHeight);
	if (pos > 100) {
	  scrollProgress.style.display = "grid";
	} else {
	  scrollProgress.style.display = "none";
	}
	scrollProgress.addEventListener("click", () => {
	  document.documentElement.scrollTop = 0;
	});
	scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, transparent ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;