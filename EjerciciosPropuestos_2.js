const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Por favor ingrese un número: ", (numero) => {

    numero %= 2,
    
    numero == 0 ? console.log("Es un numero par") : console.log("No es un numero par");
    rl.close();


})