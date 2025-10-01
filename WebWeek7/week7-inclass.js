const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu')

var menu_shown = false;

function showMenu(){
    var shown = navMenu.classList.toggle("show");
    navMenu.classList.toggle("hide");

    if(shown){
        navToggle.setAttribute("aria-expanded", "true");

    }

    else{
        navMenu.toggleAttribute("aria-expanded", "false");
    }
}

navToggle.addEventListener('click', showMenu);

// Save user's theme choice
let btn = document.querySelector('#theme').addEventListener('click',theme);

function theme(){
    console.log("theme work");
}

function setTheme(theme) {
    localStorage.setItem('userTheme', theme);
    document.body.className = theme;
}

// Load saved theme on page load
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('userTheme') || 'light';
    document.body.className = savedTheme;
});