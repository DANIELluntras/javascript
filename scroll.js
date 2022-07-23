document.querySelector('.nav__links').addEventListener('click', function(e){
    e.preventDefault();
  
    // matching strategy 
    if (e.target.classList.contains('nav__link')){
          const id = e.target.getAttribute('href');
      console.log(...id);
      document.querySelector(id).scrollIntoView({behavior: 'smooth'});
        }
  });
  