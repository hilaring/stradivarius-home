let slider = document.querySelector(".slider");
let slide = document.querySelectorAll(".slider-content")
let count = 1;
let witdh = slide[0].clientWidth;
let interval = 3000;

window.addEventListener('resize', () => {
    witdh = slide[0].clientWidth;
})

setInterval(() => {
    slides()
}, interval)

const slides = () => {
    slider.style.transform = "translate("+(-witdh*count)+"px)";
    count++;
}
