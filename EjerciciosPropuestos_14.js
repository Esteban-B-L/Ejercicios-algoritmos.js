const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el tamaño del sándwich (pequeño o grande): ", (tamano) => {
    rl.question("Desea agregar tocineta? (si/no): ", (tocineta) => {
        rl.question("Desea agregar jalapeño? (si/no): ", (jalapeno) => {
            rl.question("Desea agregar pavo? (si/no): ", (pavo) => {
                rl.question("Desea agregar queso? (si/no): ", (queso) => {

                    let costo = 0;

                    if (tamano.toLowerCase() === "pequeño") {
                        costo = 6000;
                    } else if (tamano.toLowerCase() === "grande") {
                        costo = 12000;
                    } else {
                        console.log("Tamaño no válido. Por favor ingrese 'pequeño' o 'grande'.");
                        rl.close();
                        return;
                    }

                    if (tocineta.toLowerCase() === "si") {
                        costo += 3000;
                    }
                    if (jalapeno.toLowerCase() === "si") {
                
                    }
                    if (pavo.toLowerCase() === "si") {
                        costo += 3000;
                    }
                    if (queso.toLowerCase() === "si") {
                        costo += 2500;
                    }

                    console.log(`El valor a pagar por el sándwich es: $${costo}`);

                    rl.close();
                });
            });
        });
    });
});
