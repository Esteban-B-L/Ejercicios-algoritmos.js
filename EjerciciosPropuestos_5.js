const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su calificación en Física (0-10): ", (fisica) => {
    rl.question("Ingrese su calificación en Química (0-10): ", (quimica) => {
        rl.question("Ingrese su calificación en Biología (0-10): ", (biologia) => {
            rl.question("Ingrese su calificación en Matemáticas (0-10): ", (matematicas) => {
                rl.question("Ingrese su calificación en Informática (0-10): ", (informatica) => {

                    
                    fisica = Number(fisica);
                    quimica = Number(quimica);
                    biologia = Number(biologia);
                    matematicas = Number(matematicas);
                    informatica = Number(informatica);

                    
                    let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;

                    
                    let porcentaje = (sumaCalificaciones / 50) * 100;

                    
                    let calificacion;
                    if (porcentaje >= 0 && porcentaje <= 59.9) {
                        calificacion = "Mala";
                    } else if (porcentaje >= 60 && porcentaje <= 80) {
                        calificacion = "Buena";
                    } else if (porcentaje > 80) {
                        calificacion = "Excelente";
                    } else {
                        calificacion = "Inválida"; 
                    }

                    
                    console.log(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}.`);

                    
                    rl.close();
                });
            });
        });
    });
});
