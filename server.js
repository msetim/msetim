/* Tutorial: https://auth0.com/blog/create-a-simple-and-stylish-node-express-app/ */
var express = require('express');
var path = require("path");

var app = express();
var port = process.env.PORT || "8080";

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.render("index", { title: "MIT MOdule 3 - My Docker" });
  });
 

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });


/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/*
app.get('/', function(req, res) {
    res.send('<h1> Hello World </h1>');
});

app.get('/random', function(req, res) {
	var col = ['red','green','blue']
    var num = Math.floor(Math.random() * 3);
    var s= '<body bgcolor= "'+col[num]+'">';
    res.send(s+'<h1>My lucky number =  ' + num+'</h1>');
});

app.get('/lucky', function(req, res) {
    var num = Math.floor(Math.random() * 10);
    res.send('My lucky number =  ' + num);
});
app.listen(8080);
console.log("Running on port 8080");
*/
