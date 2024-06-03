const caixa = document.querySelector('#caixa');
/*
const curso = 'JavaScript';
const canal = 'CFB Cursos';
const frase = `Este e o curso de ${curso} do canal ${canal}`;

caixa.innerHTML = frase;
*/

const cars = ['Polo','BMW', 'Aston Martin'];
let ul = <ul>;
cars.map((e) => {
    ul += <li>${e}</li>
})
ul + </ul>
caixa.innerHTML = ul;