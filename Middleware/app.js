const express = require('express');

const port = 8080;
const app = express();

//  MIDDLEWARE

// app.use((req, res, next)=>{
//     console.log("Yeah , This is middleware1")
//     res.send("Yeah , This is middleware1");  //this stops request-response cycle
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
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString().split(" ").slice(4,5)[0]
//     console.log(req.method,req.hostname, req.originalUrl,req.path, req.ip, req.time)
//     next();
// });

//App.use Callbacks
app.use('/random', (req, res, next)=>{
    console.log("I am middleware only for random path");
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

app.use('/api', (req, res,next)=>{
    console.log('api middleware');
    const {q} = req.query;
    if(q === "giveaccess"){
        next();
    };
    res.send("ACCESS DENIED!");

    
})

app.get('/api', (req, res)=>{
    console.log('api accessed')
    res.send("api accessed")
});

app.use((req, res)=>{
    res.status(404).send("page is not found");
});

app.listen(port, (req, res)=>{
    console.log(`server runnig on port ${port}`)
});