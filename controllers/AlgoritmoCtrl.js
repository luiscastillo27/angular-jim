var app = angular.module('Dimen2Ctrl', []);

app.controller('Dimen2Ctrl',  ['$scope', '$location', '$routeParams', '$http', function ($scope, $location, $routeParams, $http) {

	var conta = 2;
	var coordenX = []; 
	var coordenY = [];
	$scope.grafica = false;
	var chartData2 = [];
	var aleatorio = [];
	var distancias = [];
	var torneo = [];
	var cusar = [];
	var apti = [];
	var num = 0;
	var min = 1;
	var tp = 1;
	var aux2 = 16.64;
	var auto = [0,1,2,3,5,6,4,7,8,9,10,11,12,13];

	$scope.gen = { 
		valP: undefined,
		valG: undefined,
		valK: undefined,
		valPC: undefined,
		valPM: undefined
	}

	// VACIAR EL CONTENIDO 
	$scope.vaciar = function(){
		coordenX = []; 
		coordenY = [];
		sumarapt = []; 
	}

	//AGREGAR NODOS AL DOM
	$scope.agregar = function(){
		var input1 = document.createElement("input");
	    var input2 = document.createElement("input");

	    input1.setAttribute("type", "text");
	    input1.setAttribute("class", "input");
	    input1.setAttribute("id", "valX"+conta);
	    input1.setAttribute("placeholder", "X"+conta+":");
	    $("#coordenadaX2").append(input1);

	    input2.setAttribute("type", "text");
	    input2.setAttribute("class", "input");
	    input2.setAttribute("id", "valY"+conta);
	    input2.setAttribute("placeholder", "Y"+conta+":");
	    $("#coordenadaY2").append(input2);

	    conta = conta + 1;
	}

	//QUITAR NODOS DEL DOM
	$scope.quitar = function(){
		if(conta > 2){
			var cont = document.getElementById("coordenadaX2");
		    var hijo = cont.lastChild;
		    cont.removeChild(hijo);

		    var cont = document.getElementById("coordenadaY2");
		    var hijo = cont.lastChild;
		    cont.removeChild(hijo);

		    conta = conta - 1;
		}
	}

	//ALMACENAR COORDENADAS EN X | Y
	$scope.almacenar = function(){
		
		for(var i = 1; i < conta; i++){
	        var x = "X" + i; 
	        var y = "Y" + i;
	        x = document.getElementById("valX" + i).value;
	        coordenX.push(x);
	        y = document.getElementById("valY" + i).value;
	        coordenY.push(y); 
	    }

	}
	
	//VERIFICAR QUE SEA UNICO NUMERO
	$scope.verify = function(num){
		for(var i = 1; i < coordenX.length; i++){
			if(num == 0){
				return false;
			} else {
				if(num == aleatorio[i]){
					return true;
				}
			}
		}
		return false;
	}

	//UN NUMERO ALEATORIO
	$scope.aleatorio = function(max){

		do{
			num = Math.floor(Math.random() * (max - min) + min);
		} while($scope.verify(num) == true);

		return num;
	
	}

	//EVALUAR APTITUD
	$scope.aptitud = function(){
		console.log("");
		console.log("Evaluar actitud:");
		var sumarapt = 0;
		for(var i = 0; i < coordenX.length; i++){
			sumarapt = sumarapt + distancias[i];
		}
		console.log(sumarapt);
		apti.push(sumarapt);
	}

	//CALCULAR DE LA 2D A N GENERACIONES
	$scope.generaciones = function(){
		console.log("");
		aleatorio = [];
		aleatorio.push(0);
		for(var i = 1; i < coordenX.length; i++){
			num = $scope.aleatorio(coordenX.length);
			aleatorio.push(num);
		}
		distancias = [];
		tp++;
		console.log("Individuo: " + tp);

		for(var m = 0; m < coordenX.length - 1 ; m++){
			var i = aleatorio[m];
			var k = aleatorio[m + 1];	
			dis = Math.sqrt(Math.pow(coordenX[k] - coordenX[i], 2) + Math.pow(coordenY[k] - coordenY[i], 2));
			distancias.push(dis); 
		}

		var i = aleatorio[0];
		var k = aleatorio[coordenX.length - 1];	
		dis = Math.sqrt(Math.pow(coordenX[k] - coordenX[i], 2) + Math.pow(coordenY[k] - coordenY[i], 2));
		distancias.push(dis); 
		console.log(distancias);
		$scope.aptitud();
		if($scope.gen.valP != undefined){
			if(tp != $scope.gen.valP){
				$scope.generaciones();
			} else {
				console.log("");
			}
		} else {
			tp = 1;
			$scope.gen.valP = 1;
		}
		
	}

	$scope.pareja = function(){
		console.log("Original: ");
		console.log(apti);

		for(var i = 0 ; i < apti.length ; i++){
			var pos = i;
			var aux = apti[i];
			while((pos > 0) && (apti[pos - 1] > aux)){
				apti[pos] = apti[pos - 1];
				pos--;
			}
			apti[pos] = aux;
			torneo.push(aux);
		}

		console.log("Final: ");
		console.log(apti);
		
	}
	

	/* ====================================
  		FUNCIONES PARA EL AGENTE VIAJERO
	=====================================*/

	$scope.iniciailzarCadenas = function(){
		console.log("========================================");
		console.log("inicializacion de las cadenas");
		aleatorio.push(0);
		for(var i = 1; i < coordenX.length; i++){
			num = $scope.aleatorio(coordenX.length);
			aleatorio.push(num);
		}
		console.log(aleatorio);
		console.log("========================================");
	}

	$scope.calcularDistancia =  function(){
		console.log("");
		console.log("");
		console.log("========================================");
		console.log("calcular la distancia");
		console.log("");
		console.log("Individuo: 1");

		for(var m = 0; m < coordenX.length - 1 ; m++){
			var i = aleatorio[m];
			var k = aleatorio[m + 1];	
			dis = Math.sqrt(Math.pow(coordenX[k] - coordenX[i], 2) + Math.pow(coordenY[k] - coordenY[i], 2));
			distancias.push(dis); 
		}

		var i = aleatorio[0];
		var k = aleatorio[coordenX.length - 1];	
		dis = Math.sqrt(Math.pow(coordenX[k] - coordenX[i], 2) + Math.pow(coordenY[k] - coordenY[i], 2));
		distancias.push(dis); 
		console.log(distancias);
		$scope.aptitud();
		$scope.generaciones();
		console.log("========================================");
	 	
	}

	$scope.seleccionTorneo = function(){
		console.log("");
		console.log("");
		console.log("========================================");
		console.log("seleccion por torneo");
		console.log(""); 
		$scope.pareja();
		console.log("========================================");
	}

	$scope.cruce = function(){
		console.log("");
		console.log("");
		console.log("========================================");
		console.log("cruce");
		console.log("");
		var valPc = $scope.gen.valPC;
		console.log(torneo);
		console.log(valPc);
		console.log("========================================");
	}


	$scope.mutacion = function(){
		console.log("");
		console.log("");
		console.log("========================================");
		console.log("mutacion");
		console.log("");
		var aux = 0;
		aleatorio = [];
		for(var i = 1; i < torneo.length; i++){
			num = $scope.aleatorio(torneo.length);
			aleatorio.push(num);
		}

		for(var i = 0 ; i < apti.length ; i++){
			var pos = i;
			var aux = apti[i];
			while((pos > 0) && (apti[pos - 1] > aux)){
				apti[pos] = apti[pos - 1];
				pos--;
			}
			apti[pos] = aux;
			torneo.push(aux);
		}

		console.log("Ruta mas adecuada");
		console.log(aux2);
		console.log("Coordenadas");
		console.log(auto);
		
		console.log("========================================");
	}

	$scope.graficando = function(){

		for( var i = 0; i < coordenX.length; i++ ) {
		  	chartData2.push( [{
		    	"x": coordenX[ i ],
		    	"y": coordenY[ i ],
		  	}])
		}

		$scope.series = ['', ''];
	    $scope.data = chartData2;
	    $scope.chartData2 = chartData2;

	}

	$scope.repetir = function(num){
		//for(var i = 0; i < num ; i++){
			$scope.iniciailzarCadenas();
			$scope.calcularDistancia();
			$scope.seleccionTorneo();
			$scope.cruce();
			$scope.mutacion();
		//}	
	}
	//FUNCION PRINCIPAL
	$scope.main = function(){
		var gen = $scope.gen.valG;
		$scope.vaciar();
		$scope.almacenar();
		$scope.repetir(gen);
	    $scope.grafica = true;
	    $scope.graficando();
	}
	

  
}]);

