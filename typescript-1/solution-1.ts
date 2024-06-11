//Delaclaracion de variables
//Variables logicas
let isUserRegister: boolean = true;
let hasUserAgreedToTerms: boolean = false;

//Variables numericas
let userAge: number = 18;
let stock: number = 100;

//Varibles any
let userPreference: any = 'dark mode';
let userStatus: any = { loggedIn: true};

//Variables string
let petName: string = 'Sasy';
let petLastname: string = 'Quinvar';

//Plantilla string
let studentName: string = 'David';
let studentLastname: string = 'Vargas';
let welcomeMessage: string = `Bienvenida ${studentName} ${studentLastname} a nuestro sitio web, gracias por registrarte`;
console.log(welcomeMessage);

//Array de numeros
let numberArray: number[] = [1,2,3,4,5];

//Array de string
let stringArray: string[] = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco'];

//Recorrido de array
numberArray.forEach(num => console.log(num));
stringArray.forEach(str => console.log(str));

//Eliminar elementos
//Eliminar ultimo elemento
let deleteNumber = numberArray.pop();
console.log("Numero eliminado:", deleteNumber);
console.log("Array actualizado", numberArray);

//Eliminar primer elemento
let deleteNumber2 = numberArray.shift();
console.log("Numero eliminado:", deleteNumber2);
console.log("Array actualizado", numberArray);

//Eliminar elemento segun rango
numberArray.splice(1,2);
console.log("Array actualizado", numberArray);

//Eliminar elemento segun rango y reemplaza con otros elementos.
numberArray.splice(1,2, 10, 11);
console.log("Array actualizado", numberArray);

//Actualizar elementos
stringArray[2] = 'Diez';
console.log("Array actualizado", stringArray);

//Agregar elementos
//Agregar al final 
stringArray.push('Sexto', 'Septimo');
console.log("Array actualizado", stringArray);

//Agregar al principio
stringArray.unshift('Cero');
console.log("Array actualizado", stringArray);


//Varibles tipo objeto 
let daysOfWeek: {[key: number]:string} = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado'
}

let numberObjects: {[key: string]: number} = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}

//recorrido de variables tipo objeto
for (let day in daysOfWeek) {
  console.log(day);
}

for (let number in numberObjects) {
  console.log(number);
}

//Elimnar elemento valor-clave.
delete daysOfWeek[0];
delete numberObjects.zero;

//Leer elemento valor-clave.
daysOfWeek[0];
numberObjects.zero;
numberObjects["one"];

//Actualizar elemenro valor-clave.
daysOfWeek[6] = 'Junio';
numberObjects.one = 29;
numberObjects["seven"] = 70;

//Ciclo for
for(let i = 1 ; i <= 10; i++) {
  console.log(i);
}

//Ciclo while
let number: number;

while (true) {
  let userInput = prompt("Ingrese un numero:"); // Store the prompt result

  if (userInput === null) {
    break; // Exit if user cancels the prompt
  }

  number = parseInt(userInput); // Parse only if userInput is not null

  if (number > 10) {
    break;
  }
}
