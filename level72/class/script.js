let images = [
    "111.jpg",
    "222.jpg",
    "333.jpg"
];
let num = 0;

function next() {
    let img = document.querySelector("img");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    img.src = images[num];
}

function previous() {
    let img = document.querySelector("img");
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    img.src = images[num];
}