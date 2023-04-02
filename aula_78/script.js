const div_data = document.querySelector('#div_data');
const watch = document.querySelector('#watch');

const timer = () => {
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

const interval = setInterval(timer, 1000);

