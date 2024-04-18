
// //exercício 1
// function ordenarArray(array) {
//   let aux;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//       aux = array[i + 1]
//       array[i + 1] = array[i]
//       array[i] = aux
//     }

//   }
// }
// const vet = [1, -3,]

// inverterArray(vet)
// console.log(vet)

// //exercício 3

// function inverterArray(array) {
//   let invertido = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     invertido.push(array[i]);
//   }
//   return invertido;
// }
// let numeros = [];
// for (let i = 0; i < 3; i++) {
//   let numero = parseInt(prompt("Digite um número: "));
//   numeros.push(numero);
// }

// console.log(`Array Original:` + numeros)

// console.log(`array invertido` + inverterArray(numeros))

// // exercício 4

// function inverterArray(array) {
//   let invertido = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     invertido.push(array[i]);
//   }
//   return invertido;
// }

// let numeros = [];

// let quantEmentArray = parseInt(prompt("Digite um número para quantidade no array: "))


// for (let i = 0; i < quantEmentArray; i++) {
//   let numero = parseInt(prompt("Digite um número: "));
//   numeros.push(numero);
// }



// console.log(`Array Original:` + numeros)

// console.log(`array invertido:` + inverterArray(numeros))

// //exercício 6

// let numero = 2
// let numeros = [1, 2, 3, 2, 5]

// function encontrarElemento(array, num) {
//   let indices = []
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === num) {
//       indices.push(i)
//     }
//   }
//   return indices
// }

// console.log(`indices : ` + encontrarElemento(numeros, numero))

// //exercício 7

// let numero = parseInt(prompt(`Digite um númro positivo !!`))

// function fabunnaci(n) {
//   let fibonnaci = [0, 1]

//   for (let i = 2; i < n; i++) {
//     fibonnaci.push(fibonnaci[i - 1] + fibonnaci[i - 2])
//   }

//   return fibonnaci
// }

// console.log(`A serie é: ` + fabunnaci(numero))

// //exercício 8

// function factorial(n) {
//   let cont = 1
//   let factorial = 1

//   while (cont <= n) {
//     factorial = factorial * cont
//     cont++
//   }

//   return factorial;
// }

// let fact = [];
// let numero = parseInt(prompt(`Digete a quantidade  de elemento`))

// for (let i = 0; i <= numero; i++) {
//   fact.push(factorial(i))
// }

// console.log(`o array com factorias é: ` + fact)

// exercício 9

