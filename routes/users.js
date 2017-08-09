var express = require('express');
var router = express.Router();
var pv = require('../model/pv');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("access users");
  pv.findAll({limit:10}).then(results =>{
      if(!results){
          return res.status(404).json({
          errorCode: 404,
          message: `公司信息不存在`
        });
      }
      
      console.log(JSON.stringify(results));
      return res.json(results); 
  });
});

module.exports = router;
