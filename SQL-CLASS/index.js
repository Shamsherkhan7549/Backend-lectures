const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')

const app = express();

const port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
//connection with server
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'fakerDB',
  password:'Shamsher@mysql'
});


const users = [];

//faker data
let  getRandomUser = () =>{
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password()
  ];
}


 //express
 app.get('/', (req, res) => {
  q = "SELECT COUNT(*) FROM user";

    try{
            connection.query(q, (err, result) => {
                if(err) throw err;
                let count = result[0]['COUNT(*)'];
                console.log(count)
                res.render('home.ejs', {count})
            })
      }catch(err){
        console.log(err)
        res.send("some error found in databse!")
      }
  });

  app.get('/users', (req, res) => {
    q = "SELECT * FROM user";
  
      try{
              connection.query(q, (err, result) => {
                  if(err) throw err;
                  const users = result
                  res.render('allDatas.ejs', {users});
              })
        }catch(err){
          console.log(err)
          res.send("some error found in databse!")
        }
    });

    app.get('/users/newUser', (req, res) => {
      res.render('newUser.ejs');
    });

    app.post('/users', (req, res) => {
      const id = uuidv4();
      const {username, email, password} = req.body;
      // const data = [id, username, email, password];

      const q = `INSERT INTO user (id, username, email, password) VALUES ('${id}', '${username}', '${email}', '${password}')`;
      try{
        connection.query(q, (err, result)=> {
          if(err) throw err;
          res.redirect('/users');
        });
      }catch(err){
        console.log(err);
        res.send("some error found in database!");

      };
      
    });

    app.get('/users/:id/edit', (req, res)=> {
      const id = [req.params.id];        
      const q = `SELECT * FROM user WHERE id = ?`;
      try{
        connection.query(q, id, (err, result) =>{
          if(err) throw err;
          const data = result[0];
          res.render('edit.ejs',{data})
        });
      }catch(err){
        console.log(err)
        res.send("some error found in databases");1
      }

      
    });

    app.patch('/users/:id/edit', (req, res) =>{
      const {id} = req.params;
      const {username,password} = req.body;

      const q = `SELECT * FROM user WHERE id = '${id}'`;
      try{

        connection.query(q, (err, result) => {
          if(err) throw err;
            const data = result[0];
          if(data.password === password){
            const q2 = `UPDATE user SET username= '${username}'  WHERE id = '${id}'`;
            connection.query(q2, (err, result) => {
              if(err) throw err;
              console.log(result)
              res.redirect('/users');
            }); 
          }else{
            res.send('you have entered wrong password');

          }
         
        });

      }catch(err){
        console.log(err)
        res.send("some error found in db");
      }
    });

    app.delete('/users/:id/delete', (req, res) => {
        const id = [req.params.id];

        const q = `DELETE FROM user WHERE id = ?`;
        try{
          connection.query(q, id, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.redirect('/users')
        })
        }catch(err){
          console.log(err);
          res.send("some error found in delete")

        }
    });


    app.get('/search', (req, res) => {
      const{username} = req.query
    
      const q = `SELECT * FROM user WHERE username = '${username}'`;

      try{
        connection.query(q, (err, result) =>{
          if(err) throw err;

          if(result.length>0){
            const data = result[0];
            res.render('search.ejs', {data});
           
          }else{
            res.send('user not available');
            
          }
         
        });

      }catch(err){
        console.log(err);
        res.send("some error found in database");
      }
     
    })

    




 app.listen(port , (req, res) => {
  console.log(`server running on port: ${port}`)
});


  