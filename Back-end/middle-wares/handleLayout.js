var categoryRepo = require('../repos/categoryRepo');
var producerRepo=require('../repos/producerRepo');
var productRepo=require('../repos/productRepo');

module.exports = (req, res, next) => {

    productRepo.loadAll().then(rows => {
        res.locals.layoutVM1 = {
            products: rows,
         
        };

        // console.log(res.locals.layoutVM.curUser);

        
    });

    producerRepo.loadAll().then(rows => {
        res.locals.layoutVM2 = {
            producers: rows,
         
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


