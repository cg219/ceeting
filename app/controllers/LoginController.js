var mongoose = require("mongoose");
var config = require("./../../config/config");
var UserModel = require("./../models/User");

function LoginController(){

}

LoginController.prototype.login = function(username, password, callback) {
	mongoose.connect(config.mongo);

	UserModel.model
		.find({
			name: username,
			pass: password
		}, function(err, user){
			if( user.length > 0){
				mongoose.disconnect();
				callback(user[0]);
			}
			else{
				mongoose.disconnect();
				callback({
					error: "Username/Password combonation doesn't exist",
					code: 3
				})
			}
		})
};

LoginController.prototype.signup = function(username, password, callback) {
	mongoose.connect(config.mongo);

	UserModel.model
		.find({
			name: username
		}, function(err, user){
			if(user.length > 0){
				mongoose.disconnect();
				callback({
					error: "User Exists",
					code: 1
				})
			}
			else{
				UserModel.model.create({
					name: username,
					pass: password
				}, function(err, user){
					if(err){
						mongoose.disconnect();
						callback({
							error: "Error Registering User. Retry.",
							code: 2
						})
					}
					else{
						mongoose.disconnect();
						callback(user);
					}
				})
			}
		})
};

module.exports = new LoginController();