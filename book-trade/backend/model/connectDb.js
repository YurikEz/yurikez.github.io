require('dotenv').config();

const Pool = require('pg').Pool;
const pool = new Pool({
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
  user: process.env.USERDB,
  password: process.env.PASSWORD,
});

module.exports = {
  pool,
};
