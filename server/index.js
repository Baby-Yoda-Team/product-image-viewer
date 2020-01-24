const express = require('express');
const app = express();
const port = 3004;
const path = require('path');
const db = require('../db/index.js');

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`listening on port ${port}!`));