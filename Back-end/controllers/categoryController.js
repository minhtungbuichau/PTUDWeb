var express = require('express');
var categoryRepo = require('../repos/categoryRepo');

var router = express.Router();

router.get('/', (req, res) => {
    categoryRepo.loadAll().then(rows => {
        var vm = {
            categories: rows,
            producers: rows,
            products:rows
        };
        res.render('category/byCat', vm);
    });
});
module.exports = router;