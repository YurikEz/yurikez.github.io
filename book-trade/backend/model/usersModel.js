require('dotenv').config();
const { pool } = require('./connectDb');
// const NodeRSA = require('node-rsa');
// const key = new NodeRSA(process.env.RSAKEY);

// function encrypt(text) {
//   return key.encrypt(text, 'base64', 'utf8');
// }
//
// function decrypt(text) {
//   return key.decrypt(text, 'utf8');
// }

const checkingAuth = (body) => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error);
      }

      const users = results.rows;

      const foundUser = users.find(({ login }) => login === body.login);

      if (foundUser) {
        const isAuth = foundUser.password === body.password;

        if (isAuth) {
          resolve({ data: foundUser, message: 'Password correct' });
        } else {
          reject({ data: {}, message: 'Password is not correct' });
        }
      } else {
        reject({ data: {}, message: 'Not found user' });
      }
    });
  });
};

const getCurrentUser = (body) => {
  let user = {};

  return new Promise(function (resolve, reject) {
    pool.query(`SELECT * FROM users WHERE id=${body.id} ORDER BY id ASC`, (error, results) => {
      if (error) {
        reject(error);
      }
      user = results.rows.map(({
        avatar,
        booking,
        books,
        email,
        id,
        last_name,
        login,
        name,
        password,
        patronymic,
        phone,
        roles,
        take_books,
      }) => {
        return {
          avatar,
          booking,
          books,
          email,
          id,
          lastName: last_name,
          login,
          name,
          password,
          patronymic,
          phone,
          roles,
          takeBooks: take_books,
        };
      });

      pool.query(`SELECT * FROM roles ORDER BY id ASC`, (error, roles) => {
        if (error) {
          reject(error);
        }

        if (user[0].roles !== null ) {
          user[0].roles = user[0].roles.map(roleId => roles.rows.find(({ id }) => id === roleId).name);
        } else {
          user[0].roles = [];
        }

        resolve(user);
      });
    });
  });
};

const createUser = (body) => {
  return new Promise(function (resolve, reject) {
    const { login, password } = body;

    pool.query('INSERT INTO users (login, password) VALUES ($1, $2) RETURNING *', [login, password], (error, results) => {
      if (error) {
        reject(error);
      }

      resolve(results.rows);
    });
  });
};

module.exports = {
  checkingAuth,
  getCurrentUser,
  createUser,
};
