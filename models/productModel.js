var db = require('./database');
var data = [];

exports.list = function (callback) {
    let sql = `SELECT *  FROM product`;
    db.query(sql, function (err, d) { callback(d); });
}

exports.listNew = function (callback) {
    let sql = `SELECT * FROM product ORDER BY import_date desc`;
    db.query(sql, function (err, d) { callback(d); });
}

exports.listView = function (callback) {
    let sql = `SELECT * FROM product ORDER BY view desc`;
    db.query(sql, function (err, d) { callback(d); });
}
exports.listHot = function (callback) {
    let sql = `SELECT * FROM product where hot=1 ORDER BY hot desc`;
    db.query(sql, function (err, d) { callback(d); });
}


exports.listViewLimit5 = function (callback) {
    let sql = `SELECT * FROM product ORDER BY view desc limit 3`;
    db.query(sql, function (err, d) { callback(d); });
}

exports.listItem = function (id, callback) {
    let qr = `UPDATE product set view = view+1 where product_id=${id}`;
    db.query(qr, function (err, d) { data = d; });
    let sql = `SELECT * FROM product, category where product_id =${id} and product.category_id=category.category_id`;
    db.query(sql, id, (err, d) => {
        data = d[0];
        callback(data);
    });
}
exports.search = function (key, callback) {
    let sql = `SELECT * FROM product where product_name like "%${key}%"`;
    console.log(sql)
    db.query(sql, key, (err, d) => {
        data = d;
        callback(data);
    });
}

exports.listLienQuan = function (id, callback) {
    let sql = `SELECT * FROM product where product_id =${id}`;
    db.query(sql, id, (err, d) => {
        let qr = `UPDATE product set view = view+1 where product_id=${id}`;
        db.query(qr, function (err, d) { data = d; });
        data = d[0];
        callback(data);
    });
}
exports.listItemCate = function (id, callback) {
    let sql = `SELECT * FROM product, category where product.category_id=category.category_id AND category.category_id=${id}`;
    // let sql = `SELECT * FROM product where category_id =${id}`;
    db.query(sql, id, (err, d) => {
        data = d;
        callback(data);
    });
}

exports.upView = function (id, callback) {
    let sql = `UPDATE product set view = view+1 where product_id=${id}`;
    db.query(sql, [id], (err, d) => {
        if (err) throw err;
        callback();
    });
}
