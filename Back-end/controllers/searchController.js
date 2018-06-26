var express = require('express');
var bodyParser = require('body-parser');
var searchRepo = require('../repos/searchRepo');
var config = require('../config/config');
var router = express.Router();
var urlencoded = bodyParser.urlencoded({extended:false});
router.get('/resultAll',function(req,res){
    var page = req.query.page;
    if (!page) {
        page = 1;
    }

    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
    var p1 = searchRepo.loadAll(offset);
    var p2 = searchRepo.countAll();
    
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
        
            res.render('search/result', vm);
  
        
    });
})
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
            res.render('search/result', vm);
        }
        else{
            res.render('search/resultNothing');
        }
        
    });
})
//router search Catname
router.get('/resultCatName/:catName',function(req,res){
    var catName = req.params.catName;
    var page = req.query.page;
    if (!page) {
        page = 1;
    }

    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
    var p1 = searchRepo.loadbyCatName(catName,offset);
    var p2 = searchRepo.countByCatName(catName);
    
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
            res.render('search/result', vm);
            
        }
        
        else{
            res.render('search/resultNothing');
        }
        
    });
})

//router search ProduName
router.get('/resultProduName/:ProduName',function(req,res){
    var ProduName = req.params.ProduName;
    var page = req.query.page;
    if (!page) {
        page = 1;
    }

    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
    var p1 = searchRepo.loadbyProduName(ProduName,offset);
    var p2 = searchRepo.countByProduName(ProduName);
    
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
            res.render('search/result', vm);
            
        }   
        else{
            res.render('search/resultNothing');
        }
        
    });
})
router.get('/resultNothing',function(req,res){
    res.render('search/resultNothing');
})

var urlencoded = bodyParser.urlencoded({extended:false});
router.post('/action',urlencoded,function(req,res){
    var keywork = req.body.searchEle;
    var valueSearch = req.body.option;
    if(valueSearch == 0)
    {
        if(keywork ===''){
            res.redirect('/search/resultAll');
        }
        else{
            res.redirect('/search/resultProName/'+keywork);
        }
    }
    else if(valueSearch == 1)
    {
        if(keywork ===''){
            res.redirect('/search/resultNothing');
        }
        else{
            res.redirect('/search/resultCatName/'+keywork);
        }
    }
    else {
        if(keywork ===''){
            res.redirect('/search/resultNothing');
        }
        else{
            res.redirect('/search/resultProduName/'+keywork);
        }
    }
    
});
module.exports = router;