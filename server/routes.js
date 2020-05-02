const express = require('express');

const router = express.Router();

router.get('/related_products/:id', (req, res) => {
  res.send(req.params.id);
});

module.exports = router;
