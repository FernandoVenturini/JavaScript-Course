const head = document.head;
const body = document.body;

const style = "<link rel='stylesheet' type='text/css' href='topo.css'/>";
head.innerHTML += style;

// Criando a div topo:
const topo = document.createElement('div');
topo.setAttribute('id', 'topo');
topo.setAttribute('class', 'topo');
body.prepend(topo);

// Acrescentando conteudo dentro da div:
const logo = 
    "<div id='logo' class='logo'>"+
        "<img src='logo.png' title='CFB Cursos'/>"+
    "</div>"
topo.innerHTML += logo;


const login = 
    "<div id='login' class='login'>" +
        "<p id='matricula'>Matricula:<span></span></p>" +
        "<p id='nome'>Nome:<span></span></p>" +
    "</div>"
topo.innerHTML += login;