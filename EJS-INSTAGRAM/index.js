const express = require('express');
const app = express();
const ejs = require('ejs')
const path = require('path');
const port = 8080;

app.use(express.static (path.join(__dirname, 'public/css')))
app.use(express.static (path.join(__dirname, 'public/js')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/instagram/:username', (req,res) => {
    let {username} = req.params;
    let jsonData = require("./data.json");
    let currData = jsonData[username];
    if(currData){
        res.render('instagram.ejs', {username, currData});

    }else{
        res.render('error.ejs')
    }
  
});

app.listen(port, (req, res) => {
    console.log(`Server running on port : ${port}`);
});