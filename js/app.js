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
      when('/buscar', {
        templateUrl: 'templates/buscar.html',
        controller: 'BuscarCtrl'
      }).
      when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }).
      when('/post/:id', {
        templateUrl: 'templates/post.html',
        controller: 'PostCtrl'
      }).
      when('/registrarse', {
        templateUrl: 'templates/registrarse.html',
        controller: 'RegistrarseCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);