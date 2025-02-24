const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su género (femenino o masculino): ", (genero) => {
    rl.question("Ingrese su edad: ", (edad) => {

        
        edad = Number(edad);

        let ayuda;

        
        if (genero === "femenino") {
            if (edad > 50) {
                ayuda = 120000;
            } else if (edad >= 30 && edad <= 50) {
                ayuda = 100000;
            } else {
                ayuda = 0;
            }
        } else if (genero === "masculino") {
            ayuda = 40000;
        } else {
            ayuda = 0; 
        }

        
        console.log(`El valor de ayuda mensual es: $${ayuda}.`);

        
        rl.close();
    });
});
