//Async & Await

//
async function squareAsync(num: number): Promise<number> {
  return num * num;
}

const num = 5;
const result = squareAsync(num);

console.log(result); //imprime una promesa

//usando await
async function printSquareAsync() {
  const result = await squareAsync(num);
  console.log(result); //imprime el valor numerico: 25
  
}

//usando .then
squareAsync(num).then(result => {
  console.log(result); //imprime el valor numerico: 25
  
})

//Función que retorna una promesa que se resuelve con el valor 8 después de 6 segundos
function resultado(): Promise<number> {
  return new Promise<number> ((resolve,reject) => {
    setTimeout(() => {
      resolve(8)
    }, 6000)
  })
}

const resu = resultado();
console.log(result); //imprime una promesa, Promise { <pending> }

async function printResultado() {
  const value = await resu;
  console.log(value); //imprime el valor numérico: 8
}

resultado().then(value => {
  console.log(value); //imprime el valor numérico: 8
})

// Función cuadradoAsincrono que llama a la función resultado y espera su resolución
async function cuadradoAsincrono() {
  const value = await resultado();
  const squareValue = value * value;
  console.log(squareValue); // Imprime el valor al cuadrado: 64
}

cuadradoAsincrono()

//a) Usamos async para que una función retorne una promesa sin crearla explícitamente.
//b) Usamos await dentro de una función async o .then() para capturar el valor de una promesa.
//c) La cláusula await debe estar dentro de una función async