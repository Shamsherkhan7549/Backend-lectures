const express = require('express');
const app = express();

const port = 8080;

app.use(express.urlencoded({extended:true})); //this is used to parsing data into readable form for expres. The data is coming from req.body of post request
app.use(express.json());

app.get('/register', (req, res) => {
    let {username,password} = req.query
    res.send(`standard Get request of username : ${username}`)
})

app.post('/register', (req, res) => {
    let {username, password} = req.body;
    res.send(`standard Post request : ${username} and ${password}`)
})

app.listen(port, (req,res) => {
    console.log(`app running on port ${port}`)
})