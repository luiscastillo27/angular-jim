$(document).ready(main);

var contador = 1;

function main(){
	$('.icon-lock').click(function(){
		if (contador == 1) {
			$('#derecha').animate({
				left: '0'
			});
			contador = 0;
		}else{
			contador = 1;
			$('#derecha').animate({
				left: '-100%'
			});
		}
	});
};