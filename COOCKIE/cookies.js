const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();


app.use(cookieParser());

// here cookies are parsing
app.get('/', (req, res) => {
    console.log(req.cookies)
    const{name="random"} = req.cookies;
    res.send(`Hi, ${name}`)
})

app.get('/setCookies', (req, res) => {
    res.cookie('greet', 'salam');
    res.cookie('madeIn', 'India');

    res.send('cookies sent!')
})

app.listen(3000, (req, res) => {
    console.log('server running on port 3000')
})