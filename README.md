# Backend Development Guide

## Table of Contents
 Introduction to Node.js

Middleware in Express.js

Templating with EJS

RESTful APIs

Express Router

Error Handling in Express

HTTP Methods: GET, POST, PUT, DELETE, PATCH

Cookies in Web Development

Introduction to MongoDB

Relationships in MongoDB and SQL

Redux and Redux-Class

Miscellaneous Tips

## 1. Introduction to Node.js

Node.js is a runtime environment that allows developers to execute JavaScript code on the server side. Built on the V8 JavaScript engine, it is lightweight, efficient, and designed for scalable network applications.

Key Features:

Asynchronous and Event-Driven

Single-Threaded but Scalable

Rich Package Ecosystem via npm

## 2. Middleware in Express.js

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

Example:

  const express = require('express');
  const app = express();
  
  app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
  });

### Types of Middleware:

Application-level middleware

Router-level middleware

Error-handling middleware

Built-in middleware

Third-party middleware

## 3. Templating with EJS

EJS (Embedded JavaScript) is a templating engine that allows you to generate HTML with dynamic data.

Example:

<h1>Welcome, <%= user.name %></h1>

Usage in Express:

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', { user: { name: 'John' } });
});

## 4. RESTful APIs

RESTful APIs adhere to Representational State Transfer principles and use standard HTTP methods.

Key Components:

Resources (identified by URIs)

HTTP Methods: GET, POST, PUT, DELETE

Stateless communication

Example:

app.get('/users', (req, res) => {
  res.json(users);
});

## 5. Express Router

Express Router helps organize routes in modular and manageable pieces.

Example:

const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.send('User List');
});

module.exports = router;

Usage:

const userRouter = require('./routes/user');
app.use('/api', userRouter);

## 6. Error Handling in Express

Error-handling middleware is used to catch and process errors in the application.

Example:

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

## 7. HTTP Methods: GET, POST, PUT, DELETE, PATCH

Each HTTP method serves a specific purpose in RESTful APIs.

Summary:

GET: Retrieve data

POST: Create data

PUT: Update data completely

PATCH: Update data partially

DELETE: Remove data

Example:

app.get('/item', (req, res) => res.send('Get Item'));
app.post('/item', (req, res) => res.send('Create Item'));

## 8. Cookies in Web Development

Cookies store small pieces of data on the client side.

Example:

res.cookie('token', '123456', { httpOnly: true });

## 9. Introduction to MongoDB

MongoDB is a NoSQL database that uses a document-oriented approach.

 ### Key Features:

Schema-less

High scalability

JSON-like documents

Example:

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

## 10. Relationships in MongoDB and SQL

 ### MongoDB:

Embedded Documents for one-to-one or one-to-many relationships.

References using ObjectIDs.

### SQL:

One-to-One using FOREIGN KEY.

One-to-Many using join tables.

## 12. Miscellaneous Tips

Use environment variables to manage sensitive information.

Always validate and sanitize user input to prevent SQL Injection and XSS attacks.

Use async/await for cleaner asynchronous code.

