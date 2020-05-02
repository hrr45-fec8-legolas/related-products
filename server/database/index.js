const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize('fec8_related_products', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
  },
});

const Product = db.define('product', {
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL(7, 2),
  prime: DataTypes.BOOLEAN,
  imageUrl: DataTypes.STRING,
  numReviews: DataTypes.INTEGER,
  avgRating: DataTypes.FLOAT,
});

const Category = db.define('category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});


const ProductCategory = db.define('productCategory', {

});

const Feedback = db.define('feedback', {
  type: DataTypes.ENUM('unrelated', 'inappropriate', 'other'),
  comment: DataTypes.STRING(),
}, {
  freezeTableName: true,
});

// Associations
Product.hasMany(ProductCategory);
Category.hasMany(ProductCategory);
ProductCategory.hasMany(Feedback);

// db.sync();

// Product.sync();
module.exports = {
  connection: db,
  Product,
  Category,
  ProductCategory,
  Feedback,
};
