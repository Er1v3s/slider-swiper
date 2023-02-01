class Swiper {
  constructor() {
    this.maxTouchScreenWidth = 1280;

    this.initialX = null;
    this.sliderWidth = null;
    this.slide = 1;

    this.slider = document.querySelector(".slider");
    this.length = document.querySelectorAll(".image").length;
    this.bottom = document.querySelector(".bottom");

    document.addEventListener("DOMContentLoaded", () => {
      this.buttons = document.querySelectorAll(".button");
    });

    window.addEventListener("resize", () => {
      this.sliderWidth = this.slider.clientWidth;
      this.slider.style.transform = `translateX(-${
        (this.slide == this.length ? this.slide - 1 : this.slide) *
        this.sliderWidth
      }px)`;
    });

    document.addEventListener("touchstart", (event) => {
      this.startTouch(event);
    });

    document.addEventListener("touchmove", (event) => {
      this.startMove(event);
    });
  }

  resetCircleBackground = () => {
    this.buttons.forEach((button) => {
      button.style.backgroundColor = "transparent";
    });
  };

  changeActiveCircle = () => {
    this.resetCircleBackground();
    this.buttons[this.slide - 1].style.backgroundColor = "white";
  };

  nextSlide() {
    this.slider.style.transform = `translateX(-${
      this.slide * this.sliderWidth
    }px)`;
    this.slide++;
  }

  prevSlide() {
    this.slide--;
    this.slider.style.transform = `translateX(-${
      (this.slide - 1) * this.sliderWidth
    }px)`;
  }

  goToFirstSlide() {
    this.slide = 1;
    this.slider.style.transform = `translateX(0px)`;
  }

  goToLastSlide() {
    this.slide = this.length;
    this.slider.style.transform = `translateX(-${
      (this.length - 1) * this.sliderWidth
    }px)`;
  }

  startTouch(event) {
    if (window.innerWidth < this.maxTouchScreenWidth) {
      this.initialX = event.touches[0].clientX;
    } else {
      return false;
    }
  }

  startMove(event) {
    if (!this.initialX) return;

    this.positionX = event.touches[0].clientX;

    let diffX = this.initialX - this.positionX;
    diffX = Math.abs(diffX);

    if (diffX > 0) {
      if (this.initialX < this.positionX) {
        this.slide <= 1 ? this.goToLastSlide() : this.prevSlide();
      } else {
        this.slide < this.length ? this.nextSlide() : this.goToFirstSlide();
      }
      this.changeActiveCircle();
    }
    this.initialX = null;
  }
}

new Swiper();
