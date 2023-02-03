const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById('btnRemoverCurso');
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes');
const btnAdicionarNovoCursoDepois = document.getElementById('btnAdicionarNovoCursoDepois');
const nomeCurso = document.getElementById('nomeCurso');

let indice = 0;

const tirarSelecao = () => {
    const cursoSelecionado = [...document.querySelectorAll('.selecionado')];
    cursoSelecionado.map((el) => {
        el.classList.remove("selecionado");
    })
}

const criarNovoCurso = (curso) => {
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c" + indice)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML = curso;
    novoElemento.addEventListener('click', (evt) => {
        tirarSelecao();
        evt.target.classList.toggle("selecionado");
    })

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")
    
    const rb=document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos);
    return novoElemento;
}

cursos.map((el,chave)=>{

    const novoElemento = criarNovoCurso(el);
    caixaCursos.appendChild(novoElemento);
    indice++;
    
})

//const todosRadios = () => {}
const cursoSelecionado = () => {

    //const todosRadios=[...document.querySelectorAll("input[type=radio]")]
    const cursoSelecionado = [...document.querySelectorAll('.selecionado')];
    //const radioSelecionado=todosRadios.filter((ele,ind,arr)=>{
        //return ele.checked
        return cursoSelecionado[0];
    //})
    //return radioSelecionado[0];
}

btnCursoSelecionado.addEventListener("click",(evt)=>{
    /* try / catch: */
    try {
        //const cursoSelecionado=radioSelecionado.parentNode.parentNode.firstChild.textContent
        //const cursoSelecionado=rs.parentNode.previousSibling.textContent
        alert("Curso selecionado: " + cursoSelecionado().innerHTML);
    } catch(ex) {
        alert('Selecione um curso!');
    }
})

    //const rs = radioSelecionado();

    /*
    if(rs != undefined) {
        //const cursoSelecionado=radioSelecionado.parentNode.parentNode.firstChild.textContent
        //const cursoSelecionado=rs.parentNode.previousSibling.textContent
        //alert("Curso selecionado: " + cursoSelecionado)
        alert('Curso selecionado: ' + cursoSelecionado().innerHTML);
    } else {
        alert('Selecione um curso!');
    }
    */

    // console.log(todosRadios)
    // console.log(radioSelecionado)
    // console.log(cursoSelecionado)
    //})

btnRemoverCurso.addEventListener('click', (evt) => {
    //const rs = radioSelecionado();
    const cs = cursoSelecionado();
    if(cs != undefined) {
        //const cursoSelecionado = rs.parentNode.parentNode;
        cs.remove();
    } else {
        alert('Selecione um curso para remover!');
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click', (evt) => {
    //const rs = radioSelecionado();
    try {
        if(nomeCurso.value != "") {
            //const cursoSelecionado = rs.parentNode.parentNode;
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixaCursos.insertBefore(novoCurso, cursoSelecionado());
        } else {
            alert('Digite o nome do curso!');    
        }
    } catch(ex) {
        alert('Selecione um curso!');
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click', (evt) => {
    //const rs = radioSelecionado();
    try {
        if(nomeCurso.value != "") {
            //const cursoSelecionado = rs.parentNode.parentNode;
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling);
        } else {
            alert('Digite o nome do curso!');
        }
    } catch(ex) {
        alert('Selecione um curso!');
    }
})

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling

