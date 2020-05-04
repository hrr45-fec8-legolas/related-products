const faker = require('faker');
const models = require('../models');

async function seedDatabase() {

  // Generate categories
  const cats = new Set();
  while (cats.size < 10) {
    const name = faker.random.word();
    cats.add(name);
  }
  await cats.forEach(async (cat) => {
    await models.categories.addNew(cat);
  });

  // Generate newProducts data
  const images = ['img1', 'img2', 'img3'];
  const imglen = images.length;
  const newProds = [];
  let i = 1;
  while (newProds.length < 100) {
    // create array for each product
    // [productId, name, price, prime, imageUrl, numReviews, avgRating]
    newProds.push([i,
      faker.commerce.productName(),
      faker.commerce.price(),
      Math.floor(Math.random() * 2),
      i > imglen ? images[i % imglen] : images[i],
      faker.random.number(),
      (Math.floor((Math.random() * 6) + 5)) / 2,
    ]);
    i += 1;
  }
  await newProds.forEach(async (product) => {
    await models.products.addNew(product);
  });

  // // Create associations between products/categories
  // for (let j = 1; j < 101; j += 1) {
  //   const prodCats = new Set();
  //   const associations = [];
  //   while (prodCats.size < 2) {
  //     prodCats.add(Math.ceil(Math.random() * 10));
  //   }
  //   prodCats.forEach((categoryId) => {
  //     associations.push({ productId: j, categoryId });
  //   });
  //   db.ProductCategory.bulkCreate(associations);
  // }
}

seedDatabase();
