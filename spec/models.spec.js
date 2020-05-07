const models = require('../server/models');
const db = require('../server/database');

afterAll(() => {
  db.end((err) => {
    // All connections in the pool have ended.
  });
});

describe('Products methods', () => {
  test('Results of getRelated should be defined', (done) => {
    models.products.getRelated(15, (err, results) => {
      if (err) done();
      expect(results).toBeDefined();
      done();
    });
  });

  test('Each element of results should be an object with specific properties', (done) => {
    models.products.getRelated(1, (err, results) => {
      if (err) done();
      expect(results[0]).toHaveProperty('productId');
      expect(results[0]).toHaveProperty('name');
      expect(results[0]).toHaveProperty('price');
      expect(results[0]).toHaveProperty('prime');
      expect(results[0]).toHaveProperty('imageUrl');
      expect(results[0]).toHaveProperty('numReviews');
      expect(results[0]).toHaveProperty('avgRating');
      done();
    });
  });

  test.todo('Should not load duplicate products');

  test.todo('Product should be in same category as current product');
});
