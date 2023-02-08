const fs = require('fs')
const express = require('express');
const morgan = require('morgan');
const { join } = require('path');

const app = express();

// 01)  MiddleWares
app.use(morgan('dev'));
app.use(express.json());






app.use((req, res, next) => {
    console.log("Hello from the middleware ")
    next();
});
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString
    next()
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
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'succes',
            message: 'Invalid ID'
        });

    }
    res.status(204).json({
        status: 'message',
        data: null

    })
}


const getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: ' this route is not yet defined '
    })
};

const getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: ' this route is not yet defined '
    })
};
const createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: ' this route is not yet defined '
    })
};

const updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: ' this route is not yet defined '
    })
};

const deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: ' this route is not yet defined '
    })
};

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
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString
    next()
})










app
    .route('/api/v1/tours/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);



app.route('/api/v1/users').get(getAllUsers).post(createUser)



app.route('/api/v1/users/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)




//  this is server 
const port = 3000;
app.listen(port, () => {
    console.log(`App runing on port 127.0.0.01:${port} ...`)
})