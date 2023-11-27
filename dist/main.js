// main.js
let dropMenu = document.querySelector(".dropdown-menu");
let menuBarIcon = document.querySelector(".menu-bar");
let main = document.querySelector("main");
let btnsHeader = document.querySelector(".btns-login-and-sign");
let body = document.querySelector("body");
let header = document.querySelector("header");
let footer = document.querySelector("footer");
let toTop = document.querySelector(".to-top-btn");

function showMenu() {
  if (dropMenu.classList.contains("hidden")) {
    dropMenu.classList.remove("hidden");
    menuBarIcon.classList.remove("fa-bars");
    menuBarIcon.classList.add("fa-xmark");
    main.style.display = "none";
    footer.style.display = "none";
    body.style.height = "100vh";
    console.log("Menu is hidden, showing it now.");
  } else {
    console.log("Menu is visible, hiding it now.");
    dropMenu.classList.add("hidden");
    menuBarIcon.classList.remove("fa-xmark");
    menuBarIcon.classList.add("fa-bars");
    main.style.display = "block";
    footer.style.display = "grid";
    body.style.height = "100%";
  }
}

onscroll = () => {
  let value = this.scrollY;
  if (value >= 51) {
    header.classList.replace("bg-opacity-0", "header-bg");
  } else {
    header.classList.replace("header-bg", "bg-opacity-0");
  }

  if (value >= 560) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
};

toTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// About Header Of Home Page
// About Main Of Services Page
document.addEventListener("DOMContentLoaded", () => {
  let currentFeedbackIndex = 1; // Track the current feedback index
  // Function to show the feedback based on the index
  function showFeedback(index) {
    // Hide all feedbacks
    document.querySelectorAll(".bef-feedlback").forEach((feedback) => {
      feedback.classList.add("hidden");
      if (window.innerWidth >= 800) {
        // Show the feedback3
        if (currentFeedbackIndex === 2) {
          document.getElementById(`feedlback${3}`).classList.remove("hidden");
        }
      } else {
      }
    });

    // Show the feedback based on the index
    document.getElementById(`feedlback${index}`).classList.remove("hidden");
  }

  // Show the initial feedback
  showFeedback(currentFeedbackIndex);

  // Event listener for the left chevron
  document
    .querySelector(".fa-chevron-left")
    .addEventListener("click", function () {
      currentFeedbackIndex = (currentFeedbackIndex - 1 + 3) % 3 || 3; // Cycle through 1, 2, 3
      showFeedback(currentFeedbackIndex);
    });
  // Event listener for the right chevron
  document
    .querySelector(".fa-chevron-right")
    .addEventListener("click", function () {
      currentFeedbackIndex = (currentFeedbackIndex + 1) % 3 || 3; // Cycle through 1, 2, 3
      showFeedback(currentFeedbackIndex);
    });
});
// About Main Of Services Page
// About Main Of Contact Page
function changeColor(lineNumber) {
  var lines = document.getElementsByClassName("colored-line");
  var line = lines[lineNumber - 1];
  // You can add additional logic here to change the color to something other than white
  line.style.backgroundColor =
    line.style.backgroundColor === "red" ? "" : "red";
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
