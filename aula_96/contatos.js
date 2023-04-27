// Importando o array = contatos da pasta bancoContatos.js:
import { contatos } from './bancoContatos.js';

// Criando objeto:
let contato = {
    // Criando Primeira funcao: obtem todos contatos;
    getTodosContatos: function() {
        return contatos
    },
    // Criando Segunda funcao: obtem um contato especifico;
    getContato: function(i_cont) {
        return contatos[i_cont]
    },
    // Criando Terceira funcao: Adiciona um contato;
    addContato: function(novoContato, destinoDom) {
        const cont = {
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email
        }
        contatos.push(cont);

        const div = document.createElement('div');
        div.setAttribute('class', 'contato');

        const p_nome = document.createElement('p');
        p_nome.innerHTML = novoContato.nome;
        const p_telefone = document.createElement('p');
        p_telefone.innerHTML = novoContato.telefone;
        const p_email = document.createElement('p');
        p_email.innerHTML = novoContato.email;
        
        div.appendChild(p_nome);
        div.appendChild(p_telefone);
        div.appendChild(p_email);
        destinoDom.appendChild(div);
    }
}

export default contato;