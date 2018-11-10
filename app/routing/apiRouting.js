var friendData = require('../data/friends');

module.exports = function (app) {
  app.get('/api/friends', function (req, res, next) {
    res.json(friendData)
  })
  app.post('/api/friends', function (req, res, next) {
    console.log(req.body)
    res.json(friendData)
  })
  
};