//scroll should return to top on reload of page
window.onbeforeunload = function () {
        if (window.scrollTo) window.scrollTo(0, 0);
}

// preloader
window.addEventListener("load", function () {
    let preloader = document.querySelector(".preloader")
    let loaderBar = document.querySelector(".loader-bar");

    //horizontal bar
    let count = 0;
    setInterval(function counterFunction() {
        if (count < 101) {
            loaderBar.style.width = `${count}%`;
            count++;
        }
        else {
            clearInterval(counterFunction);
            fadeOut(preloader)
        }
    }, 10)
})

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

//show navbar after home page
const header = document.querySelector("header");
const about = document.querySelector("#welcome-section");
const links = document.querySelectorAll(".header-nav li")
const sections = document.querySelectorAll("section[id]")

window.addEventListener("scroll", function () {
    // show navbar in about section 
    // get scroll position
    let scrollY = window.pageYOffset;
    // if (scrollY == 0) about.offsetTop.classList.add("active");

    if (scrollY >= about.offsetHeight - 10) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

    //loop through sections to get height, top and ID of respective section
    sections.forEach(section => {
        let sectionHeight = section.offsetHeight;
        let sectionTop = section.offsetTop - 10;
        let sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY < sectionHeight + sectionTop) {
            document.querySelector("#navbar a[href*=" + sectionId + "]").classList.add("active")
        }
        else {
            document.querySelector("#navbar a[href*=" + sectionId + "]").classList.remove("active")
        }
    })
})

//automatic scrolling on clicking nav links
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

//on clicking submit button in form prevent it from reloading
const submitBtn = document.querySelector(".submit-btn")

submitBtn.addEventListener("click", (e) => e.preventDefault())

//nav-toggle for mobile device
const navToggle = document.querySelector('.nav-toggle');
const backgroundToggle = document.querySelector('.toggle-background');
const nav = document.querySelector('.header-nav-wrap');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-visible');
    backgroundToggle.classList.toggle('nav-toggle-background');
    navToggle.classList.toggle('ham-toggle');
})

//on clicking links in mobile view navbar should hide
links.forEach(link => {
    link.addEventListener("click", function() {
        nav.classList.toggle('nav-visible');
        backgroundToggle.classList.toggle('nav-toggle-background');
        navToggle.classList.toggle('ham-toggle');
    })
})
