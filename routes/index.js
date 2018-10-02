var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/reports', function(req, res, next) {
  res.render('reports', {page:'Reports', menuId:'reports'});
});

router.get('/statistics', function(req, res, next) {
  res.render('statistics', {page:'Statistics', menuId:'Available Statistics'});
});

module.exports = router;
