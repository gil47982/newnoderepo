const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
    res.send('you are in users')
})

router.get('/gilly', (req,res) => {
    res.send('you are in gilly')
})




module.exports = router