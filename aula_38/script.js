const caixa1 = document.querySelector('#caixa1');
const btn_c = [...document.querySelectorAll('.cursos')];

//console.log(caixa1.children[caixa1.children.length-1]);

/*****************************************************/

const caixa1b = document.querySelector('#caixa1');
const btn_c2 = [...document.querySelectorAll('.curso')];

//console.log(caixa1b.firstElementChild);
//console.log(caixa1b.lastElement.Child);
//console.log(caixa1b.children);

//console.log(document.getRootNode());
//console.log(btn_c2[0].getRootNode());
console.log(btn_c2[0].ownerDocument);