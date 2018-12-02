var connection = require('../config/connection.js');

var orm = {
    pop: function burgerPop() {
        // GET - burgers from db. 
    },
    add: function deBurger() {
    // POST - burger logic communicating with database. 
    },
    devour: function byeBurger() {
        // PUT - logic to update burger to devoured true; remains in database it seems but is no longer visible on DOM. 
    }
}; // end orm