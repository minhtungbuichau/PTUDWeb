var express = require('express');
var productRepo = require('../repos/productRepo');

var router = express.Router();

router.get('/', (req, res) => {
    productRepo.loadAll().then(rows => {
        var vm = {
            products: rows
        };
        res.render('product/byProduct', vm);
    });
});
module.exports = router;