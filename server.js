var express = require("express");
var app = express();

require("./app/controllers/routes")(app);

app.listen(3000, function(){
	console.log("Running");
});