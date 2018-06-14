var categoryRepo = require('../repos/cat_productRepo');
var producerRepo = require('../repos/pro_productRepo');

var db = require('../fn/db');
var config = require('../config/config');

module.exports = (req, res, next) => {


    producerRepo.loadAll().then(rows => {
        res.locals.layoutVM2 = {
            producers: rows,
         
        };

        // console.log(res.locals.layoutVM.curUser);

        
    });

    categoryRepo.loadNameCat(catId).then(rows => {
        res.locals.layoutVM3 = {
            CatName: rows,   
        };

        // console.log(res.locals.layoutVM.curUser);

        
    });

    categoryRepo.loadAll().then(rows => {
        res.locals.layoutVM = {
            categories: rows,
         
        };

        // console.log(res.locals.layoutVM.curUser);

        next();
    });


};


