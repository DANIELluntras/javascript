const fs = require("fs");
const server = require("http").createServer();


server.on("request", (req , res) => {
    //Solution
    fs.writeFile("./test-file.txt", (err, data) => {
        if (err) console.log(err);
        res.end(data);
    });
});

server.listen(5000, "127.0.0.1", () => {
console.log("Hey , Loading...:)");
console.log("127.0.0.1:5000")
});