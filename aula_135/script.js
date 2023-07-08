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