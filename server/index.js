const express = require('express');
const app = express();
const port = 3004;
const path = require('path');
const db = require('../db/index.js');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/product', (req, res) => {
  db.retrieve(req.query, (results) => res.send(results));
})

app.listen(port, () => console.log(`listening on port ${port}!`));