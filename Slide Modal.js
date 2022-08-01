//Bulding a slider Component Part1
//Slider 
const slides= document.querySelectorAll('.slide');
const btnLeft document.querySelector('')
const slider = document.querySelector('.slider')
slider.style.transform='scale(0.4) translateX(-1200px)'
slider.style.overflow = 'visible';

slides.forEach((s,i) =>( s.style.transform = `translateX(${100*i}%)`))
// 0% and 100% are 200% 300%