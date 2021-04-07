const { pool } = require('./connectDb');
const NodeRSA = require('node-rsa');

const key = new NodeRSA({b: 512});

function encrypt(text) {
  return key.encrypt(text, 'base64', 'utf8');
}

function decrypt(text) {
  return key.decrypt(text, 'utf8');
}

const getPosts = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM posts ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error);
      }

      resolve(results.rows);
    });
  });
};

const createPost = (body) => {
  return new Promise(function (resolve, reject) {
    const { title, description, author, created_date, access } = body;

    pool.query('INSERT INTO posts (title, description, author, created_date, access) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, description, parseInt(author), created_date, parseInt(access)], (error, results) => {
      if (error) {
        reject(error);
      }

      resolve(results.rows);
    });
  });
};

const updatePost = (body) => {
  return new Promise(function (resolve, reject) {
    const { title, description, author, updated_date, access, id } = body;
    pool.query('UPDATE posts SET title = $2, description = $3, author = $4, updated_date = $5, access = $6 WHERE id = $1 RETURNING *',
      [id, title, description, parseInt(author), updated_date, parseInt(access)], (error, results) => {
      if (error) {
        reject(error);
      }

      resolve(results.rows);
    });
  });
};
const deletePost = (body) => {
  return new Promise(function (resolve, reject) {
    const { id } = body;
    pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};