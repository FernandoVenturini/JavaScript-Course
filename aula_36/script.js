const caixa1 = document.querySelector('#caixa1');
caixa1.addEventListener('click', (event) => {
    console.log('Stop Propagation!');
    console.log(event);
})

/*
const btn_c1 = document.querySelectorAll('#c1');
btn_c1.addEventListener('click', (event) => {
    //event.stopPropagation();
    console.log('CLICOU!!!');
})
*/

caixa1.addEventListener('click', (evt) => {
    console.log('Clicou!');
})

const cursos = [...document.querySelectorAll('.curso')];
cursos.map((elemento) => {
    elemento.addEventListener('click', (evento) => {
        evento.stopPropagation();
    });
})

