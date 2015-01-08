var mongoose = require("mongoose");
var model = mongoose.model("User", mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true
	},
	pass: {
		type: String,
		required: true,
	},
	charts: {
		type: {}
	}
}))

function User(){
	this.seatingCharts = [];
}

User.prototype.getSeatingCharts = function(id, mongoose) {
	
};

function UserModel(){
	this.model = model;
	this.user = new User();
}

module.exports = new UserModel();