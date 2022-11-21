var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tarce', { title: 'Asignatura TARCE base de datos' });
});

module.exports = router;
