myApp.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	  .when('/', {
	  	templateUrl: 'app/composants/reception/reception.html',
	  })
	  .when('/accueil', {
		templateUrl: 'app/composants/accueil/accueil.html',
	  })
	  .otherwise({ redirectTo: '/'});
});