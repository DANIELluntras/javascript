const fs = require('fs');
const { resolve } = require('path');
const superagent = require('superagent');
const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('i could not find that file');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not wrirte file ');
    });
  });

};

const getDogPic = async () => {
  try {

    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ----- ${data} ------`);

    const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    console.log(res.body.message);
    await writeFilePro('dog-img.txt', res.body.message);
    console.log('Random dog image saved to file! ');

  }catch (err){
    console.log(err);
  }
  return '2:Ready'
};


const x = getDogPic();
console.log(x)

