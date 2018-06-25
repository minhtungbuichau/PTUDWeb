var db = require('../fn/db');
var config = require('../config/config');
exports.loadAll = () => {
    var sql = 'select * from products';
    return db.load(sql);
}

exports.loadbyName = (proName,offset)=>{
    var sql = `select * from products where ProName like "%${proName}%" limit ${config.PRODUCTS_PER_PAGE} offset ${offset} `;
    return db.load(sql);
}

exports.countByPro = proName => {
	var sql = `select count(*) as total from products where ProName like "%${proName}%"`;
    return db.load(sql);
}

