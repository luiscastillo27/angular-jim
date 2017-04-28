var app = angular.module('listControllers', []);

app.controller('InicioCtrl', ['$scope', '$http', function ($scope, $http) {
    
    $scope.sumar = function(){
    	var resp = $scope.num1;
    	$scope.resultado = resp;
    }


}]);