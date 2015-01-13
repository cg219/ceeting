var loginController = require("./LoginController");

module.exports = function(router){
	router.post("/login", function(req, res, params){
		
		loginController.login(req.param("username"), req.param("password"), function(response){
			res.json( response );
		})
	})

	router.post("/register", function(req, res, params){
		
		loginController.signup(req.param("username"), req.param("password"), function(response){
			res.json( response );
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