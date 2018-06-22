var db = require('../fn/db');
var config = require('../config/config');

exports.loadAll = () => {
    var sql = 'select * from products';
    return db.load(sql);
}

exports.single = proId => {
    var sql = `select * from products where ProID = ${proId}`;
    return db.load(sql);
}

exports.loadSameProducer = proId => {
    var sql = `select produ.ProduName, pro2.ProID , pro2.CatID, pro2.ProName, cat.CatName from products pro1, products pro2, categories cat, producers produ where pro1.ProID = ${proId} AND produ.ProduID = pro2.ProduID AND pro2.ProID <> pro1.ProID AND pro2.CatID = pro1.CatID AND cat.CatID = pro2.CatID limit 5`;
    return db.load(sql);
}