const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la duración de la mensualidad (15 días, 30 días o 3 meses): ", (duracion) => {
    let costo;

    
    if (duracion === "15 días") {
        costo = 18000;
    } else if (duracion === "30 días") {
        costo = 35000;
    } else if (duracion === "3 meses") {
        costo = 86000;
    } else {
        costo = 0; 
        console.log("Duración no válida. Por favor ingrese 15 días, 30 días o 3 meses.");
    }

    if (costo > 0) {
        
        console.log(`El costo de la mensualidad por ${duracion} es: $${costo}.`);
    }

    
    rl.close();
});
