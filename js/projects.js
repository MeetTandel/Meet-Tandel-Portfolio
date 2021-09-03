window.onbeforeunload = function () {
    if (window.scrollTo) window.scrollTo(0, 0);
}
let preloader = document.querySelector(".preloader")
let loaderBar = document.querySelector(".loader-bar");

function implementLoader(time) {
    //horizontal bar
    let count = 0;
    setInterval(function counterFunction() {
        if (count < 101) {
            count++;
        }
        else {
            clearInterval(counterFunction);
            fadeOut(preloader)
        }
    }, time)

    // fade out preloader(animation)
    function fadeOut(e) {
        e.style.opacity = 1;

        (function fade() {
            if ((e.style.opacity -= .1) < 0) {
                e.style.display = "none";
            }
            else {
                requestAnimationFrame(fade);
            }
        })()
    }   
}

window.addEventListener("load", () => implementLoader(3))
const links = document.querySelectorAll(".header-nav li a")

links[0].classList.remove("active")

//nav-toggle for mobile device
const navToggle = document.querySelector('.nav-toggle');
const backgroundToggle = document.querySelector('.toggle-background');
const nav = document.querySelector('.header-nav-wrap');

function toggleNav(){
    nav.classList.toggle('nav-visible');
    backgroundToggle.classList.toggle('nav-toggle-background');
    navToggle.classList.toggle('ham-toggle');
}

navToggle.addEventListener('click', () => {
    toggleNav();
})

//on clicking links in mobile view navbar should hide
links.forEach(link => {
    link.addEventListener("click", function () {
        toggleNav();
    })
})