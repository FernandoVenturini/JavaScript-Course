const Pessoa = {
    nome: 'Fernando'
}

//console.log(Pessoa.nome);

/*************************************************************************************************/

const Pessoa_02 = {
    nome_02: 'Lavinia'
}

const p2 = Pessoa_02;
const p3 = Pessoa_02;

p3.nome_02 = 'Vicenzo';
p2['nome_02'] = 'Fiorella';

//console.log(p2.nome_02);
//console.log(p3.nome_02);
//console.log(Pessoa_02.nome_02);

/*************************************************************************************************/

const Pessoa_03 = {
    nome_03: 'JavaScript',
    idade,
    getNome: function() {
        return this.nome_03;
    },
    getIdade: function() {
        return this.idade;
    },
    setNome: function(nome_03) {
        this.nome_03 = nome_03;
    },
    setIdade: function(idade) {
        this.idade = idade;
    },
    info: function() {
        console.log(`Nome: ${this.nome_03}`);
        console.log(`Idade: ${this.idade}`);
    }
}

let pessoas = [];

const btn_add = document.querySelector('#btn_add');
const res = document.querySelector('.res');

const addPessoa = () => {
    res.innerHTML = '';
    pessoas.map((p) => {
        const div = document.createAttribute('div');
        div.setAttribute('class', 'pessoas');
        div.innerHTML = `Nome: ${p.getNome()} <br/> ${p.getIdade()}`;
        res.appendChild(div);
    })
}

btn_add.addEventListener('click', (e) => {
    const nome = document.querySelector('#f_name');
    const idade = document.querySelector('#f_age');
    const p = new Pessoa_03(nome_03.value, idade.value);
    pessoas.push(p);
    nome_03.value = '';
    idade.value = '';
    nome_03.focus();
    addPessoa();
})

const p2a = Pessoa_03;
const p3a = Pessoa_03;

p3a.nome_03 = 'Hello World!';
p2a['nome_03'] = 'Python';
Pessoa_03.setNome('React.js');

console.log(Pessoa_03.nome_03);
console.log(p2a.nome_03);
console.log(p3a.nome_03);
