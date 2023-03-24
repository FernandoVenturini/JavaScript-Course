const teclasNum = [...document.querySelectorAll('.num')];
const teclasOp = [...document.querySelectorAll('.op')];
const teclaRes = document.querySelector('.res');
const display = document.querySelector('.display');
const teclaC = document.getElementById('tc');
const teclaClean = document.getElementById('tClean');

teclasNum.forEach((el) => {
    el.addEventListener('click', (event) => {
        display.innerHTML = display.innerHTML + event.target.innerHTML;
    })
})

teclasOp.forEach((el) => {
    el.addEventListener('click', (event) => {
        display.innerHTML += event.target.innerHTML;
    })
})

teclaClean.addEventListener('click', (event) => {
    display.innerHTML = 0;
})