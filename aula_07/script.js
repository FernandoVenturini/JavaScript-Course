// && -> e
// || -> ou
// ! -> nao

/* Tabela Verdade
&&
v + v = v
v + f = f
f + v = f
f + f = f

||
v + v = v
v + f = v
f + v = v
f + f = f
*/

let n1, n2, n3, n4;
n1 = 10;
n2 = 5;
n3 = 15;
n4 = 2;

console.log((n1 > n2)&&(n1 > n3));
console.log((n1 > n2)||(n1 > n3));

if (!(n1 > n2) || (n3 > n4)) {
    console.log('Verdadeiro!');
} else {
    console.log('Falso!');
}