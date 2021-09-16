const clonarObjeto = (obj) => {
  const prop = Object.getOwnPropertyNames(obj)
  const copy = {}
  prop.forEach(element => copy[element] = obj[element])

  return copy
}

const objeto = {
  nome: 'rodrigo',
  idade: 20
}

const newObject = clonarObjeto(objeto)

console.log('Objeto Original', objeto);
console.log('Objeto Cópia', newObject);