const q1 = document.querySelector('#q1');
const q2 = document.querySelector('#q2');
const posx = document.querySelector('#posx');
const posy = document.querySelector('#posy');
const largura = document.querySelector('#largura');
const altura = document.querySelector('#altura');

q1.accessKey = 'b';
q2.accessKey = 'n';

console.log('q1: ' + q1.accessKey);
console.log('q2: ' + q2.accessKey);

const info = (el) => {
    let DOMRect_q = el.getBoundingClientRect();

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