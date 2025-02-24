const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el primer número: ", (num1) => {
    rl.question("Ingrese el segundo número: ", (num2) => {
        rl.question("Ingrese el tercer número: ", (num3) => {

            
            num1 = Number(num1);
            num2 = Number(num2);
            num3 = Number(num3);

            let mayor;

            
            if (num1 >= num2 && num1 >= num3) {
                mayor = num1;
            } else if (num2 >= num1 && num2 >= num3) {
                mayor = num2;
            } else {
                mayor = num3;
            }

            
            console.log(`El número mayor entre ${num1}, ${num2} y ${num3} es ${mayor}.`);

            
            rl.close();
        });
    });
});
