const { createPool } = require("mysql");

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  multipleStatements: true,
});



module.exports = pool;
