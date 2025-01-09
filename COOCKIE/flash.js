const express = require('express');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session')

const app = express();

app.use(flash());

app.use(session({
    secret:'supercode',
    resave:false,
    saveUninitialized:true
}));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"views"))

app.get('/', (req, res)=>{
   
    res.render('root.ejs')
}); 

app.get('/session', (req, res)=>{
    const{name='anonymous'} = req.query;
    if(name === 'shamsher'){
    req.flash('success', 'user regisster successful!');

    }else{
     req.flash('error', 'user not registered!');

    }

    res.send('flash info sent!');
});

const renderFlash = (req, res, next) => {
    res.locals.message = req.flash('success');
    res.locals.error = req.flash('error');
    next()
}

app.get('/flash',renderFlash, (req, res)=>{
    res.render('flash.ejs')
})


app.listen(3000, (req, res)=>{
    console.log('server running on port 3000')
});