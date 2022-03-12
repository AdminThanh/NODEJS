var express = require('express');
var router = express.Router();
var db = require('./../models/database');
var productModel = require('./../models/productModel');

// GET ALL
router.get('/list', (req, res) => {
  productModel.list(function (productList) { res.json(productList) });
});

// GET ID PRODUCT
router.get('/list/:id', (req, res) => {
  let id = req.params.id;
  productModel.listItem(id, function (u) {
    res.json(u);
  });
});

router.get('/search/:key', (req, res) => {
  let key = req.params.key;
  console.log("key"+key)
  productModel.search(key, function (u) {
    res.json(u);
  });
});

router.get('/listLienQuan/:id', (req, res) => {
  let id = req.params.id;
  productModel.listLienQuan(id, function (u) {
    res.json(u);
  });
});

// GET ID PRODUCT
router.get('/listCate/:id', (req, res) => {
  let id = req.params.id;
  productModel.listItemCate(id, function (u) {
    res.json(u);
  });
});


// GET PRODUCT NEW
router.get('/listNew', (req, res) => {
  productModel.listNew(function (productList) {
    res.json(productList)
  });
});

// GET PRODUCT VIEWS TOP
router.get('/listView', (req, res) => {
  productModel.listView(function (productList) {
    res.json(productList)
  });
});
// GET PRODUCT HOT
router.get('/listHot', (req, res) => {
  productModel.listHot(function (productList) {
    res.json(productList)
  });
});


// GET PRODUCT VIEWS TOP 5
router.get('/listViewLimit5', (req, res) => {
  productModel.listViewLimit5(function (productList) { res.json(productList) });
});

// UP VIEW
router.put('upView/:id', (req, res) => {
  let id = req.params.id;
  modelUsers.upView(id, function () {
    // res.json({thongbao: 'Đã cập nhật view '});
  })
});

module.exports = router;