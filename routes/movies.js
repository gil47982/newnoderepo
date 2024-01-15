// import the libraries
const express = require('express')
const router = express.Router()

//create the router

router.get('/', (req,res)=>{
    res.send('you are in movies (router)')
})

router.get('/hobbit', (req,res)=>{
    res.send('you are in hobbit')
})


//export the routes
module.exports = router

