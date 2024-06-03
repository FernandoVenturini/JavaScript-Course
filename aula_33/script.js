const divTodas = [...document.getElementsByTagName('div')];
const cursoTodos = [...document.getElementsByClassName('curso')];
const cursosC1 = [...document.getElementsByClassName('c1')];
const cursosC2 = [...document.getElementsByClassName('c2')];
const cursoEspecial = document.getElementById('c1');
console.log(divTodas);
console.log(cursoTodos);
console.log(cursosC1);
console.log(cursosC2);
console.log(cursoEspecial);

const query_divTodas = document.querySelectorA('div');
const query_divTodasb = [...document.querySelectorAll('div')];
console.log(query_divTodas);
console.log(query_divTodasb);

const query_cursosTodos = [...document.querySelectorAll('.curso')];
console.log(query_cursosTodos);

const query_cursosC1 = [...document.querySelectorAll('.c1')];
const query_cursosC2 = [...document.querySelectorAll('.c2')];
console.log(query_cursosC1);
console.log(query_cursosC2);

const query_cursoEspecial = document.querySelector('#c1');
console.log(query_cursoEspecial);

const query_cursoEspecial02 = document.querySelectorAll('#c1')[0];
console.log(query_cursoEspecial02);

const divP = document.querySelectorAll('div, p');
console.log(divP);

const classC1p = [...document.querySelectorAll('.c1, p')];
console.log(classC1p);

const divClass = [...document.querySelectorAll('div[class]')];
console.log(divClass);

const divPaipFilho = [...document.querySelectorAll('div >  p')];
console.log(divPaipFilho);

/*
cursosC2.map((el) => {
    el.classList.add('destaque');
})
*/
