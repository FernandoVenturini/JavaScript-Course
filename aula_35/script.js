const caixa1 = document.querySelector('#caixa1');
const caixa2 = document.querySelector('#caixa2');
const btnSend = document.querySelector('#btn_copiar');
const btnBack = document.querySelector('#btn_transferir');
const todosCursos = [...document.querySelectorAll('.curso')];

todosCursos.map((el) => {
    el.addEventListener('click', (evento) => {
        const curso = evento.target;
        curso.classList.toggle('selecionado');
    })
})

btnSend.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')];
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el);
    })
})

btnBack.addEventListener('click', () => {
    const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')];
    //console.log(cursosNaoSelecionados);
    cursosNaoSelecionados.map((el) => {
        caixa1.appendChild(el);
    })
})
