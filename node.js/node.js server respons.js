const fs = require('fs')
const express = require('express');

const app = express();
app.use(express.json(

))

app.use((req, res, next) => {
    console.log("Hello from the middleware ")
    next();
})





// app.get('/', (req, res) => {
//     res.status(200).json({ 
//         message: 'hello  from the server side . . . ',
//         app: 'Natours' })
// });

// app.post('/' , (req , res)=>{
//     res.send("you cant post to this endpoint ... ");
// })

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/starter/dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {

    res.status(200).json({
        status: ' succes',
        results: tours.length,
        data: {
            tours
        }
    });
}


const updateTour = (req, res) => {

    res.status(200).json({
        status: ' succes',
        results: tours.length,
        data: {
            tours
        }
    });
}
const deleteTour = (req, res) => {

    res.status(200).json({
        status: ' succes',
        results: tours.length,
        data: {
            tours
        }
    });
}



// asta ii al doilea :)

///iar acesta este  optinerea tour 

const getTour = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;

    const tour = tours.find(el => el.id === id)

    if (req.params.id * 1 > tours.length) {

        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }


    //acesta este status poate fi de 2 feluri un 200 inseamna ca este ca 
    //ruleaza serveru iar cel in care ii cu 404 este acela in care a aparut o eroare 

    res.status(200).json({
        status: ' succes',

        data: {
            tours: tour
        }
    });
}

// acetsta este create  touur 



const createTour = (req, res) => {
    if (!tour) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    };
    res.status(200).json({
        status: 'succes',
        data: {
            tour: '<Updated tour here ... >'
        }
    })
}


// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', createTour);

app
    .route('/api/v1/tours')
    .get(getAllTours)
    .post(createTour);

app.use((req, res, next) => {
    console.log("Hello from the middleware");
    next();
});

app
    .route('/api/v1/tours/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);


//  this is server 
