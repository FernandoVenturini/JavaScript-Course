class People {
    constructor(pnome, pidade) {
        this.nome  = pnome;
        this.idade = pidade;

    }
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    setNome(nome) {
        this.nome;
    }
    setIdade(idade) {
        this.idade;
    }
    info() {
        console.log(this.nome);
        console.log(this.idade);
        console.log('--------');
    }
}

let pessoas = [];
const btn_add = document.querySelector('#btn_add');
const res = document.querySelector('.res');

btn_add.addEventListener('cilck', (evt) => {
    const nome = document.querySelector('#f_name');
    const idade = document.querySelector('#f_idade');
    const p = new People(nome.value, idade.value);
    pessoas.push(p);
    nome.value = '';
    idade.value = '';
    nome.focus();
    console.log(pessoas);
})