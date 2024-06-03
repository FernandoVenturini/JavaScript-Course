const p_texto = document.querySelector('#p_texto');
const btn_texto = document.querySelector('#btn_texto');

const endpoint = "https://cfbcursos.repl.co/";
let res = fetch(endpoint)
.then(res => {
    res.json();
})
.then(datos => {
    consoloe.log(datos);
})    