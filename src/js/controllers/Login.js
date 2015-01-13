angular.module("Ceeting").controller("Login", ["$scope", "$resource", "UserAPI", function(scope, resource, api){
	scope.login = function(){
		api.login({
			password: scope.password,
			username: scope.username
		}, function(response){
			console.log(response);
		});
	}

	scope.register = function(){
		api.register({
			password: scope.password,
			username: scope.username
		}, function(response){
			console.log(response);
		});
	}
}])