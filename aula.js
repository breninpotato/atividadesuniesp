const nomeAluno = prompt("Digite o nome do aluno:");

const nota1 = Number(prompt("Digite a nota da primeira avaliação:"));
const nota2 = Number(prompt("Digite a nota da segunda avaliação:"));

const media_minima = 7;
const media = (nota1 + nota2) / 2;

let situacao;
let notaRecuperacao = null;

if (media >= media_minima) {
  situacao = "APROVADO";
} else if (media >= 5) {
  notaRecuperacao = Number(prompt("Digite a nota da recuperação:"));

  if (notaRecuperacao < 5) {
    situacao = "REPROVADO";
  } else {
    situacao = "APROVADO";
  }
} else {
  situacao = "REPROVADO";
}

console.log(`Nome do aluno: ${nomeAluno}`);
console.log(`Nota 1: ${nota1}`);
console.log(`Nota 2: ${nota2}`);
console.log(`Média: ${media}`);

if (notaRecuperacao !== null) {
  console.log(`Nota de Recuperação: ${notaRecuperacao.toFixed(2)}`);
}

console.log(`Situação do Aluno: ${situacao}`);