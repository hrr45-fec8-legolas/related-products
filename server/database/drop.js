const db = require('./index.js');

async function clearDb() {
  await db.Feedback.drop();

  await db.ProductCategory.drop();

  await db.Category.drop();

  await db.Product.drop();
}

module.exports = clearDb;
