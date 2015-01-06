module.exports = function(router){
	router.get("/", function(req, res){

		res.set("Content-Type", "text/html");
		res.render("index");
	})

	router.get("*", function(req, res, next){
		var err = new Error();
		err.status = 404;

		next(err);
	})

	router.use(function(err, req, res, next){
		if(err.status != 404){
		console.log("HOWHOOODY");
			return next();
		}

		res.redirect("/");
	})

	return router;
}