const btn_alert = document.querySelector('#btn_alert');
const btn_confirm = document.querySelector('#btn_confirm');
const btn_prompt = document.querySelector('#btn_prompt');

btn_alert.addEventListener('click', (e) => {
    alert('Hello alert!');
})

btn_confirm.addEventListener('click', (e) => {
    const retorno = confirm('Hello Confirm');
    if(retorno) {
        console.log('Botao OK pressionado');
    } else {
        console.log('Botão CANCELAR pressionado.');
    }
})

btn_prompt.addEventListener('click', (e) => {
    const nome = prompt('Digite seu nome: ');
    if(nome == null) {
        console.log('Botao pressionado CANCELAR!');
    } else {
        console.log('Nome digitado ' + nome);
    }
    
})