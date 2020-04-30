const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3003;
// console.log(__dirname);
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port}`);
});