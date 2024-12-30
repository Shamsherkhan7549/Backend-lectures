const express = require('express');
const ExpressError = require('./ExpressError')
const port = 8080;

const app = express();

//activity
const checkPassword = (req, res, next) => {
    const {password} = req.query
    if(password === 'admin@123'){
        next();
    }

    throw new ExpressError(403,'Unauthorized User!')
};

app.get('/admin', checkPassword, (req, res) => {
    console.log('welcome to admin panel');
    res.send('welcome to admin panel');
});

app.use((err, req, res, next)=>{
    const {status, message} = err;
    res.status(status).send(message)
});



app.listen(port, (req, res)=>{
    console.log(`server listening on port ${port}`)
})