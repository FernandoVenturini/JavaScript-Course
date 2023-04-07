// Variables:
const div_data = document.getElementById('div_data');
const div_relogio = document.querySelector('#div_relogio');
const timer = document.querySelector('#timer');

const hora_alarme = document.querySelector('#hora_alarme'); // Label onde esta escrito 'Hora do Alarme';
const tmp_alarme = document.querySelector('#tmp_alarme'); // Input

const btn_ativar = document.querySelector('#btn_ativar'); // Botao Ativar
const btn_parar = document.querySelector('#btn_parar');// Botao Parar

// Som do alarme:
const som_alarme = new Audio('alarme.mp4');
som_alarme.loop = -1; // Setando o Loop do alarme para tocar repetidamente;

// Variables:
let ts_atual = null; // Is the actual time;
let ts_alarme = null; // E o ts_atual + o valor setado no input x 1000(que sao os milisegundos);
let alarme_ativado = false; // Indica se o alarme esta ativado;
let alarme_tocando = false; // Indica que o alarme esta desativado;

// Button Ativar:
btn_ativar.addEventListener('click', () => {
    ts_atual = Date.now(); // Setando o horario e data atual no momento do click;
    ts_alarme = ts_atual + (tmp_alarme.value * 1000); // Setando o ts_alarme, que e o ts_atual + o value(tmp_alarme)  x 1000(milisegundos);
    alarme_ativado = true; // Deixa o alarme ativado;
    const dt_alarme = new Date(ts_alarme); // Criando uma variavel chamada data_alarme, recebendo a nova data com parametro(ts_alarme), vai retornar a nova data;
    hora_alarme.innerHTML = 'Hora do Alarme: ' + dt_alarme.getHours() + ':' + dt_alarme.getMinutes() + ':' + dt_alarme.getSeconds();
})

// Button Parar:
btn_parar.addEventListener('click', () => {
    alarme_ativado = false; // Alarme desativa;
    alarme_tocando = false; // Alarme para de tocar;
    hora_alarme.innerHTML = 'Hora do Alarme'; // Essa label vai receber so o texto 'Hora do Alarme';
    tmp_alarme.value = 0; // O tempo do alarme(tmp_alarme), o value que foi digitado volta para 0;
    timer.classList.remove('alarme'); // A class='timer' no HTML remove o alarme(que esta no css) que estava em vermelho, volta para a cor normal;
    som_alarme.pause(); // O som e pausado;
    som_alarme.currentTime = 0; // O som volta para o incio;
})

const data = new Date(); // Mostra a data do dia;

// Setando o numero '0' para numeros abaixo do 10;
let dia = data.getDate();
dia = dia < 10 ? '0' + dia : dia;
let mes = data.getMonth();
mes = mes < 10 ? '0' + mes : mes;

// Setando a data(dia/mes/ano):
const data_r = dia + '/' + mes + '/' + data.getFullYear();
div_data.innerHTML = data_r;

//Criando function:
const relogio = () => {
    const data = new Date(); // Mostra a data atual;

    // Setando a hora/minutos/segundos do relogio:
    let hora = data.getHours();
    hora = hora < 10 ? '0' +  hora : hora;
    let minuto = data.getMinutes();
    minuto = minuto < 10 ? '0' + minuto : minuto;
    let segundo = data.getSeconds();
    segundo = segundo < 10 ? '0' + segundo :  segundo;

    // Setando a hora completa: 
    const hora_completa = hora + ':' + minuto + ':' + segundo;
    div_relogio.innerHTML = hora_completa;

    // Controle do Alarme:
    if(alarme_ativado && !alarme_tocando) { // Verifica se alarme esta ativado & se alarme tocando for false;
        if(data.getTime() >= ts_alarme) { // Se o times tempi for maior ou igual que o do times tempi do alarme;
            alarme_tocando = true; // Toca o alarme;
            som_alarme.play(); // Som alarme fica tocando no loop finito;
            timer.classList.add('alarme'); // O fundo do timer muda para vermelho;
        } 
    }
}

// Criando um intervalo para o relogio: chamando a function relogio e passando os segundos
const intervalo = setInterval(relogio, 1000);


//console.log(data);
//console.log(new Date());
//console.log(Date.now()); Timestamp
//console.log(data.getDate());
//console.log(`Mes: ${data.getMonth()}`);
//console.log(data.getTime());
//console.log(data.toDateString());
