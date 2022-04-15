//4. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

const prompt = require("prompt");

prompt.start();

//console.log('Di');
prompt.get(['x','y'], function(err, result){	
	
	var suma = Number(result.x) + Number(result.y);
	
	console.log('El resultado es ' + suma);
});