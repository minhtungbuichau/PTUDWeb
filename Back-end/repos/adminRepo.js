var db = require('../fn/db');
var config = require('../config/config');

exports.loadByCatAdmin = catId => {
    var sql = `select products.ProID, products.ProName, products.Sales ,products.Price from products
                where products.CatID = ${catId}`;
    return db.load(sql);
}

exports.loadAllByCatAdmin = catId => {
    var sql = `select products.ProID, products.ProName, products.Sales ,products.Price from products`;
    return db.load(sql);
}

exports.loadByProduAdmin = produId => {
    var sql = `select products.ProID, products.ProName, products.Sales ,products.Price from products
                where products.ProduID = ${produId}`;
    return db.load(sql);
}

exports.loadAllByProduAdmin = produId => {
    var sql = `select products.ProID, products.ProName, products.Sales ,products.Price from products`;
    return db.load(sql);
}