const btn_esquerda = document.querySelector('#btn_esquerda');
const btn_direita = document.querySelector('#btn_direita');
const carro = document.querySelector('#carro');

// Function para iniciar o processo de inicializacao da animacao:
const init = () => {
    // Colocando a div carro na posicao relative:
    carro.style = 'position: relative; left: 0px';
    // Adicionando left no css:
}

// Animacao:
btn_esquerda.addEventListener('click', () => {
    carro.style.left = parseInt(carro.style.left) - 10 + 'px';
})

btn_direita.addEventListener('click', () => {
    // Criando variavel da posicao atual:
    let pos = parseInt(carro.style.left);
    // Incrementando a variavel pos:
    pos += 10;
    carro.style = `position: relative; left: ${pos}px`;
})

// Chamando o inicializador da animacao:
    window.onload = init();
    //window.addEventListener('load', init());