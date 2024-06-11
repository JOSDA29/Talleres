//funcion con paramentro opcional
function exampleFunction(num: number, text: string = 'default text', flag?: boolean) {
  console.log(`Number: ${num}, Text: ${text}, Flag: ${flag}`);
}

exampleFunction(42); // Number: 42, Text: default text, Flag: undefined
exampleFunction(42, "custom text"); // Number: 42, Text: custom text, Flag: undefined
exampleFunction(42, "custom text", true); // Number: 42, Text: custom text, Flag: true

//variable tipo funcion que retorna un suma
const sumFunction = (a: number, b: number): number => a+b;
console.log(sumFunction(5, 3)); // 8

//Uso de setTimeout para implementar un callback que se llama a los 5 segundos e imprime un mensaje
setTimeout(() => {
  console.log("HOLA ADSI");
}, 5000)

//funcion flecha sin argumentos
const greet = () => console.log("Hola ADSI");
greet();

//funcion flecha con argumentos que retorna un string
const ageMessage = (edad:number):string => `La edad pasada como argumento es ${edad}`;
console.log(ageMessage(18)); // La edad pasada como argumento es 18

//funcion flecha que retrona el producto de los parametros
const productFunction = (a:number, b:number):number => (a*b);
console.log(productFunction(6, 7)); // 42

//funcion flecha que retrona el modulo de los parametros
const moduleOperation = (a:number , b:number):number => {
  const mod = a % b;
  return mod;
}

console.log(moduleOperation(10,3)); // 1

//Desestructuración de objetos y arreglos
let persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30
};

// Desestructuración básica
let nombre = persona.nombre;
let apellido = persona.apellido;
let edad = persona.edad;

console.log(nombre); // Imprime: Juan
console.log(apellido); // Imprime: Pérez
console.log(edad); // Imprime: 30

// Desestructuración con alias
let nombrePersona = persona.nombre; 
let apellidoPersona = persona.apellido; 
let edadPersona = persona.edad; 

console.log(nombrePersona); // Imprime: Juan
console.log(apellidoPersona); // Imprime: Pérez
console.log(edadPersona); // Imprime: 30

let numeros = [1, 5, 10, 15, 20];

// Desestructuración básica
let primerNumero = numeros[0];
let segundoNumero = numeros[1];
let tercerNumero = numeros[2];

console.log(primerNumero); // Imprime: 1
console.log(segundoNumero); // Imprime: 5
console.log(tercerNumero); // Imprime: 10

// Desestructuración con alias
let [num1, num2, num3] = numeros; // Alias para índices

console.log(num1); // Imprime: 1
console.log(num2); // Imprime: 5
console.log(num3); // Imprime: 10
