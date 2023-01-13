function aluno(nome, nota) {
  this.nome = nome;
  this.nota = nota;

  console.log(nome);
  console.log(nota);
}
aluno('Fernando', 10);

/*********************************************************************/

function aluno_2(nome2, nota2) {

  this.nome2 = nome2;
  this.nota2 = nota2;

  this.dados_anonimo = function() {
    setTimeout(function() {
      console.log(this.nome2);
      console.log(this.nota2);
    }, 2000)                        
  }
}
const al1 = new aluno_2('Fernando', 9);
console.log(al1);

/*********************************************************************/

function aluno3(nome3, nota3) {

  this.nome3 = nome3;
  this.nota3 = nota3;

  this.dados_arrow = function() {
    setTimeout(() => {
      console.log(this.nome3);
      console.log(this.nota3);
    })
  }
}
const res = aluno3('Fernando Venturini', 42);
console.log(res)