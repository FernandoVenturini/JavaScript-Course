// PRIMEIRO PONTO:
// Variavel palco
const palco = document.querySelector('#palco');
// Variavel do paragrafo(num_objetos)
const num_objetos = document.querySelector('#num_objetos');
// Variavel do input(txt_qtde)
const txt_qtde = document.querySelector('#txt_qtde');
// Variavel do button adicionar(btn_add)
const btn_add = document.querySelector('#btn_add');
// Variavel do button remover(btn_remover)
const btn_remover = document.querySelector('#btn_remover');

// SEGUNDO PONTO:
//Setar o tamanho do palco(largura e atura):
let larguraPalco = palco.offsetWidth;
let alturaPalco = palco.offsetHeight;

// TERCEIRO PONTO:
// Criar um array onde as bolinhas vao ser adicionadas:
let bolas = [];
// Criando uma variavel referente ao numero de bolas: Comecando vazio
let numBola = 0;

// QUARTO PONTO:
// Obter um novo tamanho do palco para quando a janela for redirecionada:
   // Na janela adicionar um evento(resize)
window.addEventListener('resize', (evt) => {
   // Aqui coloca as variaveis do segundo ponto:
   larguraPalco = palco.offsetWidth;
   alturaPalco = palco.offsetHeight;
})

// QUINTO PONTO:
// Adicionar evento de click nos botoes Adicionar e Remover:
btn_add.addEventListener('click', (evt) => {
   // Obtendo a qtd de bolinhas digita no input:
   const qtde = txt_qtde.value;
   // Criando um Loop para poder adicionar um numero de bolinhas:
   for(let i =0; i < qtde; i++) {
      // Instanciar novas bolinhas
      bolas.push(new Bola(bolas, palco));
   }
})

btn_remover.addEventListener('click', (evt) => {
   // Como as bolas estao dentro do array da variavel 'bolas', usamos o map():
   bolas.map((b) => {
      // Remover a bolinha
      b.remover();
   })
})

// SEXTO PONTO:
   // Criando a class Bola: Aqui vai comandar todos os movimentos das bolinhas
class Bola {
   constructor(arrayBolas, palco) { // Passado parametro arrayBolas e palco
      // Definindo o tamanho das bolinhas usando o Math(), floor(1 - 10), random(0 - 1): Vai gerar bolinhas de tamanhos diferrentes;
      this.tam = Math.floor(Math.random() * 10) + 10; // Usando o Math.floor para ter bolas de 0 a 10. Usa o Math.random que vai ter bola de 0 a 1;
      // Definindo as cores das bolinhas com RGB: As bolas vao sair com cores diferentes;
      this.cor_r = Math.floor(Math.random() * 255);
      this.cor_g = Math.floor(Math.random() * 255);
      this.cor_b = Math.floor(Math.random() * 255);
      // Definindo a posicao das bolas dentro do palco: 
      this.posicao_x = Math.floor(Math.random() * larguraPalco - this.tam); // Aqui para multiplicar e preciso saber o tamanho da tela;
      this.posicao_y = Math.floor(Math.random() * alturaPalco - this.tam);
      // Definindo a velocidade das bolinhas:
      this.velocidade_x = Math.floor(Math.random() * 2) + 0.3;
      this.velocidade_y = Math.floor(Math.random() * 2) + 0.3;
      // Definindo as direcoes:
      this.direcao_x = (Math.random() * 10) > 5 ? 1 : -1;
      this.direcao_y = (Math.random() * 10) > 5 ? 1 : -1;
      // Instanciando as bolinhas no arrayBolas pq cada bola tem seu id:
      this.arrayBolas = arrayBolas;
      this.palco = palco;
      this.id = Date.now() + '_' + Math.floor(Math.random() * 100000000000); // E o timesTemp(Date now() + Math);
      // Passando a funcao desenhar:
      this.desenhar();
      // Definir o controle das bolinhas:
      this.controle = setInterval(this.controlar, 10);
      // Variavel que relaciona a bola do DOM com a bola do array:
      this.eu = document.getElementById(this.id);
      numBola++;
      num_objetos.innerHTML = numBola;
   }

   // SETIMO PONTO:
   // Criando funcao para retornar a posicao da bolinha no arrayBolas:
   posicao = () => {
      return this.arrayBolas.indexOf(this);
   }
   // Criando funcao para remover as bolinhas:
   remover = () => {
      // Remove o interval:
      clearInterval(this.controle);
      // Remover do arrayBolas:
      bolas = bolas.filter((b) => {
         if(b.id != this.id) {
            return b;
         }
      })
      this.eu.remove();
      numBola--;
      num_objetos.innerHTML = numBola;
   }
   // Criando uma funcao para desenhar as bolinhas no DOM:
      // Cria uma div, adicionar as propriedades e colocar essa div no palco:
   desenhar = () => {
      const div = document.createElement('div');
      div.setAttribute('id', this.id);
      div.setAttribute('class', 'bola');
      div.setAttribute('style', `left: ${this.posicao_x}px; top: ${this.posicao_y}px; width: ${this.tam}px; height: ${this.tam}px; background-color: rgb(${this.cor_r}, ${this.cor_g}, ${this.cor_b})`);
      this.palco.appendChild(div);
   }
   controle_bordas = () => {
      if(this.posicao_x + this.tam >= larguraPalco) {
         this.direcao_x = -1;
      } else if(this.posicao_x <= 0) {
         this.direcao_x = 1;
      }
      if(this.posicao_y + this.tam >= alturaPalco) {
         this.direcao_y = -1;
      } else if(this.posicao_y <= 0) {
         this.direcao_y = 1;
      }
   }
   // Criando funcao que vai controlar as bolinhas:
   controlar = () => {
      // Verificar se as bolinhas encostou nas bordas:
      this.controle_bordas();
      // Atualizar a posicao das bolinhas:
      this.posicao_x += this.direcao_x * this.velocidade_x;
      this.posicao_y += this.direcao_y * this.velocidade_y;
      // Atualizar a bolinha no DOM:
      this.eu.setAttribute('style', `left: ${this.posicao_x}px; top: ${this.posicao_y}px; width: ${this.tam}px; height: ${this.tam}px; background-color: rgb(${this.cor_r}, ${this.cor_g}, ${this.cor_b})`);
      // Redirecionando a tela:
      if((this.posicao_x > larguraPalco) || (this.posicao_y > alturaPalco)) {
         this.remover();
      }
   }
}