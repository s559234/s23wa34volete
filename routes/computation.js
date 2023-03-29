var express = require('express');
var router = express.Router();
var x,y;
/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x == undefined){
        x=Math.random()*10;
        y=Math.random()*10;
        let hypval = Math.hypot(x);
        let ceilval =Math.ceil(y);
        let clzval= Math.clz32(y);
        res.send('Math.hypot() applied for ' +x +' is ' +hypval+'\nMath.ceil() applied for ' +y +' is ' +ceilval+'\n Math.clz32() applied for number ' +y+' is '+clzval);
    }
    else{
        x =req.query.x;
        let hypval = Math.hypot(x);
        let ceilval =Math.ceil(y);
        let clzval= Math.clz32(y);
        res.send('Math.hypot() applied for ' + x +' is ' +hypval+'\nMath.ceil() applied for ' + y +' is ' +ceilval+'\n Math.clz32() applied for number ' +y+' is '+clzval);
    }
});

module.exports = router;