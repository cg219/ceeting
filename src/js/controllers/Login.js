angular.module("Ceeting").controller("Login", ["$scope", function(scope){
	scope.trace = function(username){
		console.log(username);
	}
}])