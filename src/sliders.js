//Common variables.
const controlRightIm = document.querySelector('#chevron-right-img');
const controlLeftIm = document.querySelector('#chevron-left-img');
const controlRightTt = document.querySelector('#chevron-right-tt');
const controlLeftTt = document.querySelector('#chevron-left-tt');
const carouselBack = document.querySelector('.project-right-d');
const rightOverlay = document.querySelector('.right-overlay');
const windowWidth = window.innerWidth;
const carouselWrapper = document.querySelector('.carousel');
const sliderWrapper = document.querySelector('.slider');

controlLeftIm.style.display = 'none';
controlLeftTt.style.display = 'none';

// Create Counter Prototype to manage the slider logic.
const Slider = function (count, lastImage, divider) {
  this.count = count;
  this.lastImage = lastImage;
  this.divider = divider;

  // Increments or Decrements the multiplier factor.
  this.setCount = (x) => {
    return this.count = this.count + x;
  }
  //Find the distances to scroll to the end
  this.getScrollWidth = function () {
    const lastImgRightLimit = this.lastImage.getBoundingClientRect().right;
    const rightOverlayWidth = rightOverlay.offsetWidth; //Get the left position of the right overlay.
    this.scrollWidth = ((lastImgRightLimit - windowWidth) + rightOverlayWidth) / this.divider;
    this.distanceToScroll = this.scrollWidth;
    console.log(lastImgRightLimit)
  }
};

//SLIDER 1 (IMAGENARY)
const imagenarySliderImages = document.querySelectorAll('.imagenary-image'); //All imagenary project images.
const lastImagenaryImg = imagenarySliderImages[5];

document.addEventListener('DOMContentLoaded', () => {
  slide = () => {
    if (Object.values(lastImagenaryImg.classList).indexOf('loaded') == 1 && // This is in order to get the real right bound after images are loaded. 
      lastImagenaryImg.complete) {

      const slider1 = new Slider(0, lastImagenaryImg, 5); // Instantiate Counter prototype.
      slider1.getScrollWidth();
      document.removeEventListener('scroll', slide);
      // Move to left event.
      controlRightIm.onclick = () => {
        if (slider1.count <= 4) {
          const a = slider1.setCount(1);
          const b = slider1.distanceToScroll * a;
          carouselWrapper.style.transform = `translateX(${-b}px)`;
          if (controlLeftIm.style.display === 'none') {
            controlLeftIm.style.display = 'block';
          }
        }
        if (slider1.count === 5) {
          controlRightIm.style.display = 'none';
        }
      };
      // Move to left event.
      controlLeftIm.onclick = () => {
        if (slider1.count >= 1) {
          const a = slider1.setCount(-1);
          const b = slider1.distanceToScroll * a;
          carouselWrapper.style.transform = `translateX(${-b}px)`;
        }
        controlRightIm.style.display = 'block';
        if (slider1.count === 0) {
          controlLeftIm.style.display = 'none';
        }
      };
    }
  };
  document.addEventListener('scroll', slide);

// SLIDER 2 (TT)
const ttSliderImages = document.querySelectorAll('.tt-image'); //All trainning timer project images.
const ttSliderLastImg = ttSliderImages[3];

  slideTwo = () => {
    if (Object.values(ttSliderLastImg.classList).indexOf('loaded') == 1 && // This is in order to get the real right bound after images are loaded. 
      ttSliderLastImg.complete) {
      const slider2 = new Slider(0, ttSliderLastImg, 3); // Instantiate Counter prototype.
      slider2.getScrollWidth();
      document.removeEventListener('scroll', slideTwo);
      // Move to left event.
      controlRightTt.onclick = () => {
        if (slider2.count <= 2) {
          const a = slider2.setCount(1);
          const b = slider2.distanceToScroll * a;
          sliderWrapper.style.transform = `translateX(${-b}px)`;
          if (controlLeftTt.style.display === 'none') {
            controlLeftTt.style.display = 'block';
          }
        }
        if (slider2.count === 3) {
          controlRightTt.style.display = 'none';
        }
      };
      // Move to left event.
      controlLeftTt.onclick = () => {
        if (slider2.count >= 1) {
          const a = slider2.setCount(-1);
          const b = slider2.distanceToScroll * a;
          sliderWrapper.style.transform = `translateX(${-b}px)`;
        }
        controlRightTt.style.display = 'block';
        if (slider2.count === 0) {
          controlLeftTt.style.display = 'none';
        }
      }
    }
  };
  document.addEventListener('scroll', slideTwo);
});


