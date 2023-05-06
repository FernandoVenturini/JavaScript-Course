// Criando as variaveis:
const btn_esquerda = document.querySelector('#btn_esquerda');
const btn_direita = document.querySelector('#btn_direita');
const btn_parar = document.querySelector('#btn_parar');

const carro = document.querySelector('#carro');

const init = () => {
    carro.style = 
    "position: relative; left: 0px; width: 100px";
    tamMax = window.innerWidth - parseInt(carro.style.width);
}

let anima = null;
let tamMax = null;

const mover = (dir) => {

    if(dir > 0) {
        if(parseInt(carro.style.left) <= tamMax) {
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px';
            anima = setTimeout(mover, 30, dir);
        } else {
            clearTimeout(anima);
        }
    } else if(dir < 0) {
        if(parseInt(carro.style.left) >= 0) {
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'; 
            anima = setTimeout(mover, 30, dir);
        } else {
            clearTimeout(anima);
        }
    }   
    //console.log(dir);
}

btn_parar.addEventListener('click', () => {
    clearTimeout(anima);
})

btn_esquerda.addEventListener('click', () => {
    clearTimeout(anima);
    mover(-1);
    //anima = setInterval(mover, 30, -1);
})

btn_direita.addEventListener('click', () => {
    clearTimeout(anima);
    mover(1);
    //anima = setInterval(mover, 30, 1);
})

//window.onload = init;
window.addEventListener('load', init());
window.addEventListener('resize', () => {
    tamMax = window.innerWidth - parseInt(carro.style.width);
})