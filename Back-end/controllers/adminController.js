var express = require('express');



var router = express.Router();

router.get('/admin/dashbord', (req, res) => {
    res.render('admin/admin');
});

router.get('/admin/show-by-category', (req, res) => {
    res.render('admin/byCatAdmin');
});

router.get('/admin/show-by-producer', (req, res) => {
    res.render('admin/byProduAdmin');
});

module.exports = router;