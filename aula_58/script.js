/*
class People {
    constructor() {
        //this.name = 'Fernando';
    }
}

let p1 = new People();
console.log(p1.name);
*/

/*************************************************************************************************/
/*
class People {
    constructor(parameterName) {
        this.name = parameterName;
    }
}
let p01 = new People('Fernando');
let p02 = new People('Lavinia');
let p03 = new People('Vicenzo');
let p04 = new People('Fiorella');
console.log(p01.name);
console.log(p02.name);
console.log(p03.name);
console.log(p04.name);
*/

/*************************************************************************************************/

/*
class Car {
    constructor(pname, ptipo) {
        this.name = pname;

        if(ptipo == 1) {
            this.tipo = 'Esportivo';
            this.velmax = 300;
        } else if(ptipo == 2) {
            this.tipo = 'Utilitario';
            this.velmax = 100;
        } else if(ptipo == 3) {
            this.tipo = 'Passeio';
            this.velmax = 160;
        } else {
            this.tipo = 'Militar';
            this.velmax = 180;
        }
    }
    
}

let c1 = new Car('Rapidao', 1);
let c2 = new Car('Super Luxo', 2);
let c3 = new Car('Bombadao', 3);
let c4 = new Car('Carrego Tudo', 4);

console.log(c1.name);
console.log(c1.tipo);
console.log(c1.velmax);
*/

/*************************************************************************************************/

/*
class Car {
    constructor(pname, ptipo) {
        this.name = pname;

        if(ptipo == 1) {
            this.tipo = 'Esportivo';
            this.velmax = 300;
        } else if(ptipo == 2) {
            this.tipo = 'Utilitario';
            this.velmax = 100;
        } else if(ptipo == 3) {
            this.tipo = 'Passeio';
            this.velmax = 160;
        } else {
            this.tipo = 'Militar';
            this.velmax = 180;
        }
    }
    info() {
        console.log(`Name: ${this.name}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Vel: ${this.velmax}`);
        console.log('-------------------');
    }
}

let c1 = new Car('Rapidao', 1);
let c2 = new Car('Super Luxo', 2);
let c3 = new Car('Bombadao', 3);
let c4 = new Car('Carrego Tudo', 4);

c1.info();
c2.info();
*/

/*************************************************************************************************/

/*
class Car {
    constructor(pname, ptipo) {
        this.name = pname;

        if(ptipo == 1) {
            this.tipo = 'Esportivo';
            this.velmax = 300;
        } else if(ptipo == 2) {
            this.tipo = 'Utilitario';
            this.velmax = 100;
        } else if(ptipo == 3) {
            this.tipo = 'Passeio';
            this.velmax = 160;
        } else {
            this.tipo = 'Militar';
            this.velmax = 180;
        }
    }
    // Criando metodos para trabalhar com propriedades:
    getName() {
        return this.name;
    }
    getTipo() {
        return this.tipo;
    }
    getVelMax() {
        return this.velmax;
    }
    // Returnando em um array:
    getInfo() {
        return [this.name, this.tipo, this.velmax];
    }
    info() {
        console.log(`Name: ${this.name}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Vel: ${this.velmax}`);
    }
}

let c1 = new Car('Rapidao', 1);
let c2 = new Car('Super Luxo', 2);
let c3 = new Car('Bombadao', 3);
let c4 = new Car('Carrego Tudo', 4);

//console.log(c1.getName());
console.log(c1.getInfo());
console.log(c1.getInfo()[0]);
*/

/*************************************************************************************************/

class Car {
    canal = 'CFB Cursos';

    constructor(pname, ptipo) {
        this.name = pname;
        //this.canal = 'Youtube';

        if(ptipo == 1) {
            this.tipo = 'Esportivo';
            this.velmax = 300;
        } else if(ptipo == 2) {
            this.tipo = 'Utilitario';
            this.velmax = 100;
        } else if(ptipo == 3) {
            this.tipo = 'Passeio';
            this.velmax = 160;
        } else {
            this.tipo = 'Militar';
            this.velmax = 180;
        }
    }
    setName(name) {
        this.name = name;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    setVelMax(velmax) {
        this.velmax = velmax;
    }
    info() {
        console.log(`Name: ${this.name}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Vel: ${this.velmax}`);
        console.log(`Canal: ${this.canal}`);
    }
}

let c1 = new Car('Rapidao', 1);
let c2 = new Car('Super Luxo', 2);
let c3 = new Car('Bombadao', 3);
let c4 = new Car('Carrego Tudo', 4);

c1.setName('Super Veloz');
c1.setVelMax(500);
c1.info();