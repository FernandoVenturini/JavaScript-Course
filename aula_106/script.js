let nome = new String('Bruno Pinho Campos');
let numeros = '1, 10, 100, 1000';

console.log(nome.match(/[oh]/ig));

console.log(nome.match(/[a - m]/ig));

console.log(nome.match(/[a - m | 0 - 9]/ig));

console.log(nome.match(/[a - g | h - z | 0 - 9]/ig));

// METACARACTERES:
console.log(nome.match(/\d/ig)); // Numeros
console.log(nome.match(/\s/ig)); // Espacos
console.log(nome.match(/\bP/ig));

console.log(nome.match(/o+/ig));
console.log(nome.match(/o+|s+/ig));
console.log(nome.match(/no*/ig));

// QUANTIFICADORES:
console.log(numeros.match(/10/ig));
console.log(numeros.match(/10+/ig));
console.log(numeros.match(/10*/ig));
console.log(numeros.match(/10?/ig));
console.log(numeros.match(/10?/ig));