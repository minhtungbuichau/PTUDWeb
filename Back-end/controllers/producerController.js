var express = require('express');
var producerRepo = require('../repos/producerRepo');

var router = express.Router();

router.get('/', (req, res) => {
    producerRepo.loadAll().then(rows => {
        var vm = {
            producers: rows
        };
        res.render('producer/byPro', vm);
    });
});
module.exports = router;