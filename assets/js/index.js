let slider = document.querySelector('.img-wrapper');
let items = document.querySelectorAll('.img-wrapper .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.third-section .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 9000);
}
window.onresize = function(event) {
    reloadSlider();
};
function navDrag(){
    window.location = "dragonClass.html";
}
function navChar(){
    window.location = "character.html";
}
function navIsle(){
    window.location = "isle.html";
}