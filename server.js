var express = require('express');
var PORT = process.env.PORT || 3030;
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// require('./controllers/clientController.js')(app);
var routes = require('./controllers/clientController.js');
app.use(routes);

app.listen(PORT,(err) => {
    if(err) throw err;
    
    console.log('listening on port: ' + PORT);
})