// Static
class Npc {
    static alerta = false;
    constructor(energia) {
        this.energia = energia;
    }
    info = function() {
        console.log(`Energia: ${this.energia}`);
        //console.log(`Alerta: ${this.alerta ? 'SIM' : 'NAO'}`);
        console.log(`Alerta: ${Npc.alerta ? 'SIM' : 'NAO'}`);
        console.log('-------------------------');
    }
    static alertar = function() {
        Npc.alerta = true;
    }
}

const npc1 = new Npc(100);
const npc2 = new Npc(80);
const npc3 = new Npc(30);
const npc4 = new Npc(30);

//console.log(npc1);
//console.log(npc2);
//console.log(npc3);
Npc.alertar = true;

npc1.info();
npc2.info();
npc3.info();
npc4.info();