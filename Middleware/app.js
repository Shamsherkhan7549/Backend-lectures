const express = require('express');

const port = 8080;
const app = express();

// app.use((req, res, next)=>{
//     console.log("Yeah , This is middleware1")
//     res.send("Yeah , This is middleware1"); 
//     return next();
//     console.log("middleware 1")
// });

// app.use((req, res, next)=>{
//     // res.send("Yeah , This is middleware2"); 
//     console.log("Yeah , This is middleware2")
//     next();
// });

// app.use((req, res, next)=>{
//     // res.send("Yeah , This is middleware3"); 
//     console.log("Yeah , This is middleware3")
//     next();
// });

//Logger-different one name morgan
app.use((req,res,next)=>{
    req.time = new Date(Date.now()).toString().split(" ").slice(4,5)[0]
    console.log(req.method,req.hostname, req.originalUrl,req.path, req.ip, req.time)
    next();
});


app.get('/', (req, res)=>{
    console.log('Root page')
    res.send("Hi, I am root")
});

app.get('/random', (req, res)=>{
    console.log('random page')
    res.send("hey this is random page")
});

app.get('/random/list', (req, res)=>{
    console.log('random list page')
    res.send("hey this is random-list page")
});



app.listen(port, (req, res)=>{
    console.log(`server runnig on port ${port}`)
});