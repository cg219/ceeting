angular.module("Ceeting", ["ngRoute", "ngResource"])
	.config(["$routeProvider", "$locationProvider", function(router, location){
		location.html5Mode(true);
		
		router
			.when("/", {
				templateUrl: "login.html",
				controller: "Login"
			})
	}]);