var app = angular.module('ContactoCtrl', []);

app.controller('ContactoCtrl',  ['$scope', '$location', '$routeParams', '$http', function ($scope, $location, $routeParams, $http) {

	console.log("...CONTACTO...");
	function valEmail(valor){ 
      re=/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/
      if(!re.exec(valor))    {
          return false;
      }else{
          return true;
      }
    } 

  	function valNewComent(){
	    valid = true;
	    $("#aviso1").hide("slow");
	    $("#aviso2").hide("slow");
        $("#aviso3").hide("slow");
	    $("#aviso4").hide("slow");
	          document.formContacto.asunto.style.border='1px solid #CCC';
	          document.formContacto.nombre.style.border='1px solid #CCC';
	          document.formContacto.correo.style.border='1px solid #CCC';
	          document.formContacto.comentario.style.border='1px solid #CCC';

	    //ASUNTO
	    if (document.formContacto.asunto.value == ""){
	      $("#aviso1").show("slow");
	      document.formContacto.asunto.style.border='1px solid #FF0000';
	        valid = false;
	    }
	    //NOMBRE
	    if (document.formContacto.nombre.value == ""){
	      $("#aviso2").show("slow");
	      document.formContacto.nombre.style.border='1px solid #FF0000';
	        valid = false;
	    }
	    //CORREO
	    if (document.formContacto.correo.value == ""){
	      $("#aviso3").show("slow");
	      document.formContacto.correo.style.border='1px solid #FF0000';
	        valid = false;
	    } 
	    //CORREO VALIDAR
	    if (!valEmail(document.formContacto.correo.value)){
			$("#aviso3").show("slow");
	        document.formContacto.correo.style.border='1px solid #A50505';
	           valid = false;
	    } 
	    //COMENTARIO
	    if (document.formContacto.comentario.value == ""){
	      $("#aviso4").show("slow");
	      document.formContacto.comentario.style.border='1px solid #FF0000';
	        valid = false;
	    }  
	    return valid;
	}




    $('#btnEnviarNewContacto').click(function (){
		$("#exito1").hide("fast");
		if (valNewComent()){ 
			$("#loader").show("slow");
			var NewComentAsunto = document.formContacto.asunto.value;
		    var NewComentNombre = document.formContacto.nombre.value;
			var NewComentCorreo = document.formContacto.correo.value;
			var NewComentComent = document.formContacto.comentario.value;
			$.ajax({
			    type: "POST",
			    url:"root/includes/ajax.php",
			    data: 'asunto='+NewComentAsunto+'&nombre='+NewComentNombre+'&correo='+NewComentCorreo+'&comentario='+NewComentComent+'&formid=5',
			    success: function(resp){  
			        if (resp==1){
			        	$("#exito1").show("slow");
			         	$("#loader").hide("fast");
			         	document.formContacto.asunto.value="";
			         	document.formContacto.nombre.value="";
			         	document.formContacto.correo.value="";
			         	document.formContacto.comentario.value="";
			        }
			    }
			});
		}
	});



      
}]);

