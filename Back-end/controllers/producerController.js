var express = require('express');
var categoryRepo = require('../repos/producerRepo');

var router = express.Router();

router.get('/', (req, res) => {
    categoryRepo.loadAll().then(rows => {
        var vm = {
            categories: rows
        };
        res.render('category/byCat', vm);
    });
});
module.exports = router;