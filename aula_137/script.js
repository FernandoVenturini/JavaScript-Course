import {Cxmsg} from './cxmsg.js';

const config = {
    color: "#48f"
}
Cxmsg.config(config)

// Instanciando novo objeto:
//const cxmsg = new Cxmsg(config);


const btn_showmsgbox = document.querySelector('#btn_showmsgbox');
btn_showmsgbox.addEventListener('click', () => {
    //cxmsg.show("CFB Cursos ", "Curso de JavaScript!");
    Cxmsg.show("CFB Cursos ", "Curso de JavaScript!");
})

const btn_showmsgbox2 = document.querySelector('#btn_showmsgbox2');
btn_showmsgbox2.addEventListener('click', () => {
    //cxmsg.show("Youtube ", "Canal com cursos de programacao!");
    Cxmsg.show("Youtube ", "Canal com cursos de programacao!");
})

const btn_showmsgbox3 = document.querySelector('#btn_showmsgbox3');
btn_showmsgbox3.addEventListener('click', () => {
    //cxmsg.show("JavaScript!", "Aula 136");
    Cxmsg.show("JavaScript!", "Aula 136");
})