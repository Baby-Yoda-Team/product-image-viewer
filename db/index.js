var mongoose = require('mongoose');
const config = require('./config.js');


var db = mongoose.connect(config.uri, config.options).then(
  () => { console.log('connected to costco database...') },
  err => { console.log(err) }
);



module.exports = {
  connect

  retrieve: (query, callback) => {
    Product.findOne(query)
      .then((results) => { callback(results) });
  }
}


