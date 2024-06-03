// Declarando as variaveis:
const btn_esquerda = document.querySelector('#btn_esquerda');
const btn_direita = document.querySelector('#btn_direita');
const btn_parar = document.querySelector('#btn_parar');
const carro = document.querySelector('#carro');

// Criando a funcao init, que vai inicializar a div carro:
const init = () => {
    // Colocando a div carro na posicao relative para a movimentacao:
    carro.style = 'position: relative; left: 0px';
}

// Declarando variavel 
let anima = null;

const move = (dir) => {
    carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px';
}

btn_parar.addEventListener('click', () => {
    clearInterval(anima);
})

// Evento de click nos botoes:
btn_esquerda.addEventListener('click', () => {
    clearInterval(anima);
    anima = setInterval(move, 50, -1);
})

btn_direita.addEventListener('click', () => {
    clearInterval(anima);
    anima = setInterval(move, 50, 1);
})

window.onload = init();
