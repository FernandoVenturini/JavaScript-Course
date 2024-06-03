const p_texto = document.querySelector('#p_texto');
const btn_texto = document.querySelector('#btn_texto');

const p_temp = document.querySelector('#p_temp');
const P_nivel = document.querySelector('#p_nivel');
const p_press = document.querySelector('#p_press');

const obterDados = () => {

    const endpoint = "https://cfbcursos.repl.co/";
    fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
        console.log(dados);
        p_temp.innerHTML = "Temperatura: " + dados.temperatura;
        p_nivel.innerHTML = "Nivel: " + dados.nivel;
        p_press.innerHTML = "Pressao: " + dados.pressao;
    })
}
obterDados();

btn_texto.addEventListener('click', () => {
    obterDados();
})
//let intervalo = setInterval(obterDados, 3000);