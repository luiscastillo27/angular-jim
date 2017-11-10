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

}());