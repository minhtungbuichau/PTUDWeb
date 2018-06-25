var express = require('express');
var bodyParser = require('body-parser');
var searchRepo = require('../repos/searchRepo');
var config = require('../config/config');
var router = express.Router();
var urlencoded = bodyParser.urlencoded({extended:false});
router.get('/resultProName/:proName',function(req,res){
    var proName = req.params.proName;
    var page = req.query.page;
    if (!page) {
        page = 1;
    }

    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
    var p1 = searchRepo.loadbyName(proName,offset);
    var p2 = searchRepo.countByPro(proName);
    
    Promise.all([p1, p2]).then(([pRows, countRows]) => {
        var total = countRows[0].total;
        var nPages = total / config.PRODUCTS_PER_PAGE;
        if (total % config.PRODUCTS_PER_PAGE > 0) {
            nPages++;
        }

        var numbers = [];
        for (i = 1; i <= nPages; i++) {
            numbers.push({
                value: i,
                isCurPage: i === +page
            });
        }

        var vm = {
            
            searchItem: pRows,
            noProducts: pRows.length === 0,
            page_numbers: numbers
        };
        
        if(pRows[0] != null)
        {
            res.render('search/resultProName', vm);
        }
        else{
            res.render('search/resultNothing');
        }
        
    });
})
var urlencoded = bodyParser.urlencoded({extended:false});
router.post('/action',urlencoded,function(req,res){
    var proName = req.body.searchEle;
    res.redirect('/search/resultProName/'+proName);
});
module.exports = router;