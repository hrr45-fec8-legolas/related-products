const db = require('../database');

module.exports = {
  products: {
    getRelated(id, callback) {
      return db.Product.findAll()
        .then((products) => {
          callback(null, products);
        })
        .catch((err) => {
          callback(err);
        });
    },
    addNew(product) {
      return db.Product.create(product)
        .catch((error) => error);
    },
  },

  categories: {
    getAll() {
      return db.Category.findAll();
    },
    addNew(category, callback = () => {}) {
      const sql = 'INSERT INTO categories (name) VALUES (?)';

      db.query(sql, category, (err, results) => {
        if (err) {
          callback(err);
        }
        callback(null, results);
      })
    },
  },
};
