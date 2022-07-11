console.log(document.documentElement);
console.log(document.body);
console.log(document.head);

const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

console.log(allSections);
document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

//Createing and inserting elements
//.insertAdjacentHTML
const message = document.createElement('div');

message.classList.add('cookie-message');
message.textContent='danie esye cksjcksjdcksjdfck ';
message.innerHTML='Noi folosim cuptoru pentru prajituri <button class="btn btn--close-cookie">Got it!</button>'
header.prepend(message);
header.append(message);
header.append(message);
header.before(message);
header.after(message);
// delete elements
document.querySelector('.btn--close-cookie')
.addEventListener('click',function(){
  // message.remove
  message.parentElement.removeChild(message);
})