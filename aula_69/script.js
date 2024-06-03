class CarroPadrao {
    constructor() {
        if(this.contructor === CarroPadrao) {
            throw new TypeError('Esta classe nao pode ser instanciada!');
        }
        if(this.ligar === undefined) {
            throw new TypeError('Obrigatorio implementar o metodo ligar!');
        }
        if(this.desligar === undefined) {
            throw new TypeError('Obrigatorio implementar o metodo desligar!');
        }
        this.rodas = 4;
        this.portas = 4;
        this.ligado = false;
    }
}

class Cars extends CarroPadrao{
    constructor(tipo, estagioTurbo) {
        super();
        this.turbo = new this.turbo(estagioTurbo);
        if(tipo === 1) {
            this.velMax = 120;
            this.nome = 'Normal';
        } else if(tipo === 2) {
            this.velMax = 160;
            this.nome = 'Esportivo';
        } else if(tipo === 3) {
            this.velMax = 200;
            this.nome = 'Super Esportivo';
        }
        this.velMax = this.turbo.potencia;
    }
    info() {
        console.log(this.nome);
        console.log(this.velMax);
        console.log(this.turbo);
        console.log(this.rodas);
        console.log(this.portas);
        console.log(this.ligado);
        console.log('---------');
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    };
}

class Turbo {
    constructor(e) {
        if(e === 0) {
            this.potencia = 0;
        } else if(e === 1) {
            this.potencia = 50;
        } else if(e === 2) {
            this.potencia = 75;
        } else if(e === 3) {
            this.potencia = 100;        
        }
    }
}

class CarEspecial extends Cars{
    constructor(estagioTurbo) {
        super(4, estagioTurbo);
        this.tipoInfo = 1;
        this.velMax = 300 + this.turbo.potencie;
        this.nome = 'Carro especial';
    }
    // Aqui entra o Polimorfismo:
    info() {
        if(this.tipoInfo == 1) {
            super.info();
        } else {
            console.log(`Nome: ${this.nome}`);
            console.log(`Velocidade: ${this.velMax}`);
            console.log(`Turbo: ${this.turbo.potencie}`);
            console.log('---------');
        }
    }
}

const car_1 = new Cars(1, 0);
const car_2 = new Cars(1, 1);
const car_3 = new CarEspecial(3);
//const car_4 = new CarroPadrao();
car_1.info();
car_2.info();
car_3.info();