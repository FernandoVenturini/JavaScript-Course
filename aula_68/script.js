// Polimorfismo: mesmo metodo com funcionalidades diferentes;

class Cars {
    constructor(tipo, estagioTurbo) {
        this.turbo = new Turbo(estagioTurbo);
        if(tipo == 1) {
            this.velMax = 120;
            this.nome = 'Normal';
        } else if(tipo == 2) {
            this.velMax = 160;
            this.nome = 'Esportivo';
        } else if(tipo == 3) {
            this.velMax = 200;
            this.nome = 'Super esportivo';
        }
        this.velMax += this.turbo.potencie;
    }
    info() {
        console.log(this.nome);
        console.log(this.velMax);
        console.log(this.turbo);
        console.log('---------');
    }
}

class Turbo {
    constructor(e) {
        if(e == 0) {
            this.potencie = 0;
        }if(e == 1) {
            this.potencie = 50;
        } else if(e == 2) {
            this.potencie = 75;
        } else if(e == 3) {
            this.potencie = 100;
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
car_1.info();
car_2.info();
car_3.info();