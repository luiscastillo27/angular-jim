var app = angular.module('listControllers', []);

app.controller('InicioCtrl', ['$scope', '$http', function ($scope, $http) {
    
    $scope.sumar = function(){
    	var r1 = $scope.num1;
    	var r2 = $scope.num2;
    	var resp = r1 + r2;
    	$scope.resultado = resp;
    }

    $scope.resta = function(){
    	var r1 = $scope.num1;
    	var r2 = $scope.num2;
    	var resp = r1 - r2;
    	$scope.resultado = resp;
    }
    $scope.multiplica = function(){
        var r1 = $scope.num1;
        var r2 = $scope.num2;
        var resp = r1 * r2;
        $scope.resultado = resp;
    }
     $scope.divide = function(){
        var r1 = $scope.num1;
        var r2 = $scope.num2;
        var resp = r1 / r2;
        $scope.resultado = resp;
    }



}]);