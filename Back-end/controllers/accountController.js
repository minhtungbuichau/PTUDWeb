var express = require('express'),
    SHA256 = require('crypto-js/sha256'),
    moment = require('moment');

var productRepo = require('../repos/productRepo'),
    cartRepo = require('../repos/cartRepo');

var accountRepo = require('../repos/accountRepo');
var restrict = require('../middle-wares/restrict');

var router = express.Router();



router.get('/register', (req, res) => {
    res.render('account/register');
});

router.post('/register', (req, res) => {

    var dob = moment(req.body.dob, 'D/M/YYYY')
        .format('YYYY-MM-DDTHH:mm');

    var user = {
        username: req.body.username,
        password: SHA256(req.body.rawPWD).toString(),
        name: req.body.name,
        email: req.body.email,
        dob: dob,
        permission: 0
    };

    accountRepo.add(user).then(value => {
        res.render('account/register');
    });
});

router.get('/login', (req, res) => {
    res.render('account/login');
});

router.post('/login', (req, res) => {
    var user = {
        username: req.body.username,
        
        password: SHA256(req.body.rawPWD).toString()
    };

    accountRepo.login(user).then(rows => {
        if (rows.length > 0) {
            req.session.isLogged = true;
            req.session.user = rows[0];
            req.session.cart = [];

           

            var url = '/';
            if (req.query.retUrl) {
                url = req.query.retUrl;
            }
            res.redirect(url);

        } else {
            var vm = {
                showError: true,
                errorMsg: 'Login failed'
            };
            res.render('account/login', vm);
        }
    });
});

router.get('/updateinfo/:userID',restrict, (req, res) => {
    res.render('account/updateinfo');
});

router.post('/updateinfo/:userID',(req, res) => {

    var userID = req.params.userID;

    var dob = moment(req.body.dob, 'D/M/YYYY')
        .format('YYYY-MM-DDTHH:mm');

    var user = {    
        userId: userID,
        password: SHA256(req.body.rawPWD).toString(),
        name: req.body.name,
        email: req.body.email,
        dob: dob,
        permission: 0
    };

    accountRepo.update(user).then(value => {
        var url = '/';
            if (req.query.retUrl) {
                url = req.query.retUrl;
            }
            res.redirect(url);
    });
});

router.post('/logout', restrict, (req, res) => {
    req.session.isLogged = false;
    req.session.curUser = null;
    req.session.cart = [];

    res.redirect(req.headers.referer);
});


router.get('/pay/:userID',restrict, (req, res) => {
    var userID = req.params.userID;
    var vm = {
        userId: userID,
        items: req.session.cart
    };
    res.render('account/pay', vm);
});


router.get('/historypay/:userID',restrict, (req, res) => {
    res.render('account/pay');
});

router.get('/cart/:userID', (req, res) => {
    var vm = {
        items: req.session.cart
    };
    res.render('account/cart', vm);
});

router.post('/cart/add', (req, res) => {
    productRepo.sin(req.body.proId).then(rows => {
        var item = {
            product: rows[0],
            quantity: +req.body.quantity,
            amount: rows[0].Price * +req.body.quantity
        };
        
        cartRepo.add(req.session.cart, item);
        res.redirect(req.headers.referer);
    });
});

router.post('/cart/remove', (req, res) => {
    cartRepo.remove(req.session.cart, +req.body.proId);
    res.redirect(req.headers.referer);
});

module.exports = router;