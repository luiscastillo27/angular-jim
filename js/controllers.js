var app = angular.module('listControllers', []);

app.controller('InicioCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("INICIO");
}]);

app.controller('BuscarCtrl', ['$scope', '$http', function ($scope, $http) {
   console.log("BUSCAR"); 
}]);

app.controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {
   console.log("LOGIN");  
}]);

app.controller('PostCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("POST");
}]);

app.controller('RegistrarseCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("REGISTRAR");
}]);