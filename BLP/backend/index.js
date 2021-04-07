const express = require('express');
const app = express();
const port = 3001;
const {
  usersModel,
  postsModel,
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

app.get('/users', (req, response) => {
  usersModel.getUsers()
    .then(data => response.status(200).send(data))
    .catch(error => response.status(500).send(error));
});

app.post('/users', (req, response) => {
  usersModel.createUser(req.query)
    .then(data => response.status(200).send(data))
    .catch(error => response.status(500).send(error));
});

app.put('/users', (req, response) => {
  usersModel.updateUser(req.body)
    .then(data => response.status(200).send(data))
    .catch(error => response.status(500).send(error));
});

app.post('/delete-user', (req, response) => {
  usersModel.deleteUser(req.body)
    .then(data => response.status(200).send(data))
    .catch(error => response.status(500).send(error));
});

app.get('/posts', (req, response) => {
  postsModel.getPosts()
    .then(data => response.status(200).send(data))
    .catch(error => response.status(500).send(error));
});

app.post('/posts', (req, response) => {
  postsModel.createPost(req.body)
    .then(data => response.status(200).send(data))
    .catch(error => response.status(500).send(error));
});

app.put('/posts', (req, response) => {
  postsModel.updatePost(req.body)
    .then(data => response.status(200).send(data))
    .catch(error => response.status(500).send(error));
});

app.post('/delete-post', (req, response) => {
  postsModel.deletePost(req.body)
    .then(data => response.status(200).send(data))
    .catch(error => response.status(500).send(error));
});

app.listen(port, () => {
  console.log(`I listening port: ${port}`);
});