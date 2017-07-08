var app = angular.module('ProductoCtrl', []);

app.controller('ProductoCtrl',  ['$scope', '$location', '$routeParams', '$http', function ($scope, $location, $routeParams, $http) {

	console.log("...PRODUCTO...");
	$(document).ready(function(){
    	$(".main").onepage_scroll({
        	sectionContainer: "section",
        	responsiveFallback: 600,
        	loop: true
      	});

      	$('#dg-container').gallery({
			autoplay:true
		});
	});

}]);

