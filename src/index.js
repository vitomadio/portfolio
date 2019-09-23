const title = document.querySelector('.item-a');
const headImage = document.querySelector('.item-r-a');
const arrow = document.querySelector('#arrow');
const project = document.getElementsByClassName('project')[0];
const contacts = document.querySelector('.contacts');
const socialIcons = document.querySelectorAll('#social-icon');
const menu = document.querySelector('.contacts');
const bars = document.querySelector('.btn-menu');
const bar1 = document.querySelector('.bar-start');
const bar2 = document.querySelector('.bar-middle');
const bar3 = document.querySelector('.bar-end');


//Lazy loading images.
document.addEventListener('DOMContentLoaded', () => {
  const lazyLoadImages = document.querySelectorAll('.lozad');
  let lazyLoadThrottleTimeout;
  lazyload = () => {
    if (lazyLoadThrottleTimeout) {
      clearTimeout(lazyLoadThrottleTimeout);
    }
    lasyLoadThrottleTimeout = setTimeout(() => {
      const scrollTop = window.pageYOffset;
      lazyLoadImages.forEach(img => {
        if (scrollTop > 100) {
          img.src = img.dataset.src;
          img.classList.remove('lozad');
          img.classList.add('loaded');
          document.removeEventListener('scroll', lazyload);
        }
      });
      if (lazyLoadImages.length == 0) {
        document.removeEventListener('scroll', lazyload);
      }
    }, 20);
  }
  document.addEventListener('scroll', lazyload)
})



// Get contact height information.
const contactsHeight = contacts.offsetHeight;
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const barsHeight = bars.offsetHeight;
const marginTop = (windowHeight - contactsHeight) / 2;

if (windowWidth >= 767) {
  contacts.style.top = `${marginTop}px`;
} else {

  contacts.style.top = `${(windowHeight * .3) + barsHeight}px`;
}

//Social Icons animation.
socialIcons.forEach((icon, i) => {
  icon.style.animation = `fadeInFromLeft .6s ease-out .${(i * 2) + 3}s forwards `;
});


//Title animation.
title.classList.add('moveup');
//Header image animation.
headImage.classList.add('movedown');

// Arrow animation.
arrow.addEventListener('click', () => {
  project.scrollIntoView({ behavior: "smooth" });
});

//Open links menu.
bars.addEventListener('click', () => {
  const icon = bars.firstElementChild;
  if(Object.values(bar1.classList).indexOf('start-close') == -1){
    menu.style.animation = 'fadeIn .5s forwards';
    bar1.classList.add('start-close');
    bar2.style.display = 'none';
    bar3.classList.add('end-close');
  } else {
    menu.style.animation = 'fadeOut .5s forwards';
    bar1.classList.remove('start-close');
    bar2.style.display = 'block';
    bar3.classList.remove('end-close');
  }
});
















