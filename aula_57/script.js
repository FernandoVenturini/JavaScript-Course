class People {
    constructor(parameterName) {
        this.name = parameterName;
    }
}

let p1 = new  People('Fernano');
let p2 = new  People('Lavinia');
let p3 = new  People('Vicenzo');
let p4 = new  People('Fiorella');
console.log(p1.name);
console.log(p2.name);
console.log(p3.name);
console.log(p4.name);


class Car {
    constructor(paramNome, paramTipo) {
        this.name = paramNome;

        if(paramTipo == 1) {
            this.tipo = 'Esportivo';
            this.velmax = 300;
        } else if (paramTipo == 2) {
            this.tipo = 'Utilitario';
            this.velmax = 100;
        } else if (paramTipo == 3) {
            this.tipo = 'Passeio';
            this.velmax = 160;
        } else {
            this.tipo = 'Militar';
            this.velmax = 180;
        }
    }
    getName() {
        return this.name;
    }
    getTipo() {
        return this.tipo;
    }
    getVelMax() {
        return this.velmax;
    }
    getInfo() {
        return [this.name, this.tipo, this.velmax];
    }
    setName(name) {
        this.name = name;
    }
    setVelMax(velmax) {
        this.velmax = velmax;
    }
    info() {
        console.log(`Name: ${this.name}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`V.Max: ${this.velmax}`);
        //console.log('Name: ' + this.name);
        //console.log('Tipo: ' + this.tipo);
        //console.log('V.Max: ' + this.velmax);
    }
}

let c1 = new Car('Rapidao', 1);
let c2 = new Car('Super Luxo', 2);
let c3 = new Car('Bombadao', 3);
let c4 = new Car('Carrego Tudo', 4);

c1.info();
//c2.info();
//c3.info();
//c4.info();

//console.log(c1.getName());

//console.log(c1.getInfo());

c1.setName('BMW');
c1.setVelMax(500);

