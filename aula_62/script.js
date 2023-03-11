// Classe Pai / Base
class Carro {
    
    constructor(nome, portas) { // Construtor com dois parametros
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.velocidade = 0;
        this.cor = undefined;
    }
    ligar = function() { // Funcao para ligar o carro
        this.ligado = true;
    }
    desliga = function() { // Funcao para desligar o carro
        this.desligado = false;
    }
    setCor = function(cor) { // Funcao para cores do carro
        this.cor = cor;
    }
}

// Heritage(heranca em ingles)
class Militar extends Carro { // Classe Filho
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas);
        this.blindagem = blindagem;
        this.municao = municao;
        this.setCor('Verde');
    }
    atirar = function() {
        if(this.municao > 0) {
            this.municao --;
        }
    }
}

// Heritage 02:
class Utilitario extends Carro {
    constructor(nome, portas, lugares) {
        super(nome, portas);
        this.lugares = lugares;
    }
}

const c1 = new Carro('Normal', 4);
c1.ligar();
c1.setCor('Preto');

console.log(`Nome: ${c1.nome}`);
console.log(`Portas: ${c1.portas}`);
//console.log(`Ligado: ${c1.ligado}`);
console.log(`Ligado: ${(c1.ligado ? 'SIM' : 'NAO')}`);
console.log(`Velocidade: ${c1.velocidade}`);
console.log(`Cor: ${c1.cor}`);
console.log('-----------------------------');


const c2 = new Militar('Lutador', 1, 100, 50);
c2.setCor('Azul'); // Muda a cor para azul
c2.atirar(); // Diminui a municao

console.log(`Nome: ${c2.nome}`);
console.log(`Portas: ${c2.portas}`);
console.log(`Ligado: ${(c2.ligado ? 'SIM' : 'NAO')}`);
console.log(`Velocidade: ${c2.velocidade}`);
console.log(`Blindagem: ${c2.blindagem}`);
console.log(`Municao: ${c2.municao}`);
console.log(`Cor: ${c2.cor}`);