// Array normal, antes da desestruturacao:
//let a, b, c, d;
[a, b, c, d] = [10, 20, 30, 40];
console.log(a, b, c, d);

/********************************************************************************************************/

// Quando tem um objeto dentro de um array:
let a, b, c, d;
// Desestruturando o array para objeto:
[a, b, c, d] = {a: 'green', b: 'yellow', c: 'blue', d: 'white'};
// Desestruturacao realizada:
({a, b, c, d} = {a: 'green', b: 'yellow', c: 'blue', d: 'white'}); // Coloca parenteses
console.log(a, b, c, d);

/********************************************************************************************************/

// Desestruturando passando a variavel letras para numeros:
let numeros = [10, 20, 30, 40];
//let [a, b, c, d] = numeros;
console.log(a, b, c, d);

/********************************************************************************************************/

// Mais um exemplo: 
let a, b, c, d;
[a, b = 0, c = 0, d = 0] = [10];
console.log(a, b, c, d;)

/********************************************************************************************************/

let a = 20;
let b = 10;
[a, b] = [10, 20];
console.log(a, b);

/********************************************************************************************************/

let numeros = () => {
    return [10, 20, 30, 40];
}

console.log(numeros());

/********************************************************************************************************/
let numeros = () => {
    return [10, 20, 30, 40];
}

let[a, b, c, d] = numeros();

console.log(a, b, c, d);