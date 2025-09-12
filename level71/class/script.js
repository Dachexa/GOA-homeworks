/*let div = document.querySelector(".divv");
let Bigger = document.querySelector(".mb");
let Smaller = document.querySelector(".ms");

function MakeBigger() {
    width = "200px";
    height = "200px";
}

function MakeSmaller() {
    width = "100px";
    height = "100px";
}*/

let div = document.querySelector(".div1");
let colorChange = document.querySelector(".color-change");
let sizeIncrease = document.querySelector(".size-increase");
let sizeDecrease = document.querySelector(".size-decrease");



function changeColor() {
    div.classList.toggle("red");
};

function increaseSize() {
    div.classList.add("big");
};

function decreaseSize() {
    div.classList.remove("big");
};


