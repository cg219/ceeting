var mongoose = require("mongoose");
var config = require("./../../config/config.js");

function LoginController(){

}

LoginController.prototype.login = function(user, pass) {
	mongoose.connect(config.mongo);

	
	
	mongoose.disconnect();
};