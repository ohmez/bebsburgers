var connection = require('../config/connection.js');

var orm = {
    pop: function popBurgers(table,cb) {
        var sqlS = 'SELECT * FROM ' 
        sqlS += table + ";";
        connection.query(sqlS, (err,res) => {
            if(err) throw err;
            cb(res);
        });
        // GET - burgers from db. 
    },
    add: function deBurger(table, name, cb) {
        var sqlS = 'INSERT INTO ' 
        sqlS += table;
        sqlS += ' (name) VALUES ("' +name+'");';
        console.log(sqlS);
        connection.query(sqlS, (err,res) => {
            if(err) throw err;
            cb(res);
        });
    // POST - burger logic communicating with database. 
    },
    devour: function byeBurger(table,id,cb) {
        var sqlS = 'UPDATE ' 
        sqlS += table;
        sqlS += ' SET devoured='+true+' WHERE id ="'+id+'";';
        console.log(sqlS);
        connection.query(sqlS, (err,res) => {
            if(err) throw err;
            cb(res);
        });
        // PUT - logic to update burger to devoured true; remains in database it seems but is no longer visible on DOM. 
    }
}; // end orm

module.exports = orm;
