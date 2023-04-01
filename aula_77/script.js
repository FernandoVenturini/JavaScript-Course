const div_data = document.querySelector('#div_data');
const data = new Date();

let dia = data.getDate();
dia = dia < 10 ? '0' + dia : dia;

let mes = data.getMonth();
mes = mes < 10 ? '0' + mes : mes;

const data_r = dia + '/' + mes + '/' + data.getFullYear();
div_data.innerHTML = data_r;


console.log(`Today is day ${data.getDate()}`); // dia(numero)
console.log(data.getTime()); // tempo
console.log(data.toDateString()); // dia/mes/dia(numero)/ano

//console.log(data);
//console.log(new Date()); // E a mesma coisa do console.log acima.
//console.log(Date.now());

/**********************************************************************************************************/


// Watch:
const watch = document.querySelector('#watch');
