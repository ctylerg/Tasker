var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tasker' });
});

router.get('/backbone', function(req, res, next) {
  res.render('backbone', { title: 'Tasker', library: 'Backbone' });
});

router.get('/angular', function(req, res, next) {
  res.render('angular', { title: 'Tasker', library: 'Angular' });
});

module.exports = router;
