let encendido = true;
let PorcentajeCarga = 100;

if(encendido)
{
console.log("Su teléfono está encendido");
}

else
{
console.log("Su teléfono está apagado, encienda su teléfono");
}

if(PorcentajeCarga == 100)
{
console.log("Su teléfono tiene la carga completa");
}

else if(PorcentajeCarga > 10 && PorcentajeCarga < 100)
{
console.log("Su teléfono no tiene la carga completa");
}

else if(PorcentajeCarga <= 10 && PorcentajeCarga > 0)
{
console.log("Su teléfono está casi descargado");
}
else if(PorcentajeCarga == 0)
{
console.log("Su teléfono está completamente descargado, conectar el cargador y encender teléfono");
}



