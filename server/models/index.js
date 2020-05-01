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
      db.Product.create(product)
        .then((newProduct) => {
          return newProduct;
        })
        .catch((error) => error);
    },
  },
};
