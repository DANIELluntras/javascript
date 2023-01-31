const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'hello  from the server side . . . ',
        app: 'Natours' })
});

app.post('/' , (req , res)=>{
    res.send("you cant post to this endpoint ... ");
})

const port = 3000;

app.listen(port, () => {
    console.log(`App runing on port 127.0.0.01:${port} ...`)
});


//ba vezi ca aicia cad faci iti trebuie sa dai  install la nodemon sa faci server 
//sa dai npm i nodemon dupa dai npm install nodemon dupa dai npm start 
//si nu mai va trebui sa dai de fiecare data nodemon index,js pentru ca tu ai dai drumu 
// ba da vezi ca va trebui sa intri pe package.json si sa scri la script 
//faza aia , dupa intri pe post man si iti merge 
// daca nu te  descurci intri pe undemi la jonas la node.js si 
//la episodu 50 iti va explica cum sa faci hai spor