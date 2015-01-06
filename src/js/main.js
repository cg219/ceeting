angular.module("Ceeting", ["ngRoute", "ngResource"])
	.config(["$routeProvider", "$locationProvider", function(router, location){
		location.html5Mode(true);
		console.log("HOW")
		router
			.when("/", {
				templateUrl: "login.html",
				controller: "Login"
			})
	}]);