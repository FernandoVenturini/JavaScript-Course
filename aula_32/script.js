const cursoTodos = document.getElementsByClassName('curso');
//console.log(cursoTodos);

/************************************************************/

const cursoTodos2 = [...document.getElementsByClassName('curso')];
//console.log(cursoTodos2);

/************************************************************/

const cursoTodos3 = [...document.getElementsByClassName('curso')];
const cursosC1 = [...document.getElementsByClassName('c1')];
const cursosC2 = [...document.getElementsByClassName('c2')];

//console.log(cursoTodos3);
//console.log(cursosC1);
//console.log(cursosC2);

/************************************************************/

const cursoTodos4 = [...document.getElementsByClassName('curso')];
const cursosC1b = [...document.getElementsByClassName('c1')];
const cursosC2b = [...document.getElementsByClassName('c2')];

//console.log(cursoTodos4);
//console.log(cursosC1b);
//console.log(cursosC2b);

cursoTodos4.map((elementos) => {
    elementos.classList.add('destaque');
})

/************************************************************/

const cursoTodos5 = [...document.getElementsByClassName('curso')];
const cursosC1c = [...document.getElementsByClassName('c1')];
const cursosC2c = [...document.getElementsByClassName('c2')];
const cursoEspecial = document.getElementsByClassName('curso')[2];

console.log(cursoTodos5);
console.log(cursosC1c);
console.log(cursosC2c);
console.log(cursoEspecial);

cursosC2c.map((el) => {
    el.classList.add('destaque');
})