const div_data = document.querySelector('#div_data');
const watch = document.querySelector('#watch');
const btn_ativar = document.querySelector('#btn_ativar');
const btn_parar = document.querySelector('#btn_parar');
const tmp_alarme = document.querySelector('#tmp_alarme');
const hora_alarme = document.querySelector('#hora_alarme');
const timer = document.getElementById('timer');

let som_alarme = new Audio('alarme.mp3');
som_alarme.loop = -1;

let ts_atual = null;
let ts_alarme = null;
let alarme_ativado = false;
let alarme_tocando = false;

btn_ativar.addEventListener('click',  () => {
    ts_atual = Date.now();
    ts_alarme = ts_atual + (tmp_alarme.value * 1000);
    alarme_ativado = true;
    const dt_alarme = new Date(ts_alarme);
    hora_alarme.innerHTML = 'Hora do alarme: ' + dt_alarme.getHours() + ':' + 
})

btn_parar.addEventListener('click', () => {
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