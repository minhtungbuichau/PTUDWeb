var db = require('../fn/db');
var config = require('../config/config');


exports.add = (pay, userId) => {
    var s="`insert into orderdetails(OrderID,Quantity, Price, Amount, ProID,f_ID) +values"  ;

    
    for (var i = pay.length - 1; i >= 1; i--) {
        var s1="('1','${pay[i].quantity}', '${pay[i].product.Price}', '${pay[i].amount}', '${pay[i].product.ProID}','${userId}'),";
        s=s+s1;
    }

    var s2="('1','${pay[0].quantity}', '${pay[0].product.Price}', '${pay[0].amount}', '${pay[0].product.ProID}','${userId}');";
    var sql=s+s2;
    return db.load(sql);
}


