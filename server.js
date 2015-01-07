var express = require("express");
var bodyparser = require("body-parser");
var app = express();
var routes = require("./app/controllers/routes")(express.Router());
var apiRoutes = require("./app/controllers/APIRoutes")(express.Router());

app.set("views", __dirname + "/app/views");
app.set("view engine", "jade");

app.use(express.static(__dirname + "/public"));
app.use("/", routes);
app.use("/api/v1", apiRoutes);

app.listen(3000, function(){
	console.log("Running");
});