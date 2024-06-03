const objs = document.querySelector('#objetos');

 const computador = {
    cpu: 'i9',
    ram: '32Gb',
    hd: '2TB',
    info:  function() {
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`HD: ${this.hd}`);
    }
    
 };

//console.log(computador);
//console.log(computador.cpu);

// Aula 91 - Como fazer clonagem:
 // Exemplo 01:
const clonar = Object.assign({},computador);
clonar.info();

const clonar1 = {obj: '1'}
const clonar2 = {obj: '2'}
const clonar3 = {obj: '3'}
const clonar4 = Object.assign(clonar1, clonar2, clonar3);
console.log(clonar4);   

// Exemplo 02: Usando o delete:
delete(computador.hd);

// Exemplo 03: Criando um produto
const criando = Object.create(computador);
criando.info();


 const computadores = [
    {
        cpu: 'i9',
        ram: '64Gb',
        hd: '2TB'
    },
    {
        cpu: 'i7',
        ram: '32Gb',
        hd: '1gb'
    },
    {
        cpu: 'i7',
        ram: '16Gb',
        hd: '500gb'
    }
 ];
 //objs.innerHTML = computador.cpu + ' - ' + computador.ram + ' - ' + computador.hd;
 //objs.innerHTML = JSON.stringify(computador);
 
 //computador.info();

 //objs.innerHTML = JSON.stringify(computadores);
 //console.log(computadores);

 computadores.forEach((c) => {
    console.log(c);
    const div = document.createElement('div');
    div.innerHTML = c.cpu + '<br>' + c.ram + '<br>' + c.hd;
    div.setAttribute('class', 'computador');
    objs.appendChild(div);
 })
