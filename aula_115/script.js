/* Exemplo 01:
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let [a, b, c, d] = numeros;

console.log(a, b, c, d);
*/

/* Exemplo 02:
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let [a, b, c,...d] = numeros;
console.log(a, b, c, d);
*/

/* EXEMPLO 03:
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let [a, b, c,...d] = numeros;
console.log(a, b, c, d);

let obj = {name: 'Fernando', lastName: 'Venturini'};
let {name, lastName} = obj
console.log(name, lastName + '!');
*/

/* EXEMPLO 04:
const colors = () => {
    return ['green', 'yellow', 'blue'];
}
let [c1, c2, c3] = colors();
console.log(c1);
console.log(c2);
console.log(c3);
*/

/* EXEMPLO 05:
const colors = () => {
    return ['green', 'yellow', 'blue', 'white'];
}

let [c1, c2, , c3] = colors();

console.log(c1, c2, c3);
*/

/* EXEMPLO 06:
let texto = 'Curso de JavaScript';
console.log(texto.split(''));
*/

let texto = 'Curso de JavaScript';
//let [t] = texto.split('');
//let [...t] = texto.split('');
//console.log(t);
let [p1, p2, p3] = texto.split('');
console.log(p1, p2, p3);