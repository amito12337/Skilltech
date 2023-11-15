// main.js
let dropMenu = document.querySelector(".dropdown-menu");
let menuBarIcon = document.querySelector(".menu-bar");
let main = document.querySelector('main')
let btnsHeader = document.querySelector('.btns-login-and-sign')
let body = document.querySelector('body')
let header = document.querySelector('header')
let footer = document.querySelector("footer");

function showMenu(){
    if (dropMenu.classList.contains("hidden")) {
        dropMenu.classList.remove("hidden");        
        menuBarIcon.classList.remove("fa-bars");
        menuBarIcon.classList.add("fa-xmark");
        menuBarIcon.style.position = "absolute";
        menuBarIcon.style.right = "0";
        main.style.display = 'none'
        footer.style.display = 'none'
        body.style.height = '100vh'
        console.log("Menu is hidden, showing it now.")
    } else {
        console.log("Menu is visible, hiding it now.");
        dropMenu.classList.add("hidden");
        menuBarIcon.classList.remove("fa-xmark");
        menuBarIcon.classList.add("fa-bars");
        main.style.display = 'block'
        footer.style.display = 'grid';
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
// About Main Of Contact Page 
function changeColor(lineNumber) {
    var lines = document.getElementsByClassName("colored-line");
    var line = lines[lineNumber - 1];
    // You can add additional logic here to change the color to something other than white
    line.style.backgroundColor = line.style.backgroundColor === "red" ? "" : "red";
}

function handleEnter(event, nextLineNumber) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevents the default behavior of the Enter key in a text input
        var nextLineInput = document.getElementsByName("line" + nextLineNumber)[0];
        if (nextLineInput) {
        nextLineInput.focus();
        }
    }
}
// About Main Of Contact Page 

