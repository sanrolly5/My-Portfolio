const hamburger = document.getElementById("hamburger")
const navlist = document.getElementById("nav-list")

function toggleButton(){
    navlist.classList.toggle("show")
}

hamburger.addEventListener("click", toggleButton)