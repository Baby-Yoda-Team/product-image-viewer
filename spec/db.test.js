const db = require('../db/index.js');

test('retrieves data from database', done => {
  function callback(data) {
    try {
      expect(data.item_number).toBe(3);
      done();
    } catch (error) {
      done(error);
    }
  }
  db.retrieve({ item_number: 3 }, callback);
});
