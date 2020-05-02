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
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id',
    },
  },
});

const Feedback = db.define('feedback', {
  type: DataTypes.ENUM('unrelated', 'inappropriate', 'other'),
  comment: DataTypes.STRING(),
}, {
  freezeTableName: true,
});

// Associations ===================================================
// Many to many between products and categories
Product.belongsToMany(Category, { through: ProductCategory });
Category.belongsToMany(Product, { through: ProductCategory });

// One to many relationship between feedback and ProdCat associations
ProductCategory.hasMany(Feedback);
Feedback.belongsTo(ProductCategory);

module.exports = {
  connection: db,
  Product,
  Category,
  ProductCategory,
  Feedback,
};
