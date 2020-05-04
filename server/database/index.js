const mysql = require('mysql');

const db = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  database: 'fec8_related_products',
});

module.exports = db;
