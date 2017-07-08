var app = angular.module('HistoriaCtrl', []);

app.controller('HistoriaCtrl',  ['$scope', '$location', '$routeParams', '$http', function ($scope, $location, $routeParams, $http) {

	console.log("...HISTORIA...");


    $(document).ready(function(){
    	$(".main").onepage_scroll({
        	sectionContainer: "section",
        	responsiveFallback: 600,
        	loop: true
      	});
	});

}]);

