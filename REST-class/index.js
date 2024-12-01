const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

const port  = 8080;

app.use(express.static( path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"views"))



let datas = [
    {
        id: uuidv4(),
        username: '@sham',
        post:'nice',
    },

    {
        id: uuidv4(),
        username: '@samar',
        post:'average',
    },

    {
        id: uuidv4(),
        username: '@sameer',
        post:'good',
    }
]

app.get("/posts", (req, res) => {
    res.render('post.ejs', {datas})
})

app.get("/posts/new", (req, res) => {
    res.render('new.ejs')
});

app.post("/posts", (req, res) => {
    let {username, post}  = req.body;
    let id = uuidv4();
    datas.push({id, username, post});
    res.redirect('/posts')
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let data = datas.find(item => (
        item.id === id
    ))

    res.render('detPost.ejs',{data})
});

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    console.log(id)
    let newPost = req.body.post;
    let data = datas.find(item => (
        item.id === id
    ))
    data.post = newPost;
    console.log(data)
    res.redirect("/posts");
});

app.get("/posts/:id/update", (req, res) => {
    let {id} = req.params;
    let data = datas.find(item => (
        item.id === id
    ));
    res.render('update.ejs',{data})
});

app.delete('/posts/:id', (req,res) =>{
    let {id} = req.params;
     datas = datas.filter(item => item.id !== id)
    res.redirect("/posts")

})


app.listen(port, (req, res) => {
    console.log('server working well!')
})
