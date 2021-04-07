require('dotenv').config();
const { pool } = require('./connectDb');
const NodeRSA = require('node-rsa');

const key = new NodeRSA({b: 512});

function encrypt(text) {
  return key.encrypt(text, 'base64', 'utf8');
}

function decrypt(text) {
  return key.decrypt(text, 'utf8');
}


const getUsers = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error);
      }

      resolve(results.rows.map(item => {
        return {
          ...item,
          login: decrypt(item.login),
          password: decrypt(item.password),
        };
      }));
    });
  });
};

const checkingAuth = (body) => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error);
      }

      const users = results.rows.map(item => {
        return {
          ...item,
          login: decrypt(item.login),
          password: decrypt(item.password),
        };
      });

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

const createUser = (body) => {
  return new Promise(function (resolve, reject) {
    const { login, password, access } = body;

    pool.query('INSERT INTO users (login, password, access) VALUES ($1, $2, $3) RETURNING *', [encrypt(login), encrypt(password), parseInt(access)], (error, results) => {
      if (error) {
        reject(error);
      }

      resolve(results.rows.map(item => {
        return {
          ...item,
          login: decrypt(item.login),
          password: decrypt(item.password),
        };
      }));
    });
  });
};
const updateUser = (body) => {
  return new Promise(function (resolve, reject) {
    const { login, password, access, id } = body;
    pool.query('UPDATE users SET login = $2, password = $3, access = $4 WHERE id = $1 RETURNING *', [id, encrypt(login), encrypt(password), parseInt(access)], (error, results) => {
      if (error) {
        reject(error);
      }

      resolve(results.rows.map(item => {
        return {
          ...item,
          login: decrypt(item.login),
          password: decrypt(item.password),
        };
      }));
    });
  });
};
const deleteUser = (body) => {
  return new Promise(function (resolve, reject) {
    const { id } = body;
    pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

module.exports = {
  getUsers,
  checkingAuth,
  createUser,
  updateUser,
  deleteUser,
};
