const express = require('express');
const app = express();
const port = 3004;
const originUrl = '*';
const path = require('path');
const db = require('../db/index.js');
const bodyParser = require('body-parser');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", originUrl);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/product', (req, res) => {
  if (!req.query.item_number) {
    var query = { item_number: '1' }
  } else {
    var query = req.query;
  }
  db.retrieve(query, (results) => res.send(results));
})

app.listen(port, () => console.log(`listening on port ${port}!`));