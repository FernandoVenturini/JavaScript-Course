// Criando objeto:
const People = {
    name: 'Fernando'
}

console.log(People.name);

/************************************************************************************************/

const People_02 = {
    name_02: 'Lavinia'
}
const p2 = People_02;
const p3 = People_02;

p3.name_02 = 'Fiorella';
p2['name_02'] = 'Vicenzo';
console.log(p2.name_02);
console.log(p3.name_02);

/************************************************************************************************/

const People_03 = {
    name_03: 'Vicenzo',
    getName: function() {
        return this.name_03;
    }
}

const p2b = People_03;
const p3b = People_03;

p3b.name_03 = 'Fiorella';
p2b['name_03'] = 'Lavinia';

console.log(p2b.getName());