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

<<<<<<< HEAD
exports.loadOrder = (offset)=>{
    var sql = `select products.*,orderdetails.*,users.* 
    from orderdetails,products,users 
    where products.ProID=orderdetails.ProID and  orderdetails.f_ID=users.f_ID
    limit 10 offset ${offset}`;
    return db.load(sql);
}

exports.countOrder = ()=>{
    var sql = `select count(*) as total from orderdetails`;
    return db.load(sql);
}


exports.updateOrder = (status,id)=>{
    var sql = `update orderdetails set Status='Đã giao hàng' where ID='${id}'`;
    console.log(sql);
=======
exports.loadByProducts = proId => {
    var sql = `select products.ProID, products.ProName, products.Quantity, products.Price from products where products.ProID = ${proId}`;
>>>>>>> 516c61e5f442e312561331aa71ddbfb50e25a2f5
    return db.load(sql);
}

