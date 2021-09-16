var alunos = [
  { nome: "Roberto", media: 1.5 },
  { nome: "Fernando", media: 3.5 },
  { nome: "Diogo", media: 5.5 },
  { nome: "Tiago", media: 6.0 },
  { nome: "Renata", media: 7.8 },
  { nome: "Cristian", media: 8.3 },
  { nome: "Julia", media: 9.5 },
];

const aprovados = (alunos, nota) => {
  return alunos.filter(({ media }) => media >= nota)
}

const mediaFinal = aprovados(alunos, 6);
console.log(mediaFinal);