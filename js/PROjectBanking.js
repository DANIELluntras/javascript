'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo =  document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
//nav 
const nav = document.querySelector('.nav');
//\nav
//operation 
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
//\operation

// open button click
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//\ open button click
///////////////////////////////////////
// Modal window



btnsOpenModal.forEach(btn=>btn.addEventListener('click', openModal));
//btnCloseModal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// -------- Scrolling --------:-]

btnScrollTo.addEventListener('click', function(e){
const s1coords = section1.getBoundingClientRect();
// console.log(s1coords);
// console.log(e.target.getBoundingClientRect());
// console.log('Current Scroll (x/y)', window.pageXOffset,window.pageYOffset);
// console.log('height/width viewport',
// document.documentElement.clientHeight,
// document.documentElement.clientWidth
// );

//scrooling -1-
// window.scrollTo(s1coords.left+ 
// window.pageXOffset,s1coords
// .top+window.pageYOffset);

// -2-
//window.scrollTo({
//  left: s1coords.left+ window.pageXOffset,
//  top: s1coords.top+window.pageYOffset,
// behavior: 'smooth'
// });
//-3-
section1.scrollIntoView({behavior: 'smooth'});
});
////////////////////////////////////////////////////////////////
// Page navigation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
// console.log(id);
// document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   })
// });
// .1 add event listener to common parent element 
// .2 determine what element originates the event 

document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();

  // matching strategy 
  if (e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
    console.log(...id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
      }
});

// Tabbed component  -194-



tabsContainer.addEventListener('click', function(e){

const clcked = e.target.closest('.operations__tab');

// Guard clause
if(!clcked)return;
//remove active classes
tabs.forEach(t=>t.classList.remove('operations__tab--active'));
tabsContent.forEach(c=>c.classList.remove('operations__content--active'));

//Active tab 
clcked.classList.add('operations__tab--active');
//Active content area 

document.querySelector(`.operations__content--${clcked.dataset.tab}`)
.classList.add('operations__content--active')
});

// Meniu fade animation 195 ep 
const handleHover = function(e,opacity) {
  console.log(this,e.currentTarget,opacity)
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings  = link.closest('.nav').querySelectorAll('.nav__link');
    const logo  = link.closest('.nav').querySelector('img');
    siblings.forEach(el=>{
      if(el!==link)el.style.opacity = this;
    })
    logo.style.opacity =this;
  }
}


//passing "argument" , into handeler
nav.addEventListener('mouseover',handleHover.bind(0.5));

nav.addEventListener('mouseout',handleHover.bind(1));
// //Sticky Navigation 

// const initialCoords = section1.getBoundingClientRect()
// console.log(initialCoords)


// window.addEventListener('scroll',function (e){
// console.log(window.scrollY);

// if(window.scrollY > initialCoords.top)nav.classList.add('sticky');
// else nav.classList.remove
// ('sticsky');

// });
//Stick navigation : Intersection Observer API
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight)

const stickyNav = function(entries){
  const [entry] = entries;
  // console.log(entry);

  if(!entry.isIntersecting)nav.classList.add('sticky');
  else nav.classList.remove('sticky');
  
};


const hederobserver = new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0,
  rootMargin:`-${navHeight}px`,

});

hederobserver.observe(header);


//Reveal Section
  const allSections = document.querySelectorAll('.section')
const revealSection = function(entries, observer){
const [entry] = entries;

if(entry.isIntersecting)return;

entry.target.classList.remove('section--hidden');
observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.15,
});

allSections.forEach(function(section){
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});


//////////////////////////////

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//200 - Bulding a slider Component Part1
 //cur slide  =  -100% , 0% , 100% , 200%



const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();


  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });

};
slider();















//exemple
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////



//select elements
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// const nav = document.querySelector('.nav');
// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');

// console.log(allSections);
// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// console.log(document.getElementsByClassName('btn'));
// //Createing and inserting elements
// //.insertAdjacentHTML
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent='danie esye cksjcksjdcksjdfck ';
// message.innerHTML='Noi folosim cuptoru pentru prajituri <button class="btn btn--close-cookie">Got it!</button>'
// header.prepend(message);
// header.append(message);
// header.append(message);
// header.before(message);
// header.after(message);
// // delete elements
// document.querySelector('.btn--close-cookie')
// .addEventListener('click',function(){
//   // message.remove
//   message.parentElement.removeChild(message);
// })
// //Styles 
// message.style.backgroundColor='#37383d';
// message.style.width='120%';
// console.log(message.style.color);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).height);
// console.log(getComputedStyle(message).color); 
// message.style.height= Number.parseFloat(getComputedStyle(message).height,10)
//  + 30 + 'px';
//  document.documentElement.style.setProperty('--color-primary','orangered')
//  //atributes
//  const logo = document.querySelector('.nav__logo');
//  console.log(logo.alt);
//  console.log(logo.src);
//  console.log(logo.className);

//  logo.alt = 'beutiful minimalist logo'

//  //Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company','bankidt');
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href)
// console.log(link.getAttribute('href'));

// //data atribution
// console.log(logo.dataset.versionNumber);
// //Classes

// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');//not includes
// //don't use
// logo.className = 'jonas';

/* - - 188 inplementinf smooth scrolling - - 

TARGET---
Proprietatea țintă numai pentru citire a 
interfeței Event este o referință la obiectul 
pe care a fost expediat evenimentul. Este 
diferit de Event.currentTarget atunci când handlerul de 
evenimente este apelat în timpul fazei
 de barbotare sau de captare a evenimentului
*/


//189 types  of Events and Event Handlers

// const h1 = document.querySelector('h1');
// const alertH1 = function(e) {
//   alert('addEvents listener : Great , You are reading the headinf :)')

// }

// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() =>h1.removeEventListener('mouseenter', alertH1),3000);


// h1.onmouseenter = function(e) {
//   alert('addEvents listener : Great , You are reading the headinf :)')

// }
//190  -Event Propagtion: Bubbling and Capturing 
// rgb(255,255,255);
// const randomInt = (min,max) => Math.floor(Math.random()*(max-min+1)+min);

//  const randomColor = ()=>`rgb(${randomInt(0,255)} , ${randomInt(0,255)} , ${randomInt(0,255)})`
//  console.log(randomColor(0,255));


// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   console.log('CONTAINER',e.target , e.currentTarget);
//   console.log(randomColor(0,255));
//   this.style.backgroundColor = randomColor();
//   console.log(e.currentTarget === this);

//   //Stop Propagtion
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   console.log('CONTAINER',e.target , e.currentTarget);
//   console.log(randomColor(0,355));
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function(e) {
//   console.log('CONTAINER',e.target , e.currentTarget);
//   console.log(randomColor(0,255));
//   this.style.backgroundColor = randomColor();
// } , true);

 // - 192 - EVENT Delegation : Implementing page navigation
  /// -193 - DOM Traversing

//   const  h1  = document .querySelector('h1');
//   const span = document .querySelector('span');

//   //Going dowmwards : child 
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'green';
// h1.lastElementChild.style.color = 'orangered';

// //Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background ='var(--gradient-secondary)';
// h1.closest('h1').style.background ='var(--gradient-primary)';

// //Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// console.log(span.parentElement);
// [...h1.parentElement.children].forEach(function(el){
// if(el!==h1)el.style.transform = 'scale(0.5)'
// })
// -194- buildind a tabbed component
//196 =  Implementing a Sticky Navigation: The Scroll Event

//202 Life cycle Dom Event
document.addEventListener('DOMContentLoaded', function(e){
  console.log('Html parsed and Dom tree Build 😊😊😊😊')

});

window.addEventListener('load', function(e){
  console.log('page Fuly Loaded')
})

window.addEventListener('beforeunload', function(e){
  e.preventDefault();
  console.log(e)
  e.returnValue = '';
})