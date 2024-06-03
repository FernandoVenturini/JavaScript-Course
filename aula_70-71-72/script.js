const teclasNum = [...document.querySelectorAll('.num')];
const teclasOp = [...document.querySelectorAll('.op')];
const teclaRes = document.querySelector('.res');
const display = document.querySelector('.display');
const teclaC = document.getElementById('tce');
const teclaClean = document.getElementById('tClean');
const tigual = document.getElementById('tigual');

let sinal = false;
let decimal = false;

teclasNum.forEach((el) => {
    el.addEventListener('click', (event) => {
        sinal = false;
        
        if(event.target.innerHTML == ',') {
            if(!decimal) {
                decimal = true;
                if(display.innerHTML == '0') {
                    display.innerHTML = '0,';
                } else {
                    display.innerHTML += event.target.innerHTML;
                }
            }
        } else {
            if(display.innerHTML == '0') {
                display.innerHTML = '';
            }
            display.innerHTML += event.target.innerHTML;
        }
    })
})

teclasOp.forEach((el) => {
    el.addEventListener('click', (event) => {
        if(!sinal) {
            sinal = true;
            if(display.innerHTML == '0') {
                display.innerHTML = '';
            }
            if(event.target.innerHTML == 'x') {
                display.innerHTML = '*';
            } else {
                display.innerHTML += event.target.innerHTML;
            }
        }
    })
})

teclaClean.addEventListener('click', (event) => {
    sinal = false;
    decimal = false;
    display.innerHTML = '0';
})

tigual.addEventListener('click', (event) => {
    sinal = false;
    decimal = false;
    const res = eval(display.innerHTML);
    display.innerHTML = res;
})

