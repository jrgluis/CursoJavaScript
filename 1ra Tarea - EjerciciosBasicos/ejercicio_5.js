//5. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
const prompt = require('prompt');

prompt.start();

prompt.get(['x','y'], function(err, result){
	
	let primerValor = Number(result.x);
	let segundoValor = Number(result.y);
	
	if (primerValor > segundoValor){
		console.log('El mayor es ' + primerValor);
	}else{
		console.log('El mayor es ' + segundoValor);
	}
	
});