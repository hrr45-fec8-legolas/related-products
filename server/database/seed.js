const faker = require('faker');
const db = require('./index.js');

async function seedDatabase() {
  await db.connection.sync();
  let cats = new Set();
  while (cats.size < 10) {
    const name = faker.random.word();
    cats.add(name);
  }
  cats = Array.from(cats);
  cats = cats.map((cat) => ({ name: cat }));
  // const categories = await db.Category.bulkCreate(cats, { ignoreDuplicates: true });
  const images = ['img1', 'img2', 'img3'];
  const imglen = images.length;
  const newProds = [];
  let i = 1;
  while (newProds.length < 100) {
    newProds.push({
      productId: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      prime: Math.floor(Math.random() * 2),
      imageUrl: i > imglen ? images[i % imglen] : images[i],
      numReviews: faker.random.number(),
      avgRating: (Math.floor(Math.random() * 11)) / 2,
    });
    i += 1;
  }
  const products = await db.Product.bulkCreate(newProds);
  // console.log(newProds);

  // Generate newProducts data
  // Use Products.bulkCreate(newProducts) to add all new products to db
};

seedDatabase();
