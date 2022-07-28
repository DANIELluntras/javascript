//Stick navigation : Intersection Observer API
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight)

const stickyNav = function(entries){
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting)nav.classList.add('sticky');
  else nav.classList.remove('sticky');
  
};


const hederobserver = new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0,
  rootMargin:`-${navHeight}px`,

});
hederobserver.observe(header);

