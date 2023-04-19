const objs = document.querySelector('#objetos');

 const computador = {
    cpu: 'i9',
    ram: '64Gb',
    hd: '2TB',
    info: function() {
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`HD: ${this.hd}`);
    }
 };

 objs.innerHTML = `${computador.cpu + computador.ram + computador.hd}`;

 console.log(computador);

 const computadores = [
    {
        cpu: 'i9',
        ram: '64Gb',
        hd: '2TB',
    },
    {
        cpu: 'i7',
        ram: '32Gb',
        hd: '1TB',
    },
    {
        cpu: 'i5',
        ram: '16Gb',
        hd: '500gb'
    }
 ];

 objs.innerHTML = JSON.stringify(computadores);
 console.log(computadores);

 computadores.forEach((c) => {
    console.log(c);
    const div = document.createElement('div');
    div.innerHTML = c.cpu + '<br>' + c.ram + '<br>' + c.hd;
    div.setAttribute('class', 'computador');
    div.appendChild(div);
 })
