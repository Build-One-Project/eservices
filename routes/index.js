var express = require('express');
var router = express.Router();
var nigeria_states_lga = require("../public/javascripts/nigeria.json")

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { title: 'EServices', books: ["Baba", "Mama", "Papa"], data: nigeria_states_lga })
});

/* GET contact page. */

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

/* GET together page */
router.get('/together', function(req, res, next) {
  res.render('together');
});

module.exports = router;
