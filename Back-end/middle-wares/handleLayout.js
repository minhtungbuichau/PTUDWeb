var categoryRepo = require('../repos/categoryRepo');
var producerRepo=require('../repos/producerRepo');


module.exports = (req, res, next) => {


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


