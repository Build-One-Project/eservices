var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'EServices' });
});

/* GET together page. */
router.get('/', function(req, res, next) {
  res.render('together');
});

module.exports = router;
