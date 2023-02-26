const caixa = document.querySelector('#caixa');

let mapa = new Map();

mapa.set('curso', 'JavaScript');
mapa.set('10', 'LVF_Code');
mapa.set(1, 100);
mapa.set('canal', 100);
mapa.delete(1);

console.log(mapa);

let pesquisa = '10';
let resultado = '';
if(mapa.has(pesquisa)) {
    //caixa.innerHTML = 'A chave existe na colecao com o valor: ' + mapa.get(pesquisa);
    resultado += 'A chave existe na colecao com o valor: ' + mapa.get(pesquisa);
} else {
    //caixa.innerHTML = 'A chave NAO existe na colecao!';
    resultado += 'A chave NAO esta na colecao!';
}
// caixa.innerHTML = mapa.get('curso');
resultado += '<br> O tamanho da colecao e ' + mapa.size;
caixa.innerHTML = resultado;

mapa.forEach((e) => {
    console.log(e);
})
