let UsuarioBaseDatos = "agenteYT_poder";
let ClaveBaseDatos = "106050403";
let UsuarioIngresado = "agenteYT_poder";
let ClaveIngresada = "106050403";
let Alias_Usuario = "Genshi";

if (UsuarioIngresado == UsuarioBaseDatos && ClaveIngresada == ClaveBaseDatos)
{
console.log(`Hola ${Alias_Usuario} bienvenido, seleccione un juego para jugar`);
}
else 
{
console.log("No puede acceder a esta cuenta, usuario o contraseña incorrectos");
}