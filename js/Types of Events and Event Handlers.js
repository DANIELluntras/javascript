const h1 = document.querySelector('h1');
const alertH1 = function(e) {
  alert('addEvents listener : Great , You are reading the headinf :)')

}

h1.addEventListener('mouseenter', alertH1);
setTimeout(() =>h1.removeEventListener('mouseenter', alertH1),3000);


// h1.onmouseenter = function(e) {
//   alert('addEvents listener : Great , You are reading the headinf :)')

// }
