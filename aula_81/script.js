// Criando a variavel 'olhos' que tem a classe no HTML e usando o spred;
const olhos = [...document.getElementByClassName('olho')];

// Pegando a cordenada do mouse:
let posicao_x_mouse = 0;// Variavel que movimenta o mouse na posicao x;
let posicao_y_mouse = 0;// Variavel que movimenta o mouse na posicao y;
window.addEventListener('mousemove', (evt) => { //Adicionando evento de mousemove;
   posicao_x_mouse = evt.clientX;
   posicao_y_mouse = evt.clientY;

   const rotacao  = Math.atan2(posicao_x_mouse, posicao_y_mouse) * 180 / Math.PI;
   olhos.forEach((o) => {
      o.style.transform = 'rotate('+180+'deg)';
   })
})
