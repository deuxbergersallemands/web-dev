myApp.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	  .when('/', {
	  	templateUrl: 'app/composants/reception/reception.html',
	  })
	  .when('/tableauDeBord', {
		templateUrl: 'app/composants/tableauDeBord/tableauDeBord.html',
	  })
	  .otherwise({ redirectTo: '/'});
});