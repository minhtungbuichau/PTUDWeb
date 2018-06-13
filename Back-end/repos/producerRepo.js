var db = require('../fn/db');

exports.loadAll = () => {
    var sql = 'select * from producers';
    return db.load(sql);
}

