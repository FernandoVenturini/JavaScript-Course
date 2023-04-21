const cursos = ['JavaScript', 'HTML', 'CSS', 'Python', 'React.js'];


export default function getTodosCursos() {
    return cursos;
}

function getCurso(i_curso) {
    return cursos[i_curso];
}


export {cursos, getCurso};