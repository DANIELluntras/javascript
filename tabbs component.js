const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');



tabsContainer.addEventListener('click', function(e){
console.log('nini');
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

