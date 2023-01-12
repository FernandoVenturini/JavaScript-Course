// Funcoes Geradoras:
function* cores() {

    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'

}

const itc = cores();
console.log(itc.next().value);

/***********************************************************************************************/

function* perguntas() {

    const nome = yield 'Qual seu nome?';
    const esporte = yield 'Qual seu esporte favorito?';
    return 'Seu nome e ' + nome + ', seu esporte favorito e ' + esporte;
}

const itp = perguntas();
console.log(itp.next().value);
console.log(itp.next('Fernando').value);
console.log(itp.next('Natacao').value);

/***********************************************************************************************/

function* contador() {
    let i = 0;
    while(true) {

        yield i++;  

    }
}
const itc3 = contador();
console.log(itc3.next().value);
console.log(itc3.next().value);
console.log(itc3.next().value);

/***********************************************************************************************/

function* contador2() {
    let i = 0;
    while(true)    {
        yield i++;
    }
}
const itc4 = contador();
for (let i = 0; i < 10; i++) {
    console.log(itc4.next().value);
}

/***********************************************************************************************/

function* contador3() {
    let i = 0;
    while(true) {
        yield i++;
        if(i > 5) {
            break;
        }
    }
}
const itc5 = contador3();
for(let c of itc3) {
    //console.log(c);
}
