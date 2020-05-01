const db = require('./index.js');
const models = require('../models');
const faker = require('faker');

const seedDatabase = async function () {
  // Sync all tables
  db.connection.sync();
  // Get array of image urls from S3
  let images = ['img1', 'img2'];

  // Generate 10 categories
  for (let i = 0; i < 10; i++) {
    const name = faker.random.word();
    models.categories.addNew({ name });
  }
  // Add categories to db
  // Get category id's as array

  // Generate newProducts data
  // Use Products.bulkCreate(newProducts) to add all new products to db
};

seedDatabase();
