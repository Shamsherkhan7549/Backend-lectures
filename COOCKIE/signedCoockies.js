const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser("sham123"));

app.get('/', (req, res) => {
    res.send('Hi , I am root')
});

app.get('/cookies', (req, res) => {
    res.cookie('lang', 'hindi');
    res.cookie('name', 'Shamsher')
    res.send('coockies sent!')
});

app.get('/parseCookies', (req, res) => {
    console.log(req.cookies)
    res.send('cookies parsed')
});
// all those cookies allowing cookie tempering

app.get('/signedCookies', (req, res) => {
    res.cookie('order', 'headphones', {signed:true})
    res.send('signed cookies sent')
});

app.get('/verifySinedCookie', (req, res) => {
    console.log(req.signedCookies)
    console.log(req.cookies)

    res.send('signedCookie verified')
})
app.listen(3000,(req, res)=>{
    console.log('server running on port 300')
});