const url = document.getElementById('url');
const btn_url = document.getElementById('btn_url');

btn_url.addEventListener('click', (evt) => {
    //window.location = 'https://www.google.com';
    //window.location.replace('https://www.google.com'); Deleta a url corrente do historico.
    //window.location.assign('https://www.google.com');  Nao deleta a url corrente do historico.
    //window.location.reload(); // recarrega a pagina.
    //window.history.back(); // Volta no historico da navegacao.
    //window.history.forward(); // Vai para a proxima pagina do historico de navegação.
    //window.history.go(1); // Informa a pagina que vc quer ir.
    window.location = url.value; // Vai para a pagina que vc digitou a url.
})