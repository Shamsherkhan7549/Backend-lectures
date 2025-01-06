const express = require('express');
const userRoute = require('./routers/userRoute.js');
const postRoute = require('./routers/postRoute.js')

const app =  express();
const port = 3000;


app.get('/', (req, res)=> {
    res.send('root route')
});

app.use('/user', userRoute);
app.use('/post', postRoute);



app.listen(port, (req, res)=>{
    console.log(`server listening on port ${port}`)
});