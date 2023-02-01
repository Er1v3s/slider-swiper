const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

// slider width handler (fixes resizing window eventlistener on the bottom)
let sliderWidth = slider.clientWidth;
let slide = 1;

// images counter
const length = images.length;

// create circles below slider
for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.classList.add("button");
  bottom.appendChild(div);
}

// handle elements after creating it!! not before!!
const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

// reset bg of every circle
const resetCircleBackground = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

const changeActiveCircle = () => {
  resetCircleBackground();
  buttons[slide - 1].style.backgroundColor = "white";
};

// handle the circle click event
buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    slider.style.transform = `translateX(-${index * sliderWidth}px)`;
    slide = index + 1;
    changeActiveCircle();
  });
});

// functions for changing slides

const nextSlide = () => {
  slider.style.transform = `translateX(-${slide * sliderWidth}px)`;
  slide++;
};

const prevSlide = () => {
  slide--;
  slider.style.transform = `translateX(-${(slide - 1) * sliderWidth}px)`;
};

const goToFirstSlide = () => {
  slide = 1;
  slider.style.transform = `translateX(0px)`;
};

const goToLastSlide = () => {
  slide = length;
  slider.style.transform = `translateX(-${(length - 1) * sliderWidth}px)`;
};

// handle the arrows click and kaydown event

arrowRight.addEventListener("click", () => {
  slide < length ? nextSlide() : goToFirstSlide();
  changeActiveCircle();
});

arrowLeft.addEventListener("click", () => {
  slide <= 1 ? goToLastSlide() : prevSlide();
  changeActiveCircle();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    slide < length ? nextSlide() : goToFirstSlide();
    changeActiveCircle();
  } else if (event.key === "ArrowLeft") {
    slide <= 1 ? goToLastSlide() : prevSlide();
    changeActiveCircle();
  }
});

// fixes resizing window
window.addEventListener("resize", () => {
  sliderWidth = slider.clientWidth;
  slider.style.transform = `translateX(-${
    slide * sliderWidth - sliderWidth - (sliderWidth > 320 ? 0 : 10)
  }px)`;
});
