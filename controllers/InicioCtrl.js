var app = angular.module('InicioCtrl', []);

app.controller('InicioCtrl',  ['$scope', '$location', '$routeParams', '$http', function ($scope, $location, $routeParams, $http) {

	var conta = 2;
	var coordenX = []; var coordenY = [];
	var clases = 0.0; 
	$scope.grafica = true;
	$scope.dos = true;
	$scope.showNext = true;
	$scope.showVaciar2 = true;

	$scope.vaciar2 = function(){
		$scope.showCal = false;
		$scope.grafica = false;
		coordenX = []; 
		coordenY = []; 

		document.getElementById("valK").value = "";
		document.getElementById("valX1").value = "";
		document.getElementById("valY1").value = "";
		var elX= document.getElementById("coordenadaX2");
		while (elX.firstChild) {
		  elX.removeChild(elX.firstChild);
		}

		var elY= document.getElementById("coordenadaY2");
		while (elY.firstChild) {
		  elY.removeChild(elY.firstChild);
		}

		conta = 2;

	}


}]);

