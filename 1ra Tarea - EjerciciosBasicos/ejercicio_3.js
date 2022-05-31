//3. Escribe un programa de dos líneas que pida el nombre del usuario con un *prompt* y escriba un texto que diga “Hola nombreUsuario”.
//var usuario;
const prompt = require("prompt");

prompt.start();

prompt.get(['usuario'], function(err, result){
	
	console.log('Hola: ' + result.usuario);
});
