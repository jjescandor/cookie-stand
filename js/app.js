"use strict";

//landing page JS Codee

let leftArrowButtons = document.querySelectorAll('#left-arrow');
let rightArrowButtons = document.querySelectorAll('#right-arrow');
let banner = document.getElementsByClassName('banner');
let blockQuote = document.querySelector('blockquote');
let index = 0;

leftArrowButtons.onclick = () => {
    if (index == banner.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    showbanner();
    pas();
}

rightArrowButtons.onclick = () => {
    if (index == 0) {
        index = banner.length - 1;
    }
    else {
        index--;
    }
    showbanner();
    leftslide();
    pas();
}

function showbanner() {
    for (let i = 0; i < banner.length; i++) {
        banner[i].classList.remove('active');
    }
    banner[index].classList.add('active');
}

function leftslide() {
    for (let i = 0; i < banner.length; i++) {
        banner[i].classList.remove('left');
    }
    banner[index].classList.add('left')
}

//create dots 

function dots() {
    for (let i = 0; i < banner.length; i++) {
        let p = document.createElement('p');
        p.setAttribute('onlick', 'indicate(this)');
        p.id = i;
        if (i == 0) {
            p.className = 'actual';
        }
        blockQuote.appendChild(p);
    }
}
dots();

//turn dots into nav

const pas = () => {
    for (let i = 0; i < blockQuote.children.length; i++) {
        blockQuote.children[i].classList.remove('actual');
    }
    blockQuote.children[index].classList.add('actual');
}







