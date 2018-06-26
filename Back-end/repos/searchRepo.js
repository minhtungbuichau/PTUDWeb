var db = require('../fn/db');
var config = require('../config/config');
exports.loadAll = (offset) => {
    var sql =`select products.*, producers.ProduName from products, producers where products.ProduID = producers.ProduID limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}
exports.countAll = ()=>{
    var sql = `select count(*) as total from products `;
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

//load by catname
exports.loadbyCatName = (catName,offset)=>{
    var sql = `select products.*, categories.CatName ,producers.ProduName from products , categories,producers where producers.ProduID = products.ProduID AND products.CatID = categories.CatID AND categories.CatName like "%${catName}%" limit ${config.PRODUCTS_PER_PAGE} offset ${offset} `;
    return db.load(sql);
}

exports.countByCatName = catName => {
	var sql = `select count(products.ProID) as total from products, categories where products.CatID = categories.CatID AND CatName like "%${catName}%"`;
    return db.load(sql);
}
//Produname
exports.loadbyProduName = (ProduName,offset)=>{
    var sql = `select products.*, producers.ProduName from products , producers where products.ProduID = producers.ProduID AND producers.ProduName like "%${ProduName}%"  limit ${config.PRODUCTS_PER_PAGE} offset ${offset} `;
    return db.load(sql);
}

exports.countByProduName= ProduName => {
	var sql = `select count(products.ProID) as total from products, producers where products.ProduID = producers.ProduID AND ProduName like "%${ProduName}%"`;
    return db.load(sql);
}
