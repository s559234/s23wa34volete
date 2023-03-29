var express = require('express');
var router = express.Router();
var more=0;
var sum=0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  more = more+1;
  sum = more+sum;
  res.send('Sum is: '.concat(sum));
});

module.exports = router;
