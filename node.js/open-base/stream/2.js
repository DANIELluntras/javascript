const fs = require("fs");
const server = require("http").createServer();


server.on("request", (req , res) => {
    // //Solution
    // fs.readFile("./test-file.txt", (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // });
///Solution number 2  : streams 


const readable =  fs.createReadStream("./test-file.txt");
readable.on("data" , chunk => {
    res.write(chunk);
});

readable.on("end" , () => {
    res.end();
});

});

server.listen(4000, "127.0.0.1", () => {
console.log("Hey , Loading...:)");
console.log("127.0.0.1:4000")
});