// Criando as variaveis:
const btn_parar = document.querySelector('#btn_parar');
const btn_rodar = document.querySelector('#btn_rodar');

const carro = document.querySelector('#carro');

const init = () => {
    carro.style = "position: relative; left: 0px; width: 100px";
    tamCarro = parseInt(carro.style.width);
    tamMax = window.innerWidth - tamCarro;
}

let anima = null;
let tamMax = null;
let tamCarro = null;
let dir = 0;

const mover = () => {

    if(dir > 0) {
        if(parseInt(carro.style.left) >= tamMax) {
            dir = -1;
        } else if(parseInt(carro.style.left) <= 0) {
            dir = 1;
        }
    } 
    carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px';
    anima = setTimeout(mover, 30);
}

btn_parar.addEventListener('click', () => {
    clearTimeout(anima);
})

btn_rodar.addEventListener('click', () => {
    mover();
})

//window.onload = init;
window.addEventListener('load', init());

window.addEventListener('resize', () => {
    tamMax = window.innerWidth - parseInt(carro.style.width);
})

window.addEventListener('keydown', (e) => {
    if(e.code === 'ArrowUp') {
        carro.style.width = parseInt(carro.style.width) +10 + 'px';
        carro.style.height = parseInt(carro.style.height) +10 + 'px';
    } else if(e.code === 'ArrowDown') {
        carro.style.width = parseInt(carro.style.width) -10 + 'px';
        carro.style.height = parseInt(carro.style.height) -10 + 'px';
    }
    tamCarro = parseInt(carro.style.width);
    tamMax = window.innerWidth - tamCarro;
})