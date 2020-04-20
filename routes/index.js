const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    // res.send('Hello World - Anything')
    res.render('index.ejs')
})


module.exports = router