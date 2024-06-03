const p_temp = document.querySelector('#p_temp');
const p_nivel = document.querySelector('#p_nivel');
const p_press = document.querySelector('#p_press');
const btn_texto = document.querySelector('#btn_texto');

const obterDados = () => {
    const endpoint = 'http://127.0.0.1:1880/gravar'
    fetch(endpoint)
    .then(response =>  response.json())
    .then(dados => {
        console.log(dados);
        p_temp.innerHTML = 'Temperatura: ' + dados.temp;
        p_nivel.innerHTML = 'Nivel: ' + dados.nivel;
        p_press.innerHTML = 'Pressao: ' + dados.pressao;
    })
}

let dados = {
    nome: 'Fernando',
    canal: 'CFB Cursos',
    curso: 'JavaScript'
}

let cabecalho = {
    method: 'POST',
    body: JSON.stringify(dados)
}

const gravarDados = () => {
    const endpoint = 'http://127.0.0.1:1880/gravar'
    fetch(endpoint, cabecalho)
    .then(response => response.json())
    .then(ret => {
        console.log(ret);
    })
}

btn_texto.addEventListener('click', (event) => {
    gravarDados();
})