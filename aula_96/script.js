// Importando cursos da pasta contatos.js:
import c from './contatos.js';

// Criando as variaveis que tem no HTML:
const listaContatos = document.getElementById('listaContatos');
const btn_gravar = document.getElementById('btn_gravar');

// Adicionando evento de clique no botao:
btn_gravar.addEventListener('click', (evt) => {

    // Criando uma variavel cont, de contato para receber o valor digitado nos inputs:
    const cont = {
        nome: document.getElementById('f_nome').value,
        telefone: document.getElementById('f_telefone').value,
        email: document.getElementById('f_email').value
    }
    
    c.addContato(cont, listaContatos);
    console.log(c.getTodosContatos());
})