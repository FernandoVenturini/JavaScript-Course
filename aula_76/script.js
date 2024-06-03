/*
const numero = document.querySelector('#numero');
const btn_promessa = document.getElementById('btn_promessa');

btn_promessa.addEventListener('click', (e) => {
    numero.innerHTML = 'Processing...';
    promessa();
})

const promessa = () => {
    let promise = new Promise((resolve, reject) => {
        let resultado = false;
        setTimeout(() => {
            if(resultado) {
                resolve('Tudo certo!');
            } else {
                reject('Erro!!!');
            }
        }, 3000);
    })
    
    promise.then(retorno) {
        numero.innerHTML = retorno;
        numero.classList.remove('erro');
        numero.classList.add('Ok');
    }
    promise.catch(retorno) {
        numero.innerHTML = retorno;
        numero.classList.add('erro');
        numero.classList.remove('Ok');
    }
}

numero.innerHTML = 'Waiting!!!';
*/

/*----------------------------------------------------------------------------------*/

/* Segundo exemplo:
const numero = document.querySelector('#numero');
const btn_promessa = document.getElementById('btn_promessa');

btn_promessa.addEventListener('click', (e) => {
    numero.innerHTML = 'Processing...';
    promessa();

    then(retorno) {
        numero.innerHTML = retorno;
        numero.classList.remove('erro');
        numero.classList.add('Ok');
    }
    catch(retorno) {
        numero.innerHTML = retorno;
        numero.classList.add('erro');
        numero.classList.remove('Ok');
    }
})

const promessa = () => {
    let p = new Promise((resolve, reject) => {
        let resultado = false;
        setTimeout(() => {
            if(resultado) {
                resolve('Tudo certo!');
            } else {
                reject('Erro!!!');
            }
        }, 3000);
    })
    return p;
}

numero.innerHTML = 'Waiting!!!';
*/
/*------------------------------------------------------------------------------------*/

// 3- Exemplo:
const numero = document.querySelector('#numero');
const btn_promessa = document.getElementById('btn_promessa');

btn_promessa.addEventListener('click', (e) => {
    numero.innerHTML = 'Processing...';
    promessa();

    then(retorno) {
        //numero.innerHTML = retorno;
        //numero.classList.remove('erro');
        //numero.classList.add('Ok');
    }
    catch(retorno) {
        //numero.innerHTML = retorno;
        //numero.classList.add('erro');
        //numero.classList.remove('Ok');
    }
})

const promessa = () => {
    let p = new Promise((resolve, reject) => {
        let resultado = false;
        setTimeout(() => {
            if(resultado) {
                resolve('Tudo certo!');
                numero.innerHTML = retorno;
                numero.classList.remove('erro');
                numero.classList.add('Ok');
            } else {
                reject('Erro!!!');
                numero.innerHTML = retorno;
                numero.classList.add('erro');
                numero.classList.remove('Ok');
            }
        }, 3000);
    })
    return p;
}

numero.innerHTML = 'Waiting!!!';