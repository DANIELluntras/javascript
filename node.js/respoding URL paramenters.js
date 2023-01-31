const fs = require('fs')
const express = require('express');

const app = express();
// app.get('/', (req, res) => {
//     res.status(200).json({ 
//         message: 'hello  from the server side . . . ',
//         app: 'Natours' })
// });

// app.post('/' , (req , res)=>{
//     res.send("you cant post to this endpoint ... ");
// })

const tours = JSON.parse(fs.readFileSync(`${__dirname}/starter/dev-data/data/tours-simple.json`)
);



app.get('/api/v1/tours', (req, res) => {

    res.status(200).json({
        status: ' succes',
        results: tours.length,
        data: {
            tours
        }
    });
});

// asta ii al doilea :)
app.get('/api/v1/tours/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;

    const tour = tours.find(el => el.id === id)

    // if(id> tours.length){
    if (!tour) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }

    res.status(200).json({
        status: ' succes',

        data: {
            tours: tour
        }
    });
});



const port = 3000;

app.listen(port, () => {
    console.log(`App runing on port 127.0.0.01:${port} ...`)
});