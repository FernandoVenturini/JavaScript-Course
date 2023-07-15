const config = {
    title: "Teste",
    text: "CFB Cursos",
    color: "#48f"
}

// Instanciando novo objeto:
const cxmsg = new Cxmsg(config);


const btn_showmsgbox = document.querySelector('#btn_showmsgbox');
btn_showmsgbox.addEventListener('click', () => {
    cxmsg.show();
})