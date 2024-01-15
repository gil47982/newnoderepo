// Import the libraries

const express = require('express')
const { restart } = require('nodemon')
const app = express()

const movieRoute = require('./routes/movies') //looking for a file called movies
const userRoute = require('./routes/users') //looking for a file called users

//Middleware
app.use('/movies2',movieRoute) //end point to be used e.g. localhost:3000/movies2 to load the content of movieRoute (which is the movies.js file)
app.use('/users',userRoute)

// create a route
app.get('/', (req,res) => {
    res.send('you are in your home page!')

})

//app.get('/movies', (req,res) =>  {
//    res.send('you are in movies')
//})





// start the server
app.listen(3000, ()=> {
    console.log('Server is up and running')
})