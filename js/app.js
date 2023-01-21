'use strict';

////////NAV BUTTON MENU/////////
const navOpen = document.querySelector('.btn-mobile-nav');
const outerNav = document.querySelector('.outer-nav');
navOpen.addEventListener('click', function (e) {
  e.preventDefault();
  outerNav.classList.toggle('nav-open');
});

outerNav.addEventListener('click', function (e) {
  const link =
    e.target.classList.contains('nav-link') ||
    e.target.classList.contains('nav-link-btn');
  if (!link) return;
  if (link) {
    outerNav.classList.remove('nav-open');
  }
});

////////////////////SLIDER FADE
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slider2 = document.querySelector('.slider');
const slides2 = document.querySelectorAll('.slidee');

let curSlide = 0;

// for (let [s, i] of slides2.entries()) {
//   console.log(i, `slidee-${s}`);
// }

const maxSlide2 = slides2.length;

const nextSlide2 = slide => {
  if (curSlide === maxSlide2 - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides2.forEach(s => s.classList.remove('opaci1'));
  document.querySelector(`.slidee-${curSlide + 1}`).classList.add('opaci1');
};

const prevSlide2 = slide => {
  if (curSlide === 0) {
    curSlide = maxSlide2 - 1;
  } else {
    curSlide--;
  }

  slides2.forEach(s => s.classList.remove('opaci1'));
  document.querySelector(`.slidee-${curSlide + 1}`).classList.add('opaci1');
};

next.addEventListener('click', nextSlide2);
prev.addEventListener('click', prevSlide2);

setInterval(() => {
  nextSlide2();
}, 2000);

////////////////////////////////////////////////////////////
// console.log(allproductsContainer.children);
// const prods = [...allproductsContainer.children];
// console.log(prods);
// // console.log(prods[0].querySelector('h3').textContent);
// prods.forEach((p, i) => {
//   console.log(p.querySelector('h3').textContent.toLowerCase());
// });

// const ppp = [
//   ...prods.filter(p =>
//     p.querySelector('h3').textContent.toLowerCase().includes('set')
//   ),
// ];

// console.log(ppp.forEach(p => (p.style.display = 'none')));

const btnSearch = document.querySelector('.nav-btn-search');
const searchContainer = document.querySelector('.nav-search-input');
const searchClose = document.querySelector('.btn-search-close');

btnSearch.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('aaaa');
  searchContainer.classList.remove('nav-search-inputhide');
});

const closeSearch = e => {
  e.preventDefault();
  searchContainer.classList.add('nav-search-inputhide');
};

searchClose.addEventListener('click', closeSearch);

////////////////////CAROUSEL INFINITE

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  '--marquee-elements-displayed'
);
const marqueeContent = document.querySelector('ul.marquee-content');

root.style.setProperty('--marquee-elements', marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

/////////// scroll animation reveal
const boxes = document.querySelectorAll('.box');

const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 3;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
};

window.addEventListener('scroll', checkBoxes);

checkBoxes();

////////////////SWIPER
