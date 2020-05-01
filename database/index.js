const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize('fec8_related_products', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
  },
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });

const Product = db.define('Product', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL(7, 2),
  prime: DataTypes.BOOLEAN,
  image_url: DataTypes.STRING,
  num_reviews: DataTypes.INTEGER,
  avg_rating: DataTypes.FLOAT,
});

Product.sync();

module.exports = {
  products: {
    getRelated(id, callback) {
      return Product.findAll()
        .then((err, products) => {
          callback(err, products);
        });
    },
  },
};
