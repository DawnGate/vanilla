const rightArrow = document.querySelector(".right");
const leftArrow = document.querySelector(".left");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const slideLength = images.length;

for (let i = 0; i < slideLength; i++) {
  const div = document.createElement("div");
  div.className = "button-bottom";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button-bottom");
buttons[0].style.backgroundColor = "white";

const clearBg = () => {
  buttons.forEach((elem) => (elem.style.backgroundColor = "transparent"));
};

buttons.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    clearBg();
    elem.style.backgroundColor = "white";
    slider.style.transform = `translateX(-${index * 800}px)`;
  });
});

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
};

const prevSlide = () => {
  slideNumber--;
  slider.style.transform = `translateX(-${(slideNumber - 1) * 800}px)`;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(slideLength - 1) * 800}px)`;
  slideNumber = slideLength;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

rightArrow.addEventListener("click", () => {
  clearBg();
  slideNumber < slideLength ? nextSlide() : getFirstSlide();
  buttons[slideNumber - 1].style.backgroundColor = "white";
});

leftArrow.addEventListener("click", () => {
  clearBg();
  slideNumber > 1 ? prevSlide() : getLastSlide();
  buttons[slideNumber - 1].style.backgroundColor = "white";
});
