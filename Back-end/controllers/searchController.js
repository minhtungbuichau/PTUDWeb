var express = require('express');
var bodyParser = require('body-parser');
var searchRepo = require('../repos/searchRepo');
var config = require('../config/config');
var router = express.Router();
var urlencoded = bodyParser.urlencoded({extended:false});
router.get('/resultProName/:proName',function(req,res){
    var proName = req.params.proName;
    var p1 = searchRepo.loadbyName(proName);
    
    Promise.all([p1]).then(([rows]) => {
        var vm = {
            searchItem: rows,
            
        };
        console.log(rows);
        res.render('search/resultProName', vm);
    });
})
var urlencoded = bodyParser.urlencoded({extended:false});
router.post('/action',urlencoded,function(req,res){
    var proName = req.body.searchEle;
    console.log(req.body.searchEle);
    res.redirect('/search/resultProName/'+proName);
});
module.exports = router;