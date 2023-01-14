// Selecionando todas as 'divs' pela tag:
const colecaoDivs1 = document.getElementsByTagName('div');

console.log(colecaoDivs1);

/******************************************************/

// Usando spread dentro do array para acessar todas as 'divs':
const colecaoDivs2 = [...document.getElementsByTagName('div')];

console.log(colecaoDivs2);

/******************************************************/

let colecaoDivs3 = document.getElementsByTagName('div');
colecaoDivs3 = [...colecaoDivs3];
console.log(colecaoDivs3);

