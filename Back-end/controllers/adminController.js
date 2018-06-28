var express = require('express');
var adminRepo = require('../repos/adminRepo');
var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({extended:false});

var router = express.Router();
router.get('/',(req,res)=>{
    res.render('admin/loginadmin',{layout: false});
})
router.get('/login', (req, res) => {
    res.render('admin/loginadmin',{layout: false});
});
router.get('/dashboard', (req,res)=>{
    res.render('admin/admin',{layout: false});
})
router.post('/login',(req,res)=>{
    var user = {
        username: req.body.username,
        password: (req.body.password).toString()
    };

    adminRepo.login(user).then(rows => {
        if (rows.length > 0) {
            res.redirect('/admin/dashboard');

        } else {
            var vm = {
                showError: true,
                errorMsg: 'Login failed',
                layout:false,
            };
            res.render('admin/loginadmin', vm);
        }
    });
})

router.get('/products', (req,res)=>{
    var page = req.query.page;
    if (!page) {
        page = 1;
    }

    var offset = (page - 1) * 10;
    var p1 = adminRepo.loadAllProducts(offset);
    var p2 = adminRepo.countAllProducts();
    
    Promise.all([p1, p2]).then(([pRows, countRows]) => {
        var total = countRows[0].total;
        var nPages = total / 10;
        if (total % 10 > 0) {
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
            
            Item: pRows,
            noProducts: pRows.length === 0,
            page_numbers: numbers,
            layout:false,
        };
        
            res.render('admin/admin', vm);
  
        
    });
})
router.get('/producers', (req,res)=>{
    var page = req.query.page;
    if (!page) {
        page = 1;
    }

    var offset = (page - 1) * 10;
    var p1 = adminRepo.loadProdu(offset);
    var p2 = adminRepo.countProdu();
    
    Promise.all([p1, p2]).then(([pRows, countRows]) => {
        var total = countRows[0].total;
        var nPages = total / 10;
        if (total % 10 > 0) {
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
            
            Item: pRows,
            noProducts: pRows.length === 0,
            page_numbers: numbers,
            layout:false,
        };
        
            res.render('admin/byProduAdmin', vm);
  
        
    });
})

router.get('/categories', (req,res)=>{
    var page = req.query.page;
    if (!page) {
        page = 1;
    }

    var offset = (page - 1) * 10;
    var p1 = adminRepo.loadCat(offset);
    var p2 = adminRepo.countCat();
    
    Promise.all([p1, p2]).then(([pRows, countRows]) => {
        var total = countRows[0].total;
        var nPages = total / 10;
        if (total % 10 > 0) {
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
            
            Item: pRows,
            noProducts: pRows.length === 0,
            page_numbers: numbers,
            layout:false,
        };
        
            res.render('admin/byCatAdmin', vm);
  
        
    });
})

router.get('/orders', (req,res)=>{
    var page = req.query.page;
    if (!page) {
        page = 1;
    }

    var offset = (page - 1) * 10;
    var p1 = adminRepo.loadOrder(offset);
    var p2 = adminRepo.countOrder();
    
    Promise.all([p1, p2]).then(([pRows, countRows]) => {
        var total = countRows[0].total;
        var nPages = total / 10;
        if (total % 10 > 0) {
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
            
            Item: pRows,
            noProducts: pRows.length === 0,
            page_numbers: numbers,
            layout:false,
        };
        
            res.render('admin/byOrderAdmin', vm);
  
        
    });
})

router.post('/orders', (req,res)=>{
    var page = req.query.page;
    if (!page) {
        page = 1;
    }

   

    var offset = (page - 1) * 10;
    var p1 = adminRepo.loadOrder(offset);
    var p2 = adminRepo.countOrder();
    var p3 = adminRepo.updateOrder(req.body.status,req.body.id);
    
    Promise.all([p1, p2,p3]).then(([pRows, countRows,orders]) => {
        var total = countRows[0].total;
        var nPages = total / 10;
        if (total % 10 > 0) {
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
            orders: orders,
            Item: pRows,
            noProducts: pRows.length === 0,
            page_numbers: numbers,
            layout:false,
        };
        
            res.render('admin/admin', vm);
  
        
    });
})


// category 



router.get('/categories/addCat/:CatID/:CatName',(req,res)=>{
    var CatID = req.params.CatID;
    var CatName = req.params.CatName;
    adminRepo.addCat(CatID, CatName);
    res.redirect('/admin/categories');
});
router.post('/categories/add',(req,res)=>{
    var CatID = req.body.CatID;
    var CatName = req.body.CatName;
    res.redirect('/admin/categories/addCat/'+CatID+"/"+CatName);
});
//delete cat
router.get('/categories/deleteCat/:CatID',(req,res)=>{
    var CatID = req.params.CatID;
    adminRepo.deleteCat(CatID);
    res.redirect('/admin/categories');
}); 
router.post('/categories/delete',urlencoded,(req, res)=>{
    var CatID = req.body.id;
    console.log(CatID);
    res.redirect('/admin/categories/deleteCat/'+CatID);
});


// producers

router.get('/producers/addProdu/:ProduID/:ProduName',(req,res)=>{
    var ProduID = req.params.ProduID;
    var ProduName = req.params.ProduName;
    adminRepo.addProdu(ProduID, ProduName);
    res.redirect('/admin/producers');
});
router.post('/producers/add',(req,res)=>{
  
    var ProduID = req.body.ProduID;
    var ProduName = req.body.ProduName;
    res.redirect('/admin/producers/addProdu/'+ProduID+"/"+ProduName);
});
//delete cat
router.get('/producers/deleteProdu/:ProduID',(req,res)=>{
    var ProduID = req.params.ProduID;
    adminRepo.deleteProdu(ProduID);
    res.redirect('/admin/producers');
}); 
router.post('/producers/delete',urlencoded,(req, res)=>{
    var ProduID = req.body.id;
    res.redirect('/admin/categories/deleteCat/'+ProduID);
});


module.exports = router;