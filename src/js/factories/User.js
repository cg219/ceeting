angular.module("Ceeting").factory("UserAPI", ["$resource", function(resource){
	return resource("/api/v1/login", {}, {
		login: {
			method: "POST",
			params: {
				username: "@username",
				password: "@password"
			}
		}
	});
}])