const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res)=> {
    res.render("home.ejs");
});

app.get('/rolldice', (req,res) => {
    let diceValue = Math.floor(Math.random()*6)+1
    res.render('rolldice', {diceValue})
});

app.get('/instagram', (req, res) =>{
    res.send('<h2>Welcome to instagram</h2>');
});

app.get('/instagram/:username', (req, res) =>{
    let {username} = req.params;
    let followers = ['samar', 'sameer', 'shamsher', 'khan'];
    res.render('instagram', {username,followers})
});




app.get('*', (req, res) => {
    res.send("hey you are on invalid page")
});

app.listen(port , (req, res) => {
    console.log(`App is listening on port ${port}`)
});