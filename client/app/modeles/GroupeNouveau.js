myApp.factory('GroupeNouveau', function($resource) {
  return $resource('/groupes/nouveau'); 
});