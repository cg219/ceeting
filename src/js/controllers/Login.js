angular.module("Ceeting").controller("Login", ["$scope", "$resource", "UserAPI", function(scope, resource, api){
	scope.login = function(){
		api.login({
			password: scope.username,
			username: scope.password
		}, function(response){
			console.log(response);
		});
	}
}])