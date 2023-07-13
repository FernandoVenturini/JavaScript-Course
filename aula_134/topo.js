//const head = document.head;
const body = document.body;

//const style = "<link rel='stylesheet' type='text/css' href='topo.css'/>";
//head.innerHTML += style;

// Criando o estilo do topo e apagando o estilo topo la do css;
const styleTopo = 
    "display: flex;"+
    "justify-content: space-between;"+
    "align-items: center;"+
    "background-color: #00f;"

const styleImgLogo = "width: 200px;"

// Criando a div topo:
const topo = document.createElement('div');
topo.setAttribute('id', 'topo');
topo.setAttribute('style', styleTopo);
body.prepend(topo);

// Acrescentando conteudo dentro da div:
const logo = 
    "<div id='logo' class='logo'>"+
        "<img src='logo.png' title='CFB Cursos' style='" + styleImgLogo + "'/>"+
    "</div>"
topo.innerHTML += logo;


const login = 
    "<div id='login' class='login'>" +
        "<p id='matricula'>Matricula:<span></span></p>" +
        "<p id='nome'>Nome:<span></span></p>" +
    "</div>"
topo.innerHTML += login;