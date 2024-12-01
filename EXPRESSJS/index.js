const express = require('express');

const app = express();

const port  = 8080;


app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`)
})



// app.use((req, res) => {
//     console.log('req recieved');
//     let code =  "<h1> Name</h1> <ul><li>shamsher</li><li>rehan</li><li>sher</li></ul>"
//     res.send(code)
// });

app.get('/', (req,res) => {
    res.send("I am root path")
})

app.get('/about', (req,res) => {
    res.send("I am about path")
})

app.get('/contact', (req,res) => {
    res.send("I am contact path")

});

app.get("/:username/:id", (req,res) => {

    let {username, id} = req.params;
     let htmlStr = `<h1> username is @ ${req.params.username} </h1>  <h2>id is ${req.params.id}</h2>`;
     res.send(htmlStr)
   
});

app.get('/search', (req,res) => {
    const {q, color} = req.query
    res.send(`<h1>  fruit is ${q} and color is ${color}`)
});

// app.post("/:username/:id", (req,res) => {
//     console.log(req.params)
//     res.send( `usename @${req.params.username}, id ${req.params.id}`)
// })



app.get('*', (req,res) => {
    res.send("You have enter an invalid request")
})

app.post("/", (req, res) =>{
    res.send("You have sent a post request on root page")
})

app.post('*', (req, res) => {
    res.send("You have enter an invalid post request")
})

