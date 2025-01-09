const express = require('express');
const session = require('express-session')
const app = express();

const sessionOptions = {
    secret:'supersecretcode',
    resave:false,
    saveUninitialized:true
};

app.use(session(sessionOptions))
app.get('/', (req, res) => {
    res.send('Hi, I am root')
});

app.get('/register', (req, res)=>{
    const {name='anonumous'} = req.query;
    req.session.name = name;
    res.send('registered');
});

app.get('/hello', (req,res)=>{
    res.send(`hello ${req.session.name}`)
});

app.listen(3000, (req, res)=>{
    console.log('server running on port 3000')
});