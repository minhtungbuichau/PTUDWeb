var db = require('../fn/db');
var config = require('../config/config');
exports.loadAll = () => {
    var sql = 'select * from products';
    return db.load(sql);
}

exports.loadbyName = proName=>{
    var sql = `select * from products where ProName like "%${proName}%" `;
    return db.load(sql);
}