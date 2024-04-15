const isleofb = document.querySelector('#hover-isle');
const isleofbinfo = document.querySelector('#info-isle');
const deathland = document.querySelector('#hover-deathland');
const deathlandinfo = document.querySelector('#info-deathland');
const blackbay = document.querySelector('#hover-blackbay');
const blackbayinfo = document.querySelector('#info-blackbay');
const isleofdoom = document.querySelector('#hover-isleofdoom');
const isleofdoominfo = document.querySelector('#info-isleofdoom');
const meathead = document.querySelector('#hover-meathead');
const meatheadinfo = document.querySelector('#info-meathead');
const meatheadnorth = document.querySelector('#hover-meatheadnorth');
const meatheadnorthinfo = document.querySelector('#info-meatheadnorth');

isleofb.addEventListener('mouseenter', function() {
    isleofbinfo.classList.remove('hide-info');
});

isleofb.addEventListener('mouseout', function() {
    isleofbinfo.classList.add('hide-info');
});

deathland.addEventListener('mouseenter', function() {
    deathlandinfo.classList.remove('hide-info');
});

deathland.addEventListener('mouseout', function() {
    deathlandinfo.classList.add('hide-info');
});

blackbay.addEventListener('mouseenter', function() {
    blackbayinfo.classList.remove('hide-info');
});

blackbay.addEventListener('mouseout', function() {
    blackbayinfo.classList.add('hide-info');
});

isleofdoom.addEventListener('mouseenter', function() {
    isleofdoominfo.classList.remove('hide-info');
});

isleofdoom.addEventListener('mouseout', function() {
    isleofdoominfo.classList.add('hide-info');
});

meathead.addEventListener('mouseenter', function() {
    meatheadinfo.classList.remove('hide-info');
});

meathead.addEventListener('mouseout', function() {
    meatheadinfo.classList.add('hide-info');
});

meatheadnorth.addEventListener('mouseenter', function() {
    meatheadnorthinfo.classList.remove('hide-info');
});

meatheadnorth.addEventListener('mouseout', function() {
    meatheadnorthinfo.classList.add('hide-info');
});