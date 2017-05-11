(function(){

  var appFont = angular.module('jimApp', ['ngRoute', 'BuscarCtrl', 
  'InicioCtrl', 'LoginCtrl', 'PostCtrl' ,'RegistrarseCtrl']);

  appFont.config(function($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'InicioCtrl',
          templateUrl: 'templates/inicio.html'
        })
        .when('/registrarse', {
          controller: 'RegistrarseCtrl',
          templateUrl: 'templates/registrarse.html'
        })
        .when('/login', {
          controller: 'LoginCtrl',
          templateUrl: 'templates/login.html'
        })
        .when('/buscar', {
          controller: 'BuscarCtrl',
          templateUrl: 'templates/buscar.html'
        })
        .when('/post/:id', {
          controller: 'PostCtrl',
          templateUrl: 'templates/post.html'
        })
        .otherwise({ 
          redirectTo: '/'
        });
    });

}());