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
    addNew(category) {
      return db.Category.create(category)
        .catch((error) => error);
    },
  },
};
