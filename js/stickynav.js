//Sticky Navigation 

const initialCoords = section1.getBoundingClientRect()
console.log(initialCoords)


window.addEventListener('scroll',function (e){
console.log(window.scrollY);

if(window.scrollY > initialCoords.top)nav.classList.add('sticky');
else nav.classList.remove
('sticsky');

});