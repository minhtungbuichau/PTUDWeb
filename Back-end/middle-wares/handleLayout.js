var categoryRepo = require('../repos/cat_productRepo');
var producerRepo = require('../repos/pro_productRepo');
var indexRepo = require('../repos/index_productRepo');

var db = require('../fn/db');
var config = require('../config/config');

module.exports = (req, res, next) => {

    var catId = req.params.catId;

    producerRepo.loadAll().then(rows => {
        res.locals.layoutVM2 = {
            producers: rows,
         
        };     
    });

    indexRepo.loadbyView().then(rows => {
        res.locals.layoutbyView = {
            byView: rows,
         
        };     
    });

    indexRepo.loadbySale().then(rows => {
        res.locals.layoutbySale = {
            bySale: rows,
         
        };     
    });

    

    categoryRepo.loadAll().then(rows => {
        res.locals.layoutVM = {
            categories: rows,
         
        };
        next();
    });


};


