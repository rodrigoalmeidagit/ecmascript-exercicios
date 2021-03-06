var produtos = [
  { nome: "Cereal", preco: "10", dataValidade: "21/02/2017" },
  { nome: "Suco de Abacaxi", preco: "12", dataValidade: "01/01/2017" },
  { nome: "Torta de frango", preco: "25", dataValidade: "07/07/2017" },
];

const existeProdutosDatados = (produtos, data) => {
  let today = new Date()
  if (data) today = new Date(data)
  return produtos.some(produto => new Date(produto.dataValidade) < today)
};

const checkValidade = existeProdutosDatados(produtos, '2021-01-01')

console.log(checkValidade);