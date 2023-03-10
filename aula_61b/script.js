function People(pnome, pidade) {
    this.nome = pnome;
    this.idade = pidade;

    getNome = function() {
        return this.nome;
    },
    getIdade = function() {
        return this.idade;
    },
    setNome = function(nome) {
        this.nome = nome;
    },
    setIdade = function(idade) {
        this.idade = idade;
    },
    info = function() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
    }
}

let pessoas = [];

const btn_add = document.querySelector('#btn_add');
const res = document.querySelector('.res');

const addPessoa = () => {
    res.innerHTML = '';
    pessoas.map((p) => {
        const div = document.createElement('div');
        div.setAttribute('class', 'pessoas');
        div.innerHTML = `Name: ${p.getName()} <br/> ${getAge()}`;
        res.appendChild(div);
    })
}

btn_add.addEventListener('click', (e) => {
    const name = document.querySelector('#f_name');
    const age = document.querySelector('#f_idade');
    const p = new People(name.value, age.value);
    pessoas.push(p);
    name.value = '';
    age.value = '';
    name.focus();
    addPessoa();
})