const numbers = [1, 4, 9, 16, 25, 36, 49, 64, 81]

function calculaRaizQuadrada(array) {
  return array.map(number => Math.sqrt(number))
}

const raizQuadrada = calculaRaizQuadrada(numbers)

console.log(numbers);
console.log(raizQuadrada);
