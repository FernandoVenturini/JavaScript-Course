const f_texto = document.querySelector('#f_texto');
const p_texto = document.querySelector('#p_tetxo');
const btn_texto = document.querySelector('#btn_texto');

btn_texto.addEventListener('click', (event) => {

})

let num = 10;
localStorage.setItem('numero', num); // Define a chave;

localStorage.setItem('numero', 42);
alert(localStorage.getItem('numero'));// Obten o valor da chave;

let curso = 'JavaScript';
localStorage.setItem('nome', 'Bruno');
localStorage.setItem('canal', 'CFB Cursos');
localStorage.setItem('curso', curso);
alert(localStorage.getItem('nome'));  
alert(localStorage.getItem('canal'));  
alert(localStorage.getItem('curso'));
alert(localStorage.length);

// Limpando as chaves:
//localStorage.clear();

localStorage.key();
//alert(localStorage.key(0));
alert(localStorage.getItem(localStorage.key(0)));
