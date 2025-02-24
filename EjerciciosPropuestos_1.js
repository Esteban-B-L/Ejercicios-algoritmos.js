const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Por favor ingrese su nombre: ", (Name) => {
    rl.question("Por favor, ingrese el número de horas trabajadas: ", (Horas) => {
        Horas = Number(Horas);
        let Salario;

        if (Horas <= 10 && Horas > 0) {
            Salario = Horas * 30000;
        } else if (Horas > 10) {
            Salario = Horas * 33000;
        } else {
            Salario = 0; 
        }

        console.log(`Señor/a ${Name}, el número de horas es ${Horas} y su salario equivale a $${Salario}.`);
        rl.close();
    });
});
