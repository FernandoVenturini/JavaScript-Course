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
   constructor() {
      this.tam = Math.floor(Math.random() * 15) + 10; // Calculo do tamanho;
      this.r = Math.floor(Math.random() * 255); // Cor
      this.g = Math.floor(Math.random() * 255); // Cor
      this.b = Math.floor(Math.random() * 255); // Cor
      this.px = Math.floor(Math.random() * (larguraPalco - this.tam)); // Largura
      this.py = Math.floor(Math.random() * (alturaPalco - this.tam)); // Altura
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
   bolas.map((b) => {

   })
})