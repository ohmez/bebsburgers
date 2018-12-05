var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
// here's our routing paths 
router.get('/', (req,res) => {
    burger.all('burgers',(data) => {
        var burgers = {
            burgers: data
        };
        console.log(burgers);
        res.render('index',burgers);
    });
});
router.get('/api/burgers', (req,res) => {
    burger.all('burgers', (data) => {
        var burgers = {
            burgers: data
        };
        console.log(burgers);
        res.json(burgers);
    })
})

router.post("/api/burgers",(req,res) => {
    burger.add('burgers',
    req.body.name,(results) => res.json({id: results.insertId}));
});

router.put('/api/burgers/:id',(req,res) => {
    burger.eat('burgers',req.params.id,(results) => res.json({id: results.changedRows}));
});

module.exports = router;