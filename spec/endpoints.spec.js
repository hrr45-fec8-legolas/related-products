const request = require('supertest');
const app = require('../server/app.js');

describe('Test the related_objects endpoint', () => {
  test('Should return json for get request to /?id=1', (done) => {
    request(app)
      .get('/api/related_products/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
  });

  test('Should not contain object id of 1 in results for request to /?id=1', (done) => {
    request(app)
      .get('/api/related_products/1')
      .expect((res) => {
        const productIds = res.body.map((obj) => obj.productId);
        if (productIds.includes(1)) throw new Error('Related products should not include the current product.');
      })
      .end(done);
  });
});
