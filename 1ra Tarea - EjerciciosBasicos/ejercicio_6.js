//6. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const prompt = require('prompt');

prompt.start();

console.log('Digite 3 numeros');

prompt.get(['x','y','z'], function(err, result){

	let primerValor = Number(result.x);
	let segundoValor = Number(result.y);
	let tercerValor = Number(result.z);
	
	if (primerValor >= segundoValor && primerValor >= tercerValor){
		console.log('El mayor es ' + primerValor);
	}else if(segundoValor >= tercerValor && segundoValor >= primerValor){
		console.log('El mayor es ' + segundoValor);
	}else{
		console.log('El mayor es ' + tercerValor);		
	}
	
});