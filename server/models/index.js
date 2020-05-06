const db = require('../database');

module.exports = {
  products: {
    getRelated(productId, callback) {
      const sql = 'SELECT p.*, c.name AS category_name FROM products AS p INNER JOIN productCategories AS pcj ON pcj.id_products = p.id INNER JOIN categories AS c ON pcj.id_categories = c.id WHERE pcj.id_categories IN (SELECT pcj.id_categories FROM productCategories AS pcj INNER JOIN products AS p ON p.id = pcj.id_products WHERE p.productId = ?) ORDER BY avgRating DESC, numReviews DESC LIMIT 20';
      db.query(sql, productId, (err, results) => {
        callback(err, results);
      });

    },
    addNew(params, callback = () => {}) {
      const sql = 'INSERT INTO products (productId, name, price, prime, imageUrl, numReviews, avgRating) VALUES (?, ?, ?, ?, ?, ?, ?)';
      db.query(sql, params, (err, results) => {
        callback(err, results);
      });
    },
  },

  categories: {
    getAll(callback) {
      const sql = 'SELECT id FROM categories ORDER BY id ASC';
      db.query(sql, (err, results) => {
        callback(err, results);
      });
    },
    addNew(category, callback = () => {}) {
      const sql = 'INSERT INTO categories (name) VALUES (?)';

      db.query(sql, category, (err, results) => {
        callback(err, results);
      });
    },
  },

  productCategories: {
    addNew(params, callback = () => {}) {
      const sql = 'INSERT INTO productCategories (id_products, id_categories) VALUES (?, ?)';
      db.query(sql, params, (err, results) => {
        callback(err, results);
      });
    },
  },
};
