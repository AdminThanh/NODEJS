var db = require('./database');

exports.list = function (callback) {
    let sql = `SELECT *  FROM category`;
    db.query(sql, function (err, d) { callback(d); });
}
exports.listItemCate = function (id, callback) {
    let sql = `SELECT category_name FROM category WHERE category_id=${id}`;
    db.query(sql, id, (err, d) => {
        data = d;
        callback(data);
    })
};