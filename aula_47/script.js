const p_array = document.querySelector('#array');
const txt_pesquisar = document.querySelector('#txt_pesquisar');
const btnPesquisar = document.querySelector('#btnPesquisar');
const resultado = document.querySelector('#resultado');

const elementos_array = ['HTML', 'CSS', 'JavaScript'];
//const elementos_array = [10, 5, 8, 2, 9, 15, 20];
p_array.innerHTML = elementos_array;

btnPesquisar.addEventListener('click', (evt) => {
    resultado.innerHTML = 'Valor nao encontrado!';
    const ret = elementos_array.find((e, i) => {

        if(e == txt_pesquisar.value) {
            resultado.innerHTML = 'Valor encontrado ' + e + ' na posicao ' + i;
            return e;
        }
    })
    console.log(ret);
})
