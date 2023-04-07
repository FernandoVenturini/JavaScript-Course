const div_data = document.getElementById('div_data');
const div_relogio = document.querySelector('#div_relogio');
const timer = document.querySelector('#timer');
const hora_alarme = document.querySelector('#hora_alarme');
const tmp_alarme = document.querySelector('#tmp_alarme');
const btn_ativar = document.querySelector('#btn_ativar');
const btn_parar = document.querySelector('#btn_parar');

const data = new Date();

let dia = data.getDate();
dia = dia < 10 ? '0' + dia : dia;

let mes = data.getMonth();
mes = mes < 10 ? '0' + mes : mes;

const data_r = dia + '/' + mes + '/' + data.getFullYear();
div_data.innerHTML = data_r;

//Criando function:
const relogio = () => {
    const data = new Date();

    let hora = data.getHours();
    hora = hora < 10 ? '0' +  hora : hora;
    let minuto = data.getMinutes();
    minuto = minuto < 10 ? '0' + minuto : minuto;
    let segundo = data.getSeconds();
    segundo = segundo < 10 ? '0' + segundo :  segundo;

    const hora_completa = hora + ':' + minuto + ':' + segundo;
    div_relogio.innerHTML = hora_completa;
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
