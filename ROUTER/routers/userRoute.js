const express = require('express');
const router = express.Router();

//user

router.get('/', (req, res)=> {
    res.send('user route')
});


router.get('/:id', (req, res)=>{
    res.send(`specific user page based on id`)
});

router.post('/', (req, res)=>{
    res.send('Insert new user in DB')
});

module.exports = router;
