function clicar() {
    alert('CLICADO!');
}

const clicar_02 = () => {
    alert('CLICADO 02!');
}

const c3Javascript = document.querySelector('#c3');
const clicar_03 = () => {
    alert('CLICADO 03!');
}
c3Javascript.addEventListener('click', clicar_03);

const c4ReactJs = document.querySelector('#c4');
c4ReactJs.addEventListener('click', () => {
    alert('CLICADO 04!');
})

const c5Php = document.querySelector('#c5');

const clicou_05 = () => {
    alert('CLICADO 05!');
}
c5Php.addEventListener('click', () => {
    clicou_05();
})

const c6MySQL = document.querySelector('#c6');
const clicou_06 = () => {
    alert('CLICADO 06!');
}
c6MySQL.addEventListener('click', (event) => {
    console.log(event);
})

const c7C = document.querySelector('#c7');
const clicou_07 = () => {
    alert('CLICADO 07!');
}
c7C.addEventListener('click', (event) => {
    console.log(event.target);
})

const c8CC = document.querySelector('#c8');
const clicou_08 = () => {
    alert('CLICADO 08!');
}
c8CC.addEventListener('click', (event) => {
    
    const el = event.target;
    el.classList('destaque');
})

const cursos = [...document.querySelectorAll('.curso')];
cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const el = evt.target;
        el.classList.add('destaque');
    })
})


const cursos_02 = document.querySelectorAll('.curso');
cursos_02.map((e) => {
    e.addEventListener('click', (event) => {
        const elemento = event.target;
        elemento.classList.add('destaque');
        console.log(elemento.id + " foi clicado!");
    })
})

const cursos_03 = document.querySelectorAll('.curso');
cursos_03.map((el_03)  => {
    el_03.addEventListener('click', (event_03) => {
        const elemento_03 = event_03.target;
        elemento_03.classList.add('destaque');
        console.log(elemento_03.innerHTML + " foi clicado!");
    })
})