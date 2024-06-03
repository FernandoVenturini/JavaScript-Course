const caixa1 = document.querySelector('#caixa1');
const btn_c1 = document.querySelectorAll('.curso');


// Criando elemento no DOM pelo JavaScript:
const novoElemento = document.createElement('div');

// Adicionando conteudo
novoElemento.innerHTML = 'createElement';

// Colocando um id e o nome da propriedade
novoElemento.setAttribute('id', 'c7');

// Colocando uma class e o nome da propriedade
novoElemento.setAttribute('class', 'curso c1');

caixa1.appendChild(novoElemento);

// Adicionando os elementos dinamicamente:
const cursos = ['HTML','CSS', 'JavaScript', 'Reactjs', 'PHP', 'MySQL', 'createElement'];
cursos.map((el, chave) => {
    const  adicionandoElementos = document.createElement('div');
    adicionandoElementos.setAttribute('id', 'c' + chave);
    adicionandoElementos.setAttribute('class', 'curso c1');
    adicionandoElementos.innerHTML = 'Adicionando todos os cursos';
    caixa1.appendChild(adicionandoElementos);
})