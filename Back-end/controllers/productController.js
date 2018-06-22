var express = require('express');
var productRepo = require('../repos/productRepo');
var config = require('../config/config');

var router = express.Router();

router.get('/detail/:proId', (req, res) => {
    var proId = req.params.proId;
    var p1 = productRepo.single(proId);
    var p2 = productRepo.loadSameProducer(proId);
    Promise.all([p1, p2]).then(([rows, prows]) => {
        var vm = {
            product: rows[0],
            loadSameProducer: prows
        };
        
        res.render('product/detail', vm);
    });

    
});

module.exports = router;