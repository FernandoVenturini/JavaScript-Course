// Prototype: usado qdo precisar adicionar uma propriedade ou mtodo ao obj;
const Nave = function(energia) {
    this.energia = energia;
    this.disparos = 100;
}

const n1 = new Nave(100);

Nave.prototype.vidas = 3;
Nave.prototype.disparar = function() {
    if(this.disparo > 0) {
        this.disparos--;
    }
}

n1.disparor();
n1.disparor();
n1.disparor();

console.log(Nave);
console.log(n1);
console.log(n1.disparos);
