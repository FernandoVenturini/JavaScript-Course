import {Cxmsg} from './cxmsg.js';

const config = {
    color: "#48f",
    tipo: "ok", // tipos: ok, sn, oc
    textos: ["SIM", "NAO"],
    comando_sn: () => {}
}

// Comando que vai ser executado no button ok:
const fsim = () => {
    console.log("Botao SIM pressionado!");
}

const btn_showmsgbox = document.querySelector('#btn_showmsgbox');
btn_showmsgbox.addEventListener('click', () => {
    //cxmsg.show("CFB Cursos ", "Curso de JavaScript!");
    config.tipo = "ok";
    Cxmsg.show(config, "CFB Cursos ", "Curso de JavaScript!");
})

const btn_showmsgbox2 = document.querySelector('#btn_showmsgbox2');
btn_showmsgbox2.addEventListener('click', () => {
    //cxmsg.show("Youtube ", "Canal com cursos de programacao!");
    config.tipo = "sn";
    config.comando_sn = () => {fsim()};
    Cxmsg.show(config, "Youtube ", "Canal com cursos de programacao!");
})

const btn_showmsgbox3 = document.querySelector('#btn_showmsgbox3');
btn_showmsgbox3.addEventListener('click', () => {
    //cxmsg.show("JavaScript!", "Aula 136");
    config.tipo = "sn";
    config.textos = ["OK", "CANCELA"];
    config.comando_sn = () => {};
    Cxmsg.show(config, "JavaScript!", "Aula 136");
})