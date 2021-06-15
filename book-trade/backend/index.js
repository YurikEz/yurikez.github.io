const express = require('express');
const app = express();
const port = 3001;
const {
  usersModel,
  booksModel,
} = require('./model');

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.post('/auth', (req, response) => {
  usersModel.checkingAuth(req.body)
    .then(data => response.status(200).send(data))
    .catch(error => response.status(500).send(error));
});

app.get('/currentUser', (req, response) => {
  usersModel.getCurrentUser(req.query)
    .then(data => response.status(200).send(data))
    .catch(error => response.status(500).send(error));
});

app.post('/users', (req, response) => {
  usersModel.createUser(req.body)
    .then(data => response.status(200).send(data))
    .catch(error => response.status(500).send(error));
});

app.get('/books', (req, response) => {
  booksModel.getBooks()
    .then(data => response.status(200).send(data))
    .catch(error => response.status(500).send(error));
});

app.post('/books', (req, response) => {
  booksModel.createBook(req.body)
    .then(data => response.status(200).send(data))
    .catch(error => response.status(500).send(error));
});

app.put('/books', (req, response) => {
  booksModel.updateBook(req.body)
    .then(data => response.status(200).send(data))
    .catch(error => response.status(500).send(error));
});

app.post('/delete-book', (req, response) => {
  booksModel.deleteBook(req.body)
    .then(data => response.status(200).send(data))
    .catch(error => response.status(500).send(error));
});

app.post('/booking', (req, response) => {
  booksModel.booking(req.body)
    .then(data => response.status(200).send(data))
    .catch(error => response.status(500).send(error));
});

app.listen(port, () => {
  console.log(`I listening port: ${port}`);
});