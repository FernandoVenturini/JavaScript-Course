const courses = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React'];
courses.map((element, indice) => {
    //console.log("Curso: " + element + " - Posicao do curso: " + indice);
})

/*****************************************************************************/

const courses2 = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React'];
let c = courses2.map((el, i) => {
    return el;
})
//console.log(c);

/*****************************************************************************/

let divs = document.getElementsByTagName('div');
divs = [...divs];
//console.log(divs);

divs.map((el, i) => {
    el.innerHTML = 'JavaScript';
})

/*****************************************************************************/

const el = document.getElementsByTagName('div');
const val = Array.prototype.map.call(el, ({innerHTML}) => innerHTML);
//console.log(val);

/*****************************************************************************/

const converterInt = (e) => parseInt(e);
let num = ['1', '2', '3', '4', '5'].map(converterInt);
console.log(num);