// JavaScript Document
console.log("hi");

var menuButton = document.querySelector("button:first-of-type");
var navUl = document.querySelector("nav");

menuButton.addEventListener("click", openMenu);

function openMenu(){
    navUl.classList.toggle("toonMenu");
}