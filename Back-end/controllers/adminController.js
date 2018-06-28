var express = require('express');
var adminRepo = require('../repos/adminRepo');


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
module.exports = router;