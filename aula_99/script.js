class Jogador {
    constructor(nome) {
        this.nome = nome;
        this.id = Symbol();
    }
}

let jogadores = [new Jogador('j1'), new Jogador('j2'), new Jogador('j3'), new Jogador('j4'), new Jogador('j5'), new Jogador('j6')];

let s1 = jogadores[2].id;

// Excluindo um jogador pelo Symbol:
jogadores = jogadores.filter((j) => {
    return j.id != s1;
})


console.log(s1);
console.log(jogadores);


/*******************************************************************************************************************/

// Se quiser selecionar todos jogadores com o nome j1
class Jogador02 {
    constructor(nome) {
        this.nome = nome;
        this.id = Symbol();
    }
}

let jogadores02 = [new Jogador('j1'), new Jogador('j2'), new Jogador('j3'), new Jogador('j4'), new Jogador('j5'), new Jogador('j6')];

let simbolos = [];

// Excluindo um jogador pelo Symbol:
let simbolo_jogadores = jogadores02.filter((j) => {
    return j.nome == 'j1';
})

simbolos = simbolo_jogadores.map((j) => {
    return j.id;
})


console.log(simbolos);
console.log(simbolo_jogadores);