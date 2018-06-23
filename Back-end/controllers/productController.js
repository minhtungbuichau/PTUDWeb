var express = require('express');
var productRepo = require('../repos/productRepo');
var config = require('../config/config');

var router = express.Router();

router.get('/detail/:proId', (req, res) => {
    var proId = req.params.proId;
    var p1 = productRepo.single(proId);
    var p2 = productRepo.loadSameProducer(proId);
    var p3 = productRepo.loadSameCategory(proId);
    Promise.all([p1, p2, p3]).then(([rows, prows, crows]) => {
        var vm = {
            product: rows[0],
            loadSameProducer: prows,
            loadSameCategory: crows
        };
        res.render('product/detail', vm);
    });
router.get('/home',(req,res)=>{
    res.redirect('/');
})
    
});

module.exports = router;