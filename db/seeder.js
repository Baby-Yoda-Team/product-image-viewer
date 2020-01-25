var faker = require('faker');
var mongoose = require('mongoose');
const config = require('./config.js');


var db = mongoose.connect(config.uri, config.options).then(
  () => { console.log('connected to costco database...') },
  err => { console.log(err) }
);

var randBetween = (num1, num2) => Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
var products = [];

for (var i = 0; i < config.dbSize; i++) {
  var product = new config.Product;
  product.name = faker.commerce.productName();
  product.item_number = i;
  var num = randBetween(5, 10);
  for (var x = 0; x < num; x++) {
    var photoId = randBetween(1, 1000);
    product.images.push(`https://picsum.photos/id/${photoId}`);
  }
  for (var x = 0; x < 5; x++) {
    var feature = { title: faker.lorem.words(), description: faker.lorem.sentences() };
    product.features.push(feature);
  }
  products.push(product);
}

config.Product.insertMany(products)
  .then(() => {
    mongoose.disconnect();
  })
  .then(() => console.log('database seeded!'))
  .catch((err) => {
    console.log('unable to seed database: ', err);
    mongoose.disconnect();
  });


