var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'EServices' });
});

/* GET contact page. */

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

/* GET together page. */
router.get('/', function(req, res, next) {
  res.render('together');
});

/* GET search page. */
router.get('/', function(req, res, next) {
  res.render('search');
});

module.exports = router;
