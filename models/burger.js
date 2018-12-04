var orm = require('../config/orm.js');

var burger = {
    all: function(table,cb) {
        orm.pop(table, (res) => cb(res));
    },
    add: function(table,burger, cb) {
        orm.add(table,burger,(res) => cb(res));
    },
    eat: function(table,id,cb) {
        orm.devour(table,id,(res) => cb(res));
    }
};
module.exports = burger;