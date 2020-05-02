const db = require('../database');

module.exports = {
  products: {
    async getRelated(id, callback) {
      try {
        const currentProduct = await db.Product.findOne({
          where: { productId: id },
        });
        const categories = await currentProduct.getCategories();
        let relatedProducts = [];
        categories.forEach(async (category) => {
          // relatedProducts.push(category.dataValues.id);
          const products = await category.getProducts();
          // console.log(products);
          relatedProducts = relatedProducts.concat(products);
        });
        callback(null, relatedProducts);
      } catch (err) {
        callback(err);
      }
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
