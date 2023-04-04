const div_data = document.querySelector('#div_data');
const watch = document.querySelector('#watch');
const btn_ativar = document.querySelector('#btn_ativar'); // Alarme
const btn_parar = document.querySelector('#btn_parar'); // Alarme
const tmp_alarme = document.querySelector('#tmp_alarme'); // Alarme
const hora_alarme = document.querySelector('#hora_alarme'); // Alarme
const timer = document.getElementById('timer');

let som_alarme = new Audio('alarme.mp3'); // Audio do Alarme
som_alarme.loop = -1;

let ts_atual = null;
let ts_alarme = null;
let alarme_ativado = false;
let alarme_tocando = false;

btn_ativar.addEventListener('click',  () => { // Botao ativar do alarme
    ts_atual = Date.now(); // Pega data atual
    ts_alarme = ts_atual + (tmp_alarme.value * 1000); // Tempo do alarme recebe Tempo atual + o valor digitado no input definindo o tempo do alarme
    alarme_ativado = true;
    const dt_alarme = new Date(ts_alarme);
    hora_alarme.innerHTML = 'Hora do alarme: ' + dt_alarme.getHours() + ':' + dt_alarme.getMinutes() + ':' + dt_alarme.getSeconds();
})

btn_parar.addEventListener('click', () => { // Botao desativar o alarme
    alarme_ativado = false;
    alarme_tocando = false;
    hora_alarme.innerHTML = 'Hora do Alarme';
    tmp_alarme.value = 0;
    timer.classList.remove('alarme');
    som_alarme.pause();
    som_alarme.currentTime = 0;
})

const relogio = () => {
    const data = new Date();

    let hour = data.getHours();
    hour = hour < 10 ? '0' + hour : hour;
    let minutes = data.getMinutes();
    minutes =minutes < 10 ? '0' + minutes : minutes;
    let seconds = data.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const time = hour + ':' + minutes + ':' + seconds;
    watch.innerHTML = time;
}

const interval = setInterval(relogio, 1000);