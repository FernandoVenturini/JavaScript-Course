'use strict'
// Variavel var:
if(true) {
    var nome = 'Fernando';

}
console.log(nome);

// Variavel let:
function teste() {

    if (true) {
        let nome2 = 'Fernando';
        console.log('Dentro do if do teste ' + nome2);
    }
    console.log('Dentro de teste ' + nome2);
}
teste();

let nome3 = 'Fernando';
nome3 = 'CFB Cursos';
console.log(nome3);


// VAriavel const
const curso = 'JavaScript';