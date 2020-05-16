const mysql = require('mysql');

const db = mysql.createPool({
  connectionLimit: 10,
  host: $DB_HOST || process.env.DB_HOST || 'localhost',
  user: $DB_USER || process.env.DB_USER || 'root',
  password: $DB_PASS || process.env.DB_PASS || '',
  database: $DB_NAME || process.env.DB_NAME || 'fec8_related_products',
});

module.exports = db;
