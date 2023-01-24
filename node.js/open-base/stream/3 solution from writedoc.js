const fs = require("fs");
const server = require("http").createServer();


server.on("request", (req , res) => {
    // //Solution
    // fs.readFile("./test-file.txt", (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // });
///Solution number 2  : streams 


// const readable =  fs.createReadStream("./test-file.txt");
// readable.on("data" , chunk => {
//     res.write(chunk);
// });

// readable.on("end" , () => {
//     res.end();
// });
// readable.on("error" , err =>{
//     console.log(err);
//     res.statusCode = 500;
//     res.end("file not found ");
//  });


//Solution 3 
 const readable =  fs.createReadStream("./test-file.txt");
 readable.pipe(res);
 //rendable  .pipe(WriuteableDest)
});

server.listen(7000, "127.0.0.1", () => {
console.log("Hey , Loading...:)");
console.log("127.0.0.1:7000")
});