var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EServices' });
});

/* GET contact page. */

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

/* GET location page. */
router.get('/', function(req, res, next) {
  res.render('location');
});

module.exports = router;
