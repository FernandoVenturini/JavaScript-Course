const p_array = document.querySelector('#array');
const btnVerificar = document.querySelector('#caixa_verificar');
const resultado = document.querySelector('#resultado');

const elementos_array = [21, 25, 19, 20, 16, 18, 22];
p_array.innerHTML = elementos_array;

btnVerificar.addEventListener('click', (evt) => {
    //resultado.innerHTML = "Array nao conforme!";
    const retorno = elementos_array.every((e, i) => {
        if(e < 18) {
            resultado.innerHTML = 'Array nao conforme na posicao ' + i;
        }
        return e >= 18;
    })
    if(retorno) {
        resultado.innerHTML = 'OK!';
    }
    console.log(retorno);
})