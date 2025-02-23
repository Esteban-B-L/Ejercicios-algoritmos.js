const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Por favor ingrese el tipo de lavadora que desea alquilar, 1 o 2: ", (TipoLavadora) => {
    rl.question("Por favor ingrese el número de lavadoras que desea alquilar: ", (cantidad) => {
        rl.question("Ingrese cuantas horas desea alquilar las lavadoras: ", (horas) => {

            TipoLavadora = Number(TipoLavadora);
            cantidad = Number(cantidad);
            horas = Number(horas);
            let costo;

            if (TipoLavadora == 1) {
                costo = horas * 4000;
                if (cantidad > 3) {
                    costo -= costo * 3 / 100;
                }
            } else if (TipoLavadora == 2) {
                costo = horas * 3000;
                if (cantidad > 3) {
                    costo -= costo * 3 / 100;
                }
            } else {
                costo = 0;
            }

            console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${TipoLavadora} por ${horas} horas: ${costo}.`);
            rl.close();

        });
    });
});



