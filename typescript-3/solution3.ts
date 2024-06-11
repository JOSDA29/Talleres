//Promesas
//Promesa que siempre se resuelve
const promise = new Promise<string>((resolve, reject) => {
  resolve('Somos programadores, hacemos mover el mundo')
})

promise.then(message => {
  console.log(message);
  
})

//Promesa que siempre se rechaza
const promise2 = new Promise<string>((resolve, reject) => {
  reject('Ha ocurrido un error desconocido.')
})

promise2.catch(error => {
  console.log(error); // "Ha ocurrido un error desconocido."
})

// Promesa basada en el estrato para subsidio
const estrato = 2;

const subsidioPromise = new Promise<string>((resolve, reject) => {
  if (estrato >= 1 && estrato <=6) {
    if (estrato <= 2) {
      resolve("El usuario tiene derecho al subsidio.");
    } else {
      resolve("El usuario tiene derecho al subsidio.");
    }
} else {
  reject(new Error("Estrato no válido"));
}
})

subsidioPromise.then(message => {
  console.log(message);
}).catch(err => {
  console.log('Ha ocurrido un error: ', err.message);
})

// Promesa encadenada con 4 métodos .then
const chainedPomise = new Promise<number>((resolve, reject) => {
  resolve(2)
})

chainedPomise
.then(value => value*value)
.then(value => value*value)
.then(value => value*value)
.then(value => {
  console.log(`El valor final es: ${value}`);
})

//Tres promesas encadenadas
const promesa1 = new Promise<string>((resolve, reject) => {
  resolve('Somos ADSI')
})

const promesa2 = new Promise<string>((resolve, reject) => {
  const condition = true;
  if (condition) {
    resolve('Somos programadores')
  } else {
    reject(new Error('Promesa 2 no cumplida'))
  }
})

const promesa3 = new Promise<string>((resolve, reject) => {
  resolve('Hacemos mover el mundo')
})

promesa1
.then(message1 => {
  console.log(message1);
  return promesa2;
})
.then(message2 => {
  console.log(message2);
  return promesa3;
})
.then(message3 => {
  console.log(message3);
})
.catch( err => {
  console.log('Ha ocurrido un error: ', err.message);
  
})

// Promesa dependiente de setTimeout
const asyncPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('promesa resolvida')
  }, 3000)

  setTimeout(() => {
    reject(new Error('info error'))
  }, 2000)
})

asyncPromise
.then(message => {
  console.log(message);
})
.catch(err => {
  console.log(err.stack);
  
})

// Cuatro promesas con setTimeout
const promiseA = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('Promesa A resuelta')
  }, 1000)
});

const promiseB = new Promise<string>((resolve, reject) => {
  setTimeout(()=> {
    resolve('Promesa B resuelta')
  }, 2000)
});

const promiseC = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('Promesa C resuelta')
  }, 4000)
});

const promiseD = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promesa D resuelta')
  }, 5000)
});

Promise.all([promiseA, promiseB, promiseC, promiseD])
.then(results => {
  results.forEach(result => {
    console.log(result);
  })
})
.catch(err => {
  console.log('Ha ocurrido un error: ', err.message);
  
});

Promise.race([promiseB,promiseD])
.then(result => {
  console.log('La primera promesa resuelta es: ', result);
})
.catch(err => {
  console.log('ha ocurrido un error', err.message);
});
