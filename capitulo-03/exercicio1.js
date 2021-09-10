// Exercício 1 - Par ou ímpar?
var numeros = [0, 1, 2, 3, 4, 5];

// for (var i = 0; i <= numeros.length; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " é par");
//   } else {
//     console.log(i + " é ímpar");
//   }
// }

numeros.forEach((numero) => numero % 2 === 0
  ? console.log(`${numero} é par`)
  : console.log(`${numero} é impar`))

// saída:
// 0 é par
// 1 é ímpar
// 2 é par
// 3 é ímpar
// 4 é par
// 5 é ímpar