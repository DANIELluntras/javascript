
const fs = require('fs');
const crypto = require("crypto");
const start = Date.now();


process.env.UV_THREADPOOL_SIZE = 1;





const content = 'Some content!';

fs.writeFile('./test-file.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});




setTimeout(() => console.log("timer  1  finished"), 0);
setImmediate(() => console.log("immeediatli 1 finished"));

fs.readFile("./test-file.txt", () => {
    console.log('I/O finished');
    console.log('---------------------');
        setTimeout(() => console.log("timer  2  finished"), 0);
        setTimeout(() => console.log("timer  3  finished"), 30000);
        setImmediate(() => console.log("immeediatli 3 finished"));

    process.nextTick(() => console.log("procer.nextTick"));


    crypto.pbkdf2Sync('passworld ', ' salt ', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "pasworld encryptoed");
    })

    crypto.pbkdf2('passworld ', ' salt ', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "pasworld encryptoed");
    })


    crypto.pbkdf2('passworld ', ' salt ', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "pasworld encryptoed");
    })


})


console.log("hello from the  top-level code");



