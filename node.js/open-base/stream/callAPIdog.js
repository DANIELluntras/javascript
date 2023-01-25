const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed:${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/randomFetch!`)
    .end((err, res) => {
      console.log(res.body.message);

      fs.writeFile('./dog-img.txt', res.body.message, (err) => {
        if(err) return console.log(err.message);
        console.log('Random dog image saved to file! ');
      });
    });
});

// we need a file , this file is for    call name dog , 
// ba vezi ca iti va trebui un fiser care sa il citeasca  node.js poti sa te uiti la cursu lu jonas la episodu:41 ca acolo iti arata 
