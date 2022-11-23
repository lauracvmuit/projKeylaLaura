var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tarce', { title: 'Aplicación de Laura y Keyla' });
});

module.exports = router;



