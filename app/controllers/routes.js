module.exports = function(router){
	router.get("/", function(req, res){
		console.log("Hi");
		res.send("Hi");
	})

	router.get("/login", function(req, res){
		console.log("Login Page");
		res.set("Content-Type", "text/html");
		res.render("login.html");
		// res.send("Here");
	})

	router.get("*", function(req, res, next){
		var err = new Error();
		err.status = 404;

		next(err);
	})

	router.use(function(err, req, res, next){
		if(err.status != 404){
			return next();
		}

		res.redirect("/");
	})

	return router;
}