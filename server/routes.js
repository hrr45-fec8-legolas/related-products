const express = require('express');
const models = require('./models');

const router = express.Router();

router.get('/related_products/:id', (req, res) => {
  console.log('The get request made it here!', req.params.id);
  models.products.getRelated(req.params.id, (err, results) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(results);
  });
});

module.exports = router;
