//Reveal Section
const allSections = document.querySelectorAll('.section')
const revealSection = function(entries, observer){
const [entry] = entries;
console.log(entry);

entry.target.classList.remove('section--hidden')
}

const sectionObserver = new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.15,
})
if(entry.isIntersecting)return;

allSections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
})

