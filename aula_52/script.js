// Array:
const caixa = document.querySelector('#caixa');
let cores = ['Azul', 'Vermelho', 'Verde', ['Claro', 'Escuro', 'Medio']];
let cursos = ['HTML', 'CSS', 'JavaScript', cores];

console.log(cursos);
console.log(cursos[3][3][2]);

cursos.push('React.js');// Acrescenta
cursos.push('Python');
cursos.pop(); // Retira
cursos.unshift('Python');
cursos.shift();

cursos.map((e) => {
    const p = document.createElement('p');
    p.innerHTML = e;
    caixa.appendChild(p);
})