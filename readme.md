# Bebs Burgers
Welcome to your favorite burger generator.
Here I'm building an app/site that's running logic from the server side using node and express, storing data on mysql database, and populating html pages using handlebars. 
This will be deployed through heroku rounding up the full stack development and deployment. 

## Index
1.[Process](#Process)
..* [Server](#Server.js)
..* [Config](#Configuration)

..* [Models](#Models)

..* [HTML](#HTML)

..* [Module.Exports](#Module.Exports)
    
[Deployed](https://keagans-bebsburgers.herokuapp.com/)

### Process
I started with a skeleton build of all the files and folders outlined in our instructions.
I like to have a whole picture established and work from the top down with lots of pseudo code to start out. 
So for me this meant getting the skeleton step one, then server.js, then config, and etc etc as we progress through the server working its way up to the clients view. 
```
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
Then I initiated my node package with an npm init.
Then installed all the dependencies for this app which can be found [here](package.json)
The process starts with the server -[#](#Server.js)
Then we move onto connections and configurations -[#](#Configuration)

Once we have the routing set up its all about [receiving the post](app/routing/apiRoutes.js) from the new friend survey. -[#](#Module.Exports)

  

#### Server.js
Because we're using the MVC - Model View Controller method [this file](server.js) is very small.
The purpose is to reduce the logic on one `.js` sheet.
Since the server is only really listening as its main function that's all we really need; along with a couple additional options and parameters. 
```js
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT,(err) => {
    if(err) throw err;
    
    console.log('listening on port: ' + PORT);
})
```
Once I confirmed the server was listening it was time to psuedo in the routes that will be coming.
These don't work currently so `node server` doesn't work at this point. 
```js
// require('./controllers/clientController.js')(app);
var routes = require('./controllers/clientController.js');
app.use(routes);
```

#### Configuration
First step was to establish the [database](./config/connection.js) and confirm its connection was working. 
Again using the MVC method this is a pretty small file aswell with a NECESSARY `module.exports = connection;`
Because these `.js` files are seperate from the `server.js` they MUST have module.exports established properly.
The real configuration comes from the [ORM](./config/orm.js) and all the functions or switches as I like to think of them that exist within this homemade ORM.
Since our app is pretty straight forward we should only need 3 functions for the ORM to communicate to our database with. They're SQL syntax based but I think of them as GET POST and PUT to psuedo out quickly. 
```js
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
```
Testing the orm functionality was key to moving forward since the database is the focal point of the content going to the client side.
Placing in a callback inside the file testing the object functions allowed me to verify it was working properly before moving on. 
```js
orm.add('burgers','plainburger',function(res) {console.log(res)});
orm.devour('burgers',1,function(res) {console.log(res)});
```
### Models
The same was true for models as the ORM, since they're very similar and doing almost the same callbacks.
I'm pretty proud with how small my object is.
```js
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
```
Testing was the same as ORM. 
```js
burger.all('burgers',function(res) { console.log(res)});
burger.add('burgers','bananBurger',function(res) { console.log(res)});
burger.eat('burgers',2,function(res) { console.log(res)});
```

#### HTML
Here we use handlebars to create the HTML that'll be populating objects from the database. 
This went pretty smoothly, the HTML is pretty simple and the ajax calls control content population. 
Using the Model View Controller method makes dynamic content very easy to populate once you create the partial views calling them inside handlebars is very smooth. 
```handlebars
<li>
    {{#if devoured}}
    {{name}}
    <img src="/assets/img/burger.jpg" alt="burger_img" style="height: 50px; opacity: 0.4">
    {{!-- donothings --}}
    {{else}}
    <div class="col-4">
    <div class="thumbnail">
        <img src="/assets/img/burger.jpg" alt="Lights" style="width:100%">
        <div class="caption">
          <p>{{name}}</p>
        </div>
    </div>
    </div>
    <div class="col-2">
    <button class="devourMe btn btn-default" data-id="{{id}}" data-newstate="{{devoured}}">
        Eat Me!
    </button>
    </div>
    {{/if}}
</li>
```

#### Module.Exports
This was quiet a process, since every `.js` sheet is dependent on another one.
The chain roughly goes `server.js>connnection.js>burger.js>orm.js` in order to move forward you had to build out atleast the GET function and test it by doing a callback and running it in node before you could export it and move to the next sheet in the chain. 

### I'm deployed
[link](https://keagans-bebsburgers.herokuapp.com/)