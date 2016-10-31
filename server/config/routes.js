module.exports = function(app){
	app.post('/dummies', function(req, res){
		
		console.log(req.body);
		console.log(req.params.test)
		// mongooseController.getMongooses(req, res);
	})
}