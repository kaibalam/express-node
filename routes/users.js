var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res) {
  console.log(`Headers sent? ${res.headersSent}`); //false
  res.send(`The id entered is : ${req.params.id}`);
  console.log(`Headers sent? ${res.headersSent}`); //true
});


module.exports = router;
