const q1 = document.querySelector('#q1');
const q2 = document.querySelector('#q2');
const posx = document.querySelector('#posx');
const posy = document.querySelector('#posy');
const largura = document.querySelector('#largura');
const altura = document.querySelector('#altura');


const info = (el) => {
    let DOMRect_q = q1.getBoundingClientRect();

    posx.innerHTML = `posx: ${DOMRect_q.x}`;
    posy.innerHTML = `posy: ${DOMRect_q.y}`;
    largura.innerHTML = `largura: ${DOMRect_q.width}`;
    altura.innerHTML = `altura: ${DOMRect_q.height}`;
}


q1.addEventListener('click', (evt) => {
    info(evt.target);
})

q2.addEventListener('click', (evt) => {
    info(evt.target);
})