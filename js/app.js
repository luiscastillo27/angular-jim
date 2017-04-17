var app = angular.module('appJim', [
  'ngRoute',
  'listControllers'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/inicio.html',
        controller: 'InicioCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);