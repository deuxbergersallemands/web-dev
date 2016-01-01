myApp.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	  .when('/', {
	  	templateUrl: 'reception.html',
	  })
	  .when('/accueil', {
		templateUrl: 'accueil.html',
	  })
	  .otherwise({ redirectTo: '/'});
});