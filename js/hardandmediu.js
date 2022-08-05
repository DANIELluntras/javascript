
const btnScrollTo =  document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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
s
// -2-
//window.scrollTo({
//  left: s1coords.left+ window.pageXOffset,
//  top: s1coords.top+window.pageYOffset,
// behavior: 'smooth'
// });
//-3-
section1.scrollIntoView({behavior: 'smooth'});


});