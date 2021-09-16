var dimensoes = [
  { altura: 10, comprimento: 20 },
  { altura: 2, comprimento: 4 },
  { altura: 1, comprimento: 1 },
  { altura: 50, comprimento: 50 },
];

function calculaAreaTotal(array) {
  return array.reduce((acc, { altura, comprimento }) =>
    acc += altura * comprimento, 0)
}

console.log(calculaAreaTotal(dimensoes));
