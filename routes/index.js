var express = require('express');
var router = express.Router();
var db = require('../models/database');
var categoryModel = require('../models/categoryModel');
var productModel = require('./../models/productModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('./site/home');
});

/* GET product detail. */
router.get('/sanpham/:id', function (req, res, next) {
  res.render('./site/product-detail');
});
router.get('/danhmuc/:id', function (req, res, next) {
  res.render('./site/danhmuc');
});

router.get('/danhsach', function (req, res, next) {
  res.render('./site/danhmuc');
});
router.get('/search', function (req, res, next) {
  res.render('./site/search');
});





module.exports = router;
