var loginController = require("./LoginController");

module.exports = function(router){
	router.post("/login", function(req, res, params){
		
		loginController.login();

		res.json({
			username: req.param("username"),
			password: req.param("password")
		})
	})

	// router.get("*", function(req, res, next){
	// 	var err = new Error();
	// 	err.status = 404;

	// 	next(err);
	// })

	// router.use(function(err, req, res, next){
	// 	if(err.status != 404){
	// 	console.log("HOWHOOODY");
	// 		return next();
	// 	}

	// 	res.redirect("/");
	// })

	return router;
}