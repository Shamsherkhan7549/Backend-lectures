const express = require('express');
const session = require('express-session')
const app = express();

app.use(session({
    secret:'supersecretcode',
    resave:false,
    saveUninitialized:true
}));

app.get('/', (req, res)=>{
    res.send('express session root route')
});

app.get('/test', (req, res)=>{
    res.send('test successful')
});

app.get('/reqcount', (req, res)=>{
   
    if(req.session.count){
         req.session.count++;
    }else{
        req.session.count = 1
    }
    
    console.log(req.session)
    res.send(`You sent req ${req.session.count} times`)
});

app.listen('3000', (req, res)=>{
    console.log('server working on port 3000')
})