const express = require('express');
const router = express.Router();

//post
router.get('/', (req, res)=>{
    res.send('post home page')
});

router.get('/:id', (req, res)=>{
    res.send(`specific post page based on id`)
});

router.post('/', (req, res)=>{
    res.send('Insert new post in DB')

});

module.exports = router
