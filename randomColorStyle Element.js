const randomInt = (min,max) => Math.floor(Math.random()*(max-min+1)+min);

 const randomColor = ()=>`rgb(${randomInt(0,255)} , ${randomInt(0,255)} , ${randomInt(0,255)})`
 console.log(randomColor(0,255));


document.querySelector('.nav__link').addEventListener('click', function(e) {
  console.log('CONTAINER',e.target , e.currentTarget);
  console.log(randomColor(0,255));
  this.style.backgroundColor = randomColor();
  console.log(e.currentTarget === this);

  //Stop Propagtion
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function(e) {
  console.log('CONTAINER',e.target , e.currentTarget);
  console.log(randomColor(0,355));
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function(e) {
  console.log('CONTAINER',e.target , e.currentTarget);
  console.log(randomColor(0,255));
  this.style.backgroundColor = randomColor();
} , true);
