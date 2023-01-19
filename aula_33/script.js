const divTodas = [...document.getElementsByTagName('div')];
const cursoTodos = [...document.getElementsByClassName('curso')];
const cursosC1 = [...document.getElementsByClassName('c1')];
const cursosC2 = [...document.getElementsByClassName('c2')];
const cursoEspecial = document.getElementById('c1');

const query_divTodas = document.querySelector('div');
const query_divTodasb = document.querySelectorAll('div');
const query_cursosTodos = [...document.querySelectorAll('.curso')];
const query_cursosC1 = [...document.querySelectorAll('.c1')];
const query_cursosC2 = [...document.querySelectorAll('.c2')];
const query_cursoEspecial = document.querySelector('#c1');


console.log(query_divTodas);
console.log(query_divTodasb);
//console.log(query_cursosC1);
//console.log(query_cursoEspecial);
/*

console.log(divTodas);

cursosC2.map((el) => {
    el.classList.add('destaque');
})
*/