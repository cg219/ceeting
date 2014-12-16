module.exports = function(app){
	app.get("/", function(req, res){
		console.log("Hi");
		res.send("Hi");
	})
}