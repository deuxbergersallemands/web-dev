myApp.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	  .when('/', {
	  	templateUrl: 'app/composants/reception/reception.html',
	  })
	  .when('/inscription', {
		templateUrl: 'app/composants/inscription/inscription.html',
	  })
	  .when('/tableauDeBord', {
		templateUrl: 'app/composants/tableauDeBord/tableauDeBord.html',
	  })
	  .when('/historique', {
		templateUrl: 'app/composants/historique/historique.html',
	  })
	  .when('/relations', {
		templateUrl: 'app/composants/relations/relations.html',
	  })
	  .otherwise({ redirectTo: '/'});
});