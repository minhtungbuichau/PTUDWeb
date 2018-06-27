var express = require('express');
var adminRepo = require('../repos/adminRepo');


var router = express.Router();

router.get('/login', (req, res) => {
    res.render('admin/loginadmin',{layout: false});
});
router.get('/admin', (req,res)=>{
    res.render('admin/admin',{layout: false});
})
router.post('/login',(req,res)=>{
    var user = {
        username: req.body.username,
        password: (req.body.password).toString()
    };

    adminRepo.login(user).then(rows => {
        if (rows.length > 0) {
            res.redirect('/admin/admin');

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
module.exports = router;