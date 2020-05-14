const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3003;

app.use(express.static(path.join(__dirname, '/../public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
