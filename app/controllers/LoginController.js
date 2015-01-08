var mongoose = require("mongoose");
var config = require("./../../config/config");
var UserModel = require("./../models/User");

function LoginController(){

}

LoginController.prototype.login = function(user, pass) {
	mongoose.connect(config.mongo);

	console.log(UserModel);
	
	
	mongoose.disconnect();
};

LoginController.prototype.signup = function(user, pass) {
	mongoose.connect(config.mongo);

	// UserModel.model.
	
	
	mongoose.disconnect();
};

module.exports = new LoginController();