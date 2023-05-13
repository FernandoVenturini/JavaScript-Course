const long = document.querySelector('#long');
const lati = document.querySelector('#lati');

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao);
} else {
    console.log('Nao suportado!');
}

function mostrarLocalizacao(pos) {
    long.innerHTML = pos.coords.longitude;
    lati.innerHTML = pos.coords.latitude;
}

function erroLocalizacao() {
    console.log('Erro de localizacao!');
}