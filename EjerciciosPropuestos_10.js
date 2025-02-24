const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el número de copias que desea imprimir: ", (numCopias) => {

    numCopias = Number(numCopias);

    let precioPorCopia;
    let precioTotal;

    if (numCopias >= 0 && numCopias <= 499) {
        precioPorCopia = 120;
    } else if (numCopias >= 500 && numCopias <= 749) {
        precioPorCopia = 100;
    } else if (numCopias >= 750 && numCopias <= 999) {
        precioPorCopia = 80;
    } else if (numCopias >= 1000) {
        precioPorCopia = 50;
    } else {
        precioPorCopia = 0; 
        console.log("Cantidad no válida. Por favor ingrese un número válido de copias.");
    }

    if (precioPorCopia > 0) {
        
        precioTotal = numCopias * precioPorCopia;

        console.log(`El precio por copia es: $${precioPorCopia}`);
        console.log(`El precio total por ${numCopias} copias es: $${precioTotal}`);
    }

    rl.close();
});
