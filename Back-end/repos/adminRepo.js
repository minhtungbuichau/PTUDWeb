var db = require('../fn/db');
var config = require('../config/config');

exports.login = user => {
    var sql = `select * from admin where f_Username = '${user.username}' and f_Password = '${user.password}'`;
    return db.load(sql);
}
exports.loadAllProducts = offset =>{
    var sql =`select * from products limit 10 offset ${offset}`;
    return db.load(sql);
}
exports.countAllProducts = ()=>{
    var sql = `select count(*) as total from products `;
    return db.load(sql);
}


exports.loadCat = (offset)=>{
    var sql = `select * from categories  limit 10 offset ${offset}`;
    return db.load(sql);
}
exports.countCat = ()=>{
    var sql = `select count(*) as total from categories`;
    return db.load(sql);
}
exports.loadProdu = (offset)=>{
    var sql = `select * from producers  limit 10 offset ${offset}`;
    return db.load(sql);
}

exports.countProdu = ()=>{
    var sql = `select count(*) as total from producers`;
    return db.load(sql);
}

exports.loadByProducts = proId => {
    var sql = `select products.ProID, products.ProName, products.Quantity, products.Price from products where products.ProID = ${proId}`;
    return db.load(sql);
}

