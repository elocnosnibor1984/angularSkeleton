myApp.factory('dummyFactory', function($http){

	var dummies = []

	var factory = {}

	factory.getDummies = function(callback){
		$http.get('/dummies').then(function(data){
			mongooses = data.data;
			callback(data.data);
		});
	}

	factory.addDummy = function(info, callback){
		$http.post('/dummies', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				mongooses.push(data)
				callback(mongooses);
			}
		})
	}

	return factory;
})