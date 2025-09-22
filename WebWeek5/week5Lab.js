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
        navMenu.toggleAttribute("aria-explanded", "false");
    }
}

navToggle.addEventListener('click', showMenu);