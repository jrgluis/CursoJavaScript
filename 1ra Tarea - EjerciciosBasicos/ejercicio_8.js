//8. Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad).
const prompt = require('prompt');

prompt.start();

console.log('Digite un numero');

prompt.get(['x'], function(err, result){
	
	let numero = Number(result.x);
	
	let residuo;
	
	//if (numero > 3 &&) {
		
		for(let i = numero - 1; i = 2; i--){
			
			residuo = numero % i;
			//console.log(i + ', ' + residuo);
			
			if(residuo != 0){
				console.log('El numero ' + numero + ' es primo');
				break;
			}else{
				console.log('El numero ' + numero + ' no es primo');
				break;
			}
		}
		
	/*else{
		
		console.log('El numero ' + numero + ' es primo');
		
	}*/
	
});