// main.js
let dropMenu = document.querySelector(".dropdown-menu");
let menuBarIcon = document.querySelector(".menu-bar");
let main = document.querySelector('main')
let btnsHeader = document.querySelector('.btns-login-and-sign')
let body = document.querySelector('body')
let header = document.querySelector('header')

function showMenu(){
    if (dropMenu.classList.contains("hidden")) {
        dropMenu.classList.remove("hidden");        
        menuBarIcon.classList.remove("fa-bars");
        menuBarIcon.classList.add("fa-xmark");
        menuBarIcon.style.position = "absolute";
        menuBarIcon.style.right = "0";
        main.style.display = 'none'
        body.style.height = '100vh'
        console.log("Menu is hidden, showing it now.")
    } else {
        console.log("Menu is visible, hiding it now.");
        dropMenu.classList.add("hidden");
        menuBarIcon.classList.remove("fa-xmark");
        menuBarIcon.classList.add("fa-bars");
        main.style.display = 'block'
        body.style.height = '100%'
    }
}

onscroll = () => {
    let value = this.scrollY;
    if(value >= 51){
        header.classList.replace("bg-opacity-0", "header-bg");    
    } else{
        header.classList.replace("header-bg", "bg-opacity-0");
    }

}


// About Header Of Home Page
