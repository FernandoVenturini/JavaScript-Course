function People(pname, page) {
    this.name = pname,
    this.age = page,

    this.getName = function() {
        return this.name;
    },
    this.getAge = function() {
        return this.age;
    },
    this.setName = function(name) {
        this.name = name;
    },
    this.setAge = function(age) {
        this.age = age;
    },
    this.info = function() {
        console.log(`Name: ${this.name}.`);
        console.log(`Age: ${this.age}.`);
        console.log('-------------------');
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
