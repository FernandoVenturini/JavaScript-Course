function exemple01() {
  //console.log('Aula 21!');
}
exemple01();

/***********************************************************************************************************/

function exemple02() {

  return 'Retornando function!';

}
console.log(exemple02());

/***********************************************************************************************************/

function exemple03() {

  let n1 = 10;
  let n2 = 2;
  let res = n1 * n2;

  return res;

}
console.log(exemple03());

/***********************************************************************************************************/

function exemple04() {

  let n1 = 20;
  let n2 = 2;
  let res = n1 * n2;

  return res;
}

let resultado = exemple04();
console.log(resultado);

/***********************************************************************************************************/

function exemple05() {

  let n1 = 10;
  let n2 = 2;
  let res = n1 + n2;

  // Condition:
  if (res % 2 == 0) {
    return 'PAR!';
  } else {
    return 'ODD';
  }

}

let res = exemple05();
console.log(res);

