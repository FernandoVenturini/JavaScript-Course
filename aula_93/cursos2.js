/* 1- Exemplo:
const cursos = ['JavaScript', 'HTML', 'CSS', 'React.js', 'Python'];

export { cursos };
*/

/* 2- Exemplo:
const cursos = ['JavaScript', 'HTML', 'CSS', 'React.js', 'Python'];
const getTodosCursos = () => {
    return cursos;
}
export { cursos, getTodosCursos };
*/

/* 3- Exemplo: 
const cursos = ['JavaScript', 'HTML', 'CSS', 'React.js', 'Python'];
const getTodosCursos = () => {
    return cursos;
}
export { cursos };
export default getTodosCursos;
*/

/* 4- Exemplo: 
const cursos = ['JavaScript', 'HTML', 'CSS', 'React.js', 'Node.js'];
function getTodosCursos() {
    return cursos;
}
export { cursos };
export default getTodosCursos;
*/

/* 5- Exemplo: 
const cursos = ['JavaScript', 'HTML', 'CSS', 'React.js', 'Node.js'];
export default function getTodosCursos() {
    return cursos;
}
export {cursos};
*/

/* 6- Exemplo: */
const cursos = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];

export default function getTodosCursos() {
    return cursos;
}

function getCurso(i_curso) {
    return cursos[i_curso];
}

export { cursos, getCurso };