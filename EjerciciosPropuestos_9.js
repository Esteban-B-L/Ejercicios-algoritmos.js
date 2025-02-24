const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el primer ángulo del triángulo: ", (angulo1) => {
    rl.question("Ingrese el segundo ángulo del triángulo: ", (angulo2) => {
        rl.question("Ingrese el tercer ángulo del triángulo: ", (angulo3) => {

            
            angulo1 = Number(angulo1);
            angulo2 = Number(angulo2);
            angulo3 = Number(angulo3);

            
            let sumaAngulos = angulo1 + angulo2 + angulo3;

            
            let esValido = (sumaAngulos === 180);

            
            if (esValido) {
                console.log("El triángulo es válido.");
            } else {
                console.log("El triángulo no es válido.");
            }

            
            rl.close();
        });
    });
});
