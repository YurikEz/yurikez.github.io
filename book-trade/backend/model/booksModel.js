require('dotenv').config();
const { pool } = require('./connectDb');

const getBooks = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM books ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error);
      }

      resolve(results.rows.map(({ author, booked, id, image_alt, image_path, name, tags, taken, user_id }) => {
        return {
          author,
          booked,
          id,
          image: {
            path: image_path,
            alt: image_alt,
          },
          name,
          tags,
          taken,
          userId: user_id,
        };
      }));
    });
  });
};

const createBook = (body) => {
  let books = [];
  return new Promise(function (resolve, reject) {
    const { name, author, tags, user_id } = body;

    pool.query('INSERT INTO books (name, author, tags, user_id) VALUES ($1, $2, $3, $4) RETURNING *', [name, author, tags, user_id], (error, booksResult) => {
      if (error) {
        reject(error);
      }

      pool.query(`SELECT * FROM users WHERE id=${user_id} ORDER BY id ASC`, (error, users) => {
        if (error) {
          reject(error);
        }

        if (users.rows[0].books === null) {
          books = [];
        } else {
          books = users.rows[0].books;
        }

        books.push(booksResult.rows[0].id);

        pool.query('UPDATE users SET books = $2 WHERE id = $1 RETURNING *',
          [user_id, books], (error, results) => {
            if (error) {
              reject(error);
            }

            resolve(results.rows);
          });
      });
    });
  });
};

const updateBook = (body) => {
  return new Promise(function (resolve, reject) {
    const { name, author, tags, user_id, id } = body;
    pool.query('UPDATE books SET name = $2, author = $3, tags = $4, user_id = $5 WHERE id = $1 RETURNING *',
      [id, name, author, tags, user_id], (error, results) => {
        if (error) {
          reject(error);
        }

        resolve(results.rows);
      });
  });
};

const deleteBook = (body) => {
  let books = [];
  let booking = [];
  let takeBooks = [];
  return new Promise(function (resolve, reject) {
    const { id, user_id } = body;
    pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id], (error) => {
      if (error) {
        reject(error);
      }

      pool.query(`SELECT * FROM users WHERE id=${user_id} ORDER BY id ASC`, (error, users) => {
        if (error) {
          reject(error);
        }

        books = users.rows[0].books.filter(item => item !== id);
        booking = users.rows[0].booking.filter(item => item !== id);
        takeBooks = users.rows[0].take_books.filter(item => item !== id);

        pool.query('UPDATE users SET books = $2, booking = $3, take_books = $4 WHERE id = $1 RETURNING *',
          [user_id, books, booking, takeBooks], (error, results) => {
            if (error) {
              reject(error);
            }

            resolve(results.rows);
          });
      });
    });
  });
};

const booking = (body) => {
  let booking = [];
  return new Promise(function (resolve, reject) {
    const { id, user_id } = body;
    pool.query('UPDATE books SET booked = $2 WHERE id = $1 RETURNING *',
      [id, true], (error) => {
        if (error) {
          reject(error);
        }

        pool.query(`SELECT * FROM users WHERE id=${user_id} ORDER BY id ASC`, (error, users) => {
          if (error) {
            reject(error);
          }

          if (users.rows[0].booking === null) {
            booking = [];
          } else {
            booking = users.rows[0].booking;
          }

          booking.push(id);

          pool.query('UPDATE users SET booking = $2 WHERE id = $1 RETURNING *',
            [user_id, booking], (error, results) => {
              if (error) {
                reject(error);
              }

              resolve(results.rows);
            });
        });
      });
  });
};

module.exports = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  booking,
};
