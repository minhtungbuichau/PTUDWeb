var db = require('../fn/db');
var config = require('../config/config');

exports.loadAll = () => {
    var sql = 'select * from categories ';
    return db.load(sql);
}


// exports.loadAllByCat = (catId) => {
//     var sql = `select * from products where CatID = ${catId}`;
//     return db.load(sql);
// }

exports.loadAllByCat = (catId, offset) => {
    var sql = `select * from products where CatID = ${catId} limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}

exports.countByCat = catId => {
	var sql = `select count(*) as total from products where CatID = ${catId}`;
    return db.load(sql);
}

exports.loadNameCat = (catId) => {
    var sql = `select CatName from categories where CatID = ${catId}`;
    return db.load(sql);
}



exports.single = proId => {
    var sql = `select * from products where ProID = ${proId}`;
    return db.load(sql);
}