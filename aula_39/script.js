const caixa1 = document.querySelector('#caixa1');
const btn_c = [...document.querySelectorAll('.curso')];
const c1_2 = document.querySelector('#c1_2');
/*
console.log(caixa1.hasChildNodes());
console.log(btn_c[0].hasChildNodes());
console.log(btn_c[0].childNodes);
console.log(btn_c[0].children);
*/
/*
if(btn_c[0].children.length > 0) {
    console.log('Possui filhos!');
} else {
    console.log('Nao possui filhos!');
}
*/

/*
if(caixa1.children.length > 0) {
    console.log('Possui filhos!');
} else {
    console.log('Nao possui filhos!');
}
*/

//console.log(caixa1.children.length > 0 ? 'Possui filhos' : 'Nao possui filhos');]
//console.log(btn_c[0].children.length > 0 ? "POSSUI FILHOS!!!" : "NAO POSSUI FILHOS!!!");

//console.log(caixa1.firstElementChild.innerHTML = 'Mudei o HTML');
//console.log(caixa1.children[2].innerHTML = 'MUDEI!');

//console.log(c1_2);
//console.log(c1_2.parentElement);
//console.log(c1_2.parentNode);
//console.log(c1_2.parentNode.parentNode);
console.log(c1_2.parentNode.parentNode[4]);