const express = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

const port = 8080;

let allData = [

    {   id:uuidv4(),
        username:'shamsher',
        image:'https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: "Today, I bought new hoodie for me."
    },

    {   id:uuidv4(), 
        username:'rehan',  
        image:'https://plus.unsplash.com/premium_photo-1672243483821-5d3855a21809?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: "The cute child of my house."
    },
    
   {   id:uuidv4(),
        username:  'aman',
        image:'https://plus.unsplash.com/premium_photo-1707816501228-1d814ad62d7b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: "Today is nice day."
    },

    {   id:uuidv4(),
        username:'faisal',
        image:'https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJveXxlbnwwfHwwfHx8MA%3D%3D',
        caption: "i feel low."
    },

    {   id:uuidv4(),
        username:'mayur',
        image:'https://images.unsplash.com/photo-1526834527924-83a042ea7711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJveXxlbnwwfHwwfHx8MA%3D%3D',
        caption: "This is very beautiful moment , i have ever enjoyed."
    },
    
    {   id:uuidv4(),
        username:'shashi',
        image:'https://images.unsplash.com/photo-1623170909888-4e97ff277186?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: "Assalamoalikum everyone!"
    },
]



app.get('/', (req, res) => {

    res.send('Hi, I am root!');
  
});

app.get('/home', (req, res) => {
    
    res.render('home.ejs', {allData})
});

app.get('/home/search', (req, res)=> {
    const {username} = req.query
    const data = allData.find(item => item.username === username.toLowerCase());
    
    res.render('searchId.ejs', {data})
})

app.get('/home/new', (req, res) => {
    res.render('new.ejs')
});

app.post('/home', (req, res) => {
    const id = uuidv4();
    const {username, image, caption} = req.body;
    allData.push({id, username, image, caption});
    res.redirect('/home')
})

app.get('/home/:id', (req, res) => {
    const {id} = req.params;
    const data = allData.find(item => id === item.id);
    res.render('detData.ejs', {data})
});

app.get('/home/:id/edit', (req, res) => {
    const {id} = req.params;
    const data = allData.find(item => id === item.id);
    res.render('edit.ejs', {data})
});

app.patch('/home/:id', (req, res) => {
    const {id} = req.params;
    const {username,image, caption} = req.body

    const data = allData.find(item => id === item.id);

    data.username = username;
    data.image = image;
    data.caption = caption;
    
    res.redirect('/home')
});

app.delete('/home/:id', (req, res) => {
    const {id} = req.params;
    allData = allData.filter(item => item.id !== id)
    res.redirect('/home')
});





app.listen(port, (req, res) => {
    console.log(`server working on port ${port}`)
});