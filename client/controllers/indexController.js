myApp.controller('indexController', function($scope, dummyFactory){

	dummyFactory.addDummy({name: 'req.body.test', status: 'working'}, function(data){
		console.log(data);
	})
})