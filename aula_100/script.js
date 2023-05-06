const nome = Symbol('nome');
//console.log(nome.description);

/************************************************************************************************************/

const numero = Symbol('nome');
const corUniforme = Symbol('nome');
const Jogador = {
    nome: 'jogador1',
    numero: 10,
    corUniforme: 'Amarelo'
}
console.log(Jogador.nome);

/************************************************************************************************************/

const nome2 = Symbol('nome');
const numero2 = Symbol('numero');
const corUniforme2 = Symbol('corUniforme2');
const Jogador2 = {
    [nome]: 'jogador1',
    [numero2]: 10,
    [corUniforme2]: 'Amarelo'
}
for (const p in Jogador2) {
    console.log(p);
    
}
console.log(Jogador2[nome]);