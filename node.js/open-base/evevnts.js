const  EventEmitter = require("events");
const http  = require("http");
const myEmitter  = new EventEmitter();



class Sales extends EventEmitter{
    constructor() {
        super();
        
    }
}











myEmitter.on('newSale ' , () => {
    console.log('there was a new sale ')
})

myEmitter.on("newSale" , ()=>{
    console.log("there was a new sale")
});

myEmitter.on("newSale" , ()=>{
    console.log("costumer name: Daniel ")
})
myEmitter.on("newSale" , stock=>{
    console.log(`There are now ${stock} items left in stock `)
})



myEmitter.emit("newSale");

////////////////////

const server  = http.createServer()

server.on("request" , (req , res )=> {
    console.log('request recevied');
    console.log(req.url);
    res.end('Request receied');
});

server.on("request" , (req , res )=> {
   console.log('Another request');
    // res.end('Another request');
});

server.on("close" , ()=> {
   
    console.log("Server closed")
});

server.listen(7000, "127.0.0.1"  , () => {
    console.log('Waiting for request ...')
});



