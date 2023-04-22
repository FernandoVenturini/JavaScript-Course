/*
const cursos = ['JavaScript', 'HTML', 'CSS', 'React.js', 'Python'];

const carros = ['Aston Martin', 'BMW', 'Lamborghini'];

const getTodosCursos = () => {
    return cursos;
}

//export { cursos, carros };
export { cursos, carros, getTodosCursos };
*/

/****************************************************************/

/*
const cursos = ['JavaScript', 'HTML', 'CSS', 'React.js', 'Python'];

const getTodosCursos = () => {
    return cursos;
}

export { cursos };
export default getTodosCursos;
*/

/****************************************************************/

/*
const cursos = ['JavaScript', 'HTML', 'CSS', 'React.js', 'Python'];

export default function getTodosCursos() {
    return cursos;
}

export { cursos };
*/

/****************************************************************/

const cursos = ['JavaScript', 'HTML', 'CSS', 'React.js', 'Python'];

export default function getTodosCursos() {
    return cursos;
}

function getCurso(i_curso) {
    return cursos(i_curso);
}

export { cursos, getCurso };
