const express = require('express');
const ExpressError = require("./ExpressError");
const app = express();
const port = 8080;


const token = (req, res, next)=>{
    const {q} = req.query;
    if(q === 'giveaccess'){
        next();
    };

    throw new ExpressError(401, 'Unauthorized acces denied!');
};

app.get('/api',token, (req, res)=>{
    console.log('api accessed');
    res.send('api accessed');
});

app.get('/', (req, res)=>{
    console.log('Hi, I am root.');
    res.send('Hi, I am root.')
});


// app.use((err,req, res, next)=>{
//     console.log('err middleware');
//     console.log(err)
//     next()
// });

// app.use((err,req, res, next)=>{
//     console.log('err middleware');
//     console.log("-----------error------------")
//     const {status, message} = err;
//     res.status(status).send(message)

// });


app.get('/err', (req, res)=>{
    console.log('err api')
    abcd = abcd
    console.log('err api s2')

});

app.use((err,req, res, next)=>{
    console.log('err middleware');
    console.log("-----------error------------")
    const {status=400, message} = err;
    res.status(status).send(message)
 
});



app.listen(port, (req, res)=>{
    console.log(`app listenig on port ${port}`)
});