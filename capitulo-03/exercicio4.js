// ## Exercício 4 - Equilibrio de parênteses

function validaParenteses(parenteses) {
  var arrayParenteses = parenteses.split(""); // reduce só funciona com arrays
  /**
   * Vamos utilizar números para essa solução. Para cada parêntese esquerdo, vamos
   * somar 1 e para cada parêntese direito vamos subtrair um
   **/
  var balanceado = !arrayParenteses.reduce(function (soma, parentese) {
    if (soma < 0) { return soma } // para o caso de começar com ")"
    if (parentese === "(") { return ++soma }
    if (parentese === ")") { return --soma }
  }, 0);

  return balanceado;
}

console.log(validaParenteses('()()()'))