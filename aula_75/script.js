const numero = document.querySelector('#numero');

// Promise:
let promise = new Promise((resolve, reject) => {
    
    let resultado = true;
    
    setTimeout(() => {
        if(resultado) {
            resolve('All right!');
        } else {
            reject('All Wrong!');
        }
    }, 3000);
});

// Verificando o retorno da Promise:
promise.then((retorno) => {
    numero.innerHTML = retorno;
    numero.classList.remove('erro');
    numero.classList.add('ok');
});

promise.catch((retorno) => {
    numero.innerHTML = retorno;
    numero.classList.add('erro');
    numero.classList.remove('ok');
});


numero.innerHTML = 'Processando!';