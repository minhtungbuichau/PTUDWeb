var db = require('../fn/db');
var config = require('../config/config');

exports.loadbyView = () => {
    var sql = `select * from products order by Views desc`;
    return db.load(sql);
}

exports.loadbySale = () => {
    var sql = `select * from products order by Sales desc`;
    return db.load(sql);
}

