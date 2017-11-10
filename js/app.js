<<<<<<< HEAD
(function(){

  var appFont = angular.module('agente', ['ngRoute', 'InicioCtrl', 'Dimen2Ctrl', 'chart.js']);

  appFont.config(function($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'InicioCtrl',
          templateUrl: 'templates/inicio.html'
        })
        .otherwise({ 
          redirectTo: '/'
        });
    });

=======
(function(){

  var appFont = angular.module('jimApp', ['ngRoute', 'InicioCtrl', 
  'HistoriaCtrl', 'ProductoCtrl', 'ContactoCtrl' ,'BuscarCtrl', 'LoginCtrl']);

  appFont.config(function($routeProvider) {
        $routeProvider.when('/', {
          controller: 'InicioCtrl',
          templateUrl: 'templates/inicio.html'
        })
        $routeProvider.when('/historia', {
          controller: 'HistoriaCtrl',
          templateUrl: 'templates/historia.html'
        })
        $routeProvider.when('/producto', {
          controller: 'ProductoCtrl',
          templateUrl: 'templates/producto.html'
        })
        $routeProvider.when('/contacto', {//
          controller: 'ContactoCtrl',
          templateUrl: 'templates/contacto.html'
        })
        $routeProvider.when('/buscar', {
          controller: 'BuscarCtrl',
          templateUrl: 'templates/buscar.html'
        })
        $routeProvider.when('/login', {
          controller: 'LoginCtrl',
          templateUrl: 'templates/login.html'
        })
        $routeProvider.otherwise({ 
          redirectTo: '/'
        });
    });

>>>>>>> origin/master
}());