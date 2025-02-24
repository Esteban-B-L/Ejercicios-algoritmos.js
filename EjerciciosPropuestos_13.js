const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el operador (claro, Tigo, movistar): ", (operador) => {
    rl.question("Ingrese la cantidad de minutos internacionales consumidos: ", (minutosInternacionales) => {

        minutosInternacionales = Number(minutosInternacionales);

        let cargoFijo;
        let valorMinutoInternacional;
        let valorPaqueteDatos;

        if (operador.toLowerCase() === "tigo") {
            cargoFijo = 45000;
            valorMinutoInternacional = 200;
            valorPaqueteDatos = 12000;
        } else if (operador.toLowerCase() === "claro") {
            cargoFijo = 30000;
            valorMinutoInternacional = 100;
            valorPaqueteDatos = 18000;
        } else if (operador.toLowerCase() === "movistar") {
            cargoFijo = 40000;
            valorMinutoInternacional = 250;
            valorPaqueteDatos = 8000;
        } else {
            console.log("Operador no válido. Por favor ingrese claro, Tigo o movistar.");
            rl.close();
            return;
        }

        let costoLlamadasInternacionales = minutosInternacionales * valorMinutoInternacional;
        let costoTotal = cargoFijo + costoLlamadasInternacionales + valorPaqueteDatos;

        console.log(`Operador: ${operador}`);
        console.log(`Cargo fijo: $${cargoFijo}`);
        console.log(`Valor minuto internacional: $${valorMinutoInternacional}`);
        console.log(`Valor paquete de datos: $${valorPaqueteDatos}`);
        console.log(`Costo total: $${costoTotal}`);

        rl.close();
    });
});
