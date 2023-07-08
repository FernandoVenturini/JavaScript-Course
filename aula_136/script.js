const config = {
    titulo: 'Teste',
    texto: 'CFB Cursos',
    cor: '#48f'
}

const cxmsg = new Cxmsg(config);

const btn_mostrarcxmsg = document.querySelector('#btn_mostrarcxmsg');
btn_mostrarcxmsg.addEventListener('click', () => {
    cxmsg.mostrar();
})

const btn_mostrarcxmsg2 = document.querySelector('#btn_mostrarcxmsg2');
btn_mostrarcxmsg2.addEventListener('click', () => {
    cxmsg.mostrar();
})

const btn_mostrarcxmsg3 = document.querySelector('#btn_mostrarcxmsg3');
btn_mostrarcxmsg3.addEventListener('click', () => {
    cxmsg.mostrar();
})