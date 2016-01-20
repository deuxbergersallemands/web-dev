myApp.factory('TouteActivites', function($resource) {
  return $resource('/historique');
});