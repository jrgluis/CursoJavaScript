//7. Escribe un programa que pida un número y diga si es divisible por 2.
const prompt = require('prompt');

prompt.start();

console.log('Escribe un numero');

prompt.get(['x'], function(err, result){

	let numero = Number(result.x);
	let residuo = (numero % 2);
	
	if (residuo == 0){
		console.log('Es divisible por 2');
	}else{
		console.log('No es divisible por 2');
	}
});