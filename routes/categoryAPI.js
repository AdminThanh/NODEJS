var express = require('express');
var router = express.Router();
var db = require('../models/database');
var categoryModel = require('../models/categoryModel');

// GET ALL
router.get('/list', (req, res) => {
  categoryModel.list(function (productList) { res.json(productList) });
});

router.get('/listCateName/:id', (req, res) => {
  let id = req.params.id;    
  console.log(id)
  categoryModel.listItemCate(id, function(u){
    res.json(u);
  });
});

 
module.exports = router;