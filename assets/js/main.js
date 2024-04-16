const menus = document.querySelector("nav ul");
const menusBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menusBtn.addEventListener("click", function () {
    var element = document.getElementById("dropdown");
    element.classList.add("display");
});

closeBtn.addEventListener("click", function () {
    var element = document.getElementById("dropdown");
    element.classList.remove("display");
});

function logOut(){
    window.location = "register.html";
}

function assignment(){
    window.open('assets/others/case.docx')
}