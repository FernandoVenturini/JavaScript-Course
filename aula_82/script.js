// Variaveis da primeira div:
const num_objetos = document.querySelector('#num_objetos');

// Variavel da segunda div(txt_qtde):
const txt_qtde = document.querySelector('#txt_qtde');

// Variaveis dos botoes:
const btn_add = document.querySelector('#btn_add');
const btn_remover = document.querySelector('#btn_remover');

// Variavel palco:
const palco = document.getElementById('palco');

// Criando variaveis largura e altura do palco:
let larguraPalco = palco.offsetWidth;
let alturaPalco = palco.offsetHeight;

// Criando um array para adicionar as bolas:
let bolas = [];
let numBola = 0;

// Criando classe:
class Bola {
   constructor(arrayBolas, palco) {
      this.tam = Math.floor(Math.random() * 15) + 10; // Calculo do tamanho;
      this.r = Math.floor(Math.random() * 255); // Cor
      this.g = Math.floor(Math.random() * 255); // Cor
      this.b = Math.floor(Math.random() * 255); // Cor
      this.px = Math.floor(Math.random() * (larguraPalco - this.tam)); // Largura
      this.py = Math.floor(Math.random() * (alturaPalco - this.tam)); // Altura
      this.velx = Math.floor(Math.random() * 2) + 0.5;
      this.vely = Math.floor(Math.random() * 2) + 0.5;
      this.dirx = (Math.random() * 10) > 5 ? 1 : -1;
      this.diry = (Math.random() * 10) > 5 ? 1 : -1;
      this.palco = palco;
      this.arrayBolas = arrayBolas;
      this.id = Date.now() + '_' + Math.floor(Math.random() * 100);
      this.controle = setInterval(this.controlar, 10);
      this.eu = document.getElementById(this.id);
      this.desenhar();
      numBola++;
      num_objetos.innerHTML = numBola;
   }
   minhaPos = () => {
      return this.arrayBolas.indexOf(this);
   }
   remover = () => {
      clearInterval(this.controle);
      bolas = bolas.filter((b) => {
         if(b.id != this.id) {
            return b;
         }
      })
      this.eu.remove();
      numBola--;
   }   
   desenhar =  () => {

   }
   controlar = () => {

   }
}

// Adicionando evento no palco para quando a janela for redimensionada:
window.addEventListener('resize', () => {
   larguraPalco = palco.offsetWidth;
   alturaPalco = palco.offsetHeight;
})

// Adicionando evento click no botao adicionar:
btn_add.addEventListener('click', (evt) => {
   const qtde = txt_qtde.value;
   for(let i = 0; i < qtde; i++) {

   }
})

// Adicionando evento click no botao remover:
btn_remover.addEventListener('click', (evt) => {
   bolas.map(