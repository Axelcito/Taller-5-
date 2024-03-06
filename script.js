console.log("Hello Wordl")

let nombre = prompt("Ingrese su nombre:");

let apellido = prompt("Ingrese su apellido:");

let anoNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
let edad = new Date().getFullYear() - anoNacimiento;

let diaNacimiento = prompt("Ingrese su día de nacimiento:");

let mesNacimiento = prompt("Ingrese su mes de nacimiento:");

console.log(`Hola ${nombre} ${apellido}, tienes ${edad} años y naciste el día ${diaNacimiento} de ${mesNacimiento}.`);
