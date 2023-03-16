// OBJETO LITERAL:
const pessoa = {
    nome: 'Fernando',
    canal: 'LVF_Code',
    curso: 'JavaScript',
    aulas: {
        aula01: 'Introducao',
        aula02: 'Variaveis',
        aula03: 'Condicional'
    }
}

//console.log(pessoa);
//console.log(pessoa.nome);
//console.log(pessoa.aulas);
//console.log(pessoa.aulas.aula01);

// TRANSFORMANDO EM JSON:
const string_pessoas = '"nome":"Fernando","canal":"LVF_Code","curso":"JavaScript","aulas":{"aula01":"Introducao","aula02":"Variaveis","aula03":"Condicional"';

const s_json_pessoa = JSON.stringify(pessoa); // Converte obj em string JSON
const obj_json = JSON.parse(s_json_pessoa); //Converte String JSON em obj

console.log(s_json_pessoa);
console.log(obj_json);